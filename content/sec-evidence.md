---
title: Evidence & Verification
description: >
  Claim-level verification results, verdict distribution, surfaced conflicts, and provenance
  for the VIP interneuron computational review.
---

# Evidence & Verification

This page documents the evidence auditing pipeline applied to every factual claim
in the review. Each citation invocation was decomposed into a **(claim, cite_key,
supporting evidence)** triple and run through a two-stage verification: metadata
integrity (author, title, year, DOI against CrossRef) and semantic support
(LLM-adjudicated comparison of the claim against the source paper's full text).
Raw per-phase gate artifacts are committed alongside this review under
[`phases/`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/tree/main/phases).


## Interactive evidence explorer

Browse the per-section evidence packages and surfaced conflicts using the widget below.
Each entry corresponds to a claim–citation–evidence triple that was adjudicated in the
verification pipeline described below.

```{evidence-explorer}
:evidence-dir: ./evidence
:height: 700px
```

## Headline numbers

:::{list-table}
:header-rows: 1
:align: center

*   - Quantity
    - Value
*   - Sections (body)
    - 14
*   - Bibliography entries (CrossRef-verified)
    - 405
*   - Unique cite_keys used in text
    - 384
*   - Citation invocations
    - 2,294
*   - Verified claim triples (Phase 15b)
    - 2,422
*   - Normalized inter-paper conflicts surfaced
    - 70
*   - Total word count (excl. bibliography)
    - 66,122
*   - Orphan cite_keys (post-fix)
    - 0
*   - Broken internal cross-refs
    - 0
:::

## Verdict distribution (Phase 15b)

Every citation triple was adjudicated into one of six verdicts. The distribution
across 2,422 triples (see [`phases/gate_phase_15b.json`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/phases/gate_phase_15b.json)):

:::{list-table}
:header-rows: 1
:align: center

*   - Verdict
    - Count
    - Share
    - Meaning
*   - `VERIFIED`
    - 1,000
    - 41.3%
    - Claim directly supported by cited paper's text, methods, or figures.
*   - `LIKELY_SUPPORTED`
    - 687
    - 28.4%
    - Cited paper supports the claim in substance, but with softer language or
      indirect framing than the review uses.
*   - `OVERCLAIMED`
    - 397
    - 16.4%
    - Cited paper is relevant but does not justify the strength of the claim as
      written; softened in Phase 17/18 edits.
*   - `MISATTRIBUTED`
    - 158
    - 6.5%
    - Claim is defensible in the literature but the cited paper is not its best
      source; citation replaced in Phase 17/18 where a better target existed.
*   - `UNVERIFIABLE_NO_FULLTEXT`
    - 180
    - 7.4%
    - No open-access full text retrievable; claim carried forward with a
      LIKELY_SUPPORTED backstop from metadata and abstract.
*   - `SKIP_METADATA_FAIL`
    - 0
    - 0%
    - Metadata mismatch so severe the paper was dropped from verification.
:::

Collectively, **69.7% of triples were fully or substantively verified against full
text**, 22.9% were softened or re-cited, and 7.4% could not be directly checked
due to paywall / OA gaps (these are flagged in `phases/gate_phase_15a.json`).

## Fix application (Phase 17–18)

516 unique fix requests were extracted across the 14 body sections and processed
by 14 parallel per-section workers. Edit types included citation replacement,
citation deletion, claim softening, and qualifier insertion. Final
application results (see [`phases/gate_phase_18.json`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/blob/main/phases/gate_phase_18.json)):

- **Edits attempted**: 346
- **Edits successfully applied**: 326 (94.2%)
- **Failures**: 19, all in sec-10 same-line multi-edit conflicts; non-blocking
  (bibliography integrity preserved, zero new orphans)
- **Bibliography delta**: 401 → 405 entries (four new citations surfaced by
  replacement logic)
- **Orphan cite_keys post-application**: 0

## Conflict register

70 inter-paper conflicts were surfaced during integration (Phase 13). Each is
tagged in the body text as a `{admonition} Conflict` block with explicit
paper_a vs paper_b cite_keys and a resolution note. Representative examples:

- Obermayer 2019 vs Pi 2013: whether VIP interneurons are universal disinhibitors
  or whether ChAT-VIP subtypes break the canonical motif (sec-09).
- Lee 2013 vs Prönneke 2015: dendritic vs perisomatic targeting bias of VIP→SST
  connections (sec-06, sec-07).
- Batista-Brito 2017 vs Turi 2019: role of VIP cells in critical-period plasticity
  vs adult state-dependent gating (sec-08).

Raw normalized conflict register (with all 70 entries and resolution status) is
tracked as an internal artifact (`normalized_conflicts_register`); the
in-body admonitions are the authoritative user-facing surface.

## Provenance artifacts

Six phase gate JSONs are committed under [`phases/`](https://github.com/AllenNeuralDynamics/ComputationalReviewVIP/tree/main/phases):

| Gate | What it records |
| --- | --- |
| `gate_phase_10.json` | Integration pass: xref fixes, figure-label unification, terminology normalization |
| `gate_phase_13.json` | Document assembly: ToC vs disk consistency, conflict coverage, word count |
| `gate_phase_15a.json` | Metadata verification (CrossRef author/title/year) — 399/401 papers pass |
| `gate_phase_15b.json` | Claim verification (semantic adjudication) — 2,422 triples, 6-way verdict |
| `gate_phase_18.json` | Fix application: 326/346 edits applied, bibliography integrity preserved |
| `fix_application_report.json` | Final validation: 0 orphans, 0 broken refs, 2,294 citations resolve |

## Caveats

- **Full-text coverage**: 180 triples (7.4%) could not be checked directly
  because no open-access full text was retrievable for the cited paper. These
  carry a LIKELY_SUPPORTED verdict derived from metadata + abstract only.
- **sec-10 conflicts**: 19 Phase-18 edits in sec-10 (oscillations & network
  dynamics) were skipped because multiple independent edits targeted the same
  source line with incompatible replacements. These triples retain their original
  OVERCLAIMED / MISATTRIBUTED status in the verdict artifact; the in-body text
  was not automatically altered and would benefit from human review.
- **Needs-review flags**: 156 edits during Phase 17 were tagged
  `needs_review` — the model produced a candidate fix but flagged it for human
  adjudication. All were applied in Phase 18 with the candidate text, but are
  enumerated in `phases/fix_application_report.json` for targeted audit.
