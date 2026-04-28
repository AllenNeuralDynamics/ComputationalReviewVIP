# Review Request — Provenance Record

**Project ID:** `proj_51704bdb3ee3`
**Captured (UTC):** 2026-04-26T05:21:03Z
**Pipeline version:** v27
**Phase:** 1 (Scoping Materialisation, DATAML actor)
**Source artifact:** `provenance/review_request.txt`
**SHA256 (review_request.txt):** `562fffe813cb4729346c2adb38f43986d4b9d3df1140a58621fa99594b77a428`
**Bytes:** 2669

This document accompanies the byte-exact `provenance/review_request.txt` capture
of the user's submitted prompt. It is the canonical entry point for downstream
phases that need a human-readable rendering of the request.

## Verbatim user prompt

> Start a comprehensive critical literature review titled:
> "VIP Interneurons in Cortical Computation: From Molecular Identity to Circuit Function"
>
> This is a v2 of an existing review (https://github.com/AllenNeuralDynamics/ComputationalReviewVIP).
> The v1 cited 405 papers across 12 body sections. The v2 goal is to saturate the VIP interneuron
> literature — cover every relevant primary research paper, plus the adjacent SST, PV, disinhibition,
> and CGE-lineage literature needed for context. Database sizing estimates the total relevant
> envelope at 2,500–3,000 unique papers.
>
> Initialize this repo fresh from the template:
> https://github.com/AllenNeuralDynamics/ComputationalReviewTemplate
> The template ships all pipeline skills (v27), plugins, GitHub Actions, and site infrastructure.
>
> The pipeline uses two agents — LITREVIEW (scientific judgment) and DATAML (mechanical work).
>
> The three key skill files:
> - skills/comprev-orchestrator-v27.md — The orchestrator protocol. Read this FIRST. It defines
>   all 20 phases, the coordinator protocol, gate artifacts, evidence parameters, and the plan
>   structure. Follow it phase by phase.
> - skills/comprev-reviewer-agent.md — The worker skill for LITREVIEW agents. Pass this to every
>   LITREVIEW delegation so the agent can load it.
> - skills/comprev-figure-construction.md — Already published as a skill on LITREVIEW agents.
>   Section writers load it for figure production.
>
> GitHub Repository: https://github.com/AllenNeuralDynamics/ComputationalReviewVIP
> Push all outputs to this repo in Phase 20.
>
> Evidence parameters:
> - Saturate the literature: search until <2% new unique papers in the last 100 records, confirmed
>   across two consecutive database passes
> - Snowball 2 rounds (forward + backward citation chasing on top-50 most-cited per cluster)
> - No fixed per-cluster floor — let the saturation criterion drive depth per cluster (some clusters
>   are naturally smaller than others; forcing a uniform floor would pad thin clusters with marginal
>   papers)
> - Total bibliography target: ≥2,000 unique papers
>
> Table of Contents:
> 1.  Introduction
> 2.  Molecular Identity and Transcriptomic Taxonomy
> 3.  Developmental Origins and Postnatal Maturation
> 4.  Morphological Diversity
> 5.  Intrinsic Electrophysiology
> 6.  Synaptic Properties and Connectivity
> 7.  Local Circuit Motifs and the Disinhibition Framework
> 8.  In Vivo Function During Behavior
> 9.  VIP Interneurons Across Brain Regions
> 10. Oscillatory Dynamics and Temporal Coordination
> 11. Species Differences, Human Relevance, and Disease
> 12. Computational Models of VIP Circuit Function
> 13. Synthesis and Conclusion: Reassessing the Canonical VIP Disinhibitor
>

## Editorial note

No edits applied. The text in the blockquote above is a presentation-only
rendering of the bytes in `provenance/review_request.txt` (the blockquote `>`
prefix is added per Markdown convention and is not part of the captured
content). No reflow, normalisation, paraphrase, summarisation, or character
substitution was performed. The byte-exact copy lives in
`provenance/review_request.txt` and its SHA256 is recorded in the header above.
