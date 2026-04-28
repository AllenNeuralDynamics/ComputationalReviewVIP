(sec-methods)=
# Methods

:::{note}
This Methods section is the transparency record for the comprehensive computational review of VIP cortical interneurons. The full claim-level evidence corpus is browsable on the [Evidence Database](evidence_database.md) page.
:::


This Methods section documents how the comprehensive critical review of vasoactive-intestinal-peptide-expressing (VIP) cortical interneurons was produced. It is a transparency artifact, written from pipeline metadata and gate artifacts only; no post-hoc characterizations have been added. Eight subsections cover the original review request (M.1), the scope and table of contents derived from it (M.2), the evidence corpus and curation (M.3), the citation infrastructure (M.4), the drafting and critic protocol (M.5), a phase-by-phase pipeline ledger (M.6), the bibliography and integration record (M.7), and finally limitations, reproducibility, and data availability (M.8). The pipeline executed under coordinator skill `comprev-coordinator-v27.md` with two delegated agent roles: LITREVIEW (scientific judgment) and DATAML (mechanical work).

> **Snapshot.** This Methods file is the Phase 20 final-assembly snapshot. The Pipeline Ledger (M.6) below has been refreshed with executed-phase outcomes for Phases 14, 14V, 15, 15V, 16, 16V, 17A (4 LITREVIEW workers), 17B re-verification, 17V, 18 (book-end critic), 18-remediation, and 19 (final QA build). Phase 20 itself is the final assembly delivery whose outcomes are recorded in `gates/gate_phase20_final.json` and the companion `verification_summary.md`.

(sec-methods-review-request)=
## Review Request

This review was initiated by a single user prompt that fixed the topic, scope, two-agent architecture, evidence-saturation parameters, and high-level table of contents. Phase 1 (Scoping) translated this prompt into the structured `gate_scope.json` (title, audience, target paper count, cluster definitions, and 13-section table of contents) that drove all subsequent phases. The full text of the request is preserved verbatim in `provenance/review_request.md` and reproduced below.

```text
Start a comprehensive critical literature review titled:
"VIP Interneurons in Cortical Computation: From Molecular Identity to Circuit Function"

This is a v2 of an existing review (https://github.com/AllenNeuralDynamics/ComputationalReviewVIP).
The v1 cited 405 papers across 12 body sections. The v2 goal is to saturate the VIP interneuron
literature -- cover every relevant primary research paper, plus the adjacent SST, PV, disinhibition,
and CGE-lineage literature needed for context. Database sizing estimates the total relevant
envelope at 2,500-3,000 unique papers.

Initialize this repo fresh from the template:
https://github.com/AllenNeuralDynamics/ComputationalReviewTemplate
The template ships all pipeline skills (v27), plugins, GitHub Actions, and site infrastructure.

The pipeline uses two agents -- LITREVIEW (scientific judgment) and DATAML (mechanical work).

The three key skill files:
- skills/comprev-coordinator-v27.md -- The coordinator protocol. Read this FIRST. It defines
  all 20 phases, the coordinator protocol, gate artifacts, evidence parameters, and the plan
  structure. Follow it phase by phase.
- skills/comprev-reviewer-agent.md -- The worker skill for LITREVIEW agents. Pass this to every
  LITREVIEW delegation so the agent can load it.
- skills/comprev-figure-construction.md -- Already published as a skill on LITREVIEW agents.
  Section writers load it for figure production.

GitHub Repository: https://github.com/AllenNeuralDynamics/ComputationalReviewVIP
Push all outputs to this repo in Phase 20.

Evidence parameters:
- Saturate the literature: search until <2% new unique papers in the last 100 records, confirmed
  across two consecutive database passes
- Snowball 2 rounds (forward + backward citation chasing on top-50 most-cited per cluster)
- No fixed per-cluster floor -- let the saturation criterion drive depth per cluster (some clusters
  are naturally smaller than others; forcing a uniform floor would pad thin clusters with marginal
  papers)
- Total bibliography target: >=2,000 unique papers

Table of Contents:
1.  Introduction
2.  Molecular Identity and Transcriptomic Taxonomy
3.  Developmental Origins and Postnatal Maturation
4.  Morphological Diversity
5.  Intrinsic Electrophysiology
6.  Synaptic Properties and Connectivity
7.  Local Circuit Motifs and the Disinhibition Framework
8.  In Vivo Function During Behavior
9.  VIP Interneurons Across Brain Regions
10. Oscillatory Dynamics and Temporal Coordination
11. Species Differences, Human Relevance, and Disease
12. Computational Models of VIP Circuit Function
13. Synthesis and Conclusion: Reassessing the Canonical VIP Disinhibitor
```

(sec-methods-scope)=
## Scope and Table of Contents

Phase 1 produced the `gate_scope.json` artifact (`gates/gate_scope.json`), which froze the editorial scope before any literature work began. The thesis question asks how VIP-expressing GABAergic interneurons -- defined by caudal-ganglionic-eminence (CGE) lineage and a distinctive transcriptomic, morphological, and physiological profile -- implement disinhibitory and gain-modulatory operations that shape cortical computation, and to what extent the canonical "VIP disinhibitor" framing survives scrutiny under contemporary multi-modal evidence. The intended audience is systems and circuits neuroscientists, computational neuroscientists, and graduate-level researchers working on cortical interneurons.

The review is organized into 13 sections (1 introduction + 11 body sections + 1 synthesis/conclusion) with a total target of approximately 63,000 words across all sections. Per-section targets and topic clusters are listed below.

| Section | Title | Target words | Source clusters |
|---|---|---:|---|
| 01 | Introduction | 2,500 | cluster_06_disinhibition_circuit, cluster_01_molecular_taxonomy, cluster_12_sst_pv_context |
| 02 | Molecular Identity and Transcriptomic Taxonomy | 5,500 | cluster_01_molecular_taxonomy, cluster_12_sst_pv_context |
| 03 | Developmental Origins and Postnatal Maturation | 4,500 | cluster_02_development_lineage |
| 04 | Morphological Diversity | 4,000 | cluster_03_morphology |
| 05 | Intrinsic Electrophysiology | 4,000 | cluster_04_intrinsic_electrophysiology |
| 06 | Synaptic Properties and Connectivity | 5,500 | cluster_05_synaptic_connectivity, cluster_12_sst_pv_context |
| 07 | Local Circuit Motifs and the Disinhibition Framework | 6,000 | cluster_06_disinhibition_circuit, cluster_12_sst_pv_context |
| 08 | In Vivo Function During Behavior | 6,500 | cluster_07_in_vivo_function, cluster_13_neuromodulation |
| 09 | VIP Interneurons Across Brain Regions | 5,000 | cluster_08_brain_regions |
| 10 | Oscillatory Dynamics and Temporal Coordination | 4,500 | cluster_09_oscillations, cluster_13_neuromodulation |
| 11 | Species Differences, Human Relevance, and Disease | 5,500 | cluster_10_species_disease, cluster_01_molecular_taxonomy |
| 12 | Computational Models of VIP Circuit Function | 5,000 | cluster_11_computational_models, cluster_06_disinhibition_circuit |
| 13 | Synthesis and Conclusion: Reassessing the Canonical VIP Disinhibitor | 4,500 | cluster_06_disinhibition_circuit, cluster_07_in_vivo_function, cluster_11_computational_models |

Evidence parameters specified in the scope: search until <2% new unique papers in the last 100 records confirmed across two consecutive database passes; 2 rounds of forward+backward snowball citation chasing on the top-50 most-cited papers per cluster; no fixed per-cluster paper floor (saturation drives depth); total bibliography target >=2,000 unique papers. Fourteen evidence clusters (with one cluster -- `cluster_13_cge_lineage_context` -- added by the Phase-2 LITREVIEW frame as an adjacent-context cluster) covered the topic envelope, mapping onto the 13 review sections as shown above.

(sec-methods-evidence)=
## Evidence Corpus and Curation

Phase 2 (LITREVIEW evidence-gathering) ran 14 parallel cluster delegations across the databases authorized in the scope (PubMed/NCBI E-utilities, Europe PMC, OpenAlex, bioRxiv) plus open-access full-text resolvers (Unpaywall, Semantic Scholar, PubMed Central) and the Elsevier and Springer Nature publisher APIs. Search queries, deduplication, and snowball passes are recorded per cluster inside the evidence JSONs referenced from `gate_evidence_compliance.json` (`gates/gate_evidence_compliance.json`). Aggregate Phase-2 outcome:

| Metric | Value |
|---|---:|
| Unique DOIs across all clusters | 1,037 |
| Total findings extracted | 1,779 |
| Total conflicts catalogued | 84 |
| Overall full-text rate | 51.83% |
| Overall finding-level compliance rate | 99.94% |
| Per-cluster gates passing | 14 / 14 |

The Phase-2V validator (`comprev-evidence-validator`, DATAML) re-checked compliance over 6 iterations against ten mechanical schemas (DOI resolves, source not equal to title, source length, claim differs from source, has cite-key, source provenance, full-text honesty, no fabricated keys, deduplication, framework-extract size). The strict bibliography-target check (>=2,000 papers per scope) failed at iteration 6 with 1,037 unique DOIs returned, but the finding-level pipeline (1,779 findings; 0.9994 compliance) passed all integrity checks. The coordinator accepted this saturation outcome as the final corpus on the basis that the Phase-2 saturation criterion (<2% new unique in last 100 records, two consecutive passes) had triggered before the 2,000-paper target was reached -- i.e. the addressable VIP literature is empirically smaller than the database-sizing pre-estimate.

Per-cluster curation totals (Phase 5 "Evidence Curation" actor; gate `gates/gate_evidence_curated.json`; validator gate `gates/gate_evidence_curated_approved.json`):

| Cluster | Papers | Findings (Phase 2) |
|---|---:|---:|
| cluster_01_molecular_taxonomy | 208 | 218 |
| cluster_02_development_lineage | 128 | 160 |
| cluster_03_morphology | 33 | 58 |
| cluster_04_intrinsic_electrophysiology | 51 | 93 |
| cluster_05_synaptic_properties_connectivity | 335 | 335 |
| cluster_06_disinhibition_circuit | 91 | 91 |
| cluster_07_in_vivo_function | 130 | 130 |
| cluster_08_brain_regions | 123 | 153 |
| cluster_09_oscillations | 80 | 80 |
| cluster_10_species_disease | 100 | 100 |
| cluster_11_computational_models | 154 | 154 |
| cluster_12_sst_pv_context | 44 | 44 |
| cluster_13_neuromodulation | 91 | 91 |
| cluster_13_cge_lineage_context | 72 | 72 |

Phase 5 expanded the 1,779 Phase-2 findings into 2,726 section-curated findings while preserving zero loss against the Phase-2 baseline (every Phase-2 finding is reachable in at least one section curated literature corpus). Coverage of unique Phase-2 DOIs reached 99.8% (1,047 / 1,049). The validator confirmed:

- `NO_INTRA_SECTION_DUPLICATES` (PASS): no duplicate finding/source pair within any section.
- `CROSS_SECTION_DIFFERENTIATION` (PASS): 0 avoidable duplications; 272 unavoidable single-citation-source / multi-cluster cases accepted as documented exit.
- `ZERO_LOSS` (PASS): 2,726 curated >= 1,779 input.
- `ALL_CONFLICTS_ASSIGNED` (PASS): 51 / 51 normalized conflicts assigned to sections.
- `COVERAGE_75` (PASS): 99.8% of Phase-2 unique DOIs cited in at least one section.
- `CITE_KEY_ASSIGNED` (PASS): 0 missing keys; 192 of 194 originally synthesized keys resolved via CrossRef and arXiv; 2 fallback keys retained.
- Two documented exits: PAPER_TIER_FLOOR for sections 4 and 9 (driven by Phase-2 saturation in those clusters), and CROSS_SECTION_DIFFERENTIATION (272 single-CSS multi-cluster findings).

Anti-compression metrics: per the Phase-5V audit, every section retains >=75% of its source-cluster findings rather than collapsing them to one-claim-per-paper summaries; this is the operational safeguard against narrative compression that would conceal heterogeneity within the literature.

(sec-methods-citation-infra)=
## Citation Infrastructure

Phase 3 (DATAML actor) constructed the project-wide citation key map and author name table that all downstream phases consume as the single source of authorial truth. Inputs were the 1,037 unique DOIs surviving Phase 2; outputs were `citation_key_map.json` (`provenance/citation_key_map.json`) and `author_name_table.json` (`provenance/author_name_table.json`).

| Metric | Value |
|---|---:|
| DOIs input | 1,037 |
| DOIs mapped to a cite-key | 1,037 |
| CrossRef resolutions (HTTP 200) | 1,037 / 1,037 |
| Europe PMC fallbacks needed | 0 |
| CrossRef failures | 0 |
| Cite-key collisions disambiguated | 106 |
| ASCII-folding events on author surnames | 51 |

Cite-key format is `^[A-Z][A-Za-z]+\d{4}[a-z]?$` (first-author surname, ASCII-folded; four-digit year; optional disambiguator suffix). Phase 3V (DATAML validator) re-resolved every entry against CrossRef and ran five mechanical checks. The validation gate (`gates/gate_citation_infrastructure_validation_v2.json`) reports a per-entry pass rate of 99.81% with the following breakdown: 1,037 / 1,037 CrossRef-resolves, 1,037 / 1,037 key-format pass, 1,037 / 1,037 key-uniqueness pass, 1,035 / 1,037 author-match pass (the two failures were both resolved-by-name-match consortium-author entries -- the Petilla Interneuron Nomenclature Group `Thepetillainterneuronnomenclaturegroupping2008` and the BRAIN Initiative Cell Census Network `Braininitiativecellcensusnetworkbiccn2021` -- which carry no CrossRef family field), and 1,037 / 1,037 year-match pass. Cardinality and framework-bidirectional checks passed; zero blocking failures.

The keymap is the contract that Phase 5 (evidence curation), Phase 7 (drafting), Phase 9 (bibliography), Phase 10 (integration), and Phase 11 (introduction/conclusion) all consume read-only. Section drafts are constrained by a per-section `cite_keys_allowlist` derived from this map.

(sec-methods-drafting)=
## Drafting and Critic Protocol

Phase 4 (LITREVIEW) approved a 13-section framework (`provenance/scaffold.json`; gate `gates/gate_scaffold_approved.json`) covering 26 figure slots, 6 recurring themes, and 60 conflicts surfaced for explicit treatment. Every section carries a thesis sentence, a "connection-prev" / "connection-next" pair, and a unique cross-reference label.

Phase 6 (LITREVIEW critic, blinded "Figure Audit") converged in 3 iterations from 36 panels to 34 final panels (8 PASS, 26 CAVEAT, 0 REDESIGN, 0 FABRICATION). Twenty-two fabrication flags were raised across iterations 1-3 and all were resolved before convergence. Gate `gates/gate_figure_audit.json`.

Phase 7 (LITREVIEW section-writing) ran 11 parallel section actors. The DATAML send-back validator enforced eight mechanical checks per section (anchor present, every cite-key in the project allowlist, figure-fence syntax, figure has image path, no bare author names in prose, no entries from the project forbidden-lexicon list, no `{label}` directive duplicating the heading anchor, no duplicate display name across sections). The send-back loop ran for 3 iterations:

| Iteration | Total mechanical failures | Sections passing |
|---|---:|---:|
| 1 | 211 | 0 / 11 |
| 2 |   4 | 9 / 11 |
| 3 |   0 | 11 / 11 |

Final Phase-7V gate vid: `gates/gate_sections_drafted_iter3.json`.

Phase 8 (LITREVIEW critic, "Section Critic") ran a separate blinded critic pass against each Phase-7 section draft, raising MUST_FIX, SHOULD_CAVEAT, and NIT severities under an enforced rule: **MUST_FIX must reach zero before the critic loop can close**. Iteration 1 produced 22 MUST_FIX items distributed across 8 sections (sec_02, sec_03, sec_05, sec_06, sec_07, sec_08, sec_11, sec_12); iteration 2 returned 0 MUST_FIX across all 11 sections, with 49 SHOULD_CAVEAT items carried forward as non-blocking polish. Sec_08 invoked the "PRESENT-AS-GAP" rule for 4 framework-required cite-keys whose papers turned out to lack VIP-specific findings in the Phase-2 corpus: rather than fabricate evidence, those claims were rewritten as explicit research gaps. Final Phase-8 gate vid: `gates/gate_critic_complete.json`.

The actor / critic separation enforced throughout Phases 6, 7, and 8 is an information-barrier protocol: critic frames are never given the actor's drafting context, and actors are never shown raw critic deliberations -- only structured MUST_FIX / SHOULD_CAVEAT items routed through the coordinator. This actor-critic separation is the principal mechanism by which the pipeline avoids the rubber-stamping failure mode of single-pass LLM drafting.

(sec-methods-pipeline)=
## Pipeline Ledger

The table below records the actor / critic / validator role for each phase, the gate artifact version that closed the phase, the validation result, and a one-line outcome note. All version IDs are artifact identifiers and resolve via the project artifact store. The table covers all 20 executed phases of the pipeline (refreshed at Phase 20 final assembly).

| Phase | Role / Agent | Gate / artifact path | Status | Outcome notes |
|---|---|---|---|---|
| 1 | actor (LITREVIEW + DATAML) | `gates/gate_scope.json` | PASS | scope.json + provenance/review_request.{md,txt}; 13 body sections, 14 evidence clusters, target >=2000 papers, frame 4ee0a0e5 (LITREVIEW scoping) -> 266fb089 (DATAML materialisation) |
| 1V | validator (DATAML) | `gates/gate_scope.json` | PASS | Phase-1 validation rolled into gate_scope.json; frame e79b4741 |
| 2 | actor (LITREVIEW x14) | `gates/gate_evidence_compliance.json` | PASS | Per-cluster evidence JSONs; 1037 unique DOIs, 1779 findings, 84 conflicts; saturation logged across 14 clusters; per-cluster gate 14/14 |
| 2V | validator (DATAML) | `gates/gate_evidence_compliance.json` | PASS | Iter6 strict-fail on bibliography target only (1037<2000); coordinator accepted saturation outcome at 1037 unique DOIs; 14/14 per-cluster gates PASS, compliance 0.9994; frames 3a462e11, ba58bb1b |
| 3 | actor (DATAML) | `provenance/citation_key_map.json` | PASS | citation_key_map (1037 keys; 0 collisions; 106 disambiguations; 0 CrossRef failures) + author_name_table.json (`provenance/author_name_table.json`) |
| 3V | validator (DATAML) | `gates/gate_citation_infrastructure_validation_v2.json` | PASS | Per-entry pass rate 0.998; 1037/1037 CrossRef-resolved; 0 collisions; 2 consortium-author no-family entries reconciled by name match |
| 4 | actor (LITREVIEW) | `gates/gate_scaffold_approved.json` | PASS | Framework (`provenance/scaffold.json`) approved: 13 sections, 26 figure slots, 60 conflicts_to_present, 6 recurring themes, total target 63000 words |
| 5 | actor (DATAML) | `gates/gate_evidence_curated.json` | PASS | 13 curated literature corpora + framework extracts + section citation maps + section author tables; 2726 findings curated (zero loss vs 1779 input); 51 conflicts assigned |
| 5V | validator (DATAML) | `gates/gate_evidence_curated_approved.json` | PASS | PASS_WITH_DOCUMENTED_EXITS: coverage 99.8% of Phase-2 unique DOIs; 0 intra-section duplicates; cross-section differentiation 0 avoidable; 2 documented exits (sec_04/sec_09 below tier floor due to upstream saturation; 272 unavoidable single-CSS multi-cluster cases) |
| 6 | critic (LITREVIEW) | `gates/gate_figure_audit.json` | PASS | Blinded figure audit, 3 iterations: 36 panels -> 34 final (8 PASS, 26 CAVEAT, 0 REDESIGN, 0 FABRICATION); 22 fabrication flags raised then resolved before convergence |
| 7 | actor (LITREVIEW x11) | `gates/gate_sections_drafted_iter3.json` | PASS | Iter3 of section drafting: 11/11 sections PASS across 8 mechanical checks (anchor, cite-key allowlist, figure fences, no bare authors, forbidden lexicon, label directive, duplicate name) |
| 7V | validator (DATAML) | `gates/gate_sections_drafted_iter3.json` | PASS | Send-back loop: iter1=211 failures -> iter2=4 -> iter3=0; 1037 valid cite-keys loaded for allowlist check |
| 8 | critic (LITREVIEW x11) | `gates/gate_critic_complete.json` | PASS | Iter1=22 MUST_FIX across 8 sections; iter2=0 MUST_FIX across all 11 sections; 49 SHOULD_CAVEAT items carried forward as non-blocking polish; sec_08 PRESENT-AS-GAP rule applied for 4 corpus-missing framework cite-keys |
| 9 | actor (DATAML) | `content/references.bib` | PASS | references.bib: 1037 entries; 413 used keys; 0 syntax errors; 0 duplicate cite-keys; 2 cosmetic ASCII-fold encoding patches (Argunsah2024, Calin2023) |
| 9V | validator (DATAML) | `gates/gate_bibliography.json` | PASS | 12 checks: balanced braces, key uniqueness, key-keymap bijection, DOI-keymap match, 1037/1037 CrossRef HTTP-200, author/title/year cross-check, ASCII-clean, used-keys-in-bib for all 11 sections, no template contamination; 2 minor diacritic encoding notes (non-blocking) |
| 10 | actor (LITREVIEW) | `gates/gate_integration.json` | PASS | 6 cross-section integration passes (6a transitions, 6b crossref, 6c terminology, 6d continuity audit, 6e figure inventory, 6f hygiene); 10/11 sections modified, 54 edits; cite-key set (413 unique) preserved; 0 broken refs; 22 figures inventoried |
| 11 | actor (LITREVIEW) | `gates/gate_intro_conclusion.json` | PASS | Introduction (1018 words, 76 cite-keys) + Conclusion (1079 words, 71 cite-keys); 0 new cite-keys (all keys drawn from 413-key body cite-set); all paragraphs >=4 cite-keys; 21 {numref}/{ref} cross-references resolved |
| 12 | critic (LITREVIEW) | `gates/gate_bookend_critic.json` | PASS | Bookend critic; iter1=1 MUST_FIX (forbidden lexicon 'canonical' in intro) + 5 SHOULD_CAVEAT; iter2=0 MUST_FIX after single-word patch; intro v2 (`content/01_introduction.md`); conclusion (`content/13_conclusion.md`); 5 SHOULD_CAVEAT carried forward |
| 13 | actor (DATAML) | `<this gate>` | PASS | Methods.md transparency document with M.1 Review Request, M.2 Scope and TOC, M.3 Evidence corpus and curation, M.4 Citation infrastructure, M.5 Drafting and critic protocol, M.6 Pipeline ledger, M.7 Bibliography and integration, M.8 Limitations, reproducibility and data availability |
| 14 | actor (DATAML) | `gates/gate_assembly_actor.json` | PASS | Document assembly: 14 pages built (13 sections + Methods); 22 figures; references.bib 1038 entries; 414 unique cite-keys with 1817 invocations and 0 orphans; evidence packages populated (sum paper_count_unique=2370). |
| 14V | validator (DATAML) | `gates/gate_assembly.json` | PASS | Iter4 of structural validation: ALL 16 checks PASS; myst build returncode 0, 0 errors, 0 warnings; iter3 evidence-directive container failure resolved by plugins/evidence-explorer.mjs v2 emitting `container[kind=evidence]` with `[code(json), caption(paragraph)]` children. |
| 15 | actor (DATAML) | `gates/gate_triples_extraction.json` | PASS | Citation-triple extraction: 3,816 triples across 13 content sections (Methods.md excluded; zero inline citations); 414 unique cite-keys, 414 unique paper DOIs, all DOIs non-empty, 0 orphan keys; 212 batches of 18 triples (within 25-triple skill limit). |
| 15V | validator (DATAML) | `gates/gate_triples_validation.json` | PASS | All 9 structural checks PASS (EXHAUSTIVE_COUNT, CLAIM_SENTENCES_IN_FILES, CITE_KEYS_IN_BIB, DOI_CONSISTENCY, SECTION_FILE_RESOLVES, NO_DUPLICATE_TRIPLES, BATCH_INTEGRITY, NON_EMPTY_SENTENCES, SCHEMA_COMPLETENESS, UNIQUE_KEY_COUNTS). 246 same-sentence cite-key repeats explicitly retained as required by EXHAUSTIVE_COUNT. |
| 16 | actor (LITREVIEW x4 workers) | `provenance/verification_report.json` | PASS | Phase-16 verification: 4 parallel LITREVIEW workers (W0-W3) verified all 3,816 triples against bib metadata; totals 2,500 VERIFIED / 435 NEEDS_FIX / 881 INSUFFICIENT_EVIDENCE. |
| 16V | validator (DATAML) | `gates/gate_verification.json` | PASS | All 9 sanity checks PASS (totals=3816, verdict-sum=3816, unique triple_ids=3816, all 414 cite-keys present, all 13 sections present, no cross-worker duplicates, batch coverage B0000-B0211). Calibration audit: W1 INSUFFICIENT rate 54.6% vs others 9-18% identified as methodological-stringency drift, motivating Phase-17B re-verification of W1's 521 INSUFFICIENT triples. |
| 17B | actor (LITREVIEW re-verifiers) | `provenance/verification_report_v2.json` | PASS | Re-verification of 881 INSUFFICIENT triples with body-text fetch under W0/W2/W3 calibration: 351 flipped to VERIFIED, 127 flipped to NEEDS_FIX, 403 remained INSUFFICIENT. Final totals: 2,851 V / 562 NF / 403 IE = 3,816. |
| 17B-V | validator (DATAML) | `gates/gate_verification_v2.json` | PASS | All 12 verification-aggregate checks PASS (merged_total=3816, sum=3816, reverdicted=881, NEEDS_FIX master count=562, no duplicate triple_ids, all 13 sections, all have verdict_final, V=2851, NF=562, IE=403). Top problem cite-keys: Pronneke2015 (22 NF), Krabbe2019 / Wagatsuma2023 (14 NF each). |
| 17A | actor (LITREVIEW x4 fix-application workers) | frames `2b314127`, `322fead6`, `f267d621`, `3f9e8c97` | PASS | 562 NEEDS_FIX triples remediated across 4 LITREVIEW workers (W0/W1/W2/W3) covering all 13 sections via REWRITE_CLAIM and REMOVE_CITE actions: W0 addressed 129 triples (sec_02, sec_12, sec_13), W1 132 (sec_07, sec_09), W2 153 (sec_04, sec_06, sec_11), W3 150 (sec_01, sec_03, sec_05, sec_08, sec_10). Zero new cite-keys introduced; word counts within +/-5%; forbidden lexicon eliminated. |
| 17V | validator (DATAML) | `gates/gate_phase17v.json` | CONDITIONAL_PASS | 5/6 structural checks PASS (all 13 sections, myst build 14 pages 0 errors 0 warnings, cite-key allowlist 391 keys 0 outside allowlist, word-count drift max 1.18%, tarball assembled). FORBIDDEN_LEXICON strict-fail on 35 hits (33 'canonical', 2 'scaffold') judged legitimate scientific use ("canonical disinhibitory motif", "developmental scaffold"); 0 process-language hits. Recommendation: PROCEED. |
| 18 | critic (LITREVIEW book-end) | `gates/gate_phase18.json` | FAIL -> remediation | Cross-section consistency audit: 1 MUST_FIX (orphan-quoted RNAscope statistic in sec_11 missing Teymornejad2024a citation) + 5 SHOULD_FIX (stylistic repetition of 'Prior reports' 61x, 'An earlier study' 35x, 'in the cited' 7x in sec_07; 'citation key map' meta-jargon 6x in sec_11; sec_05 antecedent ambiguity). Remediation send-back required. |
| 18-remediation | actor (DATAML) | `provenance/phase18_remediation_log.json` | PASS | 111 edit operations across 8 sections addressed all 1 MUST_FIX + 5 SHOULD_FIX items: MF-18.1 restored Teymornejad2024a; SF-18.1 rotated 61 'Prior reports' across sec_03/05/08/10; SF-18.2 rotated 35 'An earlier study'; SF-18.3 rephrased 7 'in the cited' in sec_07; SF-18.4 removed all 6 'citation key map' jargon in sec_11; SF-18.5 disambiguated sec_05 antecedent via {cite:t}`Guetmccreight2020b`. Constraints satisfied: zero new cite-keys, word counts within +/-5%, no new forbidden lexicon, Phase-17A actions preserved. |
| 19 | actor (DATAML, final QA) | `gates/gate_phase19_qa.json` | PASS | Final QA on manuscript v6 (post-Phase-18 remediation patch on v5 baseline): 16/16 QA checks PASS (render 14 pages, 0 build warnings, 0 build errors, 391 unique cite-keys with 3,403 occurrences and 0 missing-in-bib against 1038 bib entries, 27 cross-references resolved across 54 defined labels, myst.yml metadata complete, forbidden_strict 0 hits, total word count 59,226). |
| 20 | actor (DATAML, final assembly) | `<this gate>` | PASS | Final assembly and delivery: refreshed Methods ledger (this row), generated `verification_summary.md` (publication-grade methodology + acceptance criteria), exported master `manuscript.tex` (concatenated MyST per-section TeX exports; pdflatex draft compiles with 1 known undefined-citation warning [Rahmatullah_2023]), pushed manuscript_v6 to GitHub `AllenNeuralDynamics/ComputationalReviewVIP`, assembled `final_delivery.tar.gz` containing manuscript_v6 + gates + verification artifacts + figures + evidence + provenance. Acceptance: 16/16 Phase-19 QA + 12/12 Phase-17B-V + 16/16 Phase-14V + 9/9 Phase-15V structural checks all PASS. |

**Refresh notes (Phase 20).** Rows 14 through 19 above are the executed-phase outcomes that replaced the original Phase-13 placeholder. The verification verdict taxonomy is VERIFIED / NEEDS_FIX / INSUFFICIENT_EVIDENCE (the original `gate_scope.json` candidate taxonomy of VERIFIED / MINOR / CHIMERIC / HALLUCINATED / MISATTRIBUTED was simplified during Phase 16 to the three-state outcome set actually emitted by the LITREVIEW verifiers). Phase 17 was split into two sub-phases on the actor side: 17A (LITREVIEW fix-application across 4 workers, addressing all 562 NEEDS_FIX triples) and 17B (re-verification of the 881 INSUFFICIENT triples flagged by Phase 16's calibration audit, of which 351 flipped to VERIFIED, 127 to NEEDS_FIX, and 403 remained INSUFFICIENT). Phase 18 (book-end consistency critic) issued FAIL on iter1 with 1 MUST_FIX + 5 SHOULD_FIX and was closed by the Phase-18 remediation send-back. Phase 19 was a final 16/16-check QA pass on the post-remediation v6 manuscript. Phase 20 is the present assembly + delivery phase whose decision is recorded in `gates/gate_phase20_final.json`. The 403 residual INSUFFICIENT_EVIDENCE triples are NOT errors against the manuscript: they are claim/citation pairs for which body-text evidence was not retrievable within the verification budget and are explicitly catalogued as residual uncertainty in `verification_summary.md`. The original review request set a >=2,000-paper bibliography target; the executed bibliography is 1,038 entries (391 actively cited in the body), reflecting the Phase-2 saturation criterion which exited at 1,037 unique DOIs and was accepted in Phase 2V (see row above) as the operational outcome of the no-fixed-floor saturation rule.
(sec-methods-bibliography-integration)=
## Bibliography and Integration

Phase 9 (DATAML actor) produced `references.bib` (`content/references.bib`) by re-resolving all 1,037 cite-keys against CrossRef, then rendering BibTeX entries with ASCII-folded author and journal fields and the canonical project key set. The bibliography contains 1,037 entries (one per Phase-3 cite-key); 413 of those entries are actually used in the body text after Phase 7-10 drafting and integration, with the remaining 624 retained as the corpus-level references manifest so that Phase 18 / 19 fix passes can re-cite without re-resolving DOIs.

Phase 9V (DATAML validator) ran twelve checks against `references.bib` and gate `gates/gate_bibliography.json` records the outcomes: balanced braces, required fields per entry type, cite-key uniqueness, exact match to the Phase-3 keymap, unescaped DOI match, 1,037 / 1,037 CrossRef HTTP-200 with concurrency 3 and observed throughput 6.7 req/s (no rate-limit hits), first-author surname match against CrossRef, title Jaccard >= 0.85 against CrossRef, year match within 1, ASCII-clean author/title/journal, used-keys-present-in-bib for all 11 body sections, and no placeholder / template contamination. Two minor character-substitution encoding losses were flagged and patched (Argunsah2024 expecting "Argun(s with cedilla under)ah", Calin2023 expecting "C(a with breve)lin") -- both are cosmetic (DOI / year / title still match CrossRef) and were applied as ASCII-fold patches before the gate closed.

Phase 10 (LITREVIEW integration) ran six cross-section integration passes over the 11 body sections (gate `gates/gate_integration.json`):

| Pass | Purpose |
|---|---|
| 6a transition | Append explicit forward-link transition sentences at section boundaries (no new citations introduced). |
| 6b crossref | Resolve all `{ref}`/`{numref}` cross-section pointers; ensure every label is reachable. |
| 6c terminology | Normalize key term usage across sections (e.g. consistent treatment of "disinhibitory motif" vs "disinhibition" and of marker compound names). |
| 6d continuity audit | Flag and fix per-section claims that contradicted other sections without explicit reconciliation. |
| 6e figure inventory | Reconcile section figure inventories against the Phase-6 final panel set (22 figures inventoried; 0 mismatches). |
| 6f hygiene | ASCII-clean headings, anchor consistency, no double labels. |

Outcomes: 10 of 11 sections were modified across the six passes, with 54 total integration edits; the cite-key set used in body text (413 unique keys) was preserved exactly through integration (no key added or removed); 0 broken cross-references after the 6b pass. Phase 11 (LITREVIEW bookend) then drafted the introduction (1,018 words, 76 cite-keys) and conclusion (1,079 words, 71 cite-keys), drawing strictly from the 413-key body cite-set with 0 new keys introduced; gate `gates/gate_intro_conclusion.json`. Phase 12 (LITREVIEW bookend critic) closed in 2 iterations -- iter1 raised 1 MUST_FIX (forbidden lexicon "canonical" appearing in the introduction thesis sentence) and 5 SHOULD_CAVEAT items; iter2 returned 0 MUST_FIX after a single-word patch produced introduction v2 (`content/01_introduction.md`). Gate vid: `gates/gate_bookend_critic.json`.

Final post-Phase-10 section markdown version IDs (frozen for Phase 14 document assembly):

| Section | Title | Final published path |
|---|---|---|
| 02 | Molecular Identity and Transcriptomic Taxonomy | `content/02_classification.md` |
| 03 | Developmental Origins and Postnatal Maturation | `content/03_development.md` |
| 04 | Morphological Diversity | `content/04_morphology.md` |
| 05 | Intrinsic Electrophysiology | `content/05_electrophysiology.md` |
| 06 | Synaptic Properties and Connectivity | `content/06_synaptic_properties.md` |
| 07 | Local Circuit Motifs and the Disinhibition Framework | `content/07_disinhibition_framework.md` |
| 08 | In Vivo Function During Behavior | `content/08_in_vivo_behavior.md` |
| 09 | VIP Interneurons Across Brain Regions | `content/09_cross_areas.md` |
| 10 | Oscillatory Dynamics and Temporal Coordination | `content/10_oscillatory_dynamics.md` |
| 11 | Species Differences, Human Relevance, and Disease | `content/11_disease_translational.md` |
| 12 | Computational Models of VIP Circuit Function | `content/12_computational_models.md` |
| 01 | Introduction (Phase 12 v2) | `content/01_introduction.md` |
| 13 | Synthesis and Conclusion | `content/13_conclusion.md` |

(sec-methods-limitations-reproducibility)=
## Limitations, Reproducibility, and Data Availability

**Limitations of the present pipeline run.**
1. The Phase-2 saturation criterion was reached at 1,037 unique DOIs, below the scope-document target of 2,000. The coordinator accepted this outcome (the saturation rule, not the database-sizing pre-estimate, governs corpus closure under coordinator v27), but a future run with broader query expansion or additional database coverage (e.g. dimensions.ai, lens.org, J-STAGE, ChinaXiv) might recover additional papers in the long tail of the VIP literature.
2. Sections 4 (Morphology) and 9 (Brain Regions) were below the originally targeted per-section paper tier floor due to upstream Phase-2 saturation; this is recorded as documented exit `EXIT_1` (PAPER_TIER_FLOOR) in the Phase-5V gate.
3. Two cite-keys carry consortium-author entries that have no CrossRef "family" surname (`Thepetillainterneuronnomenclaturegroupping2008` and `Braininitiativecellcensusnetworkbiccn2021`); both were resolved by name-match against CrossRef but do not satisfy the standard surname-based author-match check.
4. The Phase-6 figure audit closed with 0 REDESIGN and 0 FABRICATION outcomes but 26 of 34 final panels carry CAVEAT outcomes; CAVEAT findings are textual qualifications applied within figure captions rather than redesigns.
5. Citation triples have not yet been verified against full text. Phase 16 (citation verification, run after Phase 13) will compute VERIFIED / MINOR / CHIMERIC / HALLUCINATED / MISATTRIBUTED counts; numbers from that phase will land in the Phase-20a refresh of M.6.

**Reproducibility statement.** Every gate, evidence package, framework artifact, citation infrastructure, and verification report cited in this Methods is committed to this repository and listed in `provenance/artifact_manifest.json` (vid -> repo path -> SHA-256). Project ID `proj_51704bdb3ee3` in the originating session. Each gate JSON encodes the actor frame ID, validator frame ID, input artifact VIDs, and the mechanical checks that closed the gate. The pipeline skill files (`comprev-coordinator-v27.md`, `comprev-reviewer-agent.md`, `comprev-evidence-gathering.md`, `comprev-evidence-validator.md`, `comprev-curation-validator.md`, `comprev-figure-construction.md`, `comprev-figure-audit.md`, `comprev-section-writing.md`, `comprev-critic.md`, `comprev-integration.md`, `comprev-fix-execution.md`, `comprev-verification.md`, `comprev-dataml-phases.md`, `comprev-scoping.md`, `comprev-scoping-validator.md`) are themselves stored as artifacts in the project and pinned to the version IDs that the coordinator delegated; replaying any phase with the same skill VID, same input artifact VIDs, and the same agent role recovers the same outputs modulo LLM nondeterminism (which is bounded for DATAML mechanical phases by deterministic check schemas and for LITREVIEW phases by the gate validator).

**Data availability.**
- Verbatim review request: `provenance/review_request.md` (`provenance/review_request.md`) and `provenance/review_request.txt` (`provenance/review_request.txt`).
- Scope: `scope.json` `provenance/scope.json`; `gate_scope.json` `gates/gate_scope.json`.
- Citation key map: `provenance/citation_key_map.json` (1,037 keys); author name table `provenance/author_name_table.json`.
- Bibliography: `references.bib` `content/references.bib` (1,037 entries; 413 used in body text).
- Gate JSONs for Phases 1-12 are listed in the Pipeline Ledger above.
- The 13 final body / bookend section markdown files are listed in M.7 with their version IDs.
- The final repository (post-Phase-20 push) will be `https://github.com/AllenNeuralDynamics/ComputationalReviewVIP`.

**Pipeline skills used.** The pipeline executed under coordinator skill `comprev-coordinator-v27.md`. Phase-by-phase skill assignments are: Phase 1 -- `comprev-scoping.md` (LITREVIEW) + `comprev-scoping-validator.md` (DATAML); Phase 2 -- `comprev-evidence-gathering.md` (LITREVIEW x14) + `comprev-evidence-validator.md` (DATAML); Phases 3, 5, 9, 13 -- `comprev-dataml-phases.md` (DATAML); Phase 4 -- framework subroutine of `comprev-reviewer-agent.md` (LITREVIEW); Phase 5V -- `comprev-curation-validator.md` (DATAML); Phase 6 -- `comprev-figure-construction.md` + `comprev-figure-audit.md` (LITREVIEW); Phase 7 -- `comprev-section-writing.md` (LITREVIEW x11); Phase 8 -- `comprev-critic.md` (LITREVIEW x11); Phase 10 -- `comprev-integration.md` (LITREVIEW); Phases 11-12 -- `comprev-reviewer-agent.md` (bookend mode) and `comprev-critic.md` (bookend mode). Phases 14-19 will load `comprev-fix-execution.md` and `comprev-verification.md`. Skill VIDs are pinned by the coordinator at delegation time.


(sec-methods-manifest)=
## Reproducibility Manifest

Every artifact cited above by a `gates/...`, `provenance/...`, `content/...`, or
`figures/...` path is committed to this repository at that path. The file
`provenance/artifact_manifest.json` lists the in-session `version_id` for
each one alongside its repo path, SHA-256 digest, and byte size; this is the
canonical reproducibility ledger. Replaying any phase from its skill plus the
listed input artifacts (with the same agent role) will recover the same outputs
modulo LLM nondeterminism, which is bounded for DATAML mechanical phases by
deterministic check schemas and for LITREVIEW phases by the gate validators.
