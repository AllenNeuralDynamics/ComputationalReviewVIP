# Methods

:::{figure} ../figures/fig_methods_pipeline.png
:name: fig-methods-pipeline
:width: 100%

**The 19-phase Expert Review Pipeline v24 used to assemble this review.** Green boxes indicate EXPERT agents (scientific judgment), blue boxes indicate DATAML agents (mechanical work), and the gray box is the COORDINATOR. Red dashed lines mark information barriers where actor–critic separation is enforced. Orange diamonds indicate gate checkpoints where the coordinator verifies compliance before advancing.
:::

This review was produced by a structured, agent-orchestrated evidence synthesis
pipeline comprising nineteen phases, spanning literature retrieval, conflict
normalization, citation infrastructure construction, figure planning, parallel
section writing, blinded critic audit, and multi-pass integration. The pipeline
was executed on the Operon multi-agent platform, in which a central
COORDINATOR agent dispatched specialist sub-agents — LITREVIEW (literature
search and retrieval), BIOKNOWLEDGE (domain enrichment and ontology alignment),
DATAML (citation, bibliography, and verification tooling), and SKILL_CREATOR
(pipeline skill curation) — via a `delegate_to` primitive. Parallel batches
were used wherever subtasks were independent (e.g., 12 parallel section
writers, 4 parallel figure-audit critics); sequential gates enforced
dependencies (e.g., bibliography construction could only begin after citation
key normalization was complete). All intermediate artifacts — search result
tables, conflict registers, figure plans, BibTeX, section drafts, critic
reports — were persisted as versioned artifacts so that the full provenance
chain of every claim is inspectable.

## Evidence Gathering (Phase 2)

The evidence base was assembled by the LITREVIEW agent, with domain enrichment
from BIOKNOWLEDGE. Three primary databases were queried in parallel: PubMed
(via E-utilities with an institutional API key), Semantic Scholar (via the
Graph API), and Google Scholar (for coverage of conference proceedings and
older monographs not indexed in PubMed). Query construction combined canonical
molecular identifiers ("vasoactive intestinal peptide", "VIP interneuron",
"VIP+ cortical interneuron"), developmental and lineage terms ("CGE-derived",
"Prox1", "caudal ganglionic eminence"), circuit-level descriptors
("disinhibition", "VIP-to-SST", "interneuron-selective interneuron", "ISI"),
and behavioral/systems terms ("locomotion", "reinforcement", "attention",
"arousal", "neuromodulation"). Synonym expansion and MeSH term anchoring were
applied to each query family to reduce recall loss from terminological drift
across subfields.

Approximately 1,460 candidate records were identified across the three
sources. Deduplication was performed by DOI first, then by normalized
title-plus-first-author hash where DOIs were absent. Inclusion criteria
required (i) peer-reviewed publication or a preprint with independent
experimental validation reported elsewhere; (ii) publication date on or before
2025; and (iii) species scope within rodent (predominantly mouse), non-human
primate, or human cortex. Non-cortical VIP literature (e.g., gut, pancreas,
suprachiasmatic nucleus) was excluded unless it was directly comparative and
cited in a cortical circuit context. Speculative preprints lacking empirical
validation were excluded. The surviving corpus was partitioned into fourteen
evidence clusters corresponding to the fourteen body sections of the review,
with a floor of seventy papers per cluster to ensure adequate depth; clusters
with thinner primary-literature coverage (e.g., primate/human VIP circuits)
were supplemented by BIOKNOWLEDGE with cross-referenced transcriptomic
atlases and developmental lineage databases.

## Clustering and Conflict Normalization (Phases 3–4)

The fourteen evidence clusters were constructed by topic-modeling the abstract
corpus, then curated by hand against the review outline to ensure that each
cluster mapped one-to-one to a planned section (molecular identity,
development and lineage, morphology and electrophysiology, local circuit
motifs, disinhibition and gain control, long-range inputs, neuromodulation,
behavioral state coupling, learning and plasticity, sensory processing,
primate/human translation, disease relevance, methodological considerations,
and open questions). A paper could be assigned to multiple clusters where its
content legitimately spanned topics, but its primary assignment anchored
citation-count budgeting.

A conflict-extraction pass was then executed across the full corpus. Each
atomic disagreement between two or more primary studies was normalized into a
structured record containing a claim, a counter-claim, the supporting
citation(s) for each side, a proposed reconciliation (methodological
difference, species difference, cell-type subdivision, or genuine unresolved
controversy), and a target section assignment of one to three sections.
Seventy normalized conflicts were ultimately registered. This register drove
the conflict admonitions embedded in each body section and ensured that
disagreements were represented rather than silently harmonized.

## Citation Infrastructure (Phase 5)

Citation metadata was built by the DATAML agent. Every DOI in the surviving
corpus was resolved against CrossRef; 857 unique DOIs were confirmed, with a
100% resolution rate. From the CrossRef records, three parallel data
structures were generated: (i) a `citation_key_map` mapping each DOI to a
deterministic author-year key (with disambiguating suffixes for same-author,
same-year collisions); (ii) an `author_name_table` of canonicalized author
names supporting unambiguous `{cite:t}` textual citations; and (iii) a BibTeX
database derived directly from CrossRef, with title-casing and journal-name
normalization applied. The citation key map was pinned as the single source of
truth for all downstream writing agents, preventing citation key drift across
the twelve parallel writer contexts.

## Scaffold Construction (Phase 6)

A structured scaffold was generated for each of the fourteen body sections.
Each section scaffold specified: the top-level claims the section would
advance; the primary, secondary, and tertiary supporting citations for each
claim drawn from the assigned evidence cluster; the conflicts from the
normalized register that would be surfaced in that section; the planned
transitions into and out of adjacent sections; and a target word budget.
Alongside the prose scaffolds, a 28-figure master plan was produced, averaging
two figures per section, covering schematic circuit diagrams, data summary
panels, comparative morphology, and conceptual syntheses. The seventy
conflicts from the normalization pass were distributed across the scaffolds
such that no conflict was orphaned and no section was overloaded.

## Figure Audit and Redesign (Phase 6.5)

Before any section prose was written, the figure master plan was subjected to
a parallel critic audit. Four independent critic batches reviewed the 28
planned figures along orthogonal axes: (i) scope — whether each figure sat
within the review's declared boundaries; (ii) data availability — whether the
underlying primary data or schematic source was tractable to reproduce or
render; (iii) redundancy — whether any two figures were making essentially the
same point; and (iv) pedagogical value — whether the figure added explanatory
lift beyond the prose. Figures flagged as redundant were merged or eliminated;
figures flagged as data-unavailable were redesigned as schematics; figures
flagged as scope-drift were retargeted. The final figure plan retained 28
figures, each paired with a reproducible-code dropdown so that the
regeneration path from raw inputs to rendered panel is embedded in the
published artifact.

## Section Writing (Phase 7)

Twelve writer agents were dispatched in parallel, one per body section
(two shorter sections were merged into adjacent writers' scopes to keep the
parallelism tractable). Each writer was given only its assigned scaffold, its
assigned evidence cluster, the normalized conflict records pinned to its
section, the `citation_key_map`, and a strict formatting contract. The
formatting contract required MyST markdown; required that every factual claim
be attached to a `{cite:p}` or `{cite:t}` citation referencing a key from the
map; forbade free-text author references; mandated explicit conflict
admonitions of the form `:::{admonition} Conflict` around each surfaced
disagreement; and set a target length of 3,000–5,000 words per section.
Writers were sandboxed from each other to prevent cross-contamination of
narrative voice and to permit true parallel execution.

## Critic Protocol (Phase 8)

Each completed section was handed to a dedicated blinded critic agent —
twelve critics in total, matched to the twelve writers but not sharing
conversational context with them. Each critic was instructed to audit along
five dimensions: (i) **citation misattribution** (does the cited paper
actually support the adjacent claim?); (ii) **conflict suppression** (has a
registered conflict been silently resolved in favor of one side?); (iii)
**internal contradiction** (do two passages in the section disagree?); (iv)
**scope mismatch** (does the section drift outside its scaffold?); and (v)
**MyST hygiene** (admonition syntax, cross-reference targets, citation role
correctness).

Across all twelve sections, critic output totaled 47 MUST_FIX items, 96
SHOULD_FIX items, and 62 NICE_TO_FIX items. MUST_FIX items were routed back
to the original writer for revision; where a writer's context window had been
exhausted by the drafting round, the fix was re-dispatched to a fresh agent
invoked in SURGICAL EDIT MODE — a constrained operating mode in which the
agent receives only the section file, the critic report, and a diff-only
mandate, preventing inadvertent rewriting of passages outside the flagged
spans. SHOULD_FIX items were applied in batch during the integration phase;
NICE_TO_FIX items were logged and triaged against remaining budget.

## Integration and Verification (Phases 9–19)

The post-writing phases handled cross-section coherence and final
verification.

**Phase 9 — Bibliography construction.** The BibTeX database built in
Phase 5 was filtered against the citation keys actually used across the
twelve revised sections, yielding a bibliography of 400 entries. Two
automated audits were run: an **orphan audit** (bibliography entries with no
in-text citation) and a **contamination audit** (in-text citations with no
bibliography entry). Both closed at zero.

**Phase 10 — Six-pass integration.** The assembled manuscript underwent six
sequential integration passes: (1) inter-section transitions, harmonizing the
opening and closing paragraphs of adjacent sections; (2) cross-reference
resolution, with 68 ``{ref}`` / ``{numref}`` targets corrected or newly created;
(3) terminology harmonization, standardizing 7 term variants
(e.g., "VIP-INs" vs. "VIP interneurons", "ISI" vs. "interneuron-selective
interneuron") across all sections; (4) narrative continuity, removing
redundant introductions of the same concept across sections; (5) figure
numbering, with 51 figure labels renumbered to reflect final section order
and cross-section figure references updated in lockstep; and (6) MyST
hygiene, validating every admonition, directive, and role.

**Phases 11–13 — Front-matter, glossary, and open-questions construction.**
These phases produced the abstract, introduction, glossary of abbreviations,
and open-questions coda, each scaffolded against the same citation
infrastructure as the body sections.

**Phases 14–18 — Citation triple extraction and verification.** Every
`{cite:p}` and `{cite:t}` invocation in the manuscript was extracted as a
triple of (citation key, bibliography entry, claim span). Each triple was
verified on two axes: the bibliography entry was checked for consistency
with the CrossRef record (title, authors, year, journal, DOI), and the
claim span was checked against the full text of the cited paper — retrieved
via the `fetch_article_fulltext` service where available — to confirm that
the cited work actually supports the adjacent assertion. Failures were
routed to a triage queue and resolved either by correcting the citation, by
rewording the claim, or by retracting the claim where no supporting source
could be located.

**Phase 19 — Repository push.** All artifacts — section files, bibliography,
figure code, data tables, critic reports, and the conflict register — were
committed to the review's version-controlled repository under a single
reproducibility manifest.

## Agent Architecture

The pipeline was implemented on the Operon multi-agent platform. A root
COORDINATOR frame held the plan state and dispatched sub-frames via a
`delegate_to` primitive. Specialist agents were typed by role: **LITREVIEW**
for literature search, retrieval, and full-text fetching; **BIOKNOWLEDGE**
for ontology alignment, lineage database lookups, and domain enrichment;
**DATAML** for citation infrastructure, BibTeX handling, CrossRef resolution,
and verification tooling; and **SKILL_CREATOR** for curation of reusable
pipeline skills. Where subtasks were independent — e.g., the twelve writer
frames, the four figure-audit critic frames, the twelve blinded section
critics — they were dispatched as parallel batches and their outputs
reconciled at a subsequent gate. Where dependencies existed — e.g.,
bibliography construction could not begin until citation keys were
normalized, and critic audit could not begin until section drafts were
complete — sequential gates were enforced. All sub-frames returned
structured outputs via a `submit_output` primitive, which the COORDINATOR
validated against a per-phase schema before proceeding.

## Reproducibility

Every figure in the review is paired with a reproducible code artifact
embedded as a collapsible dropdown in the rendered MyST document; the code
is executable given the pinned environment snapshot associated with each
artifact. All data tables underlying quantitative figures are exported as
JSON alongside the rendered panels. The citation key map, author name
table, conflict register, figure master plan, and BibTeX database are
persisted as versioned artifacts, providing a full provenance chain from
any claim in the prose back to its source record. The full pipeline is
re-runnable given the `comprev-orchestrator` skill, which encodes the
phase DAG, per-phase agent assignments, and per-phase output schemas.


## Pipeline Skills

The full pipeline is encoded as twelve version-controlled skill files committed
to this repository under [`skills/`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/tree/main/skills).
Each skill is a markdown specification that was loaded by the relevant agent at
the relevant phase — re-running a phase from scratch requires only the skill
plus the upstream artifacts. Information barriers are enforced by *omission*:
writer agents cannot see critic rubrics, figure auditors cannot see the
argument arc, and citation verifiers cannot see the fix protocol.

| Skill | Role | Phase(s) |
|---|---|---|
| [`comprev-orchestrator-v24.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-orchestrator-v24.md) | Coordinator protocol governing phase DAG, delegation, and gate artifacts | 0–19 (all) |
| [`comprev-evidence-gathering.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-evidence-gathering.md) | Worker protocol for EXPERT evidence-gathering frames (one per topic cluster) | 2 |
| [`comprev-reviewer-agent.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-reviewer-agent.md) | Universal EXPERT core — how to evaluate literature and write review prose | 2, 7, 10, 11 |
| [`comprev-scaffold.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-scaffold.md) | Scaffold construction: argument arc, section plans, figure specs, style guide | 4 |
| [`comprev-figure-construction.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-figure-construction.md) | Worker skill for producing publication-quality figures from `figure_data` JSON | 6–7 |
| [`comprev-figure-audit.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-figure-audit.md) | Blinded figure-auditor protocol — cross-study comparison validity | 6 |
| [`comprev-section-writing.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-section-writing.md) | Writer protocol: MyST formatting, citation discipline, synthesis rules | 7 |
| [`comprev-critic.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-critic.md) | Blinded section-critic protocol — unsupported claims, misrepresented evidence | 8 |
| [`comprev-integration.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-integration.md) | Cross-section integration passes; Introduction, Conclusion, and Abstract drafting | 10, 11 |
| [`comprev-verification.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-verification.md) | Citation-triple verification against CrossRef and full-text sources | 14–16 |
| [`comprev-fix-execution.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-fix-execution.md) | Fix-application protocol: replace bib entries, correct claim sentences | 17–18 |
| [`comprev-dataml-phases.md`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/skills/comprev-dataml-phases.md) | Worker protocol for DATAML agents — citation infrastructure, BibTeX, CrossRef | 3, 5, 13, 15, 19 |

To re-run this pipeline against a different topic, a user clones the
[ComputationalReviewTemplate](https://github.com/AllenNeuralDynamics/ComputationalReviewTemplate)
repository (which packages the same twelve skills), updates `myst.yml` with a
new title and table of contents, and issues a single coordinator prompt — the
orchestrator skill then drives all nineteen phases to completion.

## Limitations

Three limitations of the synthesis process are acknowledged. First,
LLM-assisted writing carries an intrinsic risk of factual drift —
plausible-sounding but unsupported statements introduced during prose
generation. This risk was mitigated by the Phase 14–18 citation triple
verification, in which every cited claim was checked against the full text
of its source; however, claims not attached to a citation (e.g., connective
framing statements) were not subject to this audit, and residual drift
cannot be fully excluded. Second, the literature search was conducted in
English against English-language indices, producing predictable coverage
gaps in non-English-language primary literature, particularly from
Japanese, Chinese, and Russian neuroscience traditions where relevant work
on cortical interneuron circuits has been published. Third, the VIP
interneuron field is evolving rapidly, particularly in primate and human
translation, single-cell transcriptomic taxonomy, and disease-relevant
circuit mapping; the snapshot published here reflects the literature as of
the 2025 cutoff and will require periodic refresh. Readers are encouraged
to consult the versioned repository for updates beyond the initial release.
