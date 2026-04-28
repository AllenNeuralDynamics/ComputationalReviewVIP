(sec-provenance)=

# Pipeline Provenance

This review was produced by the Operon orchestration pipeline (v27 protocol,
Phases 1–20) under blinded actor–critic separation. All inputs, transformations,
gate decisions, and outputs are recorded in the {ref}`Methods <sec-methods>` ledger
and in `provenance/` JSON files (see the GitHub repository).

## Reproducibility Summary

| Stage | Output | Verification |
|---|---|---|
| Phase 2V — Literature scoping | 1,038-DOI closed-allowlist `references.bib` | All DOIs CrossRef-verified |
| Phase 7V — Section drafting | 13 sections, 59,226 words | Blinded critic gate per section |
| Phase 14V — Manuscript assembly | v6 repo, 22 figures, 27 cross-refs | 16/16 assembly checks PASS |
| Phase 15–17B — Citation verification | 3,816 triples extracted | 2,851 V / 562 NF / 403 IE |
| Phase 17A — Targeted remediation | 240 rewrites, 274 removals, 0 swaps | Zero new cite-keys |
| Phase 18 — Cross-section integration | Consistency review + 6-issue fix | Single-pass remediation PASS |
| Phase 19 — Automated QA | 16 checks (myst build, refs, figures) | 16/16 PASS |
| Phase 20 — Final assembly | LaTeX + bib + delivery tarball | Pushed to `main` |

## Code

Pipeline code (skills v27): `skills/` directory in the repository root.

## Outstanding limitations

- 403 citation triples remain INSUFFICIENT_EVIDENCE because only abstracts were
  retrievable; these are documented per-DOI in `verification_summary.md` rather
  than removed.
- The closed-allowlist constraint produced 391 actively cited papers from 1,038
  candidates; no new entries were added during remediation (Phase 17A).
- Two figures (`fig-vip-behavior`, `fig-vip-state-decision-tree`) are schematic
  cartoons synthesising claim-level evidence; the cluster they cover had no
  audited Phase-6 quantitative panels.
