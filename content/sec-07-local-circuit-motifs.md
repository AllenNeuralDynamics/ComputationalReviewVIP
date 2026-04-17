(sec-circuit-motifs)=
# Local Circuit Motifs

The preceding sections built up VIP interneurons as a molecularly coherent but internally heterogeneous class ({ref}`sec-molecular-identity`), with stereotyped bipolar morphology only partially conserved across the family ({ref}`sec-morphology`) and intrinsic firing patterns that split into at least irregular-spiking and continuous-adapting axes ({ref}`sec-electrophysiology`). {ref}`sec-synaptic-connectivity` quantified the synaptic substrate that supports the best-known VIP function — strong, selective inhibition of somatostatin (SST) interneurons, and weaker but real inhibition of parvalbumin (PV) cells and, in some subtypes, pyramidal cells. This section asks the question that the thesis of this review turns on: **does the canonical VIP→SST→pyramidal disinhibitory motif describe how VIP cells operate across cortex, or is it a template with as many exceptions as confirmations?**

The answer, on the evidence we have, is closer to the second. The canonical motif is real: it was demonstrated by Pi and colleagues in auditory cortex and medial prefrontal cortex under optogenetic VIP activation, and the connectivity rules that license it were independently confirmed by Pfeffer and colleagues in visual cortex {cite:p}`Pi2013,Pfeffer2013`. But an increasing fraction of studies — in the same areas, in different layers, in association cortex, during different behaviors, and across development — observe patterns that either modify the motif substantially or violate it outright. These observations do not invalidate the motif; they constrain where it applies and name the variables (layer, area, behavioral context, cholinergic state, long-range input) that decide whether VIP disinhibition is the dominant effect, one of several parallel effects, or inverted in sign.

This section proceeds through five moves. It first establishes what the canonical motif actually claims and which studies directly tested it versus inferred it from connectivity or correlated activity ({numref}`fig-sec7-canonical-motif-test-coverage`). It then surveys the three principal alternatives the canonical framing obscures — VIP→PV inhibition, direct VIP→pyramidal contacts, and long-range inputs that target VIP cells as their effector rather than engaging them as an upstream switch. A third subsection takes up the laminar question: whether disinhibition observed in superficial layers maps onto analogous effects in L5, and whether VIP engagement in infragranular cortex even uses the same chain. A fourth subsection maps how the motif plays out across behavioral context and cortical area ({numref}`fig-sec7-behavioral-context-matrix`), documenting the contradictions between locomotion studies in V1 and auditory cortex, and the developmental crossover between adult and juvenile V1. The section closes with a comparison of the three competing theoretical framings — gain control, gating, and context-switching — that motivate different predictions from the same anatomy, and with a summary of the conditions under which VIP is **not** a universal disinhibitor. {ref}`sec-in-vivo-behavior` picks up from here by asking not what the motif is, but what in-vivo signals actually drive VIP activity — a question the motif itself does not answer.

## The canonical VIP→SST→pyramidal motif

The canonical motif has a compact statement: a behaviorally-relevant input activates VIP interneurons; activated VIP cells selectively inhibit SST interneurons (and, to a lesser extent, PV cells); released from SST inhibition, the apical dendrites of pyramidal cells are disinhibited; the net effect is an increase in pyramidal output. Two 2013 landmark studies established the modern form of this circuit. In auditory cortex and medial prefrontal cortex, Pi and colleagues used optogenetic activation of VIP interneurons in awake mice and demonstrated, by extracellular recording, a transient suppression of SST and a fraction of PV interneurons with downstream facilitation of pyramidal cells; critically, naturally-occurring reward and punishment signals activated VIP cells similarly, linking the anatomical motif to a behavioral cue {cite:p}`Pi2013`. At the connectivity level, Pfeffer and colleagues used paired recordings, optogenetics, and immunohistochemistry in visual cortex to establish the complementary rule set: PV cells preferentially inhibit one another and pyramidal somata, SST cells avoid one another and inhibit all other interneuron classes including PV and VIP, and VIP cells preferentially inhibit SST cells {cite:p}`Pfeffer2013`. Lee and colleagues concurrently demonstrated the analogous wiring in the vibrissal motor-to-sensory pathway: vM1 axons recruited VIP interneurons in S1, which in turn preferentially inhibited SST-expressing interneurons whose axons target the distal apical dendrites of pyramidal cells {cite:p}`Lee2013`. Karnani and colleagues and Tremblay and colleagues subsequently consolidated the motif into the dominant textbook description across neocortex, with Karnani's paired recordings reporting that VIP→PV connection rates are low relative to VIP→SST and Tremblay's review framing VIP→SST as the principal disinhibitory output {cite:p}`Karnani2016a,Tremblay2016`. A conceptual consolidation by Wang and Yang argued that the same VIP→SST→pyramidal arrangement becomes increasingly prevalent from sensory to association cortex as a substrate for pathway gating {cite:p}`Wang2018`. The motif therefore has at least three independent lines of primary support (optogenetic activation, slice connectivity, and connectivity-via-circuit-tracing) and two widely-cited reviews that built it into the canonical description of interneuron function.

A caveat worth naming at the outset is the mismatch between the experimental manipulation and the natural operating regime. The Pi, Lee, and Pfeffer demonstrations relied on synchronous, population-wide optogenetic activation of VIP cells — a manipulation that is near-certain to overestimate the dominance of the VIP→SST→pyramidal path relative to the same population driven at physiological rates and with the subtype heterogeneity described in {ref}`sec-molecular-identity`. Every author of these papers acknowledged this limitation; the field has not yet replaced the synchronous-activation demonstration with a subtype-specific or closed-loop one. {numref}`fig-sec7-canonical-motif-test-coverage` makes the status of this foundational evidence explicit by asking, for each of the Section-7 studies whose methods identified VIP, SST, PV, and pyramidal populations, whether the direct VIP→SST/PV→pyramidal chain was demonstrated in that study or only inferred. Only Pi and colleagues and Pfeffer and colleagues demonstrated the full chain directly. Lee and colleagues demonstrated VIP→SST→pyramidal wiring but did not close the chain in vivo. Karnani and colleagues 2016a and Chen and colleagues recorded VIP and SST together but either omitted PV and pyramidal cells or inferred the disinhibitory effect from SST suppression alone.

:::{figure} ../figures/sec-07/fig_sec7_canonical_motif_test_coverage.png
:label: fig-sec7-canonical-motif-test-coverage
:align: center
:width: 95%
:alt: A five-by-five matrix showing which of five landmark Section-7 studies directly recorded each of the four cell populations (VIP, SST, PV, pyramidal) and directly demonstrated the full canonical VIP→SST/PV→pyramidal chain. Two studies (Pi 2013, Pfeffer 2013) scored yes across the board; the remaining three recorded only partial sets and inferred the chain indirectly.

Test coverage of the canonical VIP→SST/PV→pyramidal disinhibitory motif across the Section-7 studies most directly concerned with circuit connectivity. Columns indicate whether each cell population was recorded and whether the full disinhibitory chain was tested in that study (● directly; ◐ indirect, inferred, or demonstrated with a superset line such as 5HT3aR instead of VIP-Cre; ○ not recorded). Only {cite:t}`Pi2013` and {cite:t}`Pfeffer2013` provide all four populations and a direct chain test; {cite:t}`Lee2013` establishes the wiring and the in-vivo VIP/SST correlates with causal vM1 inactivation, though the pyramidal-cell effect was inferred rather than directly tested; {cite:t}`Karnani2016a` and {cite:t}`Chen2015` rely on inference for the pyramidal effect.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import json
from shared_style import COLORS, apply_style, save_figure

apply_style()

with open("evidence/figure_redesign_sections_5_8.json") as f:
    rows = json.load(f)["sections"]["7"]["figures"][0]["figure_data"]["rows"]

studies = [{"cite_key": r["cite_key"], "region": r["region"],
            "VIP": r["VIP_recorded"], "SST": r["SST_recorded"],
            "PV":  r["PV_recorded"],  "Pyr": r["Pyr_recorded"],
            "chain": r["direct_chain_demonstrated"]} for r in rows]

def glyph_for(v):
    s = str(v).lower()
    if s.startswith("yes"):
        return ("◐", COLORS["modified"]) if "disynaptic" in s else ("●", COLORS["canonical"])
    if s.startswith("no"): return "○", "#bbbbbb"
    if any(k in s for k in ["5ht3ar", "superset", "long-range", "cholinergic",
                            "asymmetric", "as target", "via", "som→vip", "as source"]):
        return "◐", COLORS["modified"]
    return "?", "#999999"

fig, ax = plt.subplots(figsize=(11, 4.8))
cols = ["VIP", "SST", "PV", "Pyr", "chain"]
col_labels = ["VIP\nrecorded", "SST\nrecorded", "PV\nrecorded",
              "Pyr\nrecorded", "direct chain\ntested"]
n_rows, n_cols, col_sp = len(studies), len(cols), 1.6

for i in range(n_rows):
    for j in range(n_cols):
        c = "#f7f7f7" if (i+j) % 2 == 0 else "#ffffff"
        ax.add_patch(patches.Rectangle((j*col_sp-0.75, n_rows-1-i-0.5),
                                        col_sp*0.95, 1, facecolor=c,
                                        edgecolor="white", lw=0.5))
for i, s in enumerate(studies):
    for j, c in enumerate(cols):
        g, col = glyph_for(s[c])
        ax.text(j*col_sp, n_rows-1-i, g, ha="center", va="center",
                fontsize=22, color=col, fontweight="bold")
    ax.text(-1.3, n_rows-1-i, s["cite_key"], ha="right", va="center",
            fontsize=10.5, fontweight="bold")
    ax.text((n_cols-1)*col_sp+0.9, n_rows-1-i, s["region"], ha="left",
            va="center", fontsize=9, color="#555", style="italic")
for j, l in enumerate(col_labels):
    ax.text(j*col_sp, n_rows-0.15, l, ha="center", va="bottom",
            fontsize=9.5, fontweight="bold")
for k, (g, col, lab) in enumerate([("●", COLORS["canonical"], "directly demonstrated"),
                                    ("◐", COLORS["modified"], "indirect / inferred / superset line"),
                                    ("○", "#bbbbbb", "not recorded")]):
    x = -4.0 + k*5.0
    ax.text(x, -1.0, g, fontsize=20, color=col, ha="center",
            va="center", fontweight="bold")
    ax.text(x+0.35, -1.0, lab, fontsize=9.5, ha="left", va="center")
ax.set_xlim(-4.5, (n_cols-1)*col_sp+4.5); ax.set_ylim(-1.6, n_rows+0.9)
ax.set_xticks([]); ax.set_yticks([]); ax.set_aspect("equal")
for sp in ax.spines.values(): sp.set_visible(False)
ax.set_title("Test coverage of the canonical VIP→SST/PV→Pyr motif across Section 7 studies",
             fontsize=11, pad=14, loc="left")
save_figure(fig, "figures/sec-07/fig_sec7_canonical_motif_test_coverage.png")
```
:::


An immediate implication of {numref}`fig-sec7-canonical-motif-test-coverage` is that the dominance of the canonical motif in the field's collective memory rests on a small number of primary demonstrations. The wider literature that is typically cited as evidence for the motif is either mechanistic extension (Lee and colleagues; Karnani and colleagues on the spotlight geometry of disinhibition {cite:p}`Karnani2016b`), cross-area replication (Naskar and colleagues in S1 {cite:p}`Naskar2021`; Szadai and colleagues in amygdala {cite:p}`Szadai2022`), or theoretical elaboration ({cite:t}`Hertag2019`, {cite:t}`Yang2016`, {cite:t}`Wang2018`). None of these replace a direct, cell-type-resolved in-vivo test of VIP→SST→pyramidal in a behavioral context, and the ones that come closest to doing so — the locomotion studies in V1 — disagree with each other in ways discussed below.

## Alternative targets the canonical framing obscures

The canonical framing names three cell classes as the substrate of cortical inhibitory control (VIP, SST, PV). When attention focuses on the VIP→SST→pyramidal arrow, three alternative VIP output targets fall out of view: VIP→PV inhibition, direct VIP→pyramidal contacts from specific VIP subtypes, and — most importantly — long-range inputs that use VIP cells as their terminal effector rather than recruiting them as an upstream switch.

First, VIP cells inhibit PV interneurons as well as SST interneurons. {cite:t}`Pfeffer2013` measured this directly in visual cortex and reported that VIP→PV inputs were present but substantially weaker in amplitude and less frequent in pairs than VIP→SST inputs; Pi and colleagues saw transient suppression of a fraction of PV interneurons during optogenetic VIP activation in auditory and prefrontal cortex {cite:p}`Pi2013`; Tremblay and colleagues consolidated these observations into a canonical rule that VIP→PV exists but is secondary {cite:p}`Tremblay2016`. The computational consequence of a weaker VIP→PV arm, however, is not negligible: because PV cells target pyramidal somata and proximal dendrites, VIP→PV→pyramidal acts on perisomatic inhibition rather than on apical-dendritic inhibition, and the two therefore modulate different computations. When the canonical motif is stated as VIP→SST→pyramidal alone, this second disinhibitory axis is elided; it re-emerges as a necessary element in recurrent-network accounts of locomotion modulation where PV responses rise rather than fall with behavioral drive {cite:p}`Dipoppa2018`.

Second, a subset of VIP interneurons contacts pyramidal cells directly rather than (or in addition to) disinhibiting them. The clearest case concerns the VIP/ChAT double-positive subpopulation: these cells release both GABA and acetylcholine, and in mPFC the cholinergic component excites pyramidal cells directly via muscarinic receptors, bypassing the disinhibitory chain (evidence summarized in {ref}`sec-morphology` and {ref}`sec-synaptic-connectivity`; the present section notes only that its existence means a VIP→pyramidal functional signal need not imply a disinhibitory route). A second contributor is the basket-like CCK+ VIP subset, whose morphology and axonal arbor are consistent with perisomatic inhibition rather than SST-targeted inhibition. The operational consequence is that interpretation of any bulk VIP optogenetic experiment as a pure disinhibition test requires assuming that the VIP/ChAT and CCK+ subsets do not contribute — an assumption that has not been tested in most of the studies in {numref}`fig-sec7-canonical-motif-test-coverage`.

Third, long-range GABAergic projections complicate the framing in the opposite direction: there are inputs to cortex (and hippocampus) that inhibit VIP cells as their principal effect. The clearest example is the Malik and colleagues demonstration of a monosynaptic long-range GABAergic projection from PFC to hippocampus that preferentially contacts CA1 interneurons (55 of 70 sampled) but not CA1 pyramidal cells (0 of 38), and whose interneuron targets include VIP-expressing cells {cite:p}`Malik2022`. Because inhibiting VIP predicts **increased** SST activity and therefore **increased** dendritic inhibition of pyramidal cells, this PFC→CA1 pathway implements what amounts to an **anti-disinhibitory** long-range motif: it reduces CA1 disinhibition and, in the authors' framing, enhances signal-to-noise for object encoding. Anastasiades and colleagues make a related point in mPFC, where ventromedial thalamus drives NDNF cells in L1a while mediodorsal thalamus drives VIP cells in L1b — parallel thalamic inputs therefore engage distinct inhibitory and disinhibitory microcircuits in the same column {cite:p}`Anastasiades2021b`. Abs and colleagues reported a third such contributor: NDNF interneurons in L1 mediate prolonged distal-dendritic inhibition that **increases** with memory consolidation, on a time course opposite to transient VIP-mediated disinhibition {cite:p}`Abs2018`. The motif as typically drawn in schematics puts VIP at the upstream end of a cascade; each of these examples puts VIP at the downstream end of one or lays an additional parallel inhibitory pathway on top of it.

:::{admonition} Conflict — Salience signals increase distal inhibition as well as decrease it
:class: warning

The canonical motif predicts that salient events should produce apical-dendritic disinhibition through the VIP→SST→pyramidal chain. {cite:t}`Abs2018` show that in auditory cortex, L1 NDNF interneurons **increase** prolonged distal-dendritic inhibition with memory consolidation, on a time course opposite to the transient disinhibition the canonical motif predicts. This does not falsify VIP-mediated disinhibition — the two operate on different time scales and via different interneuron classes — but it breaks the identity between "salience" and "apical disinhibition" that the canonical motif implicitly assumes.
:::

The collective weight of these three alternative paths is qualitative rather than quantitative: the field has not yet produced a single-experiment comparison of VIP→SST→pyramidal disinhibition versus VIP→PV→pyramidal disinhibition versus direct VIP→pyramidal inhibition in the same preparation. The closest attempt is the {cite:t}`Dipoppa2018` recurrent-network model of V1 locomotion, which fits all four cell-type activity profiles simultaneously; it requires both classical disinhibition and changes in effective feedforward weights to account for the data, and the authors explicitly conclude that a strict disinhibitory model is insufficient.

## Laminar specificity: superficial versus infragranular cortex

The canonical motif was demonstrated primarily in superficial layers (L2/3) of primary sensory cortex. Its extension to L5 rests largely on the assumption that L5 apical dendrites ascend through L1 and L2/3 and are subject to SST-mediated inhibition there, so that the same VIP→SST→pyramidal chain should disinhibit L5 apical tufts. Empirically, this prediction has been weakly supported, and the magnitude and sign of the L5 effect do not mirror L2/3 in several studies.

Two observations constrain this question. First, L2/3 VIP neurons in barrel cortex differ significantly from VIP neurons in L4-6 in morphology and membrane properties, with irregular-spiking bipolar cells dominant in L2/3 and continuous-adapting variants increasingly prevalent in deeper layers {cite:p}`Pronneke2015`. Morphological and electrophysiological heterogeneity within the broader VIP/calretinin class has been catalogued in detail {cite:p}`Cauli2014`, qualifying any general rule that "VIP preferentially inhibits SST" applies uniformly across subtypes. The laminar heterogeneity of the VIP population itself means that a motif demonstrated for L2/3 VIP cells is not automatically a motif for L5 VIP cells. Second, {cite:t}`Naskar2021` showed that in S1, cell-type-specific long-range inputs recruit SST, VIP, and PV interneurons in laminar patterns that do not follow a single rule: thalamocortical inputs, corticocortical inputs, and neuromodulatory inputs each converge on different interneuron layers. The laminar asymmetry this produces is neither the pure amplification nor the pure silence that a uniform VIP→SST chain would predict.

The prefrontal literature adds a further laminar wrinkle. {cite:t}`Kamigaki2017` reported that activating VIP interneurons in dorsomedial PFC during delayed Go/No-Go behavior enhanced both task performance and neuronal representation of action plans during the delay period, while SST and PV activation impaired memory-guided behavior — a pattern consistent with disinhibition. The delay-period signal, however, was observed across PFC layers without a fine-grained laminar breakdown; whether the L5 pyramidal population most relevant for delay-period output is disinhibited by the same mechanism as L2/3 pyramids in sensory cortex is therefore an open question. {cite:t}`Anastasiades2021b` mapped prefrontal laminar organization and showed that VIP-mediated disinhibition is not uniform across L5 vs. L2/3 pyramidal subtypes, with differential recruitment depending on projection identity and apical tuft positioning in the SST-inhibited L1–L2 domain. {cite:t}`CantoBustos2022` provides a parallel demonstration in a non-neocortical area — mouse anterior piriform (olfactory) cortex — where VIP→SST disinhibition gates associative LTP; whether the same laminar logic governs prefrontal L5 output remains untested. {cite:t}`Apicella2022` — a review synthesizing auditory-cortex evidence across multiple primary studies — argues that VIP activation produces the largest pyramidal facilitation in superficial layers, with weaker and sometimes absent effects in L5, consistent with the prefrontal pattern above.

These observations converge on a common description: the canonical motif is a superficial-layer motif. Its L5 extension requires either a dedicated VIP→SST→pyramidal chain within L5 itself (for which direct evidence is limited) or the assumption that L5 apical-tuft disinhibition in L1-L2 is sufficient to alter L5 output (for which the quantitative support comes from compartmental modeling rather than from paired recordings). A striking illustration of the consequences is {cite:t}`GuetMcCreight2016`'s compartmental model of VIP interneuron subtypes, which shows that morphologically-distinct VIP variants produce qualitatively different firing patterns at the same synaptic drive — meaning that the same incoming signal to "VIP" in a laminar schematic may produce different downstream consequences depending on which VIP subtype is most abundant in that layer {cite:p}`GuetMcCreight2016`.

## Area- and context-specific deviations from the canonical motif

{numref}`fig-sec7-behavioral-context-matrix` summarizes the ten Section-7 studies whose findings are most diagnostic for whether the canonical motif holds, is modified, or is replaced in a particular area and behavioral context. Four studies support the canonical motif as stated. Three modify it by adding conditions (cortical depth, visual drive, pulvinar coincidence) without reversing its sign. Three are non-canonical: the motif is either absent, inverted in sign, or bypassed by an alternative chain. The figure therefore does not claim that the canonical motif is wrong — it claims that the motif is the right description of a minority of the contexts surveyed.

:::{figure} ../figures/sec-07/fig_sec7_vip_behavioral_context_matrix.png
:label: fig-sec7-behavioral-context-matrix
:align: center
:width: 95%
:alt: A ten-row matrix of studies spanning V1, auditory-cross-modal, PFC, and PFC-to-CA1 long-range contexts, annotated with behavioral context, recording modality, a key finding, and a motif call indicating whether the canonical VIP→SST→Pyr is supported, modified, or replaced. Four studies score as canonical, three as modified, and three as non-canonical.

Ten studies that directly probed VIP engagement in a defined cortical area and behavioral context, scored for adherence to the canonical VIP→SST→pyramidal motif. The motif call (● supported; ◐ modified by context; ✕ non-canonical) is assigned from each study's key finding in combination with any conflict explicitly identified in the evidence package. Canonical results dominate the locomotion (in darkness) and task-delay regimes; the visual-drive, developmental, long-range, and cross-modal conditions diverge from the canonical account. Figure legend continues with caveats below.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import json
from shared_style import COLORS, apply_style, save_figure
apply_style()

with open("evidence/figure_redesign_sections_5_8.json") as f:
    rows = json.load(f)["sections"]["7"]["figures"][1]["figure_data"]["rows"]

# Motif-call assignments follow the adjudication in the section text.
motif_class = {
    "Fu2014": "canonical", "Veit2023": "canonical",
    "Koukouli2017": "canonical", "Kamigaki2017": "canonical",
    "Dipoppa2018": "modified", "Furutachi2024": "modified",
    "Ibrahim2016": "modified",
    "Yaeger2019": "non_canonical", "Malik2022": "non_canonical",
    "Chen2015": "non_canonical",
}
region_group = {"V1 L2/3": "V1", "V1": "V1", "V1 / A1 cross-modal": "V1/A1",
                "mPFC (prelimbic)": "PFC", "PFC": "PFC",
                "PFC→CA1 long-range": "PFC-HPC"}
rg_color = {"V1": "#377EB8", "V1/A1": "#666666", "PFC": "#984EA3",
            "PFC-HPC": "#A65628"}

fig, ax = plt.subplots(figsize=(15, 7.2))
n = len(rows)
X = {"study": 0.0, "region": 2.2, "context": 4.5,
     "modality": 8.0, "finding": 10.7, "motif": 18.8}
PILL_W, RIGHT_EDGE = 1.9, 19.5

for i, r in enumerate(rows):
    y = n - 1 - i
    if i % 2 == 0:
        ax.add_patch(patches.Rectangle((-0.3, y-0.48), RIGHT_EDGE+0.5, 0.96,
                                        facecolor="#f7f7f7", edgecolor="none"))
    ax.text(X["study"], y, r["cite_key"], ha="left", va="center",
            fontsize=10, fontweight="bold")
    rg = region_group.get(r["region"], "other")
    ax.add_patch(patches.FancyBboxPatch((X["region"], y-0.23), PILL_W, 0.46,
                    boxstyle="round,pad=0.02,rounding_size=0.08",
                    facecolor=rg_color.get(rg, "#999"), edgecolor="none", alpha=0.88))
    reg = r["region"] if len(r["region"]) <= 19 else r["region"][:18]+"…"
    ax.text(X["region"]+PILL_W/2, y, reg, ha="center", va="center",
            fontsize=7.8, color="white", fontweight="bold")
    ctx = r["context"][:31]+"…" if len(r["context"]) > 33 else r["context"]
    ax.text(X["context"], y, ctx, ha="left", va="center", fontsize=8.8)
    mod = r["modality"][:21]+"…" if len(r["modality"]) > 23 else r["modality"]
    ax.text(X["modality"], y, mod, ha="left", va="center",
            fontsize=8.0, style="italic", color="#555")
    fnd = r["finding"][:80]+"…" if len(r["finding"]) > 82 else r["finding"]
    ax.text(X["finding"], y, fnd, ha="left", va="center", fontsize=8.0)
    mcol = COLORS[motif_class[r["cite_key"]]]
    marker = {"canonical": "●", "modified": "◐",
              "non_canonical": "✕"}[motif_class[r["cite_key"]]]
    ax.text(X["motif"], y, marker, ha="center", va="center",
            fontsize=18, color=mcol, fontweight="bold")

# headers, separators, legend
header_y = n + 0.12
for x, lab, al in [(X["study"], "Study", "left"),
                    (X["region"]+PILL_W/2, "Region", "center"),
                    (X["context"], "Behavioral context", "left"),
                    (X["modality"], "Modality", "left"),
                    (X["finding"], "Key finding for the motif", "left"),
                    (X["motif"], "Motif call", "center")]:
    ax.text(x, header_y, lab, ha=al, va="bottom",
            fontsize=10, fontweight="bold")
for xx in [X["region"]-0.1, X["context"]-0.15, X["modality"]-0.15,
           X["finding"]-0.15, X["motif"]-0.9]:
    ax.plot([xx, xx], [-1.4, n+0.05], color="#ddd", lw=0.6, zorder=0)
for k, (g, col, lab) in enumerate([
        ("●", COLORS["canonical"], "canonical VIP→SST→Pyr"),
        ("◐", COLORS["modified"], "canonical, modified by context"),
        ("✕", COLORS["non_canonical"], "non-canonical / alternative")]):
    x = k*6.4
    ax.text(x, -1.15, g, fontsize=17, color=col, ha="center",
            va="center", fontweight="bold")
    ax.text(x+0.35, -1.15, lab, fontsize=9.2, ha="left", va="center")
ax.set_xlim(-0.4, RIGHT_EDGE+0.3); ax.set_ylim(-1.8, n+0.6)
ax.set_xticks([]); ax.set_yticks([])
for sp in ax.spines.values(): sp.set_visible(False)
ax.set_title("VIP across behavioral contexts and cortical areas: adherence to the canonical motif",
             fontsize=11.5, pad=12, loc="left")
save_figure(fig, "figures/sec-07/fig_sec7_vip_behavioral_context_matrix.png")
```
:::


:::{admonition} Caveats for {numref}`fig-sec7-behavioral-context-matrix`
:class: note

**Motif-call heuristic.** Studies are called canonical when the author's circuit interpretation explicitly invokes VIP→SST→pyramidal disinhibition as the dominant mechanism, modified when the author reports that the canonical prediction holds under some conditions but fails under others, and non-canonical when the author's circuit interpretation replaces disinhibition with a different mechanism (e.g., direct ACh→SST excitation, long-range inhibition of VIP).

**Region coverage is not balanced.** V1 dominates the sample (seven of ten studies), PFC contributes two, and long-range PFC→CA1 contributes one. Auditory cortex and somatosensory cortex are represented in {numref}`fig-sec7-canonical-motif-test-coverage` but not here; the field has fewer context-resolved studies in those areas.

**Single-study motif calls are not consensus calls.** {cite:t}`Fu2014` and {cite:t}`Pakan2016` disagree within the same area (V1, locomotion) about whether SST activity falls or rises; the motif-call assignment for those contexts is adjudicated by {cite:t}`Dipoppa2018`, which tested both conditions directly.
:::

### V1 locomotion: the most-replicated divergence

The clearest context in which the canonical motif has been tested repeatedly, and in which multiple high-profile studies reached incompatible conclusions, is the V1 response to locomotion. {cite:t}`Fu2014` reported that locomotion drives VIP cells in V1 independent of visual stimulation, primarily through nicotinic inputs from basal forebrain, and that VIP activation mimics (and is required for) the locomotion-induced enhancement of visual responses — a textbook instance of the canonical motif, with the added mechanistic claim that the locomotion-arousal axis is the principal natural driver of VIP. {cite:t}`Pakan2016` tested the same preparation under visual stimulation and found that locomotion increased activity not only of VIP cells but also of SST and PV interneurons, while SST and excitatory neurons were largely non-responsive in darkness. This is a direct challenge to the simple disinhibitory account: if SST activity rises rather than falls with locomotion in the presence of visual drive, the canonical motif cannot explain how pyramidal output is enhanced.

{cite:t}`Dipoppa2018` recorded all four cell types and showed that both Fu's and Pakan's results are reproducible in the same experimental setting — they correspond to different cortical depths, different stimulus conditions, and different baseline states. In darkness, the canonical motif is approximately correct; with visual stimuli, locomotion increases SST responses to large stimuli and VIP responses to small stimuli; a recurrent network model fitted to these data requires locomotion to modulate both feedforward and recurrent weights, not just the VIP→SST disinhibitory switch. {cite:t}`Pakan2016`, in short, was not wrong about Fu; Fu was not wrong about Pakan; the motif is context-conditional.

:::{admonition} Conflict — Locomotion in V1: canonical motif vs. context-dependent motif
:class: warning

{cite:t}`Fu2014` (V1, locomotion in darkness or bare screen) reports canonical VIP→SST→pyramidal disinhibition with SST activity **decreasing** under locomotion; {cite:t}`Pakan2016` (V1, locomotion with grating stimuli) reports SST activity **increasing** under locomotion. The disagreement is not about whether the VIP→SST synapse exists — both studies identify it — but about whether its disinhibitory consequence dominates net SST activity once visual drive is added. {cite:t}`Dipoppa2018` reconciles the two by showing that both patterns are reproducible in the same animals and depend on cortical depth and stimulus size; a strict disinhibition model is insufficient to fit the four-cell-type data. A second reconciliation framing, consistent with {cite:t}`Karnani2016a`'s observation that V1 VIP cells are broadly co-active during ongoing activity and locomotion, is that VIP activation during locomotion is nonspecific to visual features — a pattern more naturally read as a global arousal signal than as a stimulus-selective gating operation {cite:p}`Karnani2016a,Jackson2016`. The three accounts are not mutually exclusive, but they make different predictions for how VIP silencing should affect stimulus-specific tuning.
:::

### Auditory cortex: reward and punishment, but not uniform

In auditory cortex specifically, Pi and colleagues' demonstration and follow-up work by Kuchibhotla and Bigelow establish that VIP cells are engaged by behaviorally-relevant cues — reinforcement, salient transitions, attended stimuli — rather than by passive stimulation per se {cite:p}`Pi2013,Kuchibhotla2016,Bigelow2019`. In Kuchibhotla's freely-behaving preparation, cortical inhibitory responses to sound changed when animals engaged in task-relevant listening, with VIP engagement tracking attention rather than stimulus. {cite:t}`Bigelow2019`, however, reports a result that is **paradoxically opposite to V1 locomotion findings**: during movement, stimulus-related spike rates and mutual information in auditory cortex pyramidal cells **decrease** despite concurrent VIP activation, the reverse of the Fu2014 V1 pattern. If VIP were acting as a canonical disinhibitor, both areas should gain, not split. Parallel findings in visual cortex and prefrontal cortex — {cite:t}`Garrett2020` in V1 and {cite:t}`Kamigaki2017` in dorsomedial PFC — show task-related VIP engagement: Garrett and colleagues report that V1 VIP cells are driven by novel images, suppressed by familiar ones, and ramp during stimulus omission, consistent with a novelty/prediction signal rather than a fixed feature-selective representation; Kamigaki and colleagues report that VIP cells are similarly active across Go and No-Go trials, with VIP activation during the delay period improving memory-guided behavior.

:::{admonition} Conflict — auditory-cortex locomotion is NOT mediated by VIP
:class: warning
{cite:t}`Yavorska2021` tested the Fu2014 model directly in auditory cortex by silencing the VIP network during locomotion. They found that locomotion-related modulation of A1 responses persists when VIP cells are inactivated — a direct null for the "locomotion → VIP → SST → pyramidal disinhibition" chain in a second cortical area. Combined with the Bigelow2019 sign-opposite result, auditory cortex appears to obey distinct rules from V1: locomotion modulates A1 through a non-VIP mechanism, and when VIP is active during locomotion, the net effect on pyramidal gain is in the opposite direction from V1.
:::

Finally, VIP cells do not always go **up** with salient input. {cite:t}`Ibrahim2016` recorded V1 L2/3 VIP neurons and found their visual responses are **suppressed** by concurrent sound presentation, and this suppression disinhibits a cross-modal sharpening of orientation selectivity in pyramidal cells. The sign of VIP modulation is therefore not fixed even within a single area: a behaviorally-relevant multimodal cue can **deactivate** VIP cells, inverting the canonical Pi2013/Karnani2016a/Fu2014 prediction that salient or attention-grabbing stimuli necessarily recruit VIP. This observation is directly at odds with the salience-activation framing and is, so far, the clearest single demonstration that the VIP response sign is stimulus- and context-contingent rather than a fixed consequence of salience or arousal.

{cite:t}`Karnani2016a` observed something that challenges even this more nuanced reading: V1 VIP cells are broadly co-active during ongoing activity and locomotion, with a response that looks more like a population-wide gating pulse than a feature-specific disinhibitory signal. Jackson and colleagues reinforced this point with the observation that VIP+ cells in superficial layers are nonspecifically active across behavioral states including immobility, locomotion, visual stimulation, and anesthesia — VIP activation, on this reading, is a near-continuous background signal rather than an event-triggered switch {cite:p}`Jackson2016`. If the correct description of VIP activity in vivo is closer to Jackson's — always active, modulated rather than gated — the canonical motif's implicit temporal structure (salient event → VIP spike → transient disinhibition) is a poor model of the resting operating regime.

### Prefrontal cortex: task-delay and social context

Prefrontal VIP interneurons support a different set of behaviorally-relevant computations. {cite:t}`Kamigaki2017` showed in a delayed Go/No-Go auditory task that activating VIP interneurons in dorsomedial PFC enhanced both task performance and neuronal representation of action plans during the delay period, while activating SST and PV interneurons impaired memory-guided behavior. This is a canonical-motif prediction: VIP activation disinhibits task-relevant pyramidal subpopulations. {cite:t}`Koukouli2017` complements this with a disease-relevant finding: a schizophrenia-associated α5 nicotinic receptor variant alters VIP-dependent prefrontal activity and produces social-interaction deficits, and chronic nicotine restores prefrontal pyramidal neuron firing rates in α5SNP mice. The sign and direction of these effects are consistent with the canonical motif, but they add a cholinergic constraint: the motif depends on nicotinic drive to VIP, and disease-relevant perturbations of that drive can silence the motif even when the downstream connectivity is intact.

A mechanistically important counterpoint comes from {cite:t}`Yaeger2019`, who found that in V1 the cholinergic drive onto SST that disinhibits the cortex at P28 is absent by P56, comparing P28 and P56 mice. Before adolescence, ACh→SST→pyramidal is a direct (non-VIP) disinhibitory chain; after adolescence, the same cortex relies on VIP→SST→pyramidal. This is not a disagreement but a developmental replacement: the canonical motif is the adult motif, and the juvenile cortex uses an alternative circuit. Pooling adult and juvenile VIP optogenetic studies without accounting for this developmental transition mixes two distinct circuits under one label.

:::{admonition} Conflict — Developmental replacement of the disinhibitory motif
:class: warning

{cite:t}`Yaeger2019` shows that cholinergic drive onto SST interneurons — a direct cholinergic route that bypasses VIP and produces dendritic inhibition of pyramidal cells alongside somatic disinhibition (via SST inhibition of PV cells) — is present in juvenile V1 (P28) but absent in adult V1 (P56). The adult cortex appears to use the VIP→SST→pyramidal motif in its place. This replacement complicates interpretation of any VIP perturbation study that does not specify age: juvenile and adult VIP manipulations are not testing the same circuit. Section-14 implications — that early-life perturbations of VIP may have cascading effects through development — depend on this transition.
:::

### Hippocampus and long-range GABA: the motif inverted

{cite:t}`Malik2022` demonstrated that a population of long-range GABAergic neurons in mPFC projects monosynaptically to CA1 and contacts interneurons (55 of 70 sampled cells) but not pyramidal neurons (0 of 38); the targeted interneurons include VIP-expressing cells in hippocampus. This is the motif with the arrow reversed: VIP is the effector, not the switch, and inhibiting VIP in CA1 relieves SST from tonic VIP suppression, which should increase dendritic inhibition of CA1 pyramidal cells. The authors report that this PFC→CA1 projection enhances object-encoding performance and signal-to-noise in novel-object tasks, consistent with the anti-disinhibitory interpretation. A complementary long-range motif operates outside hippocampus: {cite:t}`Feyerabend2025` used channelrhodopsin-assisted circuit mapping in mouse S1 barrel cortex to show that thalamic afferents from VPM and POm recruit both VIP and SST interneurons with near-universal responsivity (~95% of sampled cells in each class), contradicting the prior that thalamic drive bypasses VIP cells. Thalamic input can therefore activate VIP and SST in parallel, a configuration in which VIP→SST disinhibition and direct SST→pyramidal inhibition compete rather than cascade. {cite:t}`Neubrandt2025a` and {cite:t}`Neubrandt2025b` add that hippocampal VIP cells control CA1 place cell remapping through **transient** disinhibition specifically in novel environments — a context-conditional reinstatement of the canonical motif that coexists with the inversion Malik and colleagues describe, with the two differing in timescale.

:::{admonition} Conflict — Hippocampus: long-range inhibition of VIP versus novelty-gated VIP disinhibition
:class: warning

{cite:t}`Malik2022` demonstrates long-range GABAergic projections from PFC to CA1 that preferentially inhibit CA1 VIP-expressing interneurons, thereby increasing feedforward inhibition onto pyramidal neurons — a circuit arrangement that, by reducing VIP-mediated disinhibition, would be predicted to act opposite in sign to the canonical motif. {cite:t}`Neubrandt2025b` shows that hippocampal VIP cells control CA1 place-cell remapping via transient disinhibition during exposure to novel environments — the canonical sign, but restricted to a specific behavioral gate. The two results are not contradictory if they operate on different timescales (continuous long-range tone versus event-locked novelty transients), but the collective implication is that the hippocampal disinhibitory motif is not well described by a single fixed VIP→SST→pyramidal scheme — it is either inverted or gated depending on the input and the behavioral state.
:::

### Cholinergic arousal: VIP as one of several targets

{cite:t}`Chen2015` examined basal-forebrain cholinergic recruitment of superficial-layer interneurons in V1 and found that ACh recruits SST, VIP, and L1 interneurons simultaneously; SST cells also inhibit VIP cells during this recruitment. The collective effect is not pure VIP-mediated disinhibition but a more complex simultaneous engagement in which several disinhibitory and inhibitory paths run in parallel. Blocking VIP does not rescue pyramidal output; the ACh→SOM direct pathway is sufficient. This is the cleanest published example of an alternative disinhibitory route that bypasses VIP entirely in an adult circuit.

## Competing framings: gain control, gating, context-switching

The canonical motif is a connectivity description. Three theoretical framings attempt to specify what the motif accomplishes computationally, and they make different — and testable — predictions about when it should engage.

**Gain control.** The gain-control framing treats VIP activity as a scalar knob on pyramidal responsiveness: VIP activation releases SST inhibition, decreases shunting inhibition at the apical dendrite, and multiplies rather than adds to pyramidal drive. {cite:t}`Veit2023` provides the most quantitative demonstration in V1: the VIP/SOM microcircuit controls narrow-band gamma and surround integration, with VIP locally controlling gain and globally controlling the coherence of gamma rhythms. {cite:t}`Hertag2019` provides the theoretical scaffolding, showing that in a recurrent rate model a SOM-targeting disinhibitory input functions as multiplicative gain even when the underlying synaptic operations are linear. {cite:t}`Yang2016` extended the disinhibitory-circuit framework to cross-modal pathway-specific gating, showing that VIP-mediated suppression of SST neurons can selectively disinhibit pyramidal dendrites to gate specific input pathways — a demonstration compatible with the gain framing but framed by the authors as pathway-specific gating.

**Gating.** The gating framing treats VIP activity as a switch that routes signals through or around a pyramidal subpopulation: when VIP is active, a particular pyramidal ensemble is relieved from SST inhibition and can respond to its feedforward input; when VIP is silent, the ensemble is clamped. {cite:t}`Wang2018` articulates this framing for higher-order cortex, arguing that VIP-mediated disinhibition becomes increasingly prevalent from sensory to association cortex as a substrate for flexible routing. {cite:t}`Furutachi2024` provides an experimental instance: in a context-dependent corridor task, VIP engagement at grating onsets is selectively gated to pulvinar-aligned contexts rather than being applied uniformly across visual inputs.

**Context-switching.** The context-switching framing is distinct from both: rather than tuning gain continuously or opening a gate, VIP activity marks transitions between behavioral contexts and reorganizes the cortical network to a different operating regime. {cite:t}`Karnani2016a` is consistent with this framing empirically: V1 VIP cells are broadly co-active during ongoing activity and show increased correlations during locomotion, a pattern more consistent with a global state-change signal than a stimulus-gated switch. {cite:t}`Jackson2016` reports that VIP+ cells in superficial V1 are nonspecifically active across behavioral states — including immobility, locomotion, visual stimulation, and anesthesia — a state-independent pattern that the event-triggered canonical motif does not naturally accommodate.

These three framings are not mutually exclusive, but they make different predictions about when VIP is necessary. Gain control predicts that VIP silencing should rescale pyramidal output proportionally across stimuli; gating predicts that VIP silencing should eliminate responses to a specific subset of inputs; context-switching predicts that VIP silencing should block behavioral-state transitions without affecting within-state sensory processing. No study to date has tested all three predictions in the same preparation. {cite:t}`Garrett2020`, {cite:t}`Dipoppa2018`, and {cite:t}`Khan2018` each provide partial data in V1 — including Khan and colleagues' demonstration of distinct learning-induced changes in stimulus selectivity and functional interactions across PV, SOM, and VIP classes — that do not cleanly select a single pure framing.

:::{admonition} Conflict — Gain control vs. switch vs. context-marker
:class: warning

The gain-control ({cite:p}`Veit2023,Hertag2019`), gating ({cite:p}`Wang2018,Furutachi2024,Yang2016`), and context-switching (a framing consistent with the state-independent and broadly co-active VIP patterns reported by {cite:p}`Karnani2016a,Jackson2016`) framings make different predictions about the selectivity and temporal structure of VIP engagement. Gain-control predicts a scalar relationship between VIP drive and pyramidal output; gating predicts a stimulus-specific switch; context-switching predicts a global state-change signal that is insensitive to stimulus features. Current recordings of VIP activity are consistent with fragments of all three, but no study has tested the crossed predictions (e.g., does VIP silencing produce stimulus-independent gain loss, stimulus-specific loss, or state-specific loss?) in a single preparation.
:::

## When is VIP not a universal disinhibitor?

Assembling the evidence gathered above produces a concrete list of conditions under which the canonical VIP→SST→pyramidal motif does not describe the dominant circuit effect. The list is not exhaustive, but it is long enough to constrain how the motif should be generalized.

1. **In the presence of naturalistic visual drive in V1, and in auditory cortex under locomotion.** With locomotion alone in V1 darkness, the motif predicts pyramidal disinhibition through SST suppression, and this is observed {cite:p}`Fu2014`. Add a visual stimulus, and SST responses rise rather than fall {cite:p}`Pakan2016,Dipoppa2018`. In auditory cortex, a direct test of the Fu2014 model — VIP silencing during locomotion — shows that locomotion-related A1 modulation is **not** mediated by the VIP network {cite:p}`Yavorska2021`, and {cite:t}`Bigelow2019` reports the sign-opposite result (locomotion decreases A1 pyramidal gain). The canonical locomotion-disinhibition chain is context-conditional in V1 and directly refuted in A1.

2. **In juvenile cortex before the VIP→SST path matures.** The adult cortex's disinhibitory motif depends on cholinergic drive routed through VIP. Juvenile cortex uses a direct ACh→SST→pyramidal chain instead {cite:p}`Yaeger2019`. VIP manipulations in juvenile tissue do not test the same circuit as VIP manipulations in adult tissue.

3. **In cortical layers for which the canonical demonstration has not been extended.** The original demonstrations were in L2/3. Extension to L5 requires additional assumptions about apical-tuft disinhibition that have not been directly tested in most neocortical areas {cite:p}`Apicella2022,Anastasiades2021b`; the VIP→SST gating logic is documented outside neocortex in piriform cortex {cite:p}`CantoBustos2022`, but piriform-to-neocortical extrapolation is not trivial. {cite:t}`Pronneke2015` documents layer-specific heterogeneity in the VIP population itself, suggesting that the motif may rely on VIP subtypes not uniformly present across layers.

4. **When long-range GABAergic projections target VIP as their effector.** The mPFC→CA1 long-range GABAergic projection inhibits VIP rather than engaging it, producing an anti-disinhibitory effect on CA1 pyramidal cells {cite:p}`Malik2022`. This inverts the sign of the motif.

5. **When VIP activation is continuous rather than event-locked.** Jackson and colleagues show that VIP+ cells in superficial V1 are nonspecifically active across behavioral states, and Karnani and colleagues 2016a report that V1 VIP cells are co-active during both stationary and locomotion epochs — a pattern less gated by salient events than the canonical motif supposes {cite:p}`Jackson2016,Karnani2016a`. The motif's event-triggered temporal structure is an idealization that poorly describes the resting operating regime.

6. **When a salient stimulus SUPPRESSES rather than activates VIP cells.** {cite:t}`Ibrahim2016` show that V1 L2/3 VIP cells are deactivated by concurrent cross-modal sound, and this suppression — opposite in sign to the Pi2013/Karnani2016a/Fu2014 salience-activation prediction — is what disinhibits a cross-modal sharpening of orientation tuning. The motif's assumed sign is not stable across multimodal contexts.

7. **When an alternative disinhibitory path (NDNF, L1, ACh→SST direct) suffices.** {cite:t}`Abs2018` show NDNF-mediated distal inhibition with opposite time course; {cite:t}`Chen2015` show that blocking VIP does not rescue pyramidal output during cholinergic arousal because the direct ACh→SST path is sufficient. VIP is one of several disinhibitory substrates, not the obligatory one.

8. **In the VIP/ChAT subpopulation, where a cholinergic direct-excitation route bypasses disinhibition.** The existence of this subtype means bulk VIP optogenetic studies mix disinhibitory and direct-excitatory effects unless the subtype is excluded — a distinction rarely made in the Section-7 literature. This is the scaffolded key claim about mPFC ChAT-VIP subtype action.

The collective implication is not that the canonical motif is a bad model — it is that the motif is a **mechanism** rather than a **rule**. Its components exist, its wiring is real, and it accounts for a subset of the observations in a subset of contexts. Treating it as a universal description of VIP function overreaches the evidence and obscures alternatives that are empirically distinct.

## Implications and open questions

The three principal directions in which the motif literature needs resolution follow from the exceptions above. First, a cell-type-resolved in-vivo test of the canonical chain in a behavioral context — analogous to Pi and colleagues' original demonstration but with simultaneous recording of VIP, SST, PV, and pyramidal populations under a naturalistic task — has not been done. The closest approximation is {cite:t}`Dipoppa2018`, and its conclusion is that a strict disinhibitory model is insufficient. Second, the subtype specificity of VIP engagement needs to be tested in vivo: most Section-7 studies use VIP-Cre or 5HT3aR-Cre driver lines that pool irregular-spiking bipolar, CCK+ basket, and ChAT+ variants, and the three subtypes are likely to produce different downstream effects. Third, the theoretical framings (gain, gating, context) need to be tested crossed rather than separately: a single preparation with a single stimulus set that distinguishes the three predictions is within reach but has not been reported.

For the broader argument of this review, the Section-7 evidence adjudicates the central thesis directly. The canonical motif is real, replicated, and anatomically well-characterized, but it is not a universal description of VIP function across cortex. The divergences catalogued here — laminar, areal, developmental, behavioral, long-range, and subtype-specific — are numerous enough and well-replicated enough that treating "VIP disinhibition" as a single phenomenon misrepresents what the data show. {ref}`sec-in-vivo-behavior` follows this logic one step further by asking what VIP cells actually do during behavior when no optogenetic perturbation is applied, and finds a correspondingly heterogeneous answer. {ref}`sec-synthesis` will return to the motif question in the context of the full evidence base, and will ask whether the areas of strongest canonical-motif support (auditory reward-coding, PFC delay-period facilitation, V1 locomotion in darkness) constitute a defensible core to which the motif can legitimately be assigned, or whether even these contexts require the same contextual modifiers the rest of the literature shows.

The broader claim of the review is that VIP interneurons are best described as a molecularly and functionally heterogeneous class whose canonical "universal disinhibitor" description emerged from a small set of foundational studies and was propagated without commensurate re-examination ({ref}`sec-molecular-identity`). Section-7 is where that claim is tested at the level of circuit mechanism, and the verdict aligns with the thesis: the motif is a template, not a rule.
