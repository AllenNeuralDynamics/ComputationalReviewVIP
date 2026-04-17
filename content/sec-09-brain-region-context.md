---
title: "VIP Interneurons Across Brain Regions"
short_title: "Brain-Region Context"
section_label: sec-regions
section_number: 9
---

(sec-regions)=
(sec-region-context)=
# VIP Interneurons Across Brain Regions

The canonical description of the VIP interneuron — a bipolar, CGE-derived, vertically oriented cell in superficial neocortical layers that inhibits SST and PV interneurons and thereby disinhibits pyramidal neurons {cite:p}`Pi2013` — grew out of experiments in a narrow slice of the brain: primary sensory and medial prefrontal cortex of the mouse. The question this section asks is whether that motif generalises. The answer, assembled from 90 cluster-9 papers spanning hippocampus, neocortex and prefrontal cortex, basolateral amygdala (BLA), dorsal striatum, sensory and relay thalamus, and a small set of other structures, is: only partially. Within each region the VIP class fractionates into morphologically and connectionally distinct subclasses that do not all implement disinhibition; several regions reveal VIP populations whose principal output targets principal neurons or non-neuronal targets; and the density of available evidence is itself region-biased, with hippocampal and prefrontal data dominating while striatal and "other" structures are comparatively unmapped ({numref}`fig-sec9-region-evidence-coverage`). The practical consequence is that a region-agnostic "disinhibition" claim about VIP interneurons is unsafe when used as a default assumption for circuit models, behavioural interpretation, or translational targeting, even in cortex.

This review treats each region as a separate functional context, then asks where the evidence supports a conserved motif, where it supports divergence, and where the answer is still shaped more by access biases than by biology. The hippocampal case is treated first and at greatest length because it carries the densest evidence and because it is where the within-class fractionation of VIP is most formally resolved: at least three functionally non-equivalent subclasses — interneuron-selective (IS) cells, VIP-expressing basket cells (VIP-BC), and VIP long-range projection (VIP-LRP) neurons — coexist in CA1 and behave differently during learning, brain state, and pathology.

## Neocortex: sensory, motor, association, and prefrontal contexts

### The canonical cortical motif and its scope

The modern cortical description of VIP function begins with the observation that VIP-expressing interneurons in mouse auditory and medial prefrontal cortex specialise in disinhibitory control of local pyramidal neurons and are recruited by reinforcement signals during behaviour {cite:p}`Pi2013`. Subsequent slice work in prefrontal cortex repeatedly identified VIP→SST preference as the dominant local output of VIP cells, with only sparse direct contacts onto pyramidal neurons {cite:p}`Thompson2023a,Thompson2023b`. This pattern — VIP avoiding the soma of principal cells and concentrating inhibition on other interneurons — is now used as a near-default assumption for VIP function across neocortical areas.

The supporting evidence, however, is narrower than it appears. In the present cluster only two prefrontal papers explicitly document the disinhibitory motif, against two that emphasise reinforcement-recruited or learning-related VIP activity and one that reports a direct-inhibition channel ({numref}`fig-sec9-region-mechanism-matrix`). The cortical assertion that VIP specialises in disinhibition therefore rests on a small number of influential slice and two-photon studies whose anatomical coverage is restricted mostly to L2/3 of primary sensory cortex and mPFC of the mouse. Extension to association, motor, and deep-layer compartments is largely by inference.

Within prefrontal cortex specifically, the canonical recruitment pattern has been extended into task contexts. Activation of mPFC VIP interneurons enhances the representation and behavioural use of task information during delay periods {cite:p}`Kamigaki2017`; VIP-mediated disinhibition structures a microcircuit that underlies social dominance behaviour, with optogenetic VIP stimulation producing a two-phased activation of both PYR and PV neurons consistent with disinhibitory gating {cite:p}`Zhang2022b`. VIP interneurons in the prelimbic cortex reduce their activity during neuropathic pain and, when chemogenetically reactivated, ameliorate the affective component of pain {cite:p}`Li2022`, consistent with a permissive disinhibition role. Alcohol exposure bidirectionally alters mPFC VIP-interneuron excitability, with acute and chronic drinking shifting the disinhibitory tone in opposite directions {cite:p}`Thompson2023a,Thompson2023b`. Acute REM-sleep deprivation rescues depression-like behaviour by acting on mPFC VIP neurons and downstream pyramidal plasticity {cite:p}`Zhu2025`. Control of palatable food intake by infralimbic and prelimbic VIP populations operates through at least partially separate cognitive circuits, indicating that even within mPFC, VIP outputs are not a single functional pool {cite:p}`Newmyer2019`. VIP neurons in layer 1 of mPFC display constitutively active Kir and Ih conductances that set a subthreshold gain that differs from L2/3 VIP {cite:p}`Moreno2026`, adding a laminar axis to the region-specific picture.

### ChAT-co-expressing VIP cells break the motif within cortex

A direct, intra-cortical challenge to the "VIP = disinhibition" assumption comes from the VIP/ChAT subclass. These cells co-express choline acetyltransferase, are morphologically bipolar, and populate primarily superficial layers {cite:p}`Dudai2021`. Recordings and optogenetic activation in rodent medial prefrontal cortex established that ChAT-VIP neurons directly excite neighbouring neurons across multiple layers through fast synaptic transmission of acetylcholine, and — critically — do not form disinhibitory circuits onto L2/3 pyramidal neurons in the manner of non-ChAT VIP cells {cite:p}`Obermayer2019`. In barrel cortex, in-vivo activation of VIP/ChAT neurons suppresses sensory responses rather than enhancing them {cite:p}`Dudai2020`, producing a net effect opposite to that predicted by the cortical disinhibitory model. In non-human primate mPFC, VIP and calretinin are co-localised in many bipolar cells whose likely targets include superficial pyramidal somata {cite:p}`Gabbott1997` — an anatomical pattern consistent with a direct rather than disinhibitory channel.


:::{admonition} Conflict — Is VIP→SST disinhibition a universal cortical motif?
:class: warning

The canonical disinhibitory account of cortical VIP interneurons was established by
{cite:t}`Pi2013`, who showed that VIP cells in mouse auditory and medial prefrontal
cortex preferentially inhibit SST (and to a lesser extent PV) interneurons, producing
net disinhibition of pyramidal neurons — and framed this as a general cortical motif.
{cite:t}`Obermayer2019` later demonstrated that a molecularly defined VIP subpopulation
co-expressing ChAT and VAChT departs sharply from this rule: ChAT-VIP neurons release
acetylcholine directly onto pyramidal targets and fail to disinhibit L2/3 pyramidal
neurons in medial prefrontal cortex, whereas non-ChAT VIP cells in the same slices do.
The conflict is **partially resolved** by appealing to VIP molecular heterogeneity:
the disinhibitory motif applies to the majority non-ChAT VIP population identified by
{cite:t}`Pi2013`, while the ChAT-VIP subclass implements a distinct direct-excitatory
cholinergic channel. Whether this subclass-specific parcellation rescues a
"universal VIP disinhibition" statement — or instead refutes it by showing that
"VIP interneuron" is too coarse a circuit variable — remains contested. The Donato
lineage literature on experience-dependent basket-cell plasticity
{cite:p}`Donato2013` is independent of this VIP-specific debate and is noted here only
to disambiguate a labeling collision in upstream conflict registers.
:::

:::{admonition} Conflict — ChAT-VIP breaks the canonical motif within cortex
:class: warning

- **{cite:t}`Pi2013`**: cortical VIP interneurons "specialise in disinhibitory control" in multiple neocortical areas, including mPFC.
- **{cite:t}`Obermayer2019`**: in mPFC, ChAT-VIP neurons directly excite pyramidal cells via cholinergic synaptic transmission and show no evidence of disinhibitory wiring in L2/3.
- **Status**: partially resolved — the two labs sample different sub-populations of the VIP class, with ChAT co-expression as the distinguishing feature. The practical implication is that claims framed at the level of "VIP interneurons" need to specify whether ChAT-positive cells are included, excluded, or silently pooled.
:::

A second, subtler cortical challenge to the canonical motif is compartmental. Even for non-ChAT cortical VIP cells, thalamocortical input is substantial and largely independent of laminar location, reaching both VIP and SST interneurons in barrel cortex, with significantly stronger VPM drive onto VIP than SST cells {cite:p}`Feyerabend2025`. VIP bipolar cells in barrel cortex receive functionally segregated inputs onto their perisomatic and distal-dendritic compartments {cite:p}`Sohn2016`, and brain-wide retrograde mapping places long-range excitatory drive onto VIP cells from multiple thalamic and cortical sources at a density not obviously smaller than that of PV or SST cells {cite:p}`Wall2016`. The inference is that VIP cortical cells are best described as integrators of modulatory and thalamic drive whose disinhibitory output is one — but not the only — consequence of their activation.

### Laminar and developmental caveats within cortex

Cortical VIP circuitry also varies with developmental stage. Infralimbic VIP interneurons in mouse mPFC show adolescence-specific plasticity, with increased GABAergic input onto VIPINs and reduced intrinsic excitability, and with sex differences {cite:p}`Collins2021`. Cortical interneuron density, including VIP, is sensitive to psychiatric risk genes: loss of Transcription Factor 4 (TCF4) reduces VIP, PV and cortistatin populations in cortex and ChAT populations in striatum of heterozygous mice {cite:p}`Chen2023b`. In human post-mortem cingulate cortex, VIP mRNA is reduced in schizophrenia in anterior midcingulate cortex, accompanied by PV reductions in the same subregion {cite:p}`Krolewski2025`. These observations place the cortical "disinhibitory VIP" motif inside a developmental and disease-sensitive window rather than treating it as a fixed circuit primitive.

## Hippocampus: IS-cells, VIP-BC, and VIP-LRP as functionally non-equivalent subclasses

### Three anatomical subclasses, one shared marker

The hippocampus is the region where the VIP population was first formally resolved into functionally distinct subclasses. Early immunohistochemistry established that VIP-containing neurons in rat hippocampus partly co-express GAD and CCK with non-uniform laminar distribution {cite:p}`Kosaka1985`, and subsequent anatomical work resolved at least three distinct populations defined by septal and median-raphe innervation {cite:p}`Papp1999`. Quantitative counts across septotemporal levels and CA subfields confirmed that VIP cells are a numerically minor but anatomically specific GABAergic population, distributed differently from CCK and SST neurons {cite:p}`Jinno2003`. Neurotrophin-expression profiling in hippocampal interneurons showed that VIP cells carry a pattern distinct from SST, NPY, and CCK populations {cite:p}`Pascual1999`. Dentate gyrus VIP cells, subsequently resolved morpho-physiologically, display substantial diversity in firing pattern and axonal arborisation that cannot be captured by a single prototype {cite:p}`Wei2021`.

Acsády and colleagues established the organising principle that the hippocampal VIP class contains at least two populations with opposing postsynaptic biases: some innervate principal pyramidal cells, while a functionally distinct population innervates almost exclusively other GABAergic neurons {cite:p}`Acsady1996`. The second population — now referred to as interneuron-selective (IS) cells, with Type 3 IS (IS3) cells co-expressing calretinin — is the subclass that maps onto the cortical disinhibition motif. The first population — "VIP basket cells" or VIP-BC — provides direct perisomatic inhibition of principal neurons and does not.

This anatomical split was reinforced in CA1 by connectivity analyses: VIP+ IS cells target local interneurons, and VIP long-range projection neurons (VIP-LRP) extend axons out of the hippocampus while predominantly contacting inhibitory cells along the way {cite:p}`Francavilla2018a`. CA1 IS3 cells contact multiple distinct interneuron types in stratum oriens/alveus, preferentially OLM-like cells, and control the firing rate and timing of the feedback inhibitory loop {cite:p}`Tyan2014`. Subiculum-projecting VIP neurons in mouse CA1 have a transcriptomic signature distinguishing them from local VIP cells {cite:p}`Luo2019`. Together, these studies establish within-class fractionation as the dominant organising feature of hippocampal VIP biology.

### Opposing effects within one circuit

The within-class fractionation has direct consequences for circuit function. In hippocampal CA1, VIP-IS cells disinhibit pyramidal neurons by inhibiting O/A interneurons that target principal-cell dendrites {cite:p}`Tyan2014`; the same logic extends to VIP-LRP cells, which also target inhibitory populations en route {cite:p}`Francavilla2018a`. VIP-BCs, in contrast, provide direct perisomatic inhibition of principal cells, producing a sign of effect opposite to the disinhibitory subclass in the same local circuit {cite:p}`Rahimi2023a`. Plasticity in the temporal lobe epilepsy models makes this opposition functionally important: in the pilocarpine status epilepticus model, VIP inhibitory drive onto O/A interneurons is selectively altered in a target-specific manner {cite:p}`David2017`; in the intrahippocampal kainic acid model, subicular VIP cells modulate seizure dynamics in a direction that depends on the subclass engaged {cite:p}`Rahimi2023a`; and hyperinhibition of O/L-M cells by VIP/CR bipolar interneurons was not found in TLE {cite:p}`Wyeth2021`, suggesting that this particular VIP sub-circuit is not pathologically strengthened despite other changes in the VIP population balance. VIPergic signalling broadly contributes to epileptogenesis and has been proposed as a neuroprotective target {cite:p}`CunhaReis2021`.

:::{admonition} Conflict — Hippocampal VIP: disinhibition vs direct perisomatic inhibition
:class: warning

- **{cite:t}`Francavilla2018a`**: CA1 VIP+ IS cells target local interneurons; VIP-LRPs also target inhibitory cells, placing disinhibition as the primary CA1 VIP function.
- **{cite:t}`Rahimi2023a`**: VIP-BCs directly inhibit pyramidal cells while IS cells disinhibit them — opposing effects within the same class.
- **Status**: partially resolved. The class-level statement "VIP inhibits principal cells" and the class-level statement "VIP disinhibits principal cells" are both partly true in CA1 because they refer to non-overlapping subclasses. Experiments that read out VIP activity without subclass discrimination conflate these opposing contributions.
:::

### Neuromodulatory drive into the hippocampal VIP pool

Beyond circuit-intrinsic wiring, the hippocampal VIP pool is strongly shaped by neuromodulatory input. The medial septum and median raphe innervate VIP+ hippocampal interneurons as three distinct anatomical populations {cite:p}`Papp1999`. Acetylcholine release in CA1 preferentially activates the interneuron-selective subclass via α4β2-containing nicotinic receptors {cite:p}`Bell2015`, and muscarinic activation depolarises VIP cells with a profile distinct from PV basket cells {cite:p}`Bell2014`. These modulatory preferences matter for network-state recruitment: synaptic drive onto CA1 VIP cells depends on network state, with theta-associated inputs producing subclass-specific recruitment patterns {cite:p}`Luo2020`. Adenosine A1 and A2A receptor activation is required for VIP-mediated enhancement of GABA release from hippocampal nerve terminals {cite:p}`CunhaReis2008`, complementary cultured-hippocampus data show VIP-enhanced GABAergic transmission {cite:p}`Wang1997`; in hippocampal slices VIP enhances GABA release and increases paired-pulse inhibition in CA1 pyramidal cells, consistent with net disinhibition of pyramidal-cell dendrites {cite:p}`CunhaReis2004`. Endogenous VIP acting through VPAC1 and VPAC2 receptors modulates GABA release across different layers of Ammon's horn, with layer-specific signalling pathways {cite:p}`CunhaReis2017`, and through VPAC2 enhances population spikes in CA1 {cite:p}`CUNHAREIS2006`.

### Hippocampal VIP in plasticity, learning, and memory

Hippocampal VIP cells are behaviourally recruited in ways consistent with a disinhibitory gating role for at least the IS subclass, while leaving open a separate contribution of VIP-BC and VIP-LRP subclasses. VIP-expressing interneurons in CA1 support goal-oriented spatial learning, forming task-related functional subpopulations tracked across sessions {cite:p}`Turi2019`. During exploration of novel environments, CA1 VIP interneurons are transiently activated, facilitating rapid place-field formation and stable spatial map construction {cite:p}`Tamboli2024`; all-optical manipulation during virtual navigation links transient VIP activation to place cell remapping {cite:p}`Neubrandt2025a,Neubrandt2025b`. VIP neurons also contribute to brain region-specific gain modulation of place coding in retrosplenial cortex and connected hippocampal-adjacent circuits {cite:p}`Lenkey2025,Vervaeke2024`. At the synaptic level, VPAC1 receptors mediate an endogenous inhibitory control over long-term depression and depotentiation in CA1 {cite:p}`CunhaReis2014` and modulate theta-burst-induced LTP through GABAergic mechanisms {cite:p}`CaulinoRocha2022`; mismatch-novelty training shifts VPAC1-mediated plasticity modulation by endogenous VIP {cite:p}`AidilCarvalho2024`. General reviews of VIP modulation of hippocampal synaptic plasticity converge on a disinhibition-gated plasticity framework while noting the presence of direct-inhibition VIP outputs {cite:p}`CunhaReis2020`.

At inhibitory synapses, NMDA-dependent co-plasticity tunes inputs from VIP cells onto stratum oriens interneurons in CA1 {cite:p}`Jabonska2025a,Jabonska2025b`; a non-Hebbian long-term depression at VIP-interneuron inputs selectively tunes disinhibitory circuits in mouse hippocampus and modifies excitatory/inhibitory balance onto stratum oriens interneurons {cite:p}`Jabonska2026`. Input-specific α5-GABAA receptor targeting concentrates VIP and calretinin-positive terminals onto SST-expressing interneurons' dendrites {cite:p}`Magnin2018`, providing a molecular substrate for the canonical disinhibitory chain. At the CA2/3a border, VIP interneurons release enkephalin to mediate heterosynaptic plasticity underlying social memory {cite:p}`Leroy2021` — a mechanism that is neither classical disinhibition nor classical direct inhibition, and illustrates the extent to which hippocampal VIP outputs exploit non-GABA neuromodulatory transmission in a region-specific manner.

### Hippocampus–prefrontal coupling

Hippocampal VIP populations also participate in long-range coordination with prefrontal cortex. VIP interneurons contribute to avoidance behaviour by regulating information flow across hippocampal–prefrontal networks {cite:p}`Lee2019`. Repeated ventral-hippocampal input stimulation persistently depresses VIP interneuron activity and potentiates SST activity in prefrontal cortex, revealing a circuit basis for impaired spatial working memory {cite:p}`Silverstein2025`. The α5-GABAA receptor subunit selectively localises to synapses formed by VIP- and calretinin-positive terminals onto somatostatin-expressing interneurons in CA1 hippocampus {cite:p}`Magnin2018`.

## Basolateral amygdala: contested primacy of disinhibition

### Anatomical substrate

VIP-immunoreactive interneurons in the rat amygdala occupy a distinct subpopulation within the local GABAergic complement, distinguishable from PV, CB, and CR populations {cite:p}`Muller2003,Muller2006` and varying systematically across pallial and subpallial amygdaloid nuclei with a consistent GABAergic phenotype {cite:p}`Salamanca2024`. In the mouse BLA, VIP cell density varies across BLA subdivisions and forms synaptic connections with precisely identifiable local targets {cite:p}`Rhomberg2018`. VIP neurons projecting from the BLA to the bed nucleus of the stria terminalis show sex differences in density {cite:p}`Morishita2025`, and nerve growth factor does not modulate aging-dependent VIP expression in the rat BLA despite effects on cholinergic innervation {cite:p}`Pereira2024`. At the level of the nucleus of the lateral olfactory tract — a structure closely associated with the amygdala — aging shifts NPY and VIP interneuron counts {cite:p}`Vaz2015`.

Cholinergic signalling modulates BLA VIP activity, possibly indirectly: ACh regulation of local GABAergic wiring engages VIP populations alongside SST and PV networks during stress-relevant behaviour, though nicotinic-receptor knockdown restricted to VIP neurons does not replicate the behavioural phenotype, suggesting indirect or muscarinic routes {cite:p}`Mineur2022`. Long-range subcortical VIP populations — a subset of dorsal raphe dopamine neurons expressing VIP — project to the central amygdala and ovBNST and are critical for survival-oriented vigilance {cite:p}`Guillaumin2025,Guillaumin2026`, illustrating that "amygdala VIP" includes both locally born and extrinsically arriving VIP fibres.

### Function: disinhibition of principal cells vs direct inhibitory channel

The functional description of BLA VIP is contested. The dominant in-vivo behavioural model is that VIP interneurons in the BLA implement adaptive disinhibitory gating: behaviourally relevant unconditioned stimuli during fear conditioning are represented through a precisely connected microcircuit of VIP, SST, and PV cells in which VIP disinhibition permits associative learning {cite:p}`Krabbe2019`. Under this model, causal perturbation of VIP during salient stimuli alters fear acquisition by altering SST-mediated inhibition of principal cells. The anatomical counter-claim, emerging from higher-resolution BLA connectivity work, is that a subset of BLA VIP cells corresponds to basket cells that provide direct perisomatic inhibition of principal neurons {cite:p}`Rhomberg2018`. Because BLA VIP density varies across subdivisions and most optogenetic tools do not separate VIP-BC from VIP-IS analogues, the same VIP-Cre perturbation can engage either channel depending on nucleus, viral spread, and projection target.

:::{admonition} Conflict — BLA VIP: disinhibitory gate vs direct inhibitory channel
:class: warning

- **{cite:t}`Krabbe2019`**: BLA VIP interneurons implement disinhibitory gating that permits associative fear learning via SST/PV→PYR control.
- **{cite:t}`Rhomberg2018`**: BLA VIP interneurons include a population of basket-like cells that directly inhibit principal neurons, not a uniform disinhibitory class.
- **Status**: partially resolved. Both populations are likely to coexist; the open question is which dominates the VIP-Cre fluorescence signal or behavioural perturbation used in causal learning experiments.
:::

## Striatum and basal ganglia

Striatal VIP interneurons are far less well characterised than hippocampal or cortical populations. Only 10 papers in the present cluster identify a striatal VIP focus, and only three were recovered in full text ({numref}`fig-sec9-region-evidence-coverage`). Dorsal-striatal single-cell RNA sequencing combined with Patch-seq confirmed that the striatum contains molecularly distinct interneuron populations whose relation to cortical classes is partial and non-isomorphic {cite:p}`MunozManchado2018`; VIP-expressing interneurons in the striatum appear in this map without clear evidence of a dominant VIP→SST/PV disinhibitory microcircuit of the cortical type. Transcription factor 4 loss reduces cortical VIP+ (and PV+, CST+) interneurons and striatal ChAT+ interneurons, linking developmental regulation of these cortical and striatal populations without requiring shared circuit function {cite:p}`Chen2023b`. Cortical-origin transplantation experiments into adult striatum produce interneurons with neurochemical properties that differ from striatal VIP residents, indicating different environmental programming {cite:p}`Bele1995`. The overall picture is that striatal VIP operates in a fundamentally different circuit architecture — one dominated by SPNs, cholinergic interneurons, and PV/SST/NPY/NOS interneuron classes — and resists direct mapping onto the cortical motif. The evidence is not that the cortical motif is disconfirmed in striatum; it is that it has not been demonstrated there.

## Thalamus and diencephalic contexts

### Sensory and relay thalamus

Classical thalamus lacks locally born GABAergic interneurons in rodents outside the LGN, so "thalamic VIP" effects must be considered in two separate senses: (i) VIP released from cortical or brainstem axons onto thalamocortical relay neurons, and (ii) VIP-expressing local neurons in structures classed under "thalamus" in the broad sense (e.g. lateral geniculate interneurons, reticular thalamic populations). In the first sense, VIP excites mouse thalamocortical relay neurons via VPAC2 receptors {cite:p}`Lee2006`, and peptide histidine isoleucine (PHI) exerts excitatory actions on thalamic relay neurons also via VPAC2 — attenuating intrathalamic rhythmic activity and modulating information transfer to cortex {cite:p}`Lee2008`. These actions place VIP peptide signalling on the cellular list of modulators that shape thalamocortical state transitions.

Thalamocortical inputs onto cortical VIP cells are, in turn, substantial. VIP and SST neurons in mouse barrel cortex receive extensive functional thalamocortical input with limited laminar or cellular dependence {cite:p}`Feyerabend2025`. VIP cells in barrel cortex integrate thalamic drive alongside long-range cortical input via distinct perisomatic and distal-dendritic compartments {cite:p}`Sohn2016`, and brain-wide rabies tracing reveals a broad distribution of long-range input to VIP interneurons, including thalamic sources {cite:p}`Wall2016`. The relevant point for region comparison is that VIP cortical cells are not isolated from thalamus; they are among the principal cortical integrators of thalamic drive.

### Dorsal raphe and subcortical sources

A specialised subcortical VIP population sits in the dorsal raphe nucleus. A subset of DRN dopamine neurons co-express VIP and project to central amygdala and ovBNST, where they act within a feedback loop critical for survival-oriented vigilance {cite:p}`Guillaumin2025,Guillaumin2026`. This population does not fit the cortical interneuron template: it is long-range, releases dopamine (and potentially VIP), and acts on limbic targets at the level of neuromodulatory projection rather than local circuit disinhibition.

## Region × mechanism synthesis

{numref}`fig-sec9-region-mechanism-matrix` summarises, per region and per mechanistic motif, the number of cluster-9 papers that explicitly report that pairing. Several patterns are visible. First, hippocampus dominates both in total paper count (n = 48) and in mechanism diversity, with concurrent evidence for canonical disinhibition (9 papers), learning-related recruitment (6), VIP basket-cell involvement (3), and IS-cell targeting (2). Second, prefrontal cortex contributes evidence roughly balanced between disinhibition (2) and learning-related activity (2), with a single paper documenting a direct-inhibition channel via the ChAT-VIP subclass. Third, thalamus and "other" structures contribute direct-inhibition evidence at a rate similar to disinhibition evidence within their respective row totals, contrary to the expectation set by cortical literature. Fourth, the amygdala row contains zero paper-coding entries despite 17 cluster-9 amygdala papers — a coding artefact reflecting how individual amygdala studies were categorised when their primary framing was anatomical distribution or projection rather than a specific circuit mechanism. The practical reading is that amygdala evidence is present but currently annotated under categories that sit outside this five-column matrix; the conflict between {cite:t}`Krabbe2019` and {cite:t}`Rhomberg2018` is real and the empirical content above is primary.

:::{figure} ../figures/sec-09/fig_sec9_region_mechanism_matrix.png
:label: fig-sec9-region-mechanism-matrix
:align: center
:width: 95%
:alt: Region-by-mechanism paper-count matrix for cluster 9.

**Region × mechanism paper-count matrix across cluster-9 findings** ($n = 89$ papers). Rows: brain regions; columns: mechanistic/identity labels (disinhibition, direct inhibition, IS-cells, VIP basket cells, learning-related activity); cell annotation: number of cluster papers coded under that pairing. Cells show raw paper counts from this cluster, not mechanism prevalence — per-region denominators vary ~8-fold (6–48 papers; see {numref}`fig-sec9-region-evidence-coverage`). Mechanism categories are not mutually exclusive: a single paper may be counted under "disinhibition" and "learning" and under cell-type labels IS-cells/BC-cells. Full-text access rates vary across regions (30–77%), biasing mechanism detection toward higher-access regions. Coding is based on cluster curation rather than a systematic meta-analysis; amygdala evidence in particular is present but annotated under categories outside the matrix's five columns.
:::

### Evidence coverage is itself region-biased

The mechanism matrix must be read against the evidence-coverage profile. Per-region total paper counts vary from 48 (hippocampus) to 6 (other), and full-text retrieval rates vary from 77% (thalamus) to 30% (striatum) ({numref}`fig-sec9-region-evidence-coverage`). Two mechanisms of bias follow. First, a region with few papers — striatum, "other" — cannot display the full range of VIP motifs, independently of whether those motifs are expressed in that tissue. Second, regions with lower full-text access — striatum (30%), hippocampus (42%) — systematically underreport mechanisms that require reading the Methods or Results in detail to identify, biasing the matrix toward easily titled anatomical descriptions. Thalamus and prefrontal cortex have the highest full-text access, partly because of newer open-access literature, and are therefore over-represented in the fine-grained mechanism columns. The combined effect is that the matrix should be read as a map of where cluster-9 evidence concentrates, not as a map of where VIP biology concentrates.

:::{figure} ../figures/sec-09/fig_sec9_regional_evidence_coverage.png
:label: fig-sec9-region-evidence-coverage
:align: center
:width: 90%
:alt: Horizontal bar chart of per-region paper counts and full-text access for cluster 9.

**Per-region evidence coverage across cluster-9 papers.** Horizontal bars show total papers per region (grey) with the full-text-accessible fraction overlaid (VIP orange); annotation gives the full-text-to-total ratio and percentage. Full-text retrieval reflects API/publisher access at the time of curation, not evidence quality. The "other" bucket pools anatomically distinct minor regions. Regions with higher full-text access (thalamus 77%, prefrontal 73%) are mechanically better represented in the region × mechanism matrix ({numref}`fig-sec9-region-mechanism-matrix`) than regions with lower access (striatum 30%, "other" 33%).
:::

## What is region-specific and what is conserved?

Three features of the evidence support a partial-generality reading of the canonical cortical motif rather than full conservation.

**The VIP→SST/PV→PYR motif is conserved only in a subset of superficial-cortical and hippocampal-IS contexts.** Where the motif has been specifically tested with identified presynaptic and postsynaptic cells, it holds most clearly for cortical L2/3 non-ChAT VIP cells {cite:p}`Pi2013` and for hippocampal IS3 cells targeting OLM-type interneurons {cite:p}`Tyan2014,Francavilla2018a`. In these contexts, VIP activation reliably reduces inhibition on pyramidal dendrites and is recruited by reinforcement or salience signals.

**Within-class fractionation produces opposing effects on principal-cell output in the same region.** The hippocampal IS/VIP-BC/VIP-LRP split is the most formally established example, with opposing direct-inhibition versus disinhibition channels within CA1 {cite:p}`Acsady1996,Francavilla2018a,Rahimi2023a`. The ChAT-VIP/non-ChAT-VIP split produces an analogous sign reversal in cortex {cite:p}`Obermayer2019,Dudai2020`. BLA VIP cells show response heterogeneity, and whether an internal functional split comparable to the hippocampal or cortical cases exists remains to be determined {cite:p}`Rhomberg2018,Krabbe2019`. This pattern — stable marker, divergent circuit role — is the dominant conclusion of the regional comparison.

**Long-range VIP populations and peptidergic actions extend the VIP functional repertoire beyond local disinhibition.** Hippocampal VIP-LRP neurons {cite:p}`Francavilla2018a`, subiculum-projecting VIP cells {cite:p}`Luo2019`, CA2/3a VIP enkephalin release {cite:p}`Leroy2021`, dorsal raphe VIP/DA projections to amygdala and BNST {cite:p}`Guillaumin2025,Guillaumin2026`, and VIP-peptide actions on thalamocortical relays via VPAC2 {cite:p}`Lee2006,Lee2008` all operate outside the local disinhibition frame. A region-comparative model of VIP function therefore needs channels for long-range GABAergic projection, for peptidergic action on principal cells, and for co-transmission of ACh or enkephalin alongside GABA.

:::{admonition} Conflict — brain-state engagement across regions
:class: warning

- **{cite:t}`Francavilla2018a`**: a subset of CA1 VIP cells (VIP-LRP) is theta-OFF and disengaged during locomotor/exploration states dominated by theta.
- **{cite:t}`Lee2019`**: VIP interneurons are recruited across hippocampal–prefrontal networks during avoidance behaviour, contributing to information flow in states that include locomotor and approach components.
- **Status**: partially resolved. Theta-state engagement varies by VIP subclass within hippocampus, and the behavioural signal in {cite:t}`Lee2019` is driven by populations whose subclass identity is not fully resolved with VIP-Cre alone. This is the fourth cluster-level conflict and reinforces the within-class fractionation theme.
:::

## Implications for cross-region claims

For circuit models and behavioural interpretation, the regional evidence produces three working rules. First, VIP-Cre perturbations in hippocampus pool at least three functionally non-equivalent subclasses; outcomes are expected to reflect the numerical and state-dependent balance among IS, VIP-BC, and VIP-LRP cells in the specific sub-region and layer targeted {cite:p}`Francavilla2018a,Rahimi2023a,Tyan2014`. Second, VIP-Cre perturbations in mPFC and barrel cortex pool ChAT-VIP and non-ChAT-VIP subclasses with opposite signs of effect on pyramidal output; anatomical and optogenetic strategies that separate these populations yield clean interpretations, while population-level VIP-Cre results require explicit statements about which sub-population dominates the fluorescence signal {cite:p}`Obermayer2019,Dudai2020,Pi2013`. Third, amygdala and striatum remain under-sampled, and default assumptions imported from cortex should be treated as hypotheses {cite:p}`Krabbe2019,Rhomberg2018,MunozManchado2018`.

This view aligns with the broader argument developed elsewhere in this review that morphological and connectivity heterogeneity (see {ref}`sec-morphology`) underlies region-specific circuit logic (see {ref}`sec-circuit-motifs`), and that cross-species and primate work (see {ref}`sec-species-translation`) extends the same fractionation axis to primate VIP populations. The region × mechanism matrix shown here is a summary of where in the brain the canonical motif has been explicitly tested and where the evidence is dominated by anatomical description or state-level behavioural recruitment. The motif is not absent outside its cortical origin; it is present in specifiable subclasses within multiple regions, and it sits alongside non-disinhibitory VIP channels within those same regions.

:::{admonition} Caveats
:class: caution

The region synthesis in this section depends on three coding decisions that affect the numbers in {numref}`fig-sec9-region-mechanism-matrix`:

- Mechanism labels were assigned from abstracts and available full text; "disinhibition", "direct inhibition", "IS-cells", "VIP basket cells", and "learning-related activity" are not mutually exclusive, and a single paper often appears under multiple labels.
- Per-region denominators vary by roughly 8-fold across the six regions shown ({numref}`fig-sec9-region-evidence-coverage`); raw counts should not be compared across rows without reference to the coverage figure.
- Full-text access rates differ by region, biasing the detection of fine-grained mechanisms toward prefrontal cortex and thalamus relative to striatum or "other" structures.
- The amygdala row in the matrix is zero despite 17 amygdala papers in the cluster; the circuit-level mechanistic content of those papers is nevertheless integrated in the BLA text above and in the cluster-level conflict.
- The matrix is based on cluster curation rather than a systematic meta-analysis with a predeclared inclusion rubric, and should be read as a descriptive index of the cluster, not a quantitative meta-analytic summary.
:::

## Summary

The evidence assembled in this section establishes the following adjudicated picture. The canonical cortical VIP→SST/PV disinhibitory motif {cite:p}`Pi2013` is one specific channel within a more diverse regional portfolio. In hippocampus, VIP comprises at least three anatomically and functionally distinct subclasses (IS, VIP-BC, VIP-LRP) whose effects on principal-cell output are partly opposing {cite:p}`Francavilla2018a,Rahimi2023a,Tyan2014`. In prefrontal cortex, the ChAT-co-expressing VIP subclass directly excites pyramidal neurons via cholinergic transmission, contradicting the disinhibitory default within the same marker {cite:p}`Obermayer2019`. In BLA, disinhibitory gating {cite:p}`Krabbe2019` and direct perisomatic inhibition {cite:p}`Rhomberg2018` are both supported and the relative dominance is contested. Striatal and subcortical VIP populations operate in architectures that do not map cleanly onto the cortical motif {cite:p}`MunozManchado2018`. A region × mechanism analysis ({numref}`fig-sec9-region-mechanism-matrix`) shows that the canonical motif is concentrated in hippocampal and prefrontal cortical subclasses, while direct-inhibition and non-disinhibitory channels appear across multiple regions including thalamus and "other" structures. Evidence coverage is itself region-biased ({numref}`fig-sec9-region-evidence-coverage`), and the practical effect is that cortex-based canonical claims generalise only to specific subclasses in specific contexts; region-specific evidence — rather than region-agnostic defaults — should structure VIP-interneuron interpretations across systems.
