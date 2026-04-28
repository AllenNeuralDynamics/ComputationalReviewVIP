(sec-evidence-database)=

# Evidence Database

This page provides interactive access to all evidence extracted by the pipeline:
246+ findings per section with DOIs, claim text, source sentences, effect sizes
(where reported), replication status, and inter-paper conflicts. Filter by section,
search claim text or DOI, and inspect the full source-sentence quotes that ground
every cited claim in the manuscript.

The evidence is organised in 13 per-section JSON packages under `evidence/`. Each
package contains:

- **Findings** — claim, source sentence, paper DOI, effect size, replication status
- **Argument groups** — multi-paper consensus arguments with supporting + counter findings
- **Conflicts** — documented inter-paper disagreements with resolution status

:::{evidence-explorer}
:evidence-dir: ../evidence
:height: 800px
:::
