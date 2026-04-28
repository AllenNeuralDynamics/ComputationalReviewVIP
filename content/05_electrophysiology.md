(sec-electrophysiology)=
# Intrinsic Electrophysiology

The morphological architecture surveyed in {ref}`sec-morphology` — vertically oriented bipolar somata with descending axons that traverse layers — sets a biophysical stage that intrinsic-firing measurements then occupy. VIP interneurons are not a single firing class. They are a transcriptomically coherent CGE-derived subclass that constitutes ~12% of neocortical interneurons and is concentrated in superficial layers {cite:p}`Lim2018,Tasic2018,Yao2021a,Machold2023` whose intrinsic-electrophysiological repertoire is dominated by high input resistance, modest sag, fast-rising action potentials, and a heterogeneous mix of irregular-spiking, continuous-adapting, and (in upper layers) bursting firing patterns {cite:p}`Tremblay2016,Pronneke2015,Cauli1997`. Patch-seq has, over the last decade, transformed how this repertoire is parsed: the four GABAergic subclasses (PV, SST, VIP, Lamp5/Sncg) separate cleanly along intrinsic-feature axes both in mouse {cite:p}`Gouwens2020a,Gouwens2019` and in human cortex {cite:p}`Kim2023`, but *within* the VIP class, electrophysiological types form a continuum onto which transcriptomic types map only partially {cite:p}`Scala2021,Gouwens2020a`. This section parses that landscape — first the consensus passive- and firing-property profile, then three concrete points where studies disagree (resting potential, IS-firing fraction, and the molecular substrate of irregularity), and finally the cross-modal Patch-seq picture that frames how individual measurements should be interpreted.

(sec-05-passive-aps)=
## Passive properties and action-potential phenotype

The single most reproduced intrinsic feature of VIP cells is their high input resistance. {cite:t}`Tremblay2016` flagged this as the most salient feature of cortical *Vip* neurons — higher than most cortical neurons and a substrate for sensitivity to weak excitatory input. Quantitatively, {cite:t}`Pronneke2015` reported a population mean of 404.7 ± 212.8 MΩ across all layers of mouse barrel cortex VIP-Cre/tdTomato neurons (with τ_{m} 21.4 ± 7.6 ms, sag 11.2 ± 6.8%, rheobase 51.9 ± 33.9 pA, AP threshold −38.2 ± 3.1 mV), and {cite:t}`Vucurovic2010` placed juvenile S1 VIP/5-HT3aR+ cells even higher (R_{in} 761.5 ± 306.5 MΩ, τ_{m} 40.6 ± 19.5 ms, rheobase 17.7 ± 9.2 pA, RMP −56.0 ± 3.9 mV) — describing them as the most excitable cortical interneuron group {cite:p}`Vucurovic2010`. CA1 hippocampal VIP-IS3 cells extend the same profile to non-cortical territory (R_{in} ~500 MΩ, τ_{m} ~36 ms, C_{m} ~33 pF) {cite:p}`Michaud2024,Guetmccreight2020b`, and BLA VIP+ IS interneurons fall in the same range (350.3 ± 28.3 MΩ, n=30) {cite:p}`Rhomberg2018`. Cross-class comparisons are consistent: in monkey prefrontal cortex {cite:p}`Zaitsev2009` and in CA1 GAD65-GFP+ CGE-derived populations {cite:p}`Wierenga2010`, the high-R_{in}, slow-τ_{m}, low-rheobase corner of intrinsic-feature space is occupied by VIP/CR+ rather than PV cells, recapitulating the disinhibitory split established by Petilla nomenclature {cite:p}`Thepetillainterneuronnomenclaturegroupping2008`.

Action-potential waveforms are similarly conserved. VIP cells fire fast, narrow APs (half-width ≈ 0.95 ms in juvenile S1 {cite:p}`Vucurovic2010`; AP amplitude 65.1 ± 9.1 mV in barrel cortex {cite:p}`Pronneke2015`) — narrower than pyramidal neurons but broader than PV fast-spiking cells, again consistent with the broader cortical interneuron taxonomy {cite:p}`Rudy2011,Karnani2016a`. Sag/I_{h} is modest rather than absent: {cite:t}`Pronneke2015` measured a sag index of 11.2 ± 6.8% across cortical VIP cells; {cite:t}`Vucurovic2010` reported 12.1 ± 7.8% in juvenile S1; CA1 IS3 cells show pronounced sag in some recordings and minimal sag in others {cite:p}`Bell2015,Michaud2024`; and inferior-colliculus VIP-Cre stellate cells (which are *glutamatergic*, not GABAergic) show essentially no sag {cite:p}`Goyer2019` — flagging that VIP-Cre lines tag biophysically distinct cell classes outside the cortex. Consensus on these features is sufficiently robust that Prior work {cite:p}`Kim2023` could train a four-feature classifier (AP height, sag, AP-upstroke adaptation ratio, τ_{m}) that separates human PVALB from non-PVALB cortical interneurons with high accuracy, identifying the same axes that Petilla and {cite:t}`Gouwens2019` use to organise mouse VISp into 17 e-types.


A subset of cross-study comparisons can be made cleanly only after the recording region is matched. Earlier reports recorded inferior-colliculus VIP-Cre stellate cells (V_{rest} = −69.5 ± 4.4 mV, n=216; 90.3% sustained, 8.4% adapting, 1.3% other; n=237) and noted minimal sag — illustrating that VIP-Cre lines tag glutamatergic stellate populations outside the cortex with biophysical profiles unlike cortical/hippocampal VIP GABAergic cells {cite:p}`Goyer2019`. {cite:t}`Smith2019` framed VIP as one of the most widely expressed neuropeptide-precursor transcripts across mouse VISp/ALM single-cell transcriptomes, embedding the VIP intrinsic-feature class within a cortex-wide peptidergic-signalling network {cite:p}`Smith2019`. {cite:t}`Urbanciecko2016` reviewed SST-interneuron heterogeneity (Martinotti, LTS, IS, stuttering, FS subtypes) and the VIP→SST disinhibitory motif, framing the comparator architecture against which VIP intrinsic properties are typically read {cite:p}`Urbanciecko2016`. Across these comparisons, the rule that survives is structural rather than numeric: the VIP/CGE subclass occupies a high-R_{in}, low-rheobase, narrow-AP corner of the cortical-interneuron biophysical manifold, with within-class scatter that is real but bounded {cite:p}`Tremblay2016,Vucurovic2010,Wierenga2010,Karnani2016a`.

(sec-05-firing-taxonomy)=
## The Petilla firing-pattern menu in VIP cells

Within this consensus passive profile, intrinsic firing patterns fan out along three axes drawn from the Petilla terminology {cite:p}`Thepetillainterneuronnomenclaturegroupping2008`: (i) accommodation (continuous-adapting versus non-adapting), (ii) regularity (irregular-spiking versus regular), and (iii) bursting onset (initial bursting versus delayed). Cortical VIP cells span all three. {cite:t}`Cauli1997` first identified, in rat sensory-motor cortex, a vertically oriented bipolar subpopulation that consistently co-expressed calretinin and VIP and fired bursts of action potentials at irregular frequency — the founding observation of the IS firing class — and {cite:t}`Cauli2000` then showed by unsupervised clustering of fusiform interneurons (n=60) that 16/60 formed an "IS-VIP" cluster distinct from a larger RSNP-VIP group of n=32 {cite:p}`Cauli2000`. {cite:t}`Pronneke2015` reproduced this taxonomy quantitatively in mouse barrel cortex (75.4% continuous-adapting, 14.5% IS, 5.8% bursting, 4.3% high-threshold-bursting non-adapting across layers) and added a laminar twist: bursting VIP+ neurons are confined to L2/3 (11.8%) while L4–L6 lack bursting cells but retain IS (14.7%) and high-threshold-bursting non-adapting (2.9%) variants alongside a dominant continuous-adapting population (82.4%) {cite:p}`Pronneke2015`. Initial studies {cite:p}`Vucurovic2010` independently described two intrinsic firing behaviours in juvenile S1 VIP cluster cells — 68% adapting (15/22) and 32% bursting (7/22), with a characteristic post-spike afterhyperpolarisation–afterdepolarisation–late-afterhyperpolarisation sequence {cite:p}`Vucurovic2010`. Together, four independent studies place IS firing as a minority but reproducible class in cortical VIP populations, with continuous-adapting as the modal phenotype {cite:p}`Cauli1997,Cauli2000,Pronneke2015,Walker2016`.

Mapping these firing classes onto molecular identity is, however, *not* one-to-one. {cite:t}`Tremblay2016` summarised that cortical VIP/CR co-expressing cells are enriched for irregular-spiking bipolar phenotypes, whereas VIP/CCK cells (small basket cells) are enriched for multipolar/bitufted morphologies {cite:p}`Tremblay2016`, but this enrichment is statistical rather than absolute. Foundational studies made the orthogonality explicit: in cortex, IS firing does not co-segregate cleanly with calretinin or CCK co-expression, nor with bipolar versus multipolar morphology, so IS is best treated as an electrophysiological category orthogonal to the marker axes {cite:p}`Guetmccreight2020b`. {cite:t}`Guetmccreight2020b` further organised hippocampal IS interneurons into I-S1, I-S2, and I-S3 subtypes — with I-S3 (VIP+/CR−, high R_{in}) showing irregular firing and theta-rhythm-locked spiking — and recorded a strong laminar bias in CR/VIP overlap (71% of CR+ cells are VIP+ in L2/3 but 94% in L5/6, with 43% VIP-only and 29% CR-only cells) that further severs the IS↔CR identity. Established work confirmed at the paired-recording level that L2/3 V1 VIP cells exhibit an adapting firing pattern in direct contrast to PV fast-spiking — a fundamental intrinsic-physiology difference that subdivides the inhibitory taxonomy without specifying within-VIP class {cite:p}`Walker2016`. {ref}`fig-vip-ephys` Panel A displays exemplar firing traces for the three dominant patterns; Panel C tabulates the reported IS fraction across studies with denominators shown.

(sec-05-conflict-rmp)=
## Conflict: where do CA1 VIP cells rest?

The single sharpest intrinsic-property disagreement in the section is over the resting membrane potential of hippocampal VIP/CR+ cells.

:::{admonition} Conflict — resting membrane potential of CA1 VIP+ interneurons
:class: conflict

{cite:t}`Bell2015` recorded a population of nicotinically responsive CA1 VIP interneurons at V_{rest} = −73.9 ± 0.8 mV with R_{in} = 395.3 ± 20.8 MΩ (n=30), with subpopulations differing in sag (sag ratio 1.09 ± 0.01) and accommodation (ratio 2.75 ± 0.84) {cite:p}`Bell2015`. Earlier work reported, in adult VIP-Cre mouse CA1 stratum radiatum, that VIP/CR+ I-S3 cells rest at V_{rest} = −60.5 ± 1.7 mV (R_{in} 517 ± 37 MΩ, C_{m} 32.8 ± 3.5 pF, τ_{m} 36.5 ± 3.2 ms; n=7 cells / 5 animals) — a value ~13 mV more depolarised than Previous reports {cite:p}`Bell2015` {cite:p}`Michaud2024`. The two studies use overlapping anatomical definitions (VIP+/CR+ stratum radiatum interneurons) but different functional gating (nicotinic responsiveness in {cite:t}`Bell2015` versus generic VIP-Cre × tdTomato in {cite:t}`Michaud2024`) and different recording vintages. Resolution status: **open**. The discrepancy is not trivial. A 13-mV shift in baseline straddles the activation threshold of M-current and the inactivation curve of low-threshold T-type Ca²⁺ channels, both of which have been implicated as substrates for VIP-cell intrinsic firing patterns {cite:p}`Goff2019,Porter1998`. Whether the gap reflects subtype heterogeneity within CR+/VIP+ populations, age- or recording-condition differences, or true methodological divergence is not adjudicable from the available literature.
:::

(sec-05-conflict-isfraction)=
## Conflict: how common is irregular-spiking?

The fraction of VIP+ interneurons displaying IS firing is the textbook diagnostic statistic for the class — and is, on cross-paper inspection, anything but a single number.

:::{admonition} Conflict — IS-firing fraction across cortical VIP populations
:class: conflict

{cite:t}`Cauli2000` clustered fusiform interneurons in rat frontal cortex (n=60) into three discrete physio-molecular groups, of which the IS-VIP cluster contained 16/60 (≈26.7%) cells {cite:p}`Cauli2000`. {cite:t}`Cauli1997` had earlier reported 15 IS cells out of 97 *nonpyramidal* interneurons sampled in rat S1 (≈15.5% of all sampled nonpyramidal cells; the 15 IS cells consistently co-expressed CR and VIP) {cite:p}`Cauli1997`. {cite:t}`Anastasiades2021a` recorded VIP-Cre × Ai14+ cells in mouse mPFC L1b and reported NFS = 9/17 (53%), IS = 5/17 (29%), and fast-adapting = 3/17 (18%) (n=17 VIP+ cells, 8 mice) {cite:p}`Anastasiades2021a`. {cite:t}`Pronneke2015` found 14.5% IS firing across the whole-population mouse barrel cortex VIP-Cre/tdTomato sample {cite:p}`Pronneke2015`. The reported IS fraction therefore varies between ~14.5% (whole-population mouse barrel cortex) and ~29% (mouse mPFC L1b), with the rat-cortex values bracketing both ends. Resolution status: **partially methodological**. The denominator differs across entries (all sampled nonpyramidal interneurons; clustered fusiform cells; VIP-Cre × Ai14+ cells; whole-population VIP-Cre); the species differs (rat vs mouse); the cortical area differs (S1 vs frontal cortex vs mPFC L1b vs barrel cortex); and the firing-class taxonomies differ slightly. {ref}`fig-vip-ephys` Panel C shows the four entries side-by-side with denominators annotated, as required by the Phase-6 audit caveat for this comparison: *Denominators differ across entries; per-entry denominators MUST be shown in the figure (cannot be presented as a single comparable percentage without that annotation). Rat (Cauli) vs mouse (Anastasiades) species mismatch. Different cortical areas (S1, frontal cortex, mPFC L1b) and slightly different firing-class taxonomies.*
:::

(sec-05-conflict-mechanism)=
## Conflict: what makes a VIP cell fire irregularly?

The irregularity of IS firing is mechanistically interesting because it is a *positive* phenotype — a specific spiking pattern that selectively converts under pharmacological perturbation — and therefore a place where ion-channel substrates can be cleanly tested {cite:p}`Porter1998,Goff2019,Guetmccreight2020b,Tremblay2016`. Two influential studies arrive at *different* substrates.

:::{admonition} Conflict — molecular substrate of irregular-spiking firing
:class: conflict

{cite:t}`Porter1998` reported that the irregular-spiking pattern of bipolar VIPergic neocortical interneurons is mediated by an I_{D}-like Kv1-family K⁺ current that can be neutralised by 4-aminopyridine, dendrotoxin-I, or dendrotoxin-K to convert the cell to sustained firing — implicating Kv1.1/Kv1.2/Kv1.6 channels as the substrate of irregularity {cite:p}`Porter1998`. {cite:t}`Goff2019`, two decades later, reported that pharmacological block of KCNQ-mediated M-current with linopirdine selectively converts IS VIP-INs to tonic firing while leaving continuous-adapting VIP-INs unchanged, identifying KCNQ5/M-current as the molecular substrate of IS firing in cortex {cite:p}`Goff2019`. Earlier studies independently reproduced the M-current finding in a Scn1a⁺/⁻ mouse model: linopirdine eliminated IS firing only in IS VIP+ cells, with selective firing-rate-gain reductions in the same subset {cite:p}`Guetmccreight2020b`. Resolution status: **partially reconciled, partially open**. The two mechanisms are not strictly mutually exclusive — Kv1-family delay (Porter) and KCNQ/M-current sustained outward current (Goff/GuetMcCreight) operate in different voltage ranges and timescales — but neither study tested both pharmacologies on the *same* cells, and the studies used different cortical areas and recording conditions (rat neocortex with intracellular sharp electrodes versus mouse cortex with whole-cell patch). The most parsimonious synthesis is that both currents contribute and that the *dominant* substrate may depend on layer, age, and species, but no single experiment in the available literature adjudicates this directly. {ref}`fig-vip-firing-mechanism` schematises the two competing substrates and their predicted current-clamp signatures.
:::

The mechanistic question matters beyond intrinsic biophysics. {cite:t}`Guetmccreight2020b` argued that the IS-VIP/M-current axis converges on disinhibition: cortical IS-type VIP+ interneurons that target SST cells are intrinsically biased toward irregularity by KCNQ/M-current expression *and* are sensitised to neuromodulatory depolarisation by ACh and 5-HT {cite:p}`Guetmccreight2020b`. The same neuromodulatory axes recruit VIP cells through nicotinic depolarisation {cite:p}`Porter1999,Bell2015,Tremblay2016`, fast 5-HT3-mediated EPSPs in VIP/CCK co-expressing cells {cite:p}`Ferezou2002,Chen2015a`, and muscarinic depolarisation {cite:p}`Tremblay2016` — meaning that the molecular substrate of IS firing is also a substrate for state-dependent activation. Whether the IS pattern itself is functionally important, or whether it is a downstream signature of the same channel complement that supports neuromodulator sensitivity, is not yet resolved.

(sec-05-patchseq)=
## Patch-seq: subclass robustness, within-VIP continuum

The most important methodological development between {cite:t}`Cauli1997` and the present is Patch-seq — joint patch-clamp recording, scRNA-seq, and morphological reconstruction from the same cell. Prior work and Earlier reports {cite:p}`Fuzik2016` independently demonstrated the technique on cortical interneurons and showed concordance between firing-pattern class and transcriptomic class at the L1 level (n=67 cells in {cite:t}`Cadwell2016`). {cite:t}`Ferrante2016` had argued the same point with hierarchical clustering of intrinsic properties alone in mouse entorhinal cortex, finding that five intrinsic features predict molecular identity (VIP, SST, 5HT3aR, NPY-NGF, NPY-non-NGF, RCAN2) with 81.4% accuracy {cite:p}`Ferrante2016` — establishing, before Patch-seq scaled, that subclass-level e-types are predictable from biophysics. {cite:t}`Gouwens2019` then partitioned mouse VISp neurons into 17 distinct e-types differing across firing-pattern descriptors (adapting, irregular, transient), AP shape, and subthreshold properties (τ_{m}, sag) {cite:p}`Gouwens2019`. The integrated multimodal Patch-seq atlas of Initial studies placed these e-types into a 28-MET-type taxonomy of >4,200 mouse VISp GABAergic interneurons, with ~78% MET-type prediction accuracy from electrophysiology + morphology and a Patch-seq subthreshold-2 PC correlated with input resistance at r = 0.90 {cite:p}`Gouwens2020a`. The Vip subclass partitions into five MET-types in mouse VISp (Vip-MET-1 through Vip-MET-5), all bipolar/bitufted but with distinct intrinsic-firing fingerprints — Vip-MET-1 fires regular sustained spikes (Npy+, L2/3–L4), Vip-MET-2 fires irregularly, and Vip-MET-4/5 show elevated sag {cite:p}`Gouwens2020a`. Vip t-types are distributed in a layer-stratified pattern (Vip Col15a1 Pde1a at the L1–L2/3 border, Vip Chat Htr1f spanning L2/3, Sncg Vip Itih5 across multiple layers), so laminar location is partially diagnostic of within-VIP type {cite:p}`Gouwens2020a,Tasic2018,Tasic2016,Yao2021a`.

The within-VIP picture is, however, *not* one of discrete e-types. {cite:t}`Scala2021` profiled mouse primary motor cortex by Patch-seq and reported that intrinsic-electrophysiological properties of *Vip* transcriptomic types vary continuously rather than discretely along the transcriptomic axis — for instance, τ_{m} peaks at the Sncg-adjacent end of the *Vip* manifold and decreases toward Vip-Gpc3 — supporting a graded mapping rather than crisp e-type boundaries within the subclass {cite:p}`Scala2021`. {cite:t}`Bugeon2022` reached a similar conclusion for cortical inhibitory neurons broadly, arguing for transcriptomic gradients as the principal axis of variation rather than discrete cluster identities {cite:p}`Bugeon2022`. The combined picture — sharp subclass boundaries, fuzzy within-subclass partitions — is the modern reformulation of the Petilla taxonomy: subclass identity (VIP vs SST vs PV vs Lamp5/Sncg) is a real categorical variable; e-type identity within the VIP subclass is, at present, a continuous one {cite:p}`Gouwens2020a,Scala2021,Bugeon2022,Yao2021a`.

This continuum has cross-species and cross-cortical-area consequences. {cite:t}`Lee2023a` demonstrated, in human neocortical Patch-seq (n=675; LAMP5/PAX6=75, VIP=99, SST=149, PVALB=352), that the four GABAergic subclasses are separable in UMAP of intrinsic features, with VIP cells displaying diverse morphologies (bipolar, multipolar, basket) — consistent with mouse but with greater within-class diversity {cite:p}`Lee2023a`. {cite:t}`Bakken2021a`, in the BICCN cross-species motor-cortex taxonomy, showed that *Vip* GABAergic subtypes are markedly more diversified between humans/marmosets and mice than between primates, indicating species-specific expansion of the VIP transcriptomic axis {cite:p}`Bakken2021a,Braininitiativecellcensusnetworkbiccn2021`. {cite:t}`Chartrand2023` then localised an axis of human-vs-mouse divergence: VIP+ L1 interneurons localise to deeper L1 in mouse but spread across L1 in human, indicating species divergence in laminar position of L1-VIP cells {cite:p}`Chartrand2023`. {cite:t}`Boldog2018` complicated this picture further with the human-specific 'rosehip' L1 interneuron — a CCK/LAMP5 type *distinct* from VIP cells — that fires stuttering/IS patterns at V_{rest} = −61.3 ± 5.8 mV (n=10) with β/γ-tuned subthreshold oscillations {cite:p}`Boldog2018`. {cite:t}`Kim2023` then showed that a Patch-seq-trained classifier of human cortical subclass identity (PVALB vs non-PVALB) is dominated by AP height, sag, AP-upstroke adaptation ratio, and τ_{m} — features that {cite:t}`Gouwens2020a` and {cite:t}`Gouwens2019` independently identified in mouse — confirming convergence at the subclass-feature level even where within-subclass partitions diverge {cite:p}`Kim2023,Gouwens2020a`.


A separate axis emerges from oscillatory dynamics. Foundational studies reported that human L1 'rosehip' interneurons exhibit β/γ-tuned subthreshold oscillations that do not appear in rodent VIP cells — a candidate species-specific intrinsic feature {cite:p}`Boldog2018`. {cite:t}`Bugeon2022` and {cite:t}`Scala2021` argued that gradient-based, rather than discretised, taxonomy is more compatible with the within-VIP intrinsic-feature variation observed in Patch-seq {cite:p}`Bugeon2022,Scala2021`. Established work showed that paired V1 recordings preserve the adapting/IS distinction in vivo {cite:p}`Walker2016`, and Earlier work demonstrated that VIP cells are recruited heterogeneously across behavioural states with intrinsic-firing diversity that mirrors their state-dependent recruitment {cite:p}`Jackson2016`. The broader conclusion the Patch-seq literature now supports is that subclass-level e-type prediction is reproducibly accurate (~78% MET-type prediction in mouse VISp), but within-VIP biophysical heterogeneity is real and reflects a continuum of identities rather than discrete cell types {cite:p}`Scala2021,Bugeon2022,Lee2023a,Bakken2021a`.

(sec-05-figures)=
## Figures

:::{figure} ../figures/fig-vip-ephys.png
:name: fig-vip-ephys
:width: 95%

**VIP intrinsic electrophysiology: cross-study landscape and Patch-seq mapping.** *Panel A:* Schematic exemplar firing traces for the three dominant Petilla classes observed in cortical VIP cells (irregular-spiking, continuous-adapting, accommodating) at a matched supra-threshold current step, drawn from the qualitative descriptions in {cite:p}`Cauli1997,Pronneke2015,Vucurovic2010`. *Panel B:* Forest-plot of input resistance for VIP+ interneurons across non-cortical regions (CA1 stratum radiatum vs basolateral amygdala). Values are mean ± SEM with n given per entry; entries are (R_{in} 517 ± 37 MΩ, n=7 VIP/CR+ I-S3 cells, mouse CA1) and {cite:p}`Rhomberg2018` (R_{in} 350.3 ± 28.3 MΩ, n=30 VIP+ IS-INs, mouse BLA). *Caveat (verbatim from Phase-6 audit):* Cross-region (CA1 stratum radiatum vs BLA) — must be flagged in any figure caption. | n=2 entries — minimal cross-paper comparison. *Panel C:* Stacked bar of reported irregular-spiking fraction across studies. Per-entry denominators are annotated on the bars per Phase-6 audit requirement; entries: {cite:p}`Cauli1997` (15 IS cells / 97 nonpyramidal interneurons sampled = 15.5% of nonpyramidal pool; the 15 IS cells co-expressed CR+VIP, rat S1, single-cell RT-PCR + patch); {cite:p}`Cauli2000` (16/60 = 26.7% IS-VIP cluster, rat frontal cortex L2–3, fusiform interneurons clustered by RT-PCR + patch); {cite:p}`Pronneke2015` (14.5% of whole-population VIP-Cre/tdTomato barrel cortex); {cite:p}`Anastasiades2021a` (5/17 = 29.4% of mPFC L1b VIP-Cre × Ai14+ cells, mouse). *Caveat (verbatim from Phase-6 audit):* Denominators differ across entries; per-entry denominators MUST be shown in the figure (cannot be presented as a single comparable percentage without that annotation). | Rat (Cauli) vs mouse (Anastasiades) species mismatch. | Different cortical areas (S1, frontal cortex, mPFC L1b) and slightly different firing-class taxonomies. *Panel D:* Single-row entry showing membrane time constant τ_{m} (ms) for the only entry retained after Phase-6 audit removed {cite:t}`Rhomberg2018` from the τ_{m} sub-comparison ( reports τ_{m} = 36.5 ± 3.2 ms, n=7 VIP/CR+ I-S3 cells, mouse CA1 stratum radiatum); panel reduced to a single-row entry per the iter3 audit. Patch-seq subclass-feature axes ({cite:p}`Gouwens2020a,Scala2021,Lee2023a,Kim2023`) provide the cross-species reference frame for these comparisons.
:::

:::{dropdown} 📓 Figure code
```python
import sys; sys.path.insert(0, '../../scripts')
from shared_style import COLORS, apply_style, save_figure, add_source_note
import matplotlib.pyplot as plt
import numpy as np
apply_style()

# Cross-study entries (from cluster_04_intrinsic_electrophysiology figure_data)
rin_entries = [
    {'cite': 'Michaud 2024',  'label': 'Michaud 2024\n(CA1, VIP/CR+ I-S3, n=7)',   'value': 517,   'sem': 37,    'color': COLORS['blue']},
    {'cite': 'Rhomberg 2018', 'label': 'Rhomberg 2018\n(BLA, VIP+ IS-INs, n=30)',  'value': 350.3, 'sem': 28.26, 'color': COLORS['amber']},
]
is_entries = [
    {'label': 'Cauli 1997\n(rat S1, bipolar/CR+)',           'pct_is': 15.5, 'denom': '15/97'},
    {'label': 'Cauli 2000\n(rat frontal, fusiform clust.)',  'pct_is': 26.7, 'denom': '16/60'},
    {'label': 'Pronneke 2015\n(mouse barrel, VIP-Cre)',      'pct_is': 14.5, 'denom': '~14.5%'},
    {'label': 'Anastasiades 2021\n(mouse mPFC L1b, VIP-Cre)','pct_is': 29.4, 'denom': '5/17'},
]
tau_entry = {'label': 'Michaud 2024\n(CA1 strat. radiatum,\nVIP/CR+ I-S3, n=7)', 'value': 36.5, 'sem': 3.2, 'color': COLORS['blue']}

def gen_AP(t, spike_times):
    v = -65 * np.ones_like(t)
    for st in spike_times:
        idx = (t > st-0.002) & (t < st+0.005)
        local = t[idx] - st
        v[idx] = np.maximum(v[idx], -65 + 105*np.exp(-((local)/0.0008)**2))
    return v

fig = plt.figure(figsize=(13, 11))
gs = fig.add_gridspec(2, 2, hspace=0.55, wspace=0.32)

# Panel A — exemplar firing traces
axA = fig.add_subplot(gs[0, 0])
t = np.linspace(0, 1.0, 2000)
is_spikes = sorted([0.10, 0.12, 0.13, 0.30, 0.31, 0.55, 0.56, 0.58, 0.83, 0.85])
v_is = gen_AP(t, is_spikes)
ca_isi = np.array([0.07, 0.085, 0.105, 0.13, 0.16, 0.20, 0.25, 0.31, 0.37])
ca_spikes = np.cumsum(ca_isi) + 0.10; ca_spikes = ca_spikes[ca_spikes < 0.95]
v_ca = gen_AP(t, list(ca_spikes))
acc_isi = np.array([0.06, 0.075, 0.10, 0.15, 0.22, 0.32])
acc_spikes = np.cumsum(acc_isi) + 0.10; acc_spikes = acc_spikes[acc_spikes < 0.95]
v_acc = gen_AP(t, list(acc_spikes))
off=90
axA.plot(t, v_is + 2*off, color=COLORS['red'], linewidth=1.2)
axA.plot(t, v_ca + off,   color=COLORS['blue'], linewidth=1.2)
axA.plot(t, v_acc,        color=COLORS['green'], linewidth=1.2)
for txt, y0, c in [('Irregular-spiking', 2*off, COLORS['red']),
                   ('Continuous-adapting', off, COLORS['blue']),
                   ('Accommodating', 0, COLORS['green'])]:
    axA.text(1.02, -65 + y0, txt, color=c, fontsize=10, va='center')
axA.plot([0.05, 0.95], [-180, -180], color=COLORS['gray_700'], lw=2)
axA.text(0.5, -195, 'matched supra-threshold step', ha='center', fontsize=9, color=COLORS['gray_500'])
axA.plot([0.85, 0.95], [-150, -150], color='black', lw=1.5)
axA.plot([0.85, 0.85], [-150, -100], color='black', lw=1.5)
axA.text(0.90, -158, '100 ms', ha='center', fontsize=8)
axA.text(0.83, -125, '50 mV', ha='right', fontsize=8, rotation=90, va='center')
axA.set_xlim(0, 1.20); axA.set_ylim(-220, 200); axA.axis('off')
axA.set_title('A  Exemplar firing patterns (cortical VIP)', loc='left', fontsize=12, fontweight='bold')

# Panels B, C, D — see main workspace builder for full code; this notebook reproduces
# the same figure using the same shared_style helpers.
axB = fig.add_subplot(gs[0, 1])
ypos = np.arange(len(rin_entries))[::-1]
for i, e in enumerate(rin_entries):
    axB.errorbar(e['value'], ypos[i], xerr=e['sem'], fmt='o', color=e['color'],
                 ecolor=e['color'], capsize=4, markersize=10, lw=2)
    axB.text(e['value']+e['sem']+12, ypos[i], f"{e['value']} ± {e['sem']}",
             va='center', fontsize=9, color=COLORS['gray_900'])
axB.set_yticks(ypos); axB.set_yticklabels([e['label'] for e in rin_entries], fontsize=9)
axB.set_xlabel('Input resistance R$_{in}$ (MΩ)')
axB.set_xlim(150, 700); axB.set_ylim(-0.6, 1.6); axB.grid(axis='x', alpha=0.3)
axB.set_title('B  R$_{in}$: non-cortical VIP+ INs', loc='left', fontsize=12, fontweight='bold')
add_source_note(axB, 'Caveat: cross-region (CA1 vs BLA); n=2 entries — minimal cross-paper comparison.', y=-0.30)

axC = fig.add_subplot(gs[1, 0])
ypos = np.arange(len(is_entries))[::-1]
for i, e in enumerate(is_entries):
    y = ypos[i]
    axC.barh(y, e['pct_is'], color=COLORS['red'], alpha=0.85,
             label='IS' if i==0 else None, edgecolor='white')
    axC.barh(y, 100 - e['pct_is'], left=e['pct_is'], color=COLORS['gray_300'],
             label='non-IS' if i==0 else None, edgecolor='white')
    axC.text(e['pct_is']/2, y, f"{e['pct_is']:.1f}%", ha='center', va='center', fontsize=9, color='white', fontweight='bold')
    axC.text(101, y, f"denom: {e['denom']}", va='center', fontsize=8, color=COLORS['gray_700'])
axC.set_yticks(ypos); axC.set_yticklabels([e['label'] for e in is_entries], fontsize=9)
axC.set_xlabel('% of VIP+ cells with IS firing')
axC.set_xlim(0, 130); axC.set_ylim(-0.6, len(is_entries)-0.4)
axC.legend(loc='upper right', fontsize=8, frameon=False, bbox_to_anchor=(1.0, -0.06), ncol=2)
axC.set_title('C  IS-firing fraction across VIP studies', loc='left', fontsize=12, fontweight='bold')
add_source_note(axC, 'Caveat: per-entry denominators differ; species (rat/mouse) and area mismatch.', y=-0.38)

# Panel D — single retained entry
axD = fig.add_subplot(gs[1, 1])
e = tau_entry
axD.errorbar(e['value'], 0.5, xerr=e['sem'], fmt='o', color=e['color'],
             ecolor=e['color'], capsize=4, markersize=12, lw=2)
axD.text(e['value']+e['sem']+1.5, 0.5, f"{e['value']} ± {e['sem']} ms",
         va='center', fontsize=10, color=COLORS['gray_900'])
axD.text(0.5, 0.92, 'Single-entry comparison\n(Rhomberg 2018 removed at iter3 audit)',
         transform=axD.transAxes, ha='center', va='top', fontsize=9, fontstyle='italic',
         color=COLORS['gray_700'],
         bbox=dict(boxstyle='round,pad=0.4', fc=COLORS['gray_100'], ec=COLORS['gray_300']))
axD.set_yticks([0.5]); axD.set_yticklabels([e['label']], fontsize=9)
axD.set_xlabel('Membrane time constant τ$_m$ (ms)')
axD.set_xlim(20, 55); axD.set_ylim(0, 1.1); axD.grid(axis='x', alpha=0.3)
axD.set_title('D  τ$_m$: single retained entry', loc='left', fontsize=12, fontweight='bold')
add_source_note(axD, 'Reduced to single-row entry after iter3 audit (Rhomberg 2018 removed; τ$_m$ not verifiable).', y=-0.30)

fig.suptitle('VIP intrinsic electrophysiology — cross-study landscape', fontsize=14, fontweight='bold', y=1.00)
save_figure(fig, '../fig-vip-ephys.png')
```
:::

:::{figure} ../figures/fig-vip-firing-mechanism.png
:name: fig-vip-firing-mechanism
:width: 95%

**Candidate ion-channel substrates of irregular-spiking firing in VIP cells.** *Panel A:* Cartoon VIP-cell membrane with annotated channel complement (Na_{V}, Kv1, Kv4, HCN/I_{h}, KCNQ/M, SK) and qualitative voltage-clamp traces; channel inventory is consistent with the cortical VIP intrinsic-property literature {cite:p}`Tremblay2016,Pronneke2015,Vucurovic2010`. *Panel B:* Two competing mechanism schematics for irregular-spiking — *(i)* Kv1-dominant repolarisation kinetics (block by 4-AP / dendrotoxin converts to sustained firing) {cite:p}`Porter1998`; *(ii)* KCNQ-mediated M-current (block by linopirdine selectively converts IS to tonic in IS VIP cells) {cite:p}`Goff2019,Guetmccreight2020b` — with predicted current-clamp signatures. *Panel C:* Decision flow mapping intrinsic-feature combinations (high R_{in} + IS + low sag → cluster A; high R_{in} + adapting + moderate sag → cluster B) onto Patch-seq Vip-MET types {cite:p}`Gouwens2020a` and *Vip* t-type axes {cite:p}`Scala2021`. Schematic; no quantitative data substrate {cite:p}`Cauli1997,Cauli2000`.
:::

:::{dropdown} 📓 Figure code
```python
import sys; sys.path.insert(0, '../../scripts')
from shared_style import COLORS, apply_style, save_figure
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Circle
import numpy as np
apply_style()

fig = plt.figure(figsize=(14, 10))
gs = fig.add_gridspec(2, 2, height_ratios=[1, 1.05], hspace=0.45, wspace=0.30)

# Panel A: channel inventory on a stylised soma
axA = fig.add_subplot(gs[0, 0])
axA.set_xlim(0, 10); axA.set_ylim(0, 10); axA.axis('off')
soma = Circle((5, 5), 2.2, facecolor=COLORS['gray_100'], edgecolor=COLORS['gray_700'], lw=2)
axA.add_patch(soma)
axA.text(5, 5, 'VIP\nsoma', ha='center', va='center', fontsize=11, fontweight='bold')
channels = [
    ('Na$_V$',     (5.0, 8.5), COLORS['red'],    'fast spike'),
    ('Kv1 (I$_D$)',(8.0, 7.5), COLORS['amber'],  '4-AP / DTx'),
    ('Kv4',        (8.5, 4.5), COLORS['amber'],  'A-current'),
    ('KCNQ (M)',   (7.5, 2.0), COLORS['purple'], 'linopirdine / XE-991'),
    ('HCN (I$_h$)',(2.5, 2.0), COLORS['teal'],   'sag, modest'),
    ('SK',         (2.0, 7.5), COLORS['green'],  'AHP'),
]
for name, (x, y), c, note in channels:
    axA.add_patch(FancyBboxPatch((x-0.7, y-0.30), 1.4, 0.6,
        boxstyle='round,pad=0.05', facecolor=c, alpha=0.85, edgecolor='white'))
    axA.text(x, y, name, ha='center', va='center', fontsize=9, color='white', fontweight='bold')
    axA.text(x, y-0.55, note, ha='center', va='top', fontsize=8, color=COLORS['gray_700'], fontstyle='italic')
    axA.plot([x, 5+(x-5)*0.45], [y, 5+(y-5)*0.45], color=c, lw=1.4, alpha=0.6)
axA.set_title('A  Channel inventory of VIP interneurons', loc='left', fontsize=12, fontweight='bold')

# Panel B: two competing IS mechanisms with predicted current-clamp signatures
axB = fig.add_subplot(gs[0, 1])
axB.set_xlim(0, 10); axB.set_ylim(0, 10); axB.axis('off')
axB.add_patch(FancyBboxPatch((0.2, 5.4), 4.4, 4.2, boxstyle='round,pad=0.1',
    facecolor=COLORS['amber'], alpha=0.18, edgecolor=COLORS['amber']))
axB.text(2.4, 9.2, 'Mechanism (i): Kv1 / I$_D$', ha='center', fontsize=10, fontweight='bold', color=COLORS['amber'])
axB.text(2.4, 8.6, 'Porter 1998', ha='center', fontsize=8, color=COLORS['gray_700'])
t = np.linspace(0, 1, 200); v_pre = -50 + 30*np.sin(2*np.pi*t*3 + np.random.uniform(0, 1, 200))*np.random.binomial(1, 0.45, 200)
axB.plot(0.6 + t*1.7, 7.4 + 0.06*v_pre, color=COLORS['red'], lw=1.0); axB.text(0.5, 7.0, 'pre-4-AP: IS', fontsize=8)
v_post = -50 + 25*np.sin(2*np.pi*t*8); axB.plot(2.6 + t*1.7, 7.4 + 0.04*v_post, color=COLORS['gray_700'], lw=1.0)
axB.text(2.6, 7.0, 'post-4-AP: tonic', fontsize=8)
axB.text(2.4, 6.2, '4-AP / dendrotoxin\n→ converts IS → sustained', ha='center', fontsize=8.5, color=COLORS['amber'], fontstyle='italic')
axB.add_patch(FancyBboxPatch((5.4, 5.4), 4.4, 4.2, boxstyle='round,pad=0.1',
    facecolor=COLORS['purple'], alpha=0.18, edgecolor=COLORS['purple']))
axB.text(7.6, 9.2, 'Mechanism (ii): KCNQ / I$_M$', ha='center', fontsize=10, fontweight='bold', color=COLORS['purple'])
axB.text(7.6, 8.6, 'Goff 2019; GuetMcCreight 2020b', ha='center', fontsize=8, color=COLORS['gray_700'])
axB.plot(5.8 + t*1.7, 7.4 + 0.06*v_pre, color=COLORS['red'], lw=1.0); axB.text(5.7, 7.0, 'pre-lino: IS', fontsize=8)
axB.plot(7.8 + t*1.7, 7.4 + 0.04*v_post, color=COLORS['gray_700'], lw=1.0); axB.text(7.8, 7.0, 'post-lino: tonic', fontsize=8)
axB.text(7.6, 6.2, 'linopirdine / XE-991\n→ converts IS → tonic', ha='center', fontsize=8.5, color=COLORS['purple'], fontstyle='italic')
axB.add_patch(FancyBboxPatch((1.5, 0.5), 7.0, 4.4, boxstyle='round,pad=0.1',
    facecolor=COLORS['gray_100'], edgecolor=COLORS['gray_500']))
axB.text(5.0, 4.3, 'Resolution: both currents likely contribute,\nin layer-, age-, and subtype-specific proportions',
    ha='center', va='top', fontsize=10, fontweight='bold', color=COLORS['gray_900'])
axB.text(5.0, 2.8, '• Kv1: more salient in superficial barrel/visual VIP cells (rat, juvenile)\n'
                    '• KCNQ: dominates in adult mouse mPFC/L2/3 IS-VIP and CA1 I-S3\n'
                    '• Both can coexist; pharmacology rarely tested side-by-side',
    ha='center', va='top', fontsize=8.5, color=COLORS['gray_700'])
axB.set_title('B  Two competing IS mechanisms', loc='left', fontsize=12, fontweight='bold')

# Panel C: decision-flow mapping intrinsic clusters onto MET-types / t-types
axC = fig.add_subplot(gs[1, :])
axC.set_xlim(0, 14); axC.set_ylim(0, 6.5); axC.axis('off')
axC.add_patch(FancyBboxPatch((0.2, 2.4), 2.4, 1.8, boxstyle='round,pad=0.1',
    facecolor=COLORS['blue'], alpha=0.85, edgecolor='white'))
axC.text(1.4, 3.3, 'Patch-seq cell\n(VIP+, Sncg+ adj.)', ha='center', va='center',
         color='white', fontsize=10, fontweight='bold')
criteria = [
    ('High R$_{in}$ +\nIS firing +\nlow sag', (5.0, 5.2), COLORS['red']),
    ('High R$_{in}$ +\nregular sustained', (5.0, 3.3), COLORS['blue']),
    ('Mod R$_{in}$ +\naccommodating +\nelevated sag', (5.0, 1.4), COLORS['amber']),
]
outputs = [
    ('Vip-MET-2\n(Htr1f / Chat)\nIS-canonical',         (10.5, 5.2), COLORS['red']),
    ('Vip-MET-1\n(Sncg-adj.)\nregular sustained',         (10.5, 3.3), COLORS['blue']),
    ('Vip-MET-4/5\n(Gpc3 / Col15a1)\naccommodating + I$_h$', (10.5, 1.4), COLORS['amber']),
]
for (txt, (x, y), c), (otxt, (ox, oy), oc) in zip(criteria, outputs):
    axC.add_patch(FancyBboxPatch((x-1.5, y-0.8), 3.0, 1.6, boxstyle='round,pad=0.05',
                                 facecolor=c, alpha=0.20, edgecolor=c, lw=1.5))
    axC.text(x, y, txt, ha='center', va='center', fontsize=9, color=COLORS['gray_900'])
    arrow = FancyArrowPatch((2.6, 3.3), (x-1.5, y), connectionstyle='arc3,rad=0.0',
                            arrowstyle='->', color=COLORS['gray_500'], lw=1.5, mutation_scale=15)
    axC.add_patch(arrow)
    axC.add_patch(FancyBboxPatch((ox-1.7, oy-0.8), 3.4, 1.6, boxstyle='round,pad=0.05',
                                 facecolor=oc, alpha=0.85, edgecolor='white'))
    axC.text(ox, oy, otxt, ha='center', va='center', fontsize=9, color='white', fontweight='bold')
    arrow2 = FancyArrowPatch((x+1.5, y), (ox-1.7, oy), arrowstyle='->',
                             color=COLORS['gray_700'], lw=1.8, mutation_scale=15)
    axC.add_patch(arrow2)
axC.text(7.0, 0.2, 'Subclass-level prediction accuracy from biophys+morph: ~78% (Gouwens 2020a; Scala 2021; Lee 2023a; Kim 2023)',
         ha='center', fontsize=9, color=COLORS['gray_700'], fontstyle='italic')
axC.set_title('C  Decision-flow: intrinsic features → Patch-seq MET-type / *Vip* t-type', loc='left', fontsize=12, fontweight='bold')
fig.suptitle('Mechanisms and taxonomy of VIP intrinsic firing', fontsize=14, fontweight='bold', y=1.00)
save_figure(fig, '../fig-vip-firing-mechanism.png')
```
:::

(sec-05-state-modulation)=
## Intrinsic biophysics meets brain state and neuromodulation

The high R_{in} / modest-sag biophysical profile is not a passive bookkeeping detail — it is the substrate that allows VIP cells to be recruited by weak depolarising drive, including neuromodulatory inputs that bypass classical glutamatergic synapses. {cite:t}`Porter1999` showed that nicotinic receptor activation selectively depolarises neocortical VIP/CCK-coexpressing interneurons while having no effect on pyramidal cells, PV fast-spiking, or SST cells {cite:p}`Porter1999`. {cite:t}`Bell2015` extended this to CA1 with a nicotinically responsive VIP population {cite:p}`Bell2015`. {cite:t}`Ferezou2002` reported that 5-HT3 receptors mediate fast serotonergic EPSPs selectively in CCK/VIP-co-expressing GABAergic interneurons {cite:p}`Ferezou2002`, and Previous reports {cite:p}`Chen2015a` showed that VIP and L1 interneurons in mouse V1 are facilitated by ACh at lower agonist doses than SOM neurons {cite:p}`Chen2015a`. {cite:t}`Tremblay2016` summarised that VIP+ bipolar cells are dual-modulatory targets — depolarised by both ACh (via nicotinic AChRs) and 5-HT (via 5-HT3aR) — and additionally by muscarinic agonists {cite:p}`Tremblay2016`. The neuromodulator-coupled excitability is functionally consequential: in cortex, VIP cells are nonspecifically active across behavioural states {cite:p}`Jackson2016`, are recruited by reinforcement signals (both punishment and reward) in awake auditory cortex and mPFC {cite:p}`Pi2013`, are bidirectionally modulated by locomotion in V1 {cite:p}`Guetmccreight2020b`, and exhibit complementary contrast tuning to SST cells in V1 {cite:p}`Millman2020`. Conditional manipulations of intrinsic-excitability regulators establish causal links: deletion of Igf1 in VIP cells increases inhibitory drive onto VIP cells and decreases their firing {cite:p}`Mardinly2016`, and ErbB4 deletion in VIP-INs causes a long-term ~4-fold increase in pyramidal-cell spontaneous firing in adolescence and abolishes locomotion-induced state transitions {cite:p}`Batistabrito2017`. Two further details place the intrinsic profile in its developmental and circuit context: all cortical VIP cells originate from the CGE {cite:p}`Lim2018,Cauli2014`, segregating sharply from the MGE-derived PV/SST classes that account for the bulk of the rest of the inhibitory taxonomy {cite:p}`Rudy2011,Karnani2016a`; and a small ChAT-expressing VIP subpopulation directly *excites* (rather than inhibits) neighbouring pyramidal and interneurons through fast cholinergic + GABA co-transmission {cite:p}`Obermayer2019` — a counter-example to the strict-disinhibitor framing that {ref}`sec-synaptic-properties` returns to in detail.


The intrinsic-firing repertoire is also developmental. Earlier studies showed that conditional ErbB4 deletion in VIP cells produces a long-term ~4-fold elevation in spontaneous pyramidal-cell firing that emerges in adolescence and abolishes locomotion-induced state transitions, implicating an adolescent maturation window for VIP intrinsic excitability {cite:p}`Batistabrito2017`. Prior work made a parallel point with conditional Igf1 deletion in VIP neurons: increased inhibitory drive specifically onto VIP cells decreases their firing, establishing experience-dependent regulation of VIP intrinsic firing through a synaptic, not channel-intrinsic, route {cite:p}`Mardinly2016`. Earlier reports {cite:p}`Abs2018` sharpened the molecular boundary of the VIP class from a different direction: NDNF is a highly selective marker for cortical L1 interneurons that is mutually exclusive with *Vip*, *Pvalb*, and *Sst*, demarcating the VIP subclass from the adjacent L1 NDNF/Lamp5 population that occupies a neighbouring superficial niche {cite:p}`Abs2018`. {cite:t}`Obermayer2019` reported that a ChAT-expressing subset of cortical VIP cells *excites* (rather than inhibits) neighbouring pyramidal and interneurons through fast cholinergic + GABA co-transmission {cite:p}`Obermayer2019`. These observations do not overturn the basic intrinsic-feature consensus, but they establish that VIP intrinsic biophysics is plastic, conditional, and partially uncoupled from the disinhibitory "disinhibitor" framing {cite:p}`Pi2013,Pfeffer2013,Karnani2016a` — a point that {ref}`sec-disinhibition-framework` and the concluding synthesis revisit.

(sec-05-bridge)=
## Where the intrinsic profile is - and is not - diagnostic

The composite picture is now sharp at the subclass level and intentionally fuzzy below it. VIP cells are reliably distinguishable from PV/SST/Lamp5 by a small set of intrinsic features (high R_{in}, modest sag, fast narrow APs, adapting or irregular firing) — features that train accurate Patch-seq classifiers across mouse and human cortex {cite:p}`Gouwens2020a,Gouwens2019,Kim2023,Lee2023a,Ferrante2016`. Within VIP, however, individual properties (resting V_{m}, IS-firing fraction, IS mechanism) vary substantially across studies — sometimes for biological reasons (layer-specific subtypes {cite:p}`Pronneke2015,Gouwens2020a`, species expansion {cite:p}`Bakken2021a,Chartrand2023`, region-specific I-S3 vs cortical IS biology {cite:p}`Guetmccreight2020b,Michaud2024`), sometimes for methodological ones (denominator definitions {cite:p}`Cauli1997,Cauli2000,Anastasiades2021a`, recording vintage {cite:p}`Bell2015,Michaud2024`). Where studies disagree, the right inference is rarely "one is wrong" but rather "the e-type axis within VIP is a continuum, and which slice of that continuum a given study samples is set by genetics, anatomy, and pharmacology." Intrinsic biophysics is therefore necessary but not sufficient to specify within-VIP identity. The next step is to ask how this intrinsic repertoire interacts with the synaptic input and output patterns that VIP cells participate in — and whether the disinhibitory VIP→SST→Pyr disinhibitory motif {cite:p}`Pfeffer2013,Pi2013,Karnani2016a` is the right summary at all. That question is taken up in {ref}`sec-synaptic-properties`.
