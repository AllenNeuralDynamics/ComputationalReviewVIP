# VIP Interneurons: From Molecular Identity to Circuit Function

A multi-author computational review assembled and verified by the Operon ComputationalReview pipeline.

- **Sections:** 14 thematic sections (plus abstract and methods), spanning molecular identity, development, morphology, electrophysiology, synaptic physiology, local circuit motifs, in-vivo dynamics, regional context, oscillations, species/disease translation, computational models, technology frontiers, synthesis, and conclusion.
- **Build system:** [MyST](https://mystmd.org/) Markdown — reproducible figures with embedded regeneration code in dropdowns, cross-referenced sections, and structured bibliography.
- **Provenance:** every claim was extracted as a (citation-key, bibliography-entry, claim-span) triple and cross-validated against the CrossRef record and full-text retrieval.

## Build instructions

```bash
pip install mystmd        # (or: npm install -g mystmd)
myst build --html         # renders the site into _build/
```

Then open `_build/html/index.html` in a browser, or serve it locally with `python -m http.server -d _build/html 8000`.

## Citation integrity

- **2,294 citation invocations** across 1,673 `{cite:p}`/`{cite:t}` blocks (each block may reference multiple keys)
- **405 bibliography entries** in `references.bib`; **100% CrossRef-resolved**
- **0 orphan citation keys** (all in-text keys present in the bibliography)
- **0 broken internal `{ref}`/`{numref}` links** (all figure and section labels resolve)
- **516 fix_requests applied** via the Phase 14–18 claim-verification loop

See the `phases/` directory for gate artifacts (Phases 10, 13, 15a, 15b, 18) and the fix-application report from the final verification pass.

## Repository layout

```
.
├── myst.yml                    # MyST project config + table of contents
├── references.bib              # 405 CrossRef-verified bibliography entries
├── content/                    # 16 section markdown files
│   ├── abstract.md
│   ├── sec-01-introduction.md
│   ├── ...
│   ├── sec-14-conclusion.md
│   └── sec-methods.md
├── figures/                    # Figure PNG assets, grouped by section
│   ├── sec-01/ … sec-14/
└── phases/                     # Gate artifacts and fix-application report
```

Two schematic figures (Section 1 reading guide, Section 14 revised framework) are present as placeholders pending hand illustration; the corresponding prose captions are complete.

## Citation

If you use or extend this review, please cite the repository and the underlying primary sources listed in `references.bib`.
