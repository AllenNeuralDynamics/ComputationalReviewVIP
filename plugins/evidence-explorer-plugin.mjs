// evidence-explorer-plugin.mjs
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const evidenceDirective = {
  name: 'evidence-explorer',
  doc: 'Interactive evidence database explorer widget. The :evidence-dir: option is resolved relative to the calling markdown file. Default "../evidence" is correct when the directive is placed in a content/*.md page (the conventional layout).',
  options: {
    'evidence-dir': { type: String },
    height: { type: String },
  },
  run(data) {
    return [{
      type: 'evidence-explorer',
      evidenceDir: data.options?.['evidence-dir'] || '../evidence',
      height: data.options?.height || '700px',
    }];
  },
};

// Universal conflict normalizer — handles all 15+ schema variants
function normalizeConflict(c, sec) {
  const norm = { section: sec };

  // Description / topic
  norm.topic = c.topic || c.description || '';
  norm.nature_of_conflict = c.nature_of_conflict || c.description || c.topic || '';
  norm.resolution_status = c.resolution_status || c.resolution || '';

  // Extract Side A text
  if (c.paper1_claim) {
    norm.side_a = c.paper1_claim;
  } else if (c.paper_a_claim) {
    norm.side_a = c.paper_a_claim;
  } else if (c.claim_a) {
    norm.side_a = c.claim_a;
  } else if (typeof c.side_a === 'string') {
    norm.side_a = c.side_a;
  } else if (c.side_a && typeof c.side_a === 'object') {
    norm.side_a = c.side_a.position || c.side_a.claim || JSON.stringify(c.side_a).slice(0, 200);
  } else {
    norm.side_a = '';
  }

  // Extract Side B text
  if (c.paper2_claim) {
    norm.side_b = c.paper2_claim;
  } else if (c.paper_b_claim) {
    norm.side_b = c.paper_b_claim;
  } else if (c.claim_b) {
    norm.side_b = c.claim_b;
  } else if (typeof c.side_b === 'string') {
    norm.side_b = c.side_b;
  } else if (c.side_b && typeof c.side_b === 'object') {
    norm.side_b = c.side_b.position || c.side_b.claim || JSON.stringify(c.side_b).slice(0, 200);
  } else {
    norm.side_b = '';
  }

  // Extract DOIs — try all known field patterns
  norm.paper_a_doi = c.paper1_doi || c.paper_a_doi || '';
  norm.paper_b_doi = c.paper2_doi || c.paper_b_doi || '';

  // If no DOIs from direct fields, try to extract from nested structures
  if (!norm.paper_a_doi) {
    // Check side_a dict for DOIs
    if (c.side_a && typeof c.side_a === 'object') {
      const evidence = c.side_a.supporting_evidence || c.side_a.evidence || '';
      const doiMatch = String(evidence).match(/10\.\d{4,}\/[^\s,;)]+/);
      if (doiMatch) norm.paper_a_doi = doiMatch[0];
    }
    // Check papers_side_a, papers_supporting_view_a, etc.
    for (const key of Object.keys(c)) {
      if (key.includes('papers') && key.includes('a') && Array.isArray(c[key])) {
        const dois = c[key].filter(p => typeof p === 'string' && p.startsWith('10.'));
        if (dois.length > 0) norm.paper_a_doi = dois.join(', ');
      }
    }
  }
  if (!norm.paper_b_doi) {
    if (c.side_b && typeof c.side_b === 'object') {
      const evidence = c.side_b.supporting_evidence || c.side_b.evidence || '';
      const doiMatch = String(evidence).match(/10\.\d{4,}\/[^\s,;)]+/);
      if (doiMatch) norm.paper_b_doi = doiMatch[0];
    }
    for (const key of Object.keys(c)) {
      if (key.includes('papers') && key.includes('b') && Array.isArray(c[key])) {
        const dois = c[key].filter(p => typeof p === 'string' && p.startsWith('10.'));
        if (dois.length > 0) norm.paper_b_doi = dois.join(', ');
      }
    }
  }

  // For papers[] array format — extract DOIs from array items
  if (Array.isArray(c.papers) && (!norm.paper_a_doi || !norm.paper_b_doi)) {
    const dois = c.papers
      .map(p => typeof p === 'string' ? p : (p.doi || ''))
      .filter(d => d);
    if (dois.length >= 1 && !norm.paper_a_doi) norm.paper_a_doi = dois[0];
    if (dois.length >= 2 && !norm.paper_b_doi) norm.paper_b_doi = dois[1];
  }

  // For section 12 custom fields (papers_supporting_divisive, papers_SST_carries_prediction, etc.)
  if (!norm.paper_a_doi || !norm.paper_b_doi) {
    const paperKeys = Object.keys(c).filter(k => k.startsWith('papers_'));
    if (paperKeys.length >= 2) {
      for (let i = 0; i < paperKeys.length && i < 2; i++) {
        const val = c[paperKeys[i]];
        const dois = Array.isArray(val) 
          ? val.map(p => typeof p === 'string' ? p : (p.doi || '')).filter(d => d)
          : [];
        if (i === 0 && !norm.paper_a_doi && dois.length > 0) {
          norm.paper_a_doi = dois.join(', ');
          if (!norm.side_a) norm.side_a = paperKeys[0].replace('papers_', '').replace(/_/g, ' ');
        }
        if (i === 1 && !norm.paper_b_doi && dois.length > 0) {
          norm.paper_b_doi = dois.join(', ');
          if (!norm.side_b) norm.side_b = paperKeys[1].replace('papers_', '').replace(/_/g, ' ');
        }
      }
    }
  }

  // Additional metadata
  norm.likely_reason = c.likely_reason || c.assessment || c.notes || c.significance || c.why_it_matters || '';

  return norm;
}

const evidenceTransform = {
  name: 'evidence-data-loader',
  stage: 'document',
  plugin: (opts, utils) => (tree, vfile) => {
    function transform(node) {
      if (node == null) return;
      if (node.type === 'evidence-explorer') {
        const docDir = vfile?.path ? dirname(vfile.path) : process.cwd();
        const evidenceDir = resolve(docDir, node.evidenceDir || '../evidence');
        try {
          const sections = [];
          const allFindings = [];
          const allConflicts = [];
          const allFigureData = [];

          for (let sec = 2; sec <= 13; sec++) {
            const padded = String(sec).padStart(2, '0');
            let filePath = resolve(evidenceDir, 'section_' + padded + '_evidence_package.json');
            let raw;
            try {
              raw = readFileSync(filePath, 'utf-8');
            } catch (e) {
              try {
                filePath = resolve(evidenceDir, 'section_' + padded + '_evidence.json');
                raw = readFileSync(filePath, 'utf-8');
              } catch (e2) { continue; }
            }
            
            const ev = JSON.parse(raw);

            // Extract findings — handle two schemas:
            //  (a) inline objects in supporting_findings/counter_findings (rare)
            //  (b) integer indices referring to top-level ev.findings array (current pipeline)
            // When both top-level findings exist AND argument_groups uses integer indices,
            // we use the top-level findings array as canonical and ignore re-collection
            // through argument_groups (since dereferencing produces duplicates).
            let findings = [];
            const topFindings = Array.isArray(ev.findings) ? ev.findings : [];
            const ag = ev.argument_groups;
            let collectedFromGroups = [];
            if (ag && typeof ag === 'object') {
              const groups = Array.isArray(ag) ? ag : Object.values(ag);
              for (const topicVal of groups) {
                if (topicVal && typeof topicVal === 'object') {
                  const supporting = topicVal.supporting_findings || topicVal.supporting_evidence || [];
                  const counter = topicVal.counter_findings || topicVal.counter_evidence || [];
                  for (const x of (Array.isArray(supporting) ? supporting : [])) {
                    if (typeof x === 'number' && Number.isInteger(x)) {
                      if (topFindings[x]) collectedFromGroups.push(topFindings[x]);
                    } else if (x && typeof x === 'object') {
                      collectedFromGroups.push(x);
                    }
                  }
                  for (const x of (Array.isArray(counter) ? counter : [])) {
                    if (typeof x === 'number' && Number.isInteger(x)) {
                      if (topFindings[x]) collectedFromGroups.push(topFindings[x]);
                    } else if (x && typeof x === 'object') {
                      collectedFromGroups.push(x);
                    }
                  }
                }
              }
            }
            // Prefer top-level findings array if present (most complete + no dupes from cross-group references)
            if (topFindings.length > 0) {
              findings = topFindings.filter(x => x && typeof x === 'object');
            } else {
              findings = collectedFromGroups;
            }
            if (Array.isArray(ev.unmatched_findings)) {
              for (const x of ev.unmatched_findings) {
                if (x && typeof x === 'object') findings.push(x);
              }
            }

            // Normalize conflicts using the universal normalizer
            const conflicts = (ev.conflicts || []).map(c => normalizeConflict(c, sec));

            // Figure comparisons: read from figures/data/secNN_figure_pack_slim.json
            // when present. Schema: { figures: [{audited_panels:[{...,figure_data:{...}}]}],
            // unassigned_section_panels: [{...,figure_data:{...}}] }
            // Each panel's figure_data dict is the cross-study comparison record.
            let figData = [];
            // 1. Inline ev.figure_data (legacy schema, currently empty in pipeline)
            if (Array.isArray(ev.figure_data)) figData.push(...ev.figure_data);
            // 2. External figure pack file
            const figPackPath = resolve(docDir, '../figures/data/sec' + padded + '_figure_pack_slim.json');
            try {
              const packRaw = readFileSync(figPackPath, 'utf-8');
              const pack = JSON.parse(packRaw);
              if (Array.isArray(pack.figures)) {
                for (const fig of pack.figures) {
                  if (Array.isArray(fig.audited_panels)) {
                    for (const panel of fig.audited_panels) {
                      const fd = (panel && typeof panel.figure_data === 'object' && panel.figure_data) ? { ...panel.figure_data } : {};
                      fd.figure_id = fig.figure_id || fd.figure_id;
                      fd.figure_title = fig.figure_title || fd.figure_title;
                      fd.status = panel.status || fd.status;
                      fd.required_caveat_text = panel.required_caveat_text || fd.required_caveat_text;
                      fd.remediation_path = panel.remediation_path || fd.remediation_path;
                      figData.push(fd);
                    }
                  }
                }
              }
              if (Array.isArray(pack.unassigned_section_panels)) {
                for (const panel of pack.unassigned_section_panels) {
                  const fd = (panel && typeof panel.figure_data === 'object' && panel.figure_data) ? { ...panel.figure_data } : {};
                  fd.status = panel.status || fd.status;
                  fd.required_caveat_text = panel.required_caveat_text || fd.required_caveat_text;
                  fd.note = panel.note || fd.note;
                  fd.unassigned = true;
                  figData.push(fd);
                }
              }
            } catch (e) { /* no figure pack for this section — ok */ }

            findings.forEach(f => {
              f.section = sec;
              f.section_title = ev.section_title || '';
              if (!f.tier && f.replication_status) f.tier = f.replication_status;
            });
            figData.forEach(fd => { fd.section = sec; });

            sections.push({
              section: sec,
              title: ev.section_title || ('Section ' + sec),
              papers: ev.unique_papers || ev.total_findings || findings.length,
              findings: findings.length,
              conflicts: conflicts.length,
              figure_comparisons: figData.length,
            });
            allFindings.push(...findings);
            allConflicts.push(...conflicts);
            allFigureData.push(...figData);
          }

          node.type = 'anywidget';
          node.id = 'evidence-explorer-' + Date.now() + '-' + Math.random().toString(36).slice(2,9);
          node.esm = './evidence-explorer-widget.mjs';
          node.model = {
            evidence_data: JSON.stringify({
              sections: sections,
              findings: allFindings,
              conflicts: allConflicts,
              figure_data: allFigureData,
            }),
            height: node.height || '700px',
          };
        } catch (err) {
          node.type = 'paragraph';
          node.children = [{ type: 'text', value: '[Evidence Explorer error: ' + err.message + ']' }];
        }
      }
      if (node.children) {
        for (const child of node.children) transform(child);
      }
    }
    transform(tree);
  },
};

export default {
  name: 'Evidence Explorer Plugin',
  directives: [evidenceDirective],
  transforms: [evidenceTransform],
};
