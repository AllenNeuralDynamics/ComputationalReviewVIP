# VIP Cortical Interneurons: A Critical Reassessment of the Disinhibition Framework

This is the v2 computational review repository — a comprehensive AI-assisted critical literature review of vasoactive-intestinal-peptide-expressing (VIP) GABAergic cortical interneurons.

The review was produced via the Expert Review Pipeline v27 (20 actor / critic / validator phases) with two delegated agent roles: LITREVIEW (scientific judgment) and DATAML (mechanical work).

## Manuscript

The canonical manuscript source is MyST Markdown in `content/`:

- `01_introduction.md` ... `13_conclusion.md` — 13 body sections (~59,000 words)
- `Methods.md` — Pipeline transparency document with full Phase 1-20 ledger
- `verification_summary.md` — Publication-grade citation-verification audit (3,816 triples; 2,851 V / 562 NF / 403 IE)

A LaTeX export of the manuscript is in `manuscript.tex` (concatenated MyST per-section TeX exports).

A pre-compiled PDF (200 pages, ~9 MB) is at [`exports/ComputationalReviewVIP.pdf`](exports/ComputationalReviewVIP.pdf). It is also surfaced as a project-wide download on the deployed site — book-theme renders a "Full review (PDF)" entry in every page's download dropdown (configured under `project.downloads` in `myst.yml`). The PDF is rebuilt automatically on every push to `main` by `.github/workflows/deploy.yml`.

## Build

```bash
npm install -g mystmd
myst build
```

This produces a static HTML site in `_build/`.

## Bibliography

`references.bib` contains 1,038 BibTeX entries; 391 are actively cited in the body (3,403 cite-key occurrences across 14 files). The Phase-2 evidence-saturation criterion exited at 1,037 unique DOIs; the original target of >=2,000 papers was not met by design — the saturation rule (no fixed per-cluster floor) drove depth per cluster.

## Verification

All 3,816 inline citations were extracted as triples (Phase 15) and verified by 4 parallel LITREVIEW workers (Phase 16), with an 881-triple re-verification pass under recalibrated stringency (Phase 17B). Final outcomes:

- VERIFIED: 2,851 (74.7%)
- NEEDS_FIX: 562 (14.7%) — all remediated in Phase 17A via REWRITE_CLAIM / REMOVE_CITE
- INSUFFICIENT_EVIDENCE: 403 (10.6%) — residual uncertainty (body-text-evidence not retrieved within budget)

See `verification_summary.md` and `gates/gate_phase20_final.json` for the full audit trail.

## Gates

Per-phase gate JSON artifacts are in `gates/`. `gate_phase20_final.json` records the final phase-by-phase decision table and deliverables checklist. The final gate decision is **PASS**, with documented qualifiers for the bibliography target and the 403 INSUFFICIENT residual.

## Pipeline

The pipeline scaffolding (skills, plugins, GitHub Actions) was inherited from the [ComputationalReviewTemplate](https://github.com/AllenNeuralDynamics/ComputationalReviewTemplate). The pipeline executes 20 phases with **actor-critic separation** — section writers cannot see how they will be critiqued, figure auditors cannot see the argument arc, and citation verifiers cannot see the fix protocol.

See `skills/comprev-coordinator-v27.md` for the coordinator protocol and `Methods.md` (M.6 Pipeline Ledger) for executed-phase outcomes.

## License

See `LICENSE`.
