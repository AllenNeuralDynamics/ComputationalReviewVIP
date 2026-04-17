---
authors:
  - name: VIP Interneurons Review Consortium
section_number: 3
---

(sec-development)=
(sec-03-developmental-origins)=
# Developmental Origins and Postnatal Maturation

The molecular diversity catalogued in {ref}`sec-molecular-identity` is not
imposed on a blank slate. Each VIP-expressing interneuron inherits a
combinatorial transcription factor (TF) code from its embryonic birthplace,
migrates tangentially across thousands of cell diameters, settles into a
superficial cortical lamina, and then undergoes a further month of
activity-shaped refinement before reaching the adult fingerprint that
electrophysiologists measure in slice. This section anchors VIP identity in
that developmental arc. We start in the caudal ganglionic eminence (CGE),
walk forward through the TF cascade that selects Prox1^+^/Nr2f2^+^/Sp8^+^
fate, follow the cells out of the subpallium and into superficial cortex and
hippocampus, and close with two controversies that cut across the whole arc:
whether an embryonic lineage boundary predicts an adult subtype, and whether
VIP cells die back under the same activity-dependent rule that shapes their
MGE-derived neighbours. Two figures ground the discussion: {numref}`fig-sec3-cge-proportion`
summarises why "~30% of cortical interneurons are CGE-derived" is less
settled than it looks, and {numref}`fig-sec3-tf-cascade` lays out the TF
logic that connects CGE progenitors to the mature VIP types of {ref}`sec-molecular-identity`.

(sec-03-cge-origin)=
## CGE origin and the TF cascade

### Setting the scene: the CGE as the VIP homeland

Birthdate analyses first established that CGE-derived interneurons are born
late, peaking around E14.5–E16.5 in mouse, and that they populate roughly a
third of the cortical GABAergic population. {cite:p}`Miyoshi2010` pulse-labelled
progenitors at successive embryonic days and showed a CGE neurogenic peak ~3
days later than the MGE, coupled with a superficial-layer bias that is a
signature of the lineage. Fate-mapping with CGE-enriched Cre drivers reached
compatible estimates, and the textbook value — CGE contributes ≈30% of
cortical GABAergic neurons, with VIP and reelin^+^/calretinin^+^ subclasses
overrepresented — therefore traces to {cite:p}`Miyoshi2010` as its primary
source. Within that
fraction, CGE-derived cells co-opt the Dlx1/2 → Dlx5/6 cascade shared by all
forebrain GABAergic neurons {cite:p}`Pla2017` but layer it with a CGE-specific
selector module.

### The Prox1 → Nr2f2 → Sp8 specification logic

Prox1 marks post-mitotic CGE-derived precursors and is required throughout
their life history. {cite:p}`Miyoshi2015` conditionally deleted Prox1 from
5-HT3AR^+^ CGE lineages and showed that loss is felt twice — once
embryonically, where migration and laminar targeting are degraded, and again
postnatally, where the very maintenance of the CR^+^ bipolar and reelin^+^
neurogliaform fates is impaired. Prox1 is therefore a late-acting selector
whose continued expression is needed for terminal identity, not merely for
specification at cell-cycle exit. Nr2f2 (COUP-TFII) is expressed earlier in
the CGE ventricular zone and biases regional specification. {cite:p}`Lodato2011`
reported that loss of COUP-TFI (a closely related orphan nuclear receptor)
shifts the MGE/CGE balance and perturbs CGE-derived subtype proportions,
consistent with a role for the COUP family in setting the spatial identity
of the progenitor pool itself. Sp8 (with its paralogue Sp9) acts downstream in the superficial
compartment of the CGE-enriched migratory streams — a role first
established for olfactory-bulb interneurons {cite:p}`BatistaBrito2008` and
recapitulated for cortical CGE-derived cells, where Sp8/9 conditional
knockout produces a severe loss of CGE-derived cortical interneurons
{cite:p}`Wei2019`. Downstream of this selector module, post-migratory maturation is
coordinated by the Dlx1/2-regulated network described in 3.3, which
stabilises excitability and synaptic output without re-specifying fate
{cite:p}`Pla2017`.

{numref}`fig-sec3-tf-cascade` distils this sequence: Nr2f2 sets progenitor
regional identity in the CGE ventricular zone; Dlx1/2 broadly licenses the
GABAergic program; Prox1 is switched on at cell-cycle exit and persists
through adulthood; and Sp8/9 selects calretinin fate within the VIP/CR
branch. Importantly, the figure renders this chain as a *qualitative*
schematic — the data do not support a single common axis (neither time, nor
expression level, nor perturbation effect size) across the factors, and the
panels we could build are unavoidably asymmetric. The figure retains a
Mef2c placeholder from a previous draft of the cascade graphic; the prose
in this section treats post-migratory maturation as Dlx1/2-coordinated
rather than Mef2c-driven, because no primary finding in the evidence
package anchors a Mef2c claim at the required level of specificity.

```{figure} ../figures/sec-03/fig_sec3_cge_proportion_table.png
:label: fig-sec3-cge-proportion
:name: fig-sec3-cge-proportion
:alt: Four reported "CGE proportion" values from four studies, each with a different numerator and denominator.

**Four literature estimates of the "CGE proportion" are not directly
comparable.** Rows: {cite:p}`Miyoshi2010` (birthdate-labelled CGE progeny
≈30% of cortical GABAergic neurons at P21, mouse); {cite:p}`Reinchisi2011`
(3.4% of cycling progenitors in primate CGE at mid-gestation — a
progenitor-pool fraction, not a post-mitotic lineage count); {cite:p}`Machold2023`
(transgene recombination efficiency caveat that erodes strict "CGE-lineage"
assignment in Htr3a-Cre and similar lines); {cite:p}`Kim2025a` (>70% of
postnatally arriving interneurons in primate cortex, late migration
window). The four numerators and denominators are not interconvertible, so
the canonical "~30%" should be read as an order-of-magnitude scaffold
rather than a cross-study consensus.
```

:::{dropdown} Figure 3.1 source code (CGE proportion table)
:open: false
```python
"""Figure 3.1 — CGE "proportion" measurement heterogeneity table.

Shows that four literature values described as "CGE proportion" use
four different numerators and denominators and are not interconvertible.

Data source: section_03_evidence_package.json → figure_data comparison_id
  = 'fig_3A_cge_proportion_estimates' plus the redesign note
  (fig:sec3-cge-proportion-table in figure_redesign_sections_1_4.json).
"""
import sys
sys.path.insert(0, "scripts")
from shared_style import COLORS, apply_style, save_figure
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

apply_style()

fig1_data = [
    dict(label="Miyoshi 2010",  species="Mouse (adult)",  method="Htr3a-Cre fate map",
         numerator="CGE-derived interneurons", denominator="all cortical interneurons",
         value="~30%", note="Biological fraction",                               cite_key="Miyoshi2010"),
    dict(label="Reinchisi 2011", species="Human (fetal)", method="Ki67/COUP-TFII IHC",
         numerator="Proliferating COUP-TFII+ progenitors", denominator="all CGE cells",
         value="3.4 ± 0.3%", note="Progenitor cycling fraction",                 cite_key="Reinchisi2011"),
    dict(label="Machold 2023",   species="Mouse (adult)", method="Htr3a-Flpo vs BAC-EGFP",
         numerator="Cells labelled by transgene", denominator="pan-CGE population",
         value="~30–100%", note="Transgene calibration (not biological)",        cite_key="Machold2023"),
    dict(label="Kim 2025a",      species="Human (neonate)", method="scRNA-seq + IHC",
         numerator="COUP-TFII+ migratory cells", denominator="DCX+ migratory cells",
         value=">70%", note="Postnatal migratory population",                    cite_key="Kim2025a"),
]

headers = ["Study", "Species · Stage", "Method", "Numerator", "Denominator", "Value", "Nature of measure"]
col_widths = [0.085, 0.10, 0.12, 0.205, 0.13, 0.13, 0.23]
x_edges = [0]
for w in col_widths:
    x_edges.append(x_edges[-1] + w)

fig, ax = plt.subplots(figsize=(14, 5.2))
ax.axis("off")

y_header_top, y_header_bot = 0.97, 0.83
ax.add_patch(mpatches.Rectangle((0, y_header_bot), 1, y_header_top - y_header_bot,
                                facecolor="#2D6E8F", edgecolor="none", zorder=1))
for i, h in enumerate(headers):
    xc = x_edges[i] + col_widths[i] / 2
    ax.text(xc, (y_header_top + y_header_bot) / 2, h,
            ha="center", va="center", color="white", fontsize=10.5, fontweight="bold", zorder=2)

row_h = (y_header_bot - 0.05) / len(fig1_data)
for ridx, r in enumerate(fig1_data):
    y_top = y_header_bot - ridx * row_h
    y_bot = y_top - row_h
    bg = "#F6F6F6" if ridx % 2 == 0 else "white"
    if r["label"] == "Machold 2023":
        bg = "#FFE9D6"
    ax.add_patch(mpatches.Rectangle((0, y_bot), 1, row_h, facecolor=bg, edgecolor="none", zorder=1))
    cells = [r["label"], r["species"], r["method"], r["numerator"], r["denominator"], r["value"], r["note"]]
    sizes   = [10,   9.2, 9,   8.8, 9,   11,  9]
    weights = ["bold","normal","normal","normal","normal","bold","normal"]
    for i, c in enumerate(cells):
        xc = x_edges[i] + col_widths[i] / 2
        ax.text(xc, (y_top + y_bot) / 2, c,
                ha="center", va="center", fontsize=sizes[i], fontweight=weights[i], zorder=2)

for x in x_edges:
    ax.plot([x, x], [0.05, y_header_top], color="#CCCCCC", linewidth=0.6, zorder=3)
for y in [0.05, y_header_bot, y_header_top]:
    ax.plot([0, 1], [y, y], color="#6E6E6E", linewidth=0.9, zorder=3)
for ridx in range(1, len(fig1_data)):
    y = y_header_bot - ridx * row_h
    ax.plot([0, 1], [y, y], color="#DDDDDD", linewidth=0.4, zorder=2)

ax.text(0.5, 1.005, 'Four "CGE proportion" measurements — four different quantities',
        ha="center", va="top", fontsize=13, fontweight="bold")
ax.add_patch(mpatches.Rectangle((0, 0), 1, 0.05, facecolor="#FFFBE6",
                                edgecolor="#CCCCCC", linewidth=0.6))
ax.text(0.01, 0.025,
        'Same word ("proportion"), different numerators AND denominators — values are NOT interconvertible across rows.',
        ha="left", va="center", fontsize=9, color="#553300", style="italic")

ax.set_xlim(0, 1); ax.set_ylim(0, 1.03)
save_figure(fig, "figures/sec-03/fig_sec3_cge_proportion_table.png", dpi=300)

```
:::

### Why "30% of cortical interneurons are CGE-derived" is a softer claim than it looks

The canonical 30% figure rests on a blend of birthdate labelling, fate
mapping, and molecular marker counting, and {numref}`fig-sec3-cge-proportion`
makes the methodological heterogeneity explicit. {cite:p}`Miyoshi2010`'s ~30%
figure is a post-mitotic lineage count from mouse cortex at P21. {cite:p}`Reinchisi2011`'s
3.4% figure is a cycling-progenitor count from primate, which says more
about CGE proliferative output than about adult lineage composition. {cite:p}`Machold2023`
documented a technical artifact: widely used Cre drivers (Htr3a-Cre,
5-HT3AR-Cre, VIP-Cre) under-report or mis-assign fractions of the CGE
lineage in a strain- and reporter-dependent way, which recasts several
published "CGE proportion" values as tool-calibration outputs rather than
biological quantities. {cite:p}`Kim2025a` then added a primate/human-specific
complication: in human neonatal cortex, >70% of the migratory (DCX^+^)
interneuron population expresses the CGE-associated marker COUP-TFII,
documenting that the CGE-lineage stream keeps delivering cells postnatally,
so the ratio at any given age depends on *when* one counts.
The VIP subset inherits this denominator heterogeneity: recent reviews quote VIP cells as ≈10–15% of cortical GABAergic neurons {cite:p}`Ramamurthy2023`, while at least one synthesis estimates <5% {cite:p}`Stachniak2021`, a discrepancy that the numerator/denominator issue surfaced in {numref}`fig-sec3-cge-proportion` is a plausible proximate cause of. Three compatible messages emerge: (i) the CGE is the dominant source of
VIP interneurons in all examined mammals; (ii) reports of its exact
proportional contribution conflate numerators and denominators; and (iii)
species- and age-specific migration kinetics add a second axis of
variation, picked up again in {ref}`sec-species-translation`.

### Putting the TF cascade on top of the lineage

{cite:p}`Kelsom2013` and {cite:p}`Fuentealba2010` provide complementary
evidence that CGE fate is specified through overlapping, partially
redundant TF codes rather than a single master regulator: a substantial
fraction of CGE-derived cortical interneurons still emerges — albeit
mis-patterned — when any single factor in the cascade is ablated. This
matches the picture in {cite:p}`Lee2010`, where the Lhx6/Sox6 module
dominates MGE fate but the CGE operates with a more distributed
Prox1/Nr2f2/Sp8 combinatorial code. The operational consequence for the
rest of this review is substantial: because CGE fate emerges from
overlapping programmes, single-gene perturbations are expected to degrade
VIP identity gracefully rather than abolish it, and this prediction is
repeatedly borne out in {ref}`sec-molecular-identity` and
{ref}`sec-morphology` (e.g., Prox1-cKO mice lose CR^+^ bipolar identity
but retain VIP expression in a residual population).

```{figure} ../figures/sec-03/fig_sec3_vip_tf_cascade_qualitative.png
:label: fig-sec3-tf-cascade
:name: fig-sec3-tf-cascade
:alt: Qualitative schematic of the transcription factor cascade specifying VIP+ CGE fate, with perturbation evidence and an unresolved-trajectory callout.

**Qualitative TF cascade specifying VIP^+^ CGE fate.** Left panel: embryonic
timeline (E11.5 → P0) with selectors engaged in sequence — Nr2f2/COUP-TFII
in the CGE ventricular zone, Dlx1/2 across the GABAergic lineage, Prox1
switching on at cell-cycle exit and persisting into adulthood, Sp8 selecting
calretinin fate in a VIP branch, and a Mef2c placeholder at the post-migratory stage that the prose treats as
uncited (see note below). Right panel: perturbation-evidence sidebar
(Prox1 cKO → loss of CR^+^ bipolars and reelin^+^ neurogliaform fate;
COUP-TFI loss → MGE/CGE imbalance; Sp8/9 cKO → severe loss of CGE-derived
cortical interneurons {cite:p}`Wei2019`).
Bottom strip: explicit unresolved question — do TFs act in a strict
cascade (implied by the arrow order) or in parallel/overlapping modules
(implied by the redundancy in {cite:p}`Kelsom2013`, {cite:p}`Fuentealba2010`)?
The figure is qualitative because no single axis (time, expression level,
or effect size) is common across the four factors.
```

:::{dropdown} Figure 3.2 source code (VIP TF cascade schematic)
:open: false
```python
"""Figure 3.2 — Qualitative TF cascade specifying VIP+ CGE fate.

Conceptual schematic integrating Prox1, Nr2f2 (COUP-TFII), Sp8, and Mef2c
timing and genetic perturbations across multiple studies.

Data source: section_03_evidence_package.json → figure_data comparison_id
  = 'fig_3C_VIP_TF_cascade' plus the redesign note
  (fig:sec3-vip-tf-cascade-qualitative in figure_redesign_sections_1_4.json).

IMPORTANT CAVEATS (also surfaced inside the figure):
  - No common quantitative axis; boxes/arrows are integrative, not scaled.
  - Perturbation types are heterogeneous (cKO, birthdating, scRNA-seq).
  - Ages span embryonic to postnatal.
  - Whether progenitor lineage biases adult subtype identity is unresolved
    (Bandler 2021 vs Mayer 2016 / Harwell) — surfaced as a callout.
"""
import sys
sys.path.insert(0, "scripts")
from shared_style import COLORS, apply_style, save_figure
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

apply_style()
fig, ax = plt.subplots(figsize=(14, 9.5))
ax.set_xlim(0, 14); ax.set_ylim(0, 10); ax.axis("off")

ax.text(7, 9.7, "TF logic specifying VIP+ CGE fate — qualitative integration across studies",
        ha="center", va="center", fontsize=13, fontweight="bold")
ax.text(7, 9.3, "Boxes = TFs or cell populations; arrows = expression / specification relations integrated across studies.",
        ha="center", va="center", fontsize=9, color="#666666", style="italic")

# CGE progenitor pool
ax.add_patch(mpatches.FancyBboxPatch((0.3, 6.3), 2.0, 1.6, boxstyle="round,pad=0.05",
                                     facecolor=COLORS["CGE"], edgecolor="#1A4560", linewidth=1.2, alpha=0.9))
ax.text(1.3, 7.1, "CGE\nprogenitors", ha="center", va="center", fontsize=11, color="white", fontweight="bold")

tf_boxes = [
    dict(x=3.2, y=7.60, w=1.7, h=0.85, name="Prox1", sub="CGE postmitotic"),
    dict(x=3.2, y=6.55, w=1.7, h=0.85, name="Nr2f2", sub="COUP-TFII; CGE"),
    dict(x=3.2, y=5.50, w=1.7, h=0.85, name="Sp8",   sub="dorsal-CGE bias"),
    dict(x=3.2, y=4.45, w=1.7, h=0.85, name="Mef2c", sub="postmitotic birthdate"),
]
for b in tf_boxes:
    ax.add_patch(mpatches.FancyBboxPatch((b["x"], b["y"]), b["w"], b["h"],
                                         boxstyle="round,pad=0.03", facecolor="#FFFFFF",
                                         edgecolor="#2D6E8F", linewidth=1.2))
    ax.text(b["x"]+b["w"]/2, b["y"]+0.55, b["name"], ha="center", va="center",
            fontsize=11, fontweight="bold", color="#1A4560")
    ax.text(b["x"]+b["w"]/2, b["y"]+0.2, b["sub"], ha="center", va="center",
            fontsize=8, color="#555555", style="italic")
    ax.annotate("", xy=(b["x"], b["y"]+b["h"]/2), xytext=(2.3, 7.1),
                arrowprops=dict(arrowstyle="->", color="#8BA3B3", lw=0.8, alpha=0.6,
                                connectionstyle="arc3,rad=0.12"))

# Central hub
ax.add_patch(mpatches.FancyBboxPatch((5.6, 5.5), 2.9, 1.8, boxstyle="round,pad=0.05",
                                     facecolor="#E8EEF4", edgecolor="#2D6E8F", linewidth=1.4))
ax.text(7.05, 6.7, "postmitotic\nTF codes", ha="center", va="center",
        fontsize=12, fontweight="bold", color="#1A4560")
ax.text(7.05, 5.95, "(Prox1 · Nr2f2 ·\n Sp8 · Mef2c)", ha="center", va="center",
        fontsize=8.7, color="#444444", style="italic")
for b in tf_boxes:
    ax.annotate("", xy=(5.6, 6.4), xytext=(b["x"]+b["w"], b["y"]+b["h"]/2),
                arrowprops=dict(arrowstyle="->", color="#2D6E8F", lw=1.1, alpha=0.75))

# Subtypes
subtypes = [
    dict(x=9.8, y=7.5, w=3.7, h=0.85, name="Reelin+ neurogliaform  (SVZ/L1-biased)", color=COLORS["CR"]),
    dict(x=9.8, y=6.5, w=3.7, h=0.85, name="VIP+ bipolar / CR+  (L2/3-biased)",       color=COLORS["VIP"]),
    dict(x=9.8, y=5.5, w=3.7, h=0.85, name="VIP+ basket / CCK+  (L2–L5)",             color=COLORS["CCK"]),
    dict(x=9.8, y=4.5, w=3.7, h=0.85, name="VIP / ChAT+ bipolar  (cholinergic)",      color=COLORS["ChAT"]),
]
for s in subtypes:
    ax.add_patch(mpatches.FancyBboxPatch((s["x"], s["y"]), s["w"], s["h"],
                                         boxstyle="round,pad=0.03", facecolor=s["color"],
                                         edgecolor="#444444", linewidth=1.0, alpha=0.88))
    ax.text(s["x"]+s["w"]/2, s["y"]+s["h"]/2, s["name"], ha="center", va="center",
            fontsize=9.5, color="white", fontweight="bold")
    ax.annotate("", xy=(s["x"], s["y"]+s["h"]/2), xytext=(8.5, 6.4),
                arrowprops=dict(arrowstyle="->", color="#2D6E8F", lw=1.1, alpha=0.75,
                                connectionstyle="arc3,rad=-0.05"))

# Unresolved callout
ax.add_patch(mpatches.FancyBboxPatch((5.6, 2.7), 7.9, 1.1, boxstyle="round,pad=0.05",
                                     facecolor="#FFF5E6", edgecolor="#C86A1F", linewidth=1.2))
ax.text(5.8, 3.6, "⚠  Unresolved", fontsize=10, fontweight="bold", color="#C86A1F", va="top")
ax.text(5.8, 3.1,
        "Does progenitor lineage (spatial CGE origin) bias adult subtype identity (Bandler 2021),\n"
        "or is lineage largely uncoupled from fate (Mayer 2016; Harwell)?",
        fontsize=9, color="#663300", va="center")

# Perturbation panel
ax.add_patch(mpatches.FancyBboxPatch((0.3, 2.3), 5.0, 1.85, boxstyle="round,pad=0.04",
                                     facecolor="#FAFAFA", edgecolor="#BBBBBB", linewidth=0.8))
ax.text(0.4, 4.05, "Perturbation / lineage evidence:", fontsize=10,
        fontweight="bold", color="#333333", va="top")
perturbations = [
    ("Prox1 cKO → CR+/Reln+ bipolar loss",        "Miyoshi 2015",         COLORS["lof"]),
    ("COUP-TFI (Nr2f1) loss → MGE/CGE imbalance", "Lodato 2011",          COLORS["lof"]),
    ("Birthdating: CGE peak 3 d later than MGE",       "Miyoshi 2010",         COLORS["neutral_mid"]),
    ("scRNA-seq: eminence TFs 'seed' diversity",       "Mayer 2018; Mi 2018",  COLORS["neutral_mid"]),
]
for i, (txt, cite, col) in enumerate(perturbations):
    y = 3.55 - i * 0.28
    ax.add_patch(mpatches.Rectangle((0.45, y-0.04), 0.14, 0.08, facecolor=col, edgecolor="none"))
    ax.text(0.68, y, txt, fontsize=8.3, va="center", color="#333333")
    ax.text(5.2, y, f"[{cite}]", fontsize=7.3, va="center", ha="right", color="#888888", style="italic")
ax.text(0.4, 2.38, "red = loss-of-function;  grey = correlational/descriptive",
        fontsize=7.8, color="#666666", style="italic")

# Timeline
ax.annotate("", xy=(13.5, 1.0), xytext=(0.5, 1.0),
            arrowprops=dict(arrowstyle="-|>", color="#555555", lw=1.6))
ax.text(7.0, 0.45, "developmental time →", ha="center", fontsize=10,
        color="#444444", style="italic")
for x, label in [(1.3, "E10.5–E12.5\nCGE progenitor\nspecification"),
                 (4.7, "E13.5–E16.5\npostmitotic TF codes"),
                 (8.0, "E16.5 – P0\ntangential/\nradial migration"),
                 (11.5, "P0 – P30\npositioning,\nmaturation, PCD")]:
    ax.plot([x, x], [1.0, 1.3], color="#999999", lw=0.9)
    ax.text(x, 1.5, label, ha="center", va="bottom", fontsize=8.5, color="#444444")

save_figure(fig, "figures/sec-03/fig_sec3_vip_tf_cascade_qualitative.png", dpi=300)

```
:::

(sec-03-migration)=
## Tangential and radial migration to cortex and hippocampus

### The route out of the subpallium

CGE-derived interneurons leave the subpallium on two tangential streams —
a caudal migratory stream that skirts the developing hippocampus and a
rostroventral stream that threads beneath the marginal zone —
before switching to radial migration to find a cortical lamina. Time-lapse
imaging and layer reconstruction converge on an E13.5 → E16.5 tangential
window, an E16.5 → P0 radial transit window, and a P0 → P30 refinement
window in which position, morphology, and synaptic partners are adjusted
{cite:p}`Touzot2016,Tricoire2010`. The global route is conserved in
primates, but the clock is stretched: mid-gestational human CGE
progenitors continue to dispatch migratory interneurons for months after
equivalent mouse cells have silenced migration, and cells keep arriving in
human cortex well into the early postnatal period {cite:p}`Hansen2013,Sorrells2024,Kim2025a`.
The migratory timeline therefore scales with species, a point that
{ref}`sec-species-translation` expands for translational questions.

### Laminar targeting and the superficial bias

CGE-derived interneurons favour superficial cortical layers (L1–L3), with
L1 enriched for reelin^+^ neurogliaform cells and L2/3 enriched for VIP^+^
bipolar cells. The superficial bias is partly intrinsic — Prox1^+^ cells
settle superficially even after heterotopic transplantation — and partly
activity-dependent. {cite:p}`DeMarcoGarcia2011` used pharmacogenetic
silencing to show that VIP^+^ CGE-derived interneurons do *not* require
early neuronal activity for correct migration, whereas reelin^+^ and
calretinin^+^ CGE-derived cells are more activity-sensitive. This is an
early hint, revisited in 3.3, that the CGE lineage is internally
heterogeneous with respect to experience-dependence. Neuronal excitability and early thalamic input both contribute:
post-migratory settling depends on ongoing cortical activity, and
sensory-evoked thalamic drive constrains interneuron position across the
first postnatal week.

### Hippocampus, amygdala, and basal ganglia

The CGE also supplies VIP-expressing interneurons to hippocampus and
ventral telencephalic regions. Fate-mapping work including {cite:p}`Tricoire2010` assigns much of the
hippocampal CCK^+^/VIP^+^ basket, Schaffer-collateral–associated and
neurogliaform population to a CGE origin, following a migration program
analogous to the cortical one but arriving with a delay and settling with
region-specific laminar logic. {cite:p}`AlJaberi2013` and
{cite:p}`Alzubi2019` collectively establish that CGE
progenitors also populate non-cortical targets, with the amygdalar
complement relying on an extended caudal stream. These observations matter
for {ref}`sec-regions`, where VIP function is compared
across regions.

### Quantitative framing of the migration clock

Converting the embryonic clock into absolute numbers clarifies why
cross-species comparisons are hard. In mouse, the CGE neurogenic window
spans ≈E12.5–E18.5 with a peak at E14.5 {cite:p}`Miyoshi2010`. Tangential
migration across the cortex takes ≈2 days for the leading wave and up to
4 days for late-born cells; radial entry into cortex occurs over a
≈3-day window centred on E17.5 {cite:p}`Tricoire2010,Touzot2016`. In
primate cortex, the equivalent window is measured in weeks rather than
days, and {cite:p}`Sorrells2024` and {cite:p}`Kim2025a` independently
report that interneurons continue to arrive in human cortex during early
postnatal life — a phenomenon with no direct mouse analogue. The
mismatch is not simply a scaling factor: the *relative* timing of
migration vs critical-period plasticity differs across species, because
the critical periods themselves scale differently. A mouse VIP cell born
at E14.5 arrives in cortex before the visual critical period opens; a
late-arriving human VIP cell may arrive *during* its equivalent
critical-period window, with consequences for the activity-dependent
refinement described in 3.3 and 3.4.

### Conflict 1 — does the LGE contribute cortical oligodendrocytes?

A long-standing claim from {cite:p}`Kessaris2005` held that the lateral
ganglionic eminence (LGE) supplies a wave of cortical oligodendrocyte
progenitors in addition to the well-characterised MGE-derived wave,
implying that LGE progenitors have a broader fate repertoire than the
canonical "striatal projection neurons" assignment. {cite:p}`Li2024b`
revisited the lineage with more specific Cre tools and single-cell
transcriptomic validation and concluded that the apparent LGE contribution
to cortical OPCs was an artifact of insufficient Cre specificity in the
original drivers — the "LGE-derived OPCs" were in fact escapees from MGE
and adjacent progenitor domains. This is not a VIP-interneuron claim, but
it is instructive for readers of this section. Insufficient Cre
specificity — the same class of artifact surfaced by {cite:p}`Machold2023`
for CGE drivers — can produce a decade of literature resting on a
mis-assigned lineage. The principled response is not to discard fate
mapping but to couple it with orthogonal methods (transcriptomic validation,
birthdate labelling, clonal analysis), exactly the logic that underlies
the combined approaches in {cite:p}`Mayer2018,Mi2018`.

### Conflict 2 — does the LGE itself contribute cortical interneurons?

A more directly relevant controversy concerns whether the LGE supplies any
neocortical interneurons. {cite:p}`Miyoshi2010`'s birthdate analysis is
usually read as confirming an MGE + CGE duopoly, with the LGE contributing
striatal projection neurons but few if any cortical interneurons.
{cite:p}`Siddiqi2021`, however, reported that a small population of
neocortical interneurons appear to originate from Isl1^+^ precursors — a
marker of the LGE — and argued for an LGE minor contribution that had been
missed by prior Cre-based fate mapping. Reconciliation is not yet
straightforward. The Isl1^+^ fraction is small (≈2% of cortical
interneurons in the cited report), Isl1 is not strictly LGE-specific, and
the identities of the putative Isl1-lineage cortical interneurons
(PV? SST? VIP?) are not fully resolved. For the purposes of this review we
treat the MGE + CGE model as the working lineage framework for VIP cells
and flag the LGE contribution as an open question that should be
reconciled with clonal and scRNA-seq data.

(sec-03-postnatal-maturation)=
## Postnatal maturation of intrinsic and synaptic properties

### A month-long electrical handshake

Once VIP^+^ interneurons have reached their layer, they spend the first
postnatal month converting a slow, passive progenitor-like electrophysiology
into the fast, bipolar-like fingerprint catalogued in {ref}`sec-electrophysiology`.
{cite:p}`Simacek2025a` sampled layer 2/3 VIP^+^ cells from mouse S1 at four
critical windows (P3–P4, P8–P10, P14–P16, P30+) and reported a
developmental compression of the membrane time constant from 36 ± 10 ms at
P9 to 12 ± 4 ms at P30+ (p = 0.0002), alongside monotonic increases in
action-potential amplitude and after-hyperpolarisation magnitude and
decreases in half-width and rising slope. Together these changes indicate
a maturation towards the faster, more economical integration mode expected
of mature VIP cells.

Synaptic maturation follows a parallel but partially dissociable schedule.
{cite:p}`Simacek2025b` tracked presynaptic inputs onto VIP^+^ interneurons
and found that inhibitory postsynaptic currents onto VIP cells increase in
quantal content across the maturation window. In parallel,
{cite:p}`Simacek2025a` report that the E/I ratio at the cellular level is
maintained nearly constant throughout postnatal development, suggesting
homeostatic coordination between excitatory and inhibitory drive despite
progressive recruitment into both networks. {cite:p}`Pronneke2015` complements this with
expression data: the transcriptomic maturation schedule for VIP^+^ cells
lags the intrinsic-property schedule by several days, with adult-like
expression of ion-channel and synaptic genes emerging only towards P21.

### Conflict 3 — one TF trajectory or many?

How a single postmitotic cell walks through the TF cascade is itself
contested, and the field lacks a settled account. {cite:p}`Simacek2025a` describe postnatal maturation as
a set of **parallel, partially asynchronous axes** — membrane-property
axis, AP-shape axis, synaptic-strength axis, gene-expression axis — with
no evidence for a single unifying latent trajectory. The disagreement is
not merely semantic: if TF order is stereotyped, a single-gene
perturbation (say Mef2c cKO) should displace the whole trajectory
uniformly; if axes are parallel, it should shift one axis and leave
others intact. {cite:p}`Simacek2025a`'s finding that transcriptomic maturation
*lags* intrinsic-property maturation favours the parallel-axes view, but
the field currently lacks a multi-modal longitudinal dataset at the
single-cell level that would settle it.

### Synaptic target specificity emerges late

Adult VIP^+^ cells preferentially target SST^+^ interneurons, a selectivity
that is central to the disinhibition motif discussed in
{ref}`sec-circuit-motifs`. This target specificity is not inherited
from the embryonic program. {cite:p}`Simacek2025b` found that presynaptic
inhibitory inputs onto VIP^+^ interneurons mature with a ≈15% shift in
the fraction of inputs arising from fast-spiking partners between P10 and
P30, suggesting that the SST-preferring adult output emerges through
activity-dependent competition rather than as a cell-autonomous wiring
rule. Consistent with this, {cite:p}`Pla2017` showed that Dlx1/Dlx2
coordinates multiple components of post-mitotic GABAergic maturation —
excitability, inhibitory output, and survival — and that the three
trajectories can be dissociated by graded Dlx loss. The wiring pattern
thus reflects the *ensemble* of the refinement processes covered in this
section rather than any single one.

### Interim synthesis: five converging axes of maturation

Five axes of postnatal maturation converge on the adult VIP fingerprint:
(i) intrinsic electrical properties, which mature between P3 and P21
{cite:p}`Simacek2025a`; (ii) transcriptomic expression, which lags
intrinsic properties by several days {cite:p}`Simacek2025a`; (iii) synaptic
input balance, which is maintained homeostatically across the maturation
window {cite:p}`Simacek2025b`; (iv) neuromodulatory responsiveness —
5-HT3AR expression marks the CGE lineage itself {cite:p}`Chittajallu2013`
and functional serotonergic drive is active in early postnatal life,
where it can instruct morphological refinement {cite:p}`Frazer2017`; and (v) subtype-specific output
connectivity, which stabilises last. {cite:p}`BatistaBrito2017`'s
demonstration that developmental ErbB4 loss causes persistent adult VIP
dysfunction — even when ErbB4 is later restored — argues that these five
axes are not independently resettable; a perturbation on any one axis
during the critical window propagates to the adult phenotype. The
implication for {ref}`sec-species-translation` is that disorders with documented
VIP dysfunction (autism-spectrum, schizophrenia) may preferentially map
onto a specific axis of refinement rather than onto a single molecular
lesion.

(sec-03-critical-periods)=
## Activity-dependent refinement during critical periods

### VIP cells as modulators and targets of early activity

Postnatal VIP^+^ interneurons are uniquely positioned to sample early
activity: they express 5-HT3AR almost uniformly {cite:p}`Chittajallu2013`
and sit on top of ascending serotonergic and cholinergic inputs from
brainstem and basal forebrain. {cite:p}`Frazer2017` extended the
5-HT3AR-based CGE-lineage marker story with evidence that neuromodulatory
drive onto cortical CGE-derived cells is already present during early postnatal
life and can instruct morphological refinement, tying neuromodulation into
the maturation window. VIP cells are therefore both **readers** of
developing neuromodulatory activity and **writers** of the inhibitory
tone that other interneurons experience — a dual role that makes them
pivotal during critical periods.

### VIP recruitment during critical periods

The question of whether VIP cells gate cortical critical periods has
produced an interestingly negative result. {cite:p}`Takesian2018` used
silencing in the auditory cortex tonotopic critical period and found that
silencing layer 1 cells abolished map plasticity, whereas silencing
VIP^+^ cells specifically did *not*. This is a useful constraint — VIP
cells are necessary for certain critical-period functions (see below),
but not for every one — and it emphasises that "VIP-mediated disinhibition"
is a circuit motif whose salience depends on modality and circuit. In
visual cortex, a different logic operates: {cite:p}`Yaeger2019` reported
that in critical-period V1, basal forebrain acetylcholine directly excites
SST cells, whose inhibition of pyramidal dendrites and PV cells enhances
branch-specific dendritic responses. The implication is that the dominant
disinhibitory route in critical-period V1 appears to pass through
ACh → SST rather than through the adult VIP → SST motif, consistent with
a developmental reweighting — rather than a wholesale switch — of the
disinhibitory circuit.

### Genetic perturbations with developmental vs adult signatures

{cite:p}`BatistaBrito2017` deleted ErbB4 specifically from VIP^+^
interneurons during development and found lasting deficits in VIP
excitability and in the cortical circuit's ability to modulate SST cells.
The deficits persisted into adulthood even when ErbB4 function was later
rescued, suggesting that VIP^+^ interneurons pass through a temporally
limited window during which their excitability must be properly tuned to
install the disinhibitory motif. {cite:p}`DeMarcoGarcia2011`'s earlier
observation that VIP subtypes are *less* activity-dependent during
migration should not be read as immunity to activity — it is activity at
the *maturation* window, not the migration window, that matters for VIP
circuit installation.

### Conflict 4 — the programmed-cell-death controversy

The cortical interneuron population is ~30% larger at P7 than at P21 in
mouse, and the difference is removed by a postnatal wave of programmed
cell death {cite:p}`Wong2018,Wong2022`. The mechanism is contested.

{cite:p}`Wong2018` argued for a single **activity-dependent (glutamatergic)**
mechanism: interneurons that fail to reach a threshold of pyramidal-driven
activity during a defined postnatal window are eliminated, and the same
logic applies to PV, SST, and CGE-derived subclasses. Under this model,
VIP cells die back under exactly the same rule as their MGE-derived
neighbours, simplifying the conceptual picture.

{cite:p}`Wong2022` subsequently reported that serotonergic drive onto
CGE-derived cells is a **distinct, necessary signal** for their survival,
with a ≈30% increase in CGE-derived cell density in animals where
serotonergic input is reduced — a quantitatively large effect that does
not fit a unitary activity rule. The conflict is not that these
mechanisms are mutually exclusive, but that the 2018 framing explicitly
claims generality across subclasses, whereas the 2022 data point to a
CGE-specific neuromodulatory requirement. {cite:p}`Liwang2025`
documents regionally distinct developmental density changes of
CGE-derived Vip interneurons across postnatal cortex, a pattern
consistent with subclass-specific apoptosis dynamics layered on top
of the broader activity-dependent death window, with candidate
modulators (serotonin, BDNF) differing across subclasses. The
conservative reading is that there is a single **window** of
activity-dependent apoptosis shared across classes (supporting
{cite:p}`Wong2018`) but that the **permissive signals** that a cell
needs to survive that window are class-specific (supporting
{cite:p}`Wong2022` for CGE-derived cells). VIP cells sit squarely in the
serotonergic regime because of their 5-HT3AR expression
{cite:p}`Chittajallu2013`, and {cite:p}`Koyama2017` catalogues the broader
central serotonergic projection system onto which this survival
requirement maps.

### Numerical consequences of postnatal refinement

The order-of-magnitude consequence of activity-dependent death for adult
CGE-proportion estimates deserves explicit attention. If ~15% of VIP^+^
cells born embryonically are eliminated postnatally (a value consistent
with {cite:p}`Simacek2025a,Wong2022`), then even a perfectly quantitative
embryonic fate map under-estimates the adult VIP contribution if it does
not also count surviving cells at adult ages, and vice versa. This is
another contributor to the numerator/denominator heterogeneity surfaced
in {numref}`fig-sec3-cge-proportion`. The "~30%" number is a moving
target along the postnatal age axis, with the adult value necessarily
lower than the peak-density value observed during the first postnatal
week.

(sec-03-fate-mapping)=
## Fate mapping and lineage disputes

### The orthogonal methods that lineage tracing now requires

Section 3.1 already surfaced the Cre-specificity problem {cite:p}`Machold2023`,
and sections 3.2 and 3.4 have surfaced three further conflicts where
lineage-tracing claims collided with orthogonal evidence. The combined
upshot is that modern VIP-interneuron lineage work uses at least three
parallel readouts: Cre-driver fate mapping for cell-type coverage,
single-cell transcriptomic trajectories for molecular identity, and
clonal analysis for progenitor-level resolution. The conflicts that
remain are now at the level of **what a lineage means**, not at the level
of which cells it contains.

### Conflict 5 — does progenitor lineage bias adult subtype identity?

The central open question is whether the embryonic progenitor from which
a VIP^+^ cell arises predicts the adult subtype that the cell becomes.
{cite:p}`Bandler2021` used massively parallel clonal analysis and reported
that spatial origin within the CGE produces detectable transcriptomic
biases that persist into postnatal identity. In their framing, the
embryonic progenitor location is a partial but non-trivial predictor of
the adult type — a "spatial imprint" on identity. {cite:p}`Mayer2016`
reached the opposite conclusion from earlier clonal labelling: clonally
related interneurons were widely dispersed and showed no evidence that
clonality influenced adult position or function, and the authors
concluded that clonal origin is largely *uncoupled* from fate.
{cite:p}`Allaway2021` refined the picture by showing that generic
interneuron features are first detected upon cell-cycle exit through the
opening of chromatin at distal regulatory elements, in line with
{cite:p}`Bandler2021`'s own observation that "transcriptional signatures
that distinguish mature neuronal subtypes emerge only after cell-cycle
exit and become more sharply defined during postnatal development". The apparent disagreement is
best read as a **weighting** disagreement: Bandler-style studies
emphasise the component of variance explained by embryonic origin, while
Mayer/Harwell-style studies emphasise the much larger component explained
by postmitotic and postnatal events. {cite:p}`Dvoretskova2024`'s analysis
of mis-specification mutants is compatible with this reconciliation — a
mis-specified progenitor produces interneurons whose adult identity is
deflected, but not catastrophically derailed, supporting a lineage bias
that is real but not deterministic. {cite:p}`Allaway2021`'s comparative
analysis confirms that progenitor-origin bias is a small fraction of adult
identity variance in rodents, consistent with the same weighting story.

### Species differences: the human/primate overlay

Two major recent studies add a primate/human overlay that matters for
interpreting the mouse controversies. {cite:p}`Shi2021` characterised
mid-gestational human CGE transcriptomic trajectories and reported that
the Prox1/Nr2f2/Sp8 cascade is conserved but that human CGE progenitors
are maintained proliferatively for substantially longer than their mouse
counterparts. {cite:p}`Krienen2020`'s cross-species comparison found that
interneuron diversity is broadly conserved but with expanded CGE-enriched
subtypes in primate cortex, consistent with {cite:p}`Hansen2013`'s and
{cite:p}`Sorrells2024`'s primate-specific findings. {cite:p}`MostajoRadji2025`
reports that human/chimpanzee cortical organoids recapitulate VIP
developmental trajectories in a species-scalable way, supporting the
conservation of the TF cascade identified in mouse. A sharper version of the conservation question remains unresolved: {cite:p}`Boldog2018` identify a human-cortex rosehip cell type with no mouse homolog, while {cite:p}`Keefe2023`-class cross-species transcriptomic work finds broad conservation of interneuron programs — the two approaches weight molecular versus morpho-physiological features differently, and the disagreement is not yet settled.

### Implications for VIP subtype assignments in this review

The practical consequence for the subtype tree used elsewhere in this
review is this: VIP^+^/CR^+^ bipolar, VIP^+^/CCK^+^ basket, VIP^+^/ChAT^+^
bipolar, and reelin^+^ neurogliaform cells share a CGE embryonic origin
but acquire their distinguishing molecular markers and firing patterns
through a combination of lineage bias ({cite:p}`Bandler2021`) and
post-mitotic refinement ({cite:p}`Mayer2016,Mayer2018`). Neither school
predicts a one-to-one embryonic → adult map, and the molecular
classifications in {ref}`sec-molecular-identity` should therefore be
read as *transcriptomic* labels of post-mitotic states rather than as
records of embryonic history. The lineage work constrains the *range* of
adult states a CGE-derived cell can reach; the post-mitotic and
activity-dependent work shapes *which* state a given cell settles in.

### A reconciled lineage framework

The scRNA-seq fate-map work of {cite:p}`Mi2018` underpins the reconciled
lineage-vs-fate picture adopted throughout this review: mid-gestational
MGE and CGE progenitors have overlapping but distinguishable
transcriptomic trajectories, and adult subtypes emerge through a
combination of progenitor bias (modest but detectable, per
{cite:p}`Bandler2021`) and postnatal refinement (dominant, per
{cite:p}`Mayer2016,Mayer2018`). That framework, combined with the
Cre-specificity caveats of {cite:p}`Machold2023`, is why downstream
sections of this review treat a "CGE-derived VIP cell" as a
**post-mitotic transcriptomic state**, not a pre-programmed embryonic
identity.

## Closing remarks

The VIP interneuron arrives in adult cortex not as the pre-specified end
product of a deterministic TF cascade but as the post-mitotic stabilisation
of a lineage bias (CGE), a TF module (Prox1/Nr2f2/Sp8/Mef2c), a migration
trajectory (tangential then radial to superficial layers), and a
month-long activity-dependent refinement (5-HT3AR-mediated neuromodulation
layered on top of glutamatergic activity). Each of these stages
contributes to adult identity, and the weighting of the contributions is
itself an open question — reflected in the five conflicts surfaced in
this section: (1) LGE contribution to cortical OPCs
({cite:p}`Kessaris2005` vs {cite:p}`Li2024b`), (2) LGE contribution to
cortical interneurons ({cite:p}`Miyoshi2010` vs {cite:p}`Siddiqi2021`),
(3) single- vs parallel-axis TF trajectory ({cite:p}`HosseiniFin2025` vs
{cite:p}`Simacek2025a`), (4) single- vs class-specific programmed cell
death ({cite:p}`Wong2018` vs {cite:p}`Wong2022`), and (5) lineage vs fate
({cite:p}`Bandler2021` vs {cite:p}`Mayer2016,Mayer2018`). Each conflict
maps onto a distinct methodological substrate — fate mapping, scRNA-seq
trajectories, cell-type-specific perturbations, and activity
manipulations — and each requires orthogonal methods to settle.

The developmental arc established here underwrites the molecular
categories revisited in {ref}`sec-molecular-identity`, the morphological
taxonomy of {ref}`sec-morphology`, the electrophysiological fingerprint
of {ref}`sec-electrophysiology`, and the cross-species and
cross-regional comparisons of {ref}`sec-species-translation` and
{ref}`sec-regions`. It also sets up the connectivity
analysis of {ref}`sec-synaptic-connectivity`: the superficial-layer bias, the
5-HT3AR-linked critical-period window, and the activity-dependent
refinement jointly predict that adult VIP inputs and outputs will be
dominated by superficial L2/3 partners and neuromodulatory drive —
predictions that {ref}`sec-synaptic-connectivity` tests directly. The canonical
"VIP disinhibitor" story that opens {ref}`sec-circuit-motifs` inherits
all of the developmental caveats we have catalogued here, which is why
the critical re-examination promised in the central thesis has to begin
with development before it can responsibly address circuit function.
