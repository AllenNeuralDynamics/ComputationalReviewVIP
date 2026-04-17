(sec-species-translation)=

# Species Translation and Human Relevance

{ref}`sec-oscillations` showed that the temporal-coordination signatures of VIP interneurons — gamma sign, theta locking, ripple participation — are conflicted in mouse preparations and untested in human tissue. That gap motivates the cross-species question this section takes up. Section {ref}`sec-development` closed with the developmental origins of VIP diversity in rodents — a CGE program that generates bipolar CR⁺ and basket CCK⁺ branches, a VIP/ChAT rarity, and intrinsic continua that resist hard categorical boundaries. This section carries that developmental and molecular picture across species, and then asks what it means for human disease. The central tension of the cross-species literature is not conservation *versus* divergence — it is both at once, in different proportions for different features {cite:p}`Hodge2019, Bakken2021, Krienen2020, Boldog2018`. The GABAergic program is broadly conserved as a *backbone*, yet primate cortex carries populations with no obvious mouse homolog, and several disease signals cluster regionally rather than acting on VIP as a class. Where Section {ref}`sec-circuit-motifs` treated VIP-mediated disinhibition as a circuit motif in mouse sensory cortex, the present section argues that translating that motif to human cortex requires species-qualified claims: which subtypes exist {cite:p}`Hodge2019, Bakken2021`, which are shared across primates {cite:p}`Krienen2020, Krienen2023`, which are region-specific {cite:p}`Ma2022, Hutchings2025`, and — critically — which disease evidence can support a *VIP*-level claim as opposed to a *regionally- and subtype-specific* claim {cite:p}`Okuda2024, Krolewski2025`.

We take the evidence package's boundaries seriously. A very large share of the quantitative human work anchors on a small number of landmark studies — the Allen/BICCN transcriptomic atlases {cite:p}`Hodge2019, Bakken2021, Berg2021`, a marmoset brain census {cite:p}`Krienen2023`, a Patch-seq morpho-electric comparison of L1 {cite:p}`Chartrand2023`, and the rosehip cell description {cite:p}`Boldog2018`. Disease-side evidence is weighted toward postmortem transcript studies in schizophrenia and mood disorders {cite:p}`Hashimoto2007, Fung2010, Tsubomoto2018, Okuda2024, Krolewski2025, Slabe2023, Kiss2026, Arbabi2024` with a smaller slice on autism/Fragile X mouse models {cite:p}`Goff2023, Rahmatullah2023, Hanno2026`, Williams-Beuren syndrome {cite:p}`Davenport2022`, and Alzheimer's {cite:p}`Park2020, Michaud2024b`. Readers should not mistake this evidence distribution for a claim of evenness — it is a reviewer's-eye view of what is available.

## Mouse–human transcriptomic correspondence: a conserved backbone with sharpening divergence at the edges

Single-cell transcriptomic surveys are now the backbone of cross-species translation, and they converge on one broad point: the three-class scheme — PV/MGE, SST/MGE, 5HT3aR (VIP and non-VIP LAMP5/PAX6)/CGE — is recognizable in human and non-human primate cortex {cite:p}`Hodge2019, Bakken2021, Krienen2020, Yuste2020, Chung2025`. {cite:t}`Hodge2019` profiled human middle temporal gyrus with snRNA-seq and found a diverse set of excitatory and inhibitory types whose architecture was "surprisingly well-conserved" versus mouse, such that homologous types could be matched across species at subclass resolution. {cite:t}`Bakken2021`'s cross-primate analysis then tightened the picture at finer resolution: more consensus clusters could be resolved by pairwise alignment between human and marmoset than between either primate and mouse, with VIP subtypes explicitly flagged as a group where primate–primate alignment outperformed primate–rodent alignment. That ordering — mouse distant, primates close — has become the default cross-species expectation {cite:p}`Krienen2020`, with independent corroboration from marmoset {cite:p}`Krienen2023` and macaque/human comparative work {cite:p}`Ma2022, Feng2025`.

{cite:t}`Krienen2020` extended this by profiling 188,776 interneurons across homologous regions of three primate species and mouse, and reported primate innovations in interneuron repertoire — cell populations or sub-branches enriched in primate cortex relative to rodent. {cite:t}`Ma2022` took the DLPFC specifically and used cross-species molecular and cellular comparisons to argue that primate DLPFC evolution involved both conserved cell-type scaffolding and species-enriched sub-populations, with implications for how rodent findings should be scaled. {cite:t}`Krienen2023` then released a marmoset brain census covering over 2.4 million nuclei across 18 regions; the headline finding is that regional specialization is substantial even within a primate, with cell-type proportions and marker expression varying across cingulate, motor, sensory, and association cortex — a regional-variation pattern also visible in marmoset myelin–transcript covariation {cite:p}`Hutchings2025` and in human DLPFC cross-species comparisons {cite:p}`Ma2022`.

:::{admonition} Evidence Conflict 1 — Conservation vs divergence of the interneuron program
:class: warning
{cite:t}`Hodge2019` argue for "cellular architecture that is remarkably well-conserved between mouse and human cortex," supporting homologous type matching — yet the same paper, and {cite:t}`Bakken2021` after it, document extensive species-specific differences in proportions, laminar distributions, gene expression, and morphology of the "same" homologous types. A parallel line of work integrating human and mouse MGE single-cell data emphasizes conservation of regulatory programs {cite:p}`Keefe2023`, while targeted characterizations identify populations with no mouse homolog {cite:p}`Boldog2018, Chartrand2023` and primate-specialized populations such as double-bouquet cells {cite:p}`Lee2023b`. The literature's own synthesis is that *both* hold: there is a conserved backbone *and* specializations concentrated at edges (CGE-derived L1, primate-enriched double-bouquet-like populations, human-specific combinatorial signatures). The canonical mouse-derived three-group scheme (PV, SST, 5HT3aR/VIP) as propagated by {cite:t}`Tremblay2016` has generally been applied across species without species-specific caveats for VIP morphology or electrophysiology; {cite:t}`Chartrand2023` is the first Patch-seq-level comparison to document that human L1 interneurons are more transcriptomically distinct from their mouse homologs than within-mouse comparisons would predict, directly challenging that uncaveated propagation. The disagreement is over *how much* divergence exists and whether that divergence is functionally consequential — currently unresolved. See also {ref}`sec-molecular-identity` for the intra-species subtype-count disagreement that compounds this problem.
:::

## The rosehip cell: a human-specialized interneuron that is *not* a VIP subtype

Among primate-specific cell populations, the rosehip interneuron is the most often cited {cite:p}`Boldog2018`. {cite:t}`Boldog2018` used unbiased single-nucleus RNA sequencing to identify ten GABAergic interneuron subtypes with combinatorial gene signatures in human cortical layer 1 and showed that one of these — the rosehip cell — expresses a marker combination and carries a dense axonal arbor with "rosehip"-like boutons that was not observed in mouse cortex {cite:p}`Boldog2018`. The defining feature is the *combinatorial* signature, not any single marker {cite:p}`Boldog2018`; individual markers are shared with other GABAergic types but the ensemble is human-selective (see {numref}`fig-sec11-rosehip-marker-matrix`), and analogous L1 divergence is reported by human-Patch-seq {cite:p}`Chartrand2023`.

:::{figure} ../figures/sec-11/fig_sec11_rosehip_marker_matrix.png
:label: fig-sec11-rosehip-marker-matrix
:width: 100%

**Human-specialized L1 "rosehip" interneuron — molecular profile and species distribution.** From the originating single-source characterization {cite:p}`Boldog2018`. **CAVEATS.** *(i)* All molecular-state assignments here derive from a single landmark study; donor/subject $n$ for the snRNA-seq is not documented in the evidence fields and is not reproduced on the figure. *(ii)* Rosehip cells are CALB2-negative, placing them *outside* the VIP/CR⁺ bipolar lineage — they are shown here as a primate-divergence exemplar, not as a VIP subtype. *(iii)* The matrix treats markers as present/absent; it does not display expression level or morphological/physiological phenotype. *(iv)* Species distribution is binary ("human only — not seen in mouse cortex"); the evidence does not adjudicate whether a rosehip-like combinatorial signature exists in non-human primates, where the most relevant comparisons would be.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import sys
import matplotlib.pyplot as plt
import matplotlib.patches as patches
sys.path.insert(0, '../scripts')
from shared_style import COLORS, apply_style, save_figure
apply_style()

markers = [
    ("GAD1",  "positive", "human + mouse (pan-GABAergic)"),
    ("CCK",   "positive", "expressed in human rosehip"),
    ("CNR1",  "negative", "—"),
    ("SST",   "negative", "—"),
    ("CALB2", "negative", "— (i.e., outside VIP/CR+ lineage)"),
    ("PVALB", "negative", "—"),
    ("Rosehip\ncombinatorial\nsignature", "defining",
     "human only — not seen in mouse cortex"),
]

fig = plt.figure(figsize=(9.2, 5.0))
gs = fig.add_gridspec(2, 2, width_ratios=[1.0, 1.8], height_ratios=[1.0, 0.08], hspace=0.35)
ax = fig.add_subplot(gs[0, 0]); ax2 = fig.add_subplot(gs[0, 1])
ax_leg = fig.add_subplot(gs[1, :]); ax_leg.axis('off')
state_colors = {'positive': '#2E7D4F', 'negative': '#C44A4A', 'defining': '#1F4E79'}
state_text = {'positive': '+', 'negative': '−', 'defining': '◆'}
for i, (m, state, _) in enumerate(markers):
    y = len(markers) - 1 - i
    ax.add_patch(patches.FancyBboxPatch((0.1, y-0.38), 0.8, 0.76,
        boxstyle="round,pad=0.02,rounding_size=0.05", linewidth=1.0,
        edgecolor='0.2', facecolor=state_colors[state], alpha=0.85))
    ax.text(0.5, y, state_text[state], ha='center', va='center',
            fontsize=17, color='white', fontweight='bold')
ax.set_xlim(0, 1); ax.set_ylim(-0.6, len(markers)-0.2)
ax.set_yticks(range(len(markers)))
ax.set_yticklabels([m for m,_,_ in reversed(markers)])
ax.set_xticks([]); ax.set_title("Rosehip cell molecular profile", fontsize=11, loc='left', pad=6)
ax.spines['left'].set_visible(False); ax.spines['bottom'].set_visible(False)
for i, (m, state, sp) in enumerate(markers):
    y = len(markers) - 1 - i
    if state == 'defining':
        ax2.text(0.02, y, sp, fontsize=10, va='center',
                 color=state_colors['defining'], fontweight='bold')
    else:
        ax2.text(0.02, y, sp, fontsize=9.5, va='center', color='0.15')
ax2.set_xlim(0, 1); ax2.set_ylim(-0.6, len(markers)-0.2)
ax2.set_yticks([]); ax2.set_xticks([])
ax2.set_title("Species distribution (Boldog et al. 2018)", fontsize=11, loc='left', pad=6)
for s in ax2.spines.values(): s.set_visible(False)
legend_items = [('positive','positive (marker expressed)'),
                ('negative','negative (marker absent)'),
                ('defining','defining — human-unique combinatorial signature')]
for i, (key, label) in enumerate(legend_items):
    x = 0.02 + 0.33*i
    ax_leg.add_patch(patches.Rectangle((x, 0.30), 0.02, 0.40,
        facecolor=state_colors[key], edgecolor='0.2',
        transform=ax_leg.transAxes, clip_on=False))
    ax_leg.text(x+0.025, 0.50, label, transform=ax_leg.transAxes, fontsize=9, va='center')
fig.suptitle("Human-specialized L1 'rosehip' interneuron — outside the canonical VIP/CR+ lineage",
             fontsize=12, x=0.02, ha='left', y=1.005)
fig.text(0.02, -0.06, "Single-source characterization (Boldog et al. 2018; snRNA-seq + IHC). "
         "Donor/subject n for the snRNA-seq is not documented in the evidence fields.\n"
         "Rosehip cells are CALB2-negative, placing them outside the VIP/CR+ bipolar lineage — "
         "shown here as a primate-divergence exemplar, not as a VIP subtype.",
         fontsize=7.8, color='0.3', va='top')
save_figure(fig, 'fig_sec11_rosehip_marker_matrix.png')
```
:::

The rosehip cell matters to a review of VIP interneurons *precisely because it is not a VIP interneuron*. It is a CGE-derived, CALB2-negative layer-1 cell with no obvious mouse counterpart {cite:p}`Boldog2018`. It belongs to the same CGE program that produces the VIP and LAMP5/PAX6 branches {cite:p}`Feng2025`, but it is demarcated from VIP/CR⁺ bipolar cells by its marker profile and its distinctly primate (indeed, apparently human-only) distribution. The lesson for VIP translation is twofold: *(i)* cross-species inference about "the CGE lineage" must be made at subclass resolution, not at lineage resolution {cite:p}`Hodge2019, Bakken2021`; and *(ii)* any claim of the form "human cortex contains VIP-subtype X" must be checked against the non-VIP CGE populations {cite:p}`Chartrand2023` that also occupy L1 and upper L2/3 {cite:p}`Feng2025`.

{cite:t}`Chartrand2023` compared L1 interneurons using Patch-seq across mouse and human with large samples (mouse $n\!\approx\!272$ cells; human sampling in the same study) and documented morpho-electric divergence of the L1 interneuron repertoire in human versus mouse. {cite:t}`Lee2023b` added that in human the VIP morphological dataset was dominated by L2/L3 neurons displaying diverse bipolar morphologies with either wide or narrow profiles, distinguishable from the dominant rodent bipolar phenotype. Together, these Patch-seq datasets place the rosehip observation in context: L1 is a site of concentrated species divergence within the broader CGE lineage {cite:p}`Boldog2018`, the LAMP5/PAX6 non-VIP CGE branch contributes additional non-VIP L1 types {cite:p}`Feng2025`, and the VIP subclass itself carries human-distinctive morphological features that the canonical rodent bipolar cartoon {cite:p}`Yuste2020` does not capture.

:::{admonition} Evidence Conflict 2 — Which cell type carries the primate-divergence signature?
:class: warning
{cite:t}`Boldog2018` foreground the rosehip cell as *the* exemplar of a human-specialized GABAergic population, citing anatomical features never described in rodents. {cite:t}`Lee2023b` — a human-Patch-seq study — identify multiple spatially distinct types of *primate-specialized double-bouquet* cells and document cellular differences between homologous mouse and human GABAergic types. Both papers agree that human cortex carries specialized GABAergic populations, but they differ on which cell type carries the *strongest* species-divergent signature (rosehip/CGE-derived L1 vs primate-specialized double-bouquet cells). The two claims are not mutually exclusive, but they have not been reconciled into a single taxonomic framework — partially resolved in that both are documented, unresolved in that the relative functional weight of each, and whether a primate-specific *VIP-related* subtype exists, remains open.
:::

## Non-human primate anatomy: marmoset, macaque, and the regional-specialization lens

The non-human primate evidence in this package is anchored by the marmoset work of {cite:t}`Krienen2023` and supplemented by region- and marker-specific studies {cite:p}`Chong2025, Teymornejad2024, Hutchings2025, HosseiniFin2025, Kim2025a, Feng2025`. {cite:t}`Krienen2023`'s marmoset brain census resolves cell-type proportions across 18 regions — a sampling breadth that is methodologically important because it allows cell-type-by-region variation to be measured within a single primate species rather than inferred across species and studies. The census shows that regional specialization is substantial, which is important for a review whose canonical VIP-disinhibition claim was developed in mouse primary sensory cortex and then generalized. Regional specialization in primates implies that VIP-subtype properties measured in primate visual or auditory cortex should not be treated as stand-ins for DLPFC, cingulate, or motor cortex without positive evidence.

A narrower marmoset study illustrates the point. {cite:t}`Chong2025` mapped neuropeptide-marker expression in marmoset superior colliculus and report that marmoset SC neurons express somatostatin but *not* VIP or NPY. The observation is specifically about a subcortical region and therefore does not speak to neocortical VIP interneurons, but it is a caution against inferring that VIP-positive populations described in rodent SC (or elsewhere) will be recoverable in the same anatomical sites in primates. Similar narrow-but-informative claims come from {cite:t}`Teymornejad2024`, who report that giant layer-5 pyramidal (Betz) neurons of the marmoset primary motor cortex express VIP — a known interneuron marker — demonstrating that the marker/cell-class mapping that is taken for granted in mouse {cite:p}`Yuste2020` does not translate cleanly to primate M1. Whatever one makes of Betz-neuron VIP expression biologically, the methodological point is unambiguous: "VIP+" does not mean "CGE interneuron" in primate primary motor cortex without cross-check — a caution consistent with broader primate-vs-rodent marker mismatches {cite:p}`Krienen2020, Ma2022`.

{cite:t}`Hutchings2025` used marmoset myelin-sensitive MRI sequences across adolescence to show that cortical areas with similar myeloarchitecture exhibit similar patterns of gene co-expression, and that myelination networks themselves undergo marked reorganization during adolescence. {cite:t}`HosseiniFin2025` quantified SST+/NeuN+ colocalization in marmoset PFC L3 across postnatal development (PD7 to adulthood) and report a decrease from $0.074 \pm 0.02$ at PD7 to $0.027 \pm 0.01$ by PM3 (3 months postnatal), a 63.5% reduction ($p \le 0.01$) that stabilized thereafter, with activated-caspase-3 controls ruling out bulk apoptosis as the mechanism. These are SST-centric measurements but they establish the primate reference frame against which VIP developmental trajectories should be compared — and they illustrate that primate-cortical interneuron compositions change substantially across postnatal maturation in a way rodent studies may not capture {cite:p}`Kim2025a`.

{cite:t}`Kim2025a` and {cite:t}`Feng2025` provide the developmental bridge to primate-specific interneurons. {cite:t}`Kim2025a` demonstrate an expanded subventricular zone that supports postnatal cortical interneuron migration in gyrencephalic brains, documenting interneuron migration in human/primate cortex that extends far later than the mouse reference. {cite:t}`Feng2025` profiled CGE- and MGE-derived populations across human and macaque (with supplementary mouse data) and reported that regional specifications in primate interneurons arise largely during cortical tangential migration rather than being purely intrinsically pre-specified. Together these studies show that where primate interneurons differ from mouse, the differences are visible in developmental trajectory and regional deployment, not only in adult steady-state expression.

:::{admonition} Evidence Conflict 3 — Developmental trajectory of SST vs VIP/CGE populations across primates
:class: warning
{cite:t}`HosseiniFin2025` report that SST+ interneuron ratios in marmoset PFC L3 *decrease* substantially from early postnatal periods to adulthood (from $0.074$ to $0.027$; 63.5% reduction). A separate line of work in mouse somatosensory cortex by {cite:t}`Simacek2025a` reports that VIP interneurons maintain a roughly constant excitatory/inhibitory ratio across postnatal development despite progressive integration into both excitatory and inhibitory cortical networks. The two observations are in different species, different subtypes, and different measurement systems and so cannot be directly reconciled; but they matter here because they imply that primate VIP translation cannot rely on "stable proportion" assumptions drawn from mouse VIP — primate interneuron maturation appears to involve substantial postnatal rearrangement at the subtype level {cite:p}`Kim2025a`.
:::

## Human ex vivo slice electrophysiology of VIP cells: thin but informative

Direct electrophysiological characterization of human VIP interneurons remains scarce. {cite:t}`Kim2023` used multiple patch-clamp recordings in human neocortical slices with post-hoc FISH and machine-learning-based cell type classification, focused on PVALB and SST interneurons in human neocortical supragranular layers — VIP cells were not the focus, and the work illustrates that cross-validating rodent VIP phenotypes in human tissue at scale remains an open effort. {cite:t}`Chartrand2023` address VIP-adjacent L1 interneurons in human Patch-seq, and {cite:t}`Lee2023b` examine primate-specialized double-bouquet cells, but neither produces a large-$n$ human VIP electrophysiology dataset comparable to the mouse reference {ref}`sec-electrophysiology` {cite:p}`Kim2023`.

{cite:t}`VormsteinSchneider2020` took the complementary approach: rather than measuring human VIP cells with patch-clamp, they developed viral vectors that enable functional labeling of specific interneuron populations in mice, non-human primates, and human cortical tissue. The enhancer-driven AAV strategy identified regulatory elements (e.g., Scn1a-locus enhancers) that target specific interneuron subclasses across species and enabled the first steps toward sub-class-resolved human experimentation {cite:p}`VormsteinSchneider2020`. This is the methodological hinge for translating rodent VIP-circuit findings to human: until viral labeling tools are validated in human tissue for specific VIP sub-populations (not merely for the VIP subclass as a whole), causal perturbation findings from mouse {cite:p}`Goff2023, BatistaBrito2017, Rahmatullah2023` cannot be confirmed in human.

{cite:t}`Hu2018` quantified GABRA5 mRNA expression across cell types in human and mouse frontal cortex and reported that α5-GABA$_A$R is expressed predominantly in pyramidal cells (human 39.7% vs mouse 54.14% — not fully species-matched), at lower levels in PV neurons (~20% in both species), and — critically for this review — at 0% on VIP neurons in both species. That asymmetry will re-emerge in the disease section: it constrains the proposal that α5-GABA$_A$R-targeted pharmacology is a cell-type-indirect route to VIP-circuit modulation: because α5 is expressed on pyramidal and (weakly) PV neurons but not on VIP cells in either species {cite:p}`Hu2018`, any VIP-circuit effect would be transitive rather than direct, and its translation requires subtype-resolved human tools {cite:p}`VormsteinSchneider2020`.

## VIP and schizophrenia: regional dissociation and the PACAP/VIPR2 axis

The schizophrenia evidence divides into three threads: (*i*) transcript-level postmortem profiles of GABAergic neuron subtypes in DLPFC and cingulate cortex {cite:p}`Hashimoto2007, Fung2010, Tsubomoto2018, Okuda2024, Krolewski2025, Kiss2026`; (*ii*) the VIPR2/PACAP axis covered via genetics {cite:p}`Ago2021, Ago2023` and postmortem PACAP-system transcript profiling {cite:p}`Slabe2023`; and (*iii*) more recent deconvolution and cell-etiology-mapping approaches {cite:p}`Duncan2025, Cameron2024`. The three threads do not agree on a simple "VIP reduction in schizophrenia" narrative — they support a *regionally specific* and *receptor-system-specific* picture in which VIP-class claims must be made carefully.

The DLPFC-focused postmortem literature is the older anchor. {cite:t}`Hashimoto2007` examined the GABA-related transcriptome in DLPFC of schizophrenia subjects and reported alterations in multiple GABAergic markers, with SST- and NPY-expressing neuropeptide subtypes — alongside GAD67/GAT1 — most prominently affected. {cite:t}`Fung2010` quantified interneuron marker expression in developing and schizophrenic human DLPFC ($n\!=\!68$) and showed that interneuron-marker deficits in schizophrenia have a developmental signature consistent with protracted GABA maturation. {cite:t}`Tsubomoto2018` extended this across the visuospatial working-memory network — visual, posterior parietal, and DLPFC cortical regions — and documented transcript-selective alterations for PV, SST, and other GABA subpopulations in the same subjects. {cite:t}`Okuda2024` then added contrasts across schizophrenia, bipolar disorder, and major depressive disorder in DLPFC (see {numref}`fig-sec11-dlpfc-disease-transcripts`), reporting that PV and SST mRNA carry the most prominent reductions, with VIP reductions smaller in magnitude and CR reported qualitatively as unaltered — a pattern consistent with the Conflict 4 admonition below that VIP is relatively spared in DLPFC compared with PV and SST.

:::{figure} ../figures/sec-11/fig_sec11_dlpfc_disease_transcripts.png
:label: fig-sec11-dlpfc-disease-transcripts
:width: 100%

**DLPFC GABAergic-subtype transcript alterations in psychiatric disorders.** Plotted as Cohen's $d$ (disease vs unaffected comparison; negative = reduction). PV mRNA is reduced in schizophrenia (SZ), bipolar disorder (BD), and major depression (MD); VIP and SST mRNA are reduced in SZ; CR mRNA is reported qualitatively unaltered. Data from a single postmortem study {cite:p}`Okuda2024`. **CAVEATS.** *(i)* All entries are from one postmortem study ($n\!=\!160$); this is not an independent cross-study meta-analysis. *(ii)* The CR mRNA point is a qualitative "unaltered" claim from a narrative sentence, not a Cohen's $d$ estimated in the cited study — it is shown at $d\!=\!0$ with an open symbol for placement only. *(iii)* SST mRNA Cohen's $d$ is reported without a 95% CI; PV and VIP values include CIs — precision is asymmetric across subtypes. *(iv)* Only PV is contrasted across SZ/BD/MD; SZ-only data for SST/VIP/CR do not support disease-specificity claims.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import sys
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.lines import Line2D
sys.path.insert(0, '../scripts')
from shared_style import COLORS, apply_style, save_figure
apply_style()

series = [
    {"group":"PV mRNA\n(SZ vs UC)","d":-1.53,"lo":-2.03,"hi":-1.03,"diag":"SZ","tx":"PV"},
    {"group":"PV mRNA\n(BD vs UC)","d":-1.03,"lo":-1.50,"hi":-0.56,"diag":"BD","tx":"PV"},
    {"group":"PV mRNA\n(MD vs UC)","d":-0.51,"lo":-0.96,"hi":-0.06,"diag":"MD","tx":"PV"},
    {"group":"SST mRNA\n(SZ vs UC)","d":-0.63,"lo":None,"hi":None,"diag":"SZ","tx":"SST"},
    {"group":"VIP mRNA\n(SZ vs UC)","d":-0.78,"lo":-1.24,"hi":-0.32,"diag":"SZ","tx":"VIP"},
    {"group":"CR mRNA\n(SZ vs UC)","d":0.00,"lo":None,"hi":None,"diag":"SZ","tx":"CR","qual":True},
]
fig, ax = plt.subplots(figsize=(7.2, 4.6))
color_map = {"PV":COLORS['PV'],"SST":COLORS['SST'],"VIP":COLORS['VIP'],"CR":COLORS['CR']}
marker_map = {"SZ":"o","BD":"s","MD":"^"}
y_positions = np.arange(len(series))[::-1]
for y, s in zip(y_positions, series):
    col = color_map[s['tx']]; m = marker_map[s['diag']]
    if s.get('qual'):
        ax.plot(s['d'], y, marker=m, markersize=10, markerfacecolor='white',
                markeredgecolor=col, markeredgewidth=1.8)
        ax.annotate("qualitative — no d reported", xy=(s['d'],y),
                    xytext=(10,0), textcoords='offset points', fontsize=8,
                    style='italic', color='0.35', va='center')
    else:
        ax.plot(s['d'], y, marker=m, markersize=10, color=col,
                markeredgecolor='black', markeredgewidth=0.6)
        if s['lo'] is not None:
            ax.hlines(y, s['lo'], s['hi'], color=col, lw=2.0)
            ax.vlines([s['lo'], s['hi']], y-0.12, y+0.12, color=col, lw=1.5)
        else:
            ax.annotate("no CI reported", xy=(s['d'],y),
                        xytext=(10,0), textcoords='offset points', fontsize=8,
                        style='italic', color='0.35', va='center')
ax.axvline(0, color='0.4', lw=1.0, ls='--', zorder=0)
ax.set_yticks(y_positions)
ax.set_yticklabels([s['group'] for s in series])
ax.set_xlabel("Cohen's d (disease vs unaffected comparison; negative = reduction)")
ax.set_xlim(-2.5, 0.8)
ax.grid(axis='x', lw=0.4, color='0.85', zorder=0)
tx_legend = [Line2D([0],[0], marker='o', color='w', label=tx,
             markerfacecolor=col, markeredgecolor='black', markersize=9)
             for tx,col in color_map.items()]
diag_legend = [Line2D([0],[0], marker=m, color='0.35', label=d,
              markerfacecolor='0.7', markeredgecolor='0.2', markersize=8, ls='')
               for d,m in marker_map.items()]
leg1 = ax.legend(handles=tx_legend, loc='lower left', bbox_to_anchor=(1.01,0.55),
                 frameon=False, title='Transcript', title_fontsize=9)
ax.add_artist(leg1)
ax.legend(handles=diag_legend, loc='upper left', bbox_to_anchor=(1.01,0.45),
          frameon=False, title='Diagnosis', title_fontsize=9)
ax.set_title("DLPFC interneuron transcripts across psychiatric disorders\n"
             "(Okuda 2024; n=160; single study)", loc='left', fontsize=11)
save_figure(fig, 'fig_sec11_dlpfc_disease_transcripts.png')
```
:::

The cingulate literature reads differently. {cite:t}`Krolewski2025` used cell-type-specific radioactive *in situ* hybridization in the cingulate gyrus of schizophrenia and bipolar subjects and reported cell-type-specific reductions in interneuron gene expression, including a VIP-mRNA reduction in anterior midcingulate cortex (BA24c′) of schizophrenia subjects alongside reduced PV {cite:p}`Krolewski2025`. That finding — *VIP down in cingulate* — does not straightforwardly align with the DLPFC picture, where {cite:t}`Okuda2024` reports modest VIP reductions and {cite:t}`Kiss2026` reports robust VIP mRNA downregulation in younger schizophrenia cases but less consistent VIP-proportion changes than for PVALB and SST, and the two cannot be resolved by appeal to methodology alone because both used cell-type-resolved postmortem transcripts {cite:p}`Hashimoto2007, Fung2010, Tsubomoto2018`.

:::{admonition} Evidence Conflict 4 — Is VIP reduction a general feature of schizophrenia, or regionally specific?
:class: warning
{cite:t}`Krolewski2025` find VIP mRNA reduced in anterior midcingulate cortex (BA24c′) of schizophrenia subjects, with the effect embedded in broader interneuron-gene-expression reductions. {cite:t}`Kiss2026` and {cite:t}`Okuda2024` report that in DLPFC, PV- and SST-expressing GABA neurons carry more prominent transcript alterations than VIP-expressing neurons, with VIP changes present but smaller in magnitude. The two observations plausibly reflect genuine regional specificity rather than methodological contradiction — DLPFC and mid-cingulate are functionally and cytoarchitecturally distinct — but the literature currently lacks a single study that measures the same VIP-subtype-resolved transcripts in both regions within matched cohorts. The corollary is that "VIP is reduced in schizophrenia" is not a well-supported pan-cortical claim; it is a region-specific claim whose boundaries have not been mapped. {cite:t}`Kiss2026` further show that the pattern is *age-dependent*, with proportional changes in GABAergic neuron subtypes differing between younger and older schizophrenia patients — adding a developmental axis to the regional one.
:::

A second cingulate signal complicates the picture further. {cite:t}`Slabe2023` measured PACAP-system transcripts (the ligand ADCYAP1/PACAP and its receptors PAC1, VPAC1, VPAC2) in anterior cingulate and DLPFC of schizophrenia suicide completers and reported *upregulation* of the PACAP-system genes in ACC relative to controls. The paper also notes that polymorphism data in PACAP and PAC1 indicate a relationship between the PACAP system and schizophrenia, without quantifying a specific effect size {cite:p}`Slabe2023`. If the VIP ligand is transcript-downregulated in the same anterior-cingulate vicinity {cite:p}`Krolewski2025` while the peptide-receptor system that *binds* VIP (VPAC1/VPAC2) is transcript-upregulated in schizophrenia suicide completers {cite:p}`Slabe2023`, the two observations together sketch a dysregulation in which VIP-receptor signaling tone and VIP-neuron numerosity move in opposite directions.

:::{admonition} Evidence Conflict 5 — Opposite-direction changes in VIP peptide vs receptor system in overlapping cingulate regions
:class: warning
{cite:t}`Slabe2023` report that the ACC of schizophrenia suicide completers shows upregulation of PACAP, PAC1, VPAC1, and VPAC2 expression relative to controls. {cite:t}`Krolewski2025` report that the anterior midcingulate cortex of schizophrenia subjects shows reduced VIP mRNA. These are opposite directions of expression change for the VIP/PACAP signaling system in overlapping cingulate regions of schizophrenia postmortem tissue — receptor/peptide upregulation versus VIP-ligand mRNA downregulation. This has not been reconciled; the most parsimonious interpretations are cohort-level differences (suicide-completer vs general schizophrenia cases), cell-type-level differences (receptors expressed on non-VIP targets), or homeostatic compensation. The practical consequence is that VIPergic signaling in schizophrenia cannot be described as simply "loss" or "gain" — the *ligand/receptor ratio* appears to move discordantly in a region-and-cohort-specific way.
:::


The genetic axis ties into this through VIPR2. {cite:t}`Ago2021` and {cite:t}`Ago2023` analyze the rare VIPR2 microduplication associated — in GWAS-scale data — with an up to 13-fold increased risk for schizophrenia. {cite:t}`Ago2023` then overexpressed VIPR2 in mice and documented microencephaly with paradoxically increased white-matter volume. {cite:t}`Takeuchi2020` showed that VPAC2 receptor activation impairs axon outgrowth and decreases dendritic arborization in mouse cortical neurons *in vitro*, providing a cell-autonomous mechanism for how receptor over-activity could perturb cortical development. The picture emerging from genetics-plus-mouse-model work is that *gain* of VIPR2 signaling is developmentally disruptive, which sits uneasily next to the postmortem observation that *reduction* of VIP peptide mRNA and transcript levels is reported in adult schizophrenia DLPFC {cite:p}`Okuda2024` and cingulate cortex {cite:p}`Krolewski2025`. The field does not yet have a model that reconciles a developmentally gain-of-function VIP-axis risk mechanism with an adult loss-of-function transcript phenotype in the same disorder.

{cite:t}`Duncan2025` reframe the problem with a cross-disorder cellular-etiology map: by integrating schizophrenia GWAS risk with single-cell expression across cortical cell types and regions, they argue for a constellation of cell-type-specific vulnerabilities rather than a single pathognomonic cell type. In their framing VIP interneurons are not singled out; they appear as one of several contributors to a cell-type-distributed risk architecture rather than as a highlighted vulnerable population. {cite:t}`Cameron2024` similarly argue that genetic influences on schizophrenia susceptibility are active during neurodevelopment and act on interneuron populations broadly, not VIP specifically. The collective inference from the 2024–2025 work {cite:p}`Duncan2025, Cameron2024, Kiss2026` is that VIP changes in schizophrenia transcript phenotypes are regionally and developmentally structured rather than diffuse — with robust VIP mRNA reductions reported in younger-subject strata {cite:p}`Kiss2026` and in cingulate cortex {cite:p}`Krolewski2025`, alongside more modest DLPFC effects {cite:p}`Okuda2024`.

## Autism, Fragile X, Dravet: VIP in neurodevelopmental and channelopathy models

Mouse models of autism and related neurodevelopmental disorders offer the most mechanism-resolved VIP evidence in this section, partly because they permit cell-type-specific perturbation {cite:p}`Goff2023, Rahmatullah2023, Davenport2022, Hanno2026, Miralles2023`. {cite:t}`Goff2023` showed in an *Scn1a* Dravet-syndrome mouse model that VIP-interneuron-selective circuit dysfunction *drives* autism-related behaviors *in vivo*, linking VIP impairment to circuit-level and behavioral phenotypes. {cite:t}`VormsteinSchneider2020` provides a complementary methodological scaffold: enhancer-driven AAVs for interneuron targeting were validated cross-species primarily for PV interneurons (via the E2 enhancer), while the VIP-specific enhancer (E6) was characterized only in mice. VIP-targeted perturbations in non-human primates and human tissue therefore remain to be demonstrated — a translational gap that confirming Goff-style findings in primate cortex will have to close.

{cite:t}`Rahmatullah2023` reported that loss of cortical VIP-interneuron modulation produces hypersensitivity to distractors in a Fragile X (*Fmr1*-KO) mouse model, establishing an attention/distractor phenotype with a VIP-circuit mechanism consistent with the broader gating-vs-disinhibition framing {cite:p}`Jackson2025`. {cite:t}`Davenport2022` argued more broadly that VIP interneurons are loci of dysfunction in autism-spectrum conditions, and {cite:t}`Hanno2026` proposed that targeting Notch signaling restores neural-developmental and behavioral phenotypes in ASD mouse models via effects that include interneuron populations.

:::{admonition} Evidence Conflict 6 — Do VIP perturbations in autism models produce reduced inhibition, or altered inhibition-of-inhibition?
:class: warning
{cite:t}`Goff2023` frame VIP impairment as a *loss-of-disinhibition* that promotes circuit dysfunction — consistent with the canonical VIP→SST→PYR motif's prediction that reduced VIP activity increases SST inhibitory tone on pyramidal neurons. {cite:t}`Rahmatullah2023`, by contrast, frame Fragile X VIP dysfunction as *loss of attention-related modulation* producing distractor hypersensitivity, which implies a *top-down-gating* role rather than a tonic disinhibitory one. Both can be true simultaneously for different subtypes and contexts, but they exemplify the field's continuing ambiguity about which VIP circuit operation is the primary one disrupted in autism models. {ref}`sec-in-vivo-behavior` surveys the broader gating-vs-disinhibition debate; here the point is that translation from mouse autism models to human autism cannot yet specify *which* VIP circuit role is the mechanistic target.
:::

{cite:t}`BatistaBrito2017` showed that developmental dysfunction of VIP interneurons — via cell-autonomous perturbation during development — impairs cognitive performance in adulthood, providing a direct experimental chain from developmental VIP manipulation to adult cognitive phenotype. {cite:t}`Miralles2023` reported — using a cell-type-specific design that isolates the VIP contribution — that Dravet-syndrome-relevant perturbation of VIP interneurons produces cellular and behavioral phenotypes in a VIP-lineage mouse model. {cite:t}`Koukouli2017` linked schizophrenia-risk mechanisms to VIP-interneuron dysfunction via nicotinic acetylcholine receptors, adding a cholinergic axis that intersects with the VIP/ChAT subtype.

{cite:t}`Chen2023b` examined TCF4 (a schizophrenia-risk gene) and reported that TCF4 regulates the density and connectivity of specific interneuron subtypes, including VIP populations — providing a molecular-genetic link between psychiatric-risk transcription factors and VIP-subtype specification. {cite:t}`Hu2023a` showed that *Tsc1* loss in the VIP lineage results in more VIP⁺ interneurons and enhanced excitation, a gain-of-VIP phenotype relevant to tuberous sclerosis and its ASD comorbidity. {cite:t}`Jackson2025` provides a recent synthesis arguing that disruptions in PV/SST/VIP interneuron subnetworks contribute to multiple clinical conditions, with VIP dysfunction implicated across schizophrenia, epilepsy, and autism.

## Depression, Alzheimer's, and the α5-GABA$_A$R translational question

Depression's VIP evidence in this package runs through two channels: the SST-deficit framework and direct VIP measurements. {cite:t}`Hu2018` measured cell-type-specific α5-GABA$_A$R expression across human and mouse frontal cortex, finding α5 predominantly on pyramidal cells (human 39.7% vs mouse 54.14% — only partially species-matched), at ~20% on PV neurons in both species, and at 0% on VIP neurons in both species — making the α5-depression angle a pyramidal/PV-targeted pharmacology rather than a direct VIP-interneuron intervention. {cite:t}`Hu2024` profiled GABAergic markers in a dexamethasone-induced depression model and reported altered VIP-interneuron marker expression consistent with an inhibitory-circuit contribution to depression-related phenotypes {cite:p}`Hu2024`. {cite:t}`Arbabi2024` documented transcriptional changes in VIP interneurons in depression at the subtype-resolved level. The depression evidence is cell-type-resolved but still cross-sectional; direct experimental validation in human tissue is not yet available.

The Alzheimer's evidence is thinner and more indirect. {cite:t}`Park2020` summarize Alzheimer's mouse-model findings in which PV and SST interneurons show characteristic firing-rate changes, with VIP implicated as part of the broader GABAergic circuit but not the primary locus. {cite:t}`Michaud2024b` characterized CA1 hippocampus in the 3xTg-AD mouse model and reported altered VIP-interneuron firing output as an early circuit dysfunction that precedes broader hippocampal disruption, with VIP interneurons accumulating intracellular Aβ and its precursor at early disease stages — placing VIP at the early end of the Alzheimer's pathophysiological cascade and suggesting VIP circuit failures may have early-stage predictive value, a hypothesis rather than an established finding.

## Therapeutic targeting: the subclass-specificity problem

Pharmacological translation of VIP findings is constrained by the tools themselves. {cite:t}`CunhaReis2020` review VIP as a modulator of hippocampal synaptic plasticity and propose selective VPAC1/VPAC2 receptor ligands as therapeutic targets for mesial temporal lobe epilepsy and cognitive decline. Whether current small-molecule and peptide agonists/antagonists can achieve subclass-selective targeting of CGE-derived interneuron populations remains an open question that their review does not directly resolve. {cite:t}`Hu2010` showed that VIP, CRF, and PACAP act at distinct receptors (VPAC1, CRFR1, PAC1) to elicit different cAMP/PKA dynamics in the neocortex — a receptor-pharmacology result that establishes sub-receptor-level selectivity as a meaningful design axis, although Hu2010 itself does not address VPAC2, therapeutic targeting, or CGE-derived interneuron subclass selectivity.

The translational problem is compounded by the regional dissociation documented above. A hypothetical VIP-receptor-modulating therapy would affect VPAC1/VPAC2 wherever they are expressed, including targets outside the VIP-interneuron output space. Whereas {cite:t}`Krolewski2025` reports VIP-ligand (mRNA) downregulation in anterior cingulate, {cite:t}`Slabe2023` reports *co-upregulation* of PACAP and its receptors (PAC1, VPAC1, VPAC2) in ACC of schizophrenia suicide completers. Across the two datasets, ligand and receptor transcripts do not move in register — so a broadly-acting VIPR agonist would not simply "restore" VIP signaling: it would add drive to a receptor system already transcript-upregulated in the Slabe2023 subgroup. The α5-GABA$_A$R angle on depression {cite:p}`Hu2018` is analogous: it targets a subunit rather than a cell, and requires cross-species receptor-expression homology for its translation to hold.

:::{admonition} Evidence Conflict 7 — Can rodent VIP circuit perturbation findings be translated without subclass-resolved human tools?
:class: warning
{cite:t}`Goff2023`, {cite:t}`BatistaBrito2017`, and {cite:t}`Rahmatullah2023` each make strong mechanistic claims about VIP-circuit failure in disease models using Cre-driver-enabled subtype-specific perturbations that have no direct human equivalent. {cite:t}`VormsteinSchneider2020` and, methodologically, {cite:t}`Chung2025` argue that enhancer-driven AAVs could bridge this gap, but the validated subclass-specific targeting has been shown for a handful of interneuron groups — not for each named VIP subtype (CR⁺ bipolar, CCK⁺ basket, VIP/ChAT, VIP-LRP). Without such tools, every human-translation claim from rodent VIP manipulation is a claim about the VIP *subclass as a whole*, which the species and transcriptomic evidence suggest is too coarse a unit to predict clinical outcomes.
:::

## Species-conserved vs species-specific: where the evidence will and will not support translation

Three cross-species claims are well supported. First, the three-class taxonomy of PV/SST/5HT3aR-VIP is recognizable at the subclass level in human and primate cortex {cite:p}`Hodge2019, Bakken2021, Krienen2020, Yuste2020`, and the regulatory networks that specify MGE-derived interneurons are broadly conserved between human and mouse at the single-cell level {cite:p}`Keefe2023`. Second, primate cortex carries populations with no obvious mouse homolog, of which the rosehip cell {cite:p}`Boldog2018` and the primate-specialized double-bouquet cells {cite:p}`Lee2023b` are the clearest exemplars; L1 in particular is a concentrated site of divergence for both the VIP-adjacent CGE and the non-VIP CGE populations {cite:p}`Chartrand2023`. Third, within the primate lineage, regional specialization of interneuron composition is substantial {cite:p}`Krienen2023`, interneuron molecular profiles show species-specific divergence even within a single homologous region {cite:p}`Ma2022`, and myeloarchitectonic similarity tracks interneuron gene co-expression across cortical areas {cite:p}`Hutchings2025`; region-specific calibration is therefore required before any rodent circuit claim is transported.

Three further claims deserve qualification. The "VIP is reduced in schizophrenia" claim is not pan-cortical; it is regional (cingulate reductions {cite:p}`Krolewski2025`, smaller DLPFC reductions {cite:p}`Okuda2024`, age-dependence {cite:p}`Kiss2026`) and is accompanied by opposing-direction receptor-system upregulation in overlapping regions {cite:p}`Slabe2023`. The claim that VIP interneurons are implicated in neurodevelopmental-disorder pathophysiology is supported by mouse models across several conditions — autism / Fragile X {cite:p}`Goff2023, Rahmatullah2023`, Dravet syndrome {cite:p}`Miralles2023`, tuberous sclerosis with its ASD comorbidity {cite:p}`Hu2023a`, and Williams-Beuren syndrome {cite:p}`Davenport2022` — rather than by convergent evidence specifically targeting idiopathic autism; human translation requires subclass-resolved tools that are still maturing {cite:p}`VormsteinSchneider2020`. The "conserved VIP firing phenotypes across species" claim rests on thin human electrophysiology and should be treated as provisional until human VIP Patch-seq reaches comparable sample sizes to the mouse reference {cite:p}`Kim2023, Chartrand2023, Lee2023b`.

## Outlook

The conclusion this section hands to {ref}`sec-computational-models` is operational: cross-species and disease translation for VIP interneurons is a *subclass-resolved*, *regionally-indexed*, and *receptor-system-disaggregated* problem. Computational models that treat VIP as a monolithic population — as many early circuit models did — inherit the cross-species mismatch of the mouse-derived taxonomy and the regional heterogeneity of the disease signals. Models that instead index VIP state by subtype, region, and receptor-axis (VIP ligand vs VPAC1/VPAC2 vs PAC1) can at least express the regional dissociation seen in schizophrenia {cite:p}`Krolewski2025, Okuda2024, Slabe2023` and the distinct mechanistic modes implicated in autism {cite:p}`Goff2023, Rahmatullah2023`. The evidence we have does not yet say which model parameters are the right ones for disease-relevant predictions — but it constrains the space strongly, and the next section takes up that constraint head-on.

Section {ref}`sec-synthesis` will return to the broader claim arc and grade what has replicated across evidence classes, what is contested, and what remains untested. The species-translation evidence reviewed here contributes two of the review's structural qualifications: that the mouse-derived VIP cartoon is a *scaffold* rather than a *blueprint* for human cortex {cite:p}`Hodge2019, Bakken2021, Boldog2018, Chartrand2023, Lee2023b`, and that disease-associated VIP changes — where they exist — are regional and subtype-specific rather than pan-cortical {cite:p}`Krolewski2025, Okuda2024, Kiss2026, Slabe2023`.
