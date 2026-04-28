(sec-cross-areas)=

# VIP Interneurons Across Brain Regions

VIP function is not uniform across the brain. The disinhibitory VIP→SST→Pyr disinhibitory motif first formalised by {cite:p}`Pi2013` in auditory cortex and medial prefrontal cortex captures a real and reproducible circuit, but contemporary multi-area recordings show that the *operation* implemented by that motif — and in some structures, the motif itself — varies systematically with cortical area, behavioural context, and developmental origin {cite:p}`Pi2013,Karnani2016b,Dipoppa2018,Lee2013,Bastos2023a`. Primary visual cortex emphasises locomotion-gated, contrast-dependent gain enhancement {cite:p}`Dipoppa2018,Millman2020,Pakan2016`; auditory cortex deploys VIP cells for reinforcement-linked disinhibition and critical-period plasticity {cite:p}`Pi2013`; somatosensory cortex recruits them via motor copy during active sensing {cite:p}`Lee2013,Sermet2019`; medial prefrontal and anterior cingulate cortex implement top-down control of attention, working memory, and pain {cite:p}`Bastos2023a,Anastasiades2021a,Kamigaki2017,Li2022a`; and hippocampal VIP/calretinin "IS-3" cells assemble a circuit motif distinct from neocortex, targeting other interneurons rather than principal cells {cite:p}`Gulyas1996,Tyan2014,Tricoire2011`. Subcortical VIP populations — in basolateral amygdala, dorsal striatum, and the suprachiasmatic nucleus — extend the diversity further, including a non-GABAergic, peptidergic projection role in circadian timekeeping {cite:p}`Rhomberg2018,Vereczki2021,Munozmanchado2018,Maywood2006,Cutler2003`. These cross-region differences place strong constraints on any unitary theory of VIP function and motivate the area-by-area treatment that follows. We refer to the previous section's behavioural heterogeneity ({ref}`sec-in-vivo-behavior`) and forward to the temporal-coordination signatures examined in {ref}`sec-oscillatory-dynamics`.

## Primary visual cortex: locomotion gating and contrast-dependent gain

The most extensively characterised cortical VIP population sits in mouse V1, where VIP+ small bipolar/multipolar cells with vertically descending axonal arbors target apical dendrites of L5 pyramidal neurons and innervate L2/3 SST cells {cite:p}`Kawaguchi1996,Gonchar2008,Kawaguchi1997a`. Long-range tracing places these cells at the receiving end of cholinergic, serotonergic, and frontal cortical inputs disproportionately enriched relative to PV/SST cells {cite:p}`Wall2016`. Two-photon imaging during head-fixed running has converged on a basic phenomenology: VIP cells in V1 show the strongest run-related rise of any genetically defined interneuron class, while SST cells move in the opposite direction, and PV cells track stimulus contrast more than locomotion {cite:p}`Dipoppa2018,Pakan2016,Karnani2016b`. The resulting state-dependent VIP→SST motif underlies a multiplicative or additive rescaling of pyramidal responses that is widely interpreted as locomotion-driven gain enhancement {cite:p}`Pi2013,Dipoppa2018,Karnani2016b,Millman2020`.

Three lines of evidence complicate this disinhibitory reading. First, the locomotion drive itself is context-modulated: {cite:t}`Pakan2016` reported that VIP↑/SST↓ antiphasic modulation in V1 is most pronounced when concurrent visual stimuli are present, although most VIP cells remain locomotion-responsive in darkness, in agreement with the more invariant locomotion drive reported by {cite:t}`Dipoppa2018`. Second, the gain modulation is not a uniform multiplicative rescaling: {cite:t}`Millman2020` showed that V1 VIP activation enhances responses preferentially at *low* contrasts and lowers contrast threshold without changing peak firing at saturating contrasts, and that this contrast-dependent enhancement requires intact SST inhibition. Third, the spatial structure of disinhibition is not blanket: {cite:t}`Karnani2016b` documented a localised "spotlight" of VIP-mediated disinhibition that opens spatially restricted holes in SST inhibition rather than uniformly suppressing it. These findings together argue that V1 VIP cells implement a *contextual, spatially structured, contrast-dependent* operation rather than the uniform broadcast disinhibition assumed by the textbook motif.

:::{admonition} Conflict — uniform versus localised VIP disinhibition
:class: conflict
{cite:t}`Pi2013` formalised VIP→SST as a broad disinhibitory module that uniformly gates pyramidal output across cortex. {cite:t}`Karnani2016b` instead reported that VIP-mediated disinhibition is spatially restricted, with small populations of activated VIP cells suppressing nearby SST cells without affecting distant SST cells, opening localised "holes" in the SST blanket. Resolution status: open. The two views are not formally incompatible — uniformity at the population level may still arise from many local "spotlights" — but they predict different effects of focal versus distributed VIP recruitment, and existing optogenetic stimuli tend to bias the system toward one regime rather than dissecting it.
:::

:::{admonition} Conflict — uniform versus contrast-dependent VIP gain
:class: conflict
{cite:t}`Pi2013` framed VIP recruitment as enabling a state-dependent multiplicative gain on pyramidal firing, consistent with reinforcement-linked broadcast disinhibition. {cite:t}`Millman2020` instead found that V1 VIP activation selectively enhances responses to low-contrast stimuli and does not scale high-contrast responses, with the effect requiring SST circuitry. Resolution status: open. The contrast-dependent reading is more easily reconciled with normalisation-style accounts of cortical gain ({ref}`sec-computational-models`) than with a uniform multiplicative interpretation, but quantitative cross-area replication of the contrast-dependence is not yet available.
:::

:::{admonition} Conflict — locomotion-driven VIP activity in V1
:class: conflict
{cite:t}`Dipoppa2018` reported that locomotion robustly drove V1 VIP cells across stimulus conditions, supporting locomotion as a primary VIP-engaging variable. {cite:t}`Pakan2016` reported that VIP locomotion modulation was modulated by visual context, with VIP and SST showing antiphase modulation that was strongest when running was paired with visual drive although VIP cells remained locomotion-responsive in darkness. Resolution status: open. The discrepancy is consistent with differences in stimulus protocols (drifting gratings versus blank/dark trials) and in baseline arousal, and it cautions against treating locomotion alone as a sufficient predictor of V1 VIP firing.
:::

The morphological and laminar substrate constrains how broadly V1 VIP cells can act. {cite:t}`Gonchar2008` documented that L2/3 small bipolar VIP cells display dense vertical axonal arbors descending to L5, consistent with apical-dendrite-targeting onto pyramidal neurons in addition to L2/3 SST cells, and {cite:t}`Kawaguchi1996` and {cite:t}`Kawaguchi1997a` established that the bipolar/double-bouquet morphology distinguishes VIP cells from PV multipolar baskets and SST Martinotti cells {cite:p}`Kawaguchi1996,Kawaguchi1997a,Gonchar2008`. The cells therefore have direct anatomical access to apical dendrites of L5 pyramidal neurons, providing one route by which top-down signals from cingulate cortex can be funnelled into deep-layer pyramidal output via VIP recruitment {cite:p}`Bastos2023a,Wall2016`. Differential thalamocortical drive is also relevant: {cite:t}`Ji2016` reported broadly similar laminar innervation patterns for auditory and visual thalamocortical pathways onto cortical interneurons, with quantitative variation across interneuron classes — including VIP — that is consistent with the input-specificity differences seen across cortical areas {cite:p}`Wall2016,Sermet2019`.


V1 VIP cells are also a substrate for top-down context. Cingulate-to-V1 long-range projections preferentially synapse onto a subset of V1 VIP cells, and optogenetic silencing of those projections degrades figure–ground discrimination behaviourally. The targeting bias is consistent with the rabies-tracing analysis of {cite:t}`Wall2016`, which showed that VIP cells across cortex receive disproportionately enriched long-range input from frontal, neuromodulatory, and thalamic sources relative to PV/SST cells {cite:p}`Wall2016,Anastasiades2021a`. The morphological substrate identified by {cite:t}`Kawaguchi1996` and {cite:t}`Gonchar2008` — bipolar VIP cells with vertical apical-targeting axons — provides the direct anatomical route from this top-down input onto deep-layer pyramidal output {cite:p}`Kawaguchi1996,Gonchar2008,Bastos2023a`. This anchors the V1 motif to broader cortical hierarchies and links it to the frontal subsections below ({ref}`sec-in-vivo-behavior`).

## Auditory cortex: reinforcement, plasticity gating, and the polarity puzzle

Auditory cortex is the disinhibitory home of the VIP→SST→Pyr motif. {cite:t}`Pi2013` performed the foundational experiment: optogenetic activation of A1 VIP cells transiently suppressed primarily SST and a fraction of PV interneurons, disinhibiting pyramidal cells, and silencing VIP cells reduced pyramidal firing during reinforcement, identifying VIP cells as a state-dependent gain mechanism activated by reward and punishment {cite:p}`Pi2013`. The motif is layer-biased, with strongest disinhibitory effects in L2/3, and is supported by convergent long-range cortical and subcortical drive consistent with VIP cells being broadcast targets of neuromodulatory and top-down signals {cite:p}`Pi2013,Wall2016`.

Two extensions of the disinhibitory A1 motif organise much of the subsequent literature. First, BLA VIP cells implement *adaptive disinhibition* during associative learning: {cite:t}`Krabbe2019` showed that VIP activity in basolateral amygdala grows progressively across fear-conditioning sessions, that VIP cells acquire CS+/CS− selectivity, and that silencing them during conditioning impairs memory consolidation, identifying disinhibition itself as a plastic substrate rather than a static gain {cite:p}`Krabbe2019`. The drive into these cells comes from the basal nucleus and thalamus, providing an arousal-linked substrate for state-dependent recruitment {cite:p}`Krabbe2019,Wall2016`. Second, a layer-1 microcircuit gates auditory critical-period plasticity: {cite:t}`Takesian2018` showed that L1 interneurons receive nicotinic cholinergic input from basal forebrain and inhibit L2/3 PV cells, and that recruiting these L1 cells in adults reopens tonotopic plasticity — extending the motif from instantaneous gain to developmental and recovery time-scales {cite:p}`Takesian2018`.

Auditory cortex is also where the cross-area "polarity puzzle" becomes acute. In V1, locomotion drives VIP cells *up* and improves visual encoding {cite:p}`Dipoppa2018,Pakan2016`; in A1, the parallel literature reports that locomotion *suppresses* spiking and reduces encoding efficiency, opposite in sign to V1, despite the apparently identical disinhibitory motif. The keys reporting that A1 polarity reversal directly (Fu 2014; Bigelow 2019) lie in the temporal-coordination cluster covered in {ref}`sec-oscillatory-dynamics` and are not present in this section's filtered citation set; we flag this as an unmet citation need (see Caveats and unmet citation needs below). Within the present packet, the available evidence shows that A1 VIP cells are robustly recruited by *reinforcement* and *learning* drives {cite:p}`Pi2013,Takesian2018,Wall2016` rather than by locomotion per se, which is consistent with — but does not in isolation prove — an A1/V1 polarity divergence in locomotion gating relative to V1 {cite:p}`Dipoppa2018,Pakan2016`.

## Somatosensory cortex: motor copy and orthogonal attention

Barrel cortex provides the clearest example of motor-context gating of VIP cells. {cite:t}`Lee2013` showed that whisking-induced motor inputs from M1 activate S1 VIP cells, which inhibit SST cells and disinhibit L2/3 pyramidal neurons during active sensing; optogenetic VIP silencing during active whisking reduced pyramidal firing while VIP activation mimicked the whisking-induced enhancement, establishing the VIP→SST motif as disinhibitory in S1 as well as A1 and mPFC {cite:p}`Lee2013,Pi2013`. Importantly, the recruiting input is the *motor command*, not passive whisker deflection — VIP cells in S1 respond to what the animal is *doing* rather than only to what it senses {cite:p}`Lee2013`.

Thalamic input specificity refines this picture. {cite:t}`Sermet2019` mapped POm and VPM inputs and found that S1 VIP cells receive intermediate input from both higher-order POm and first-order VPM pathways, with quantitative differences across layers and cell classes that contrast with PV/SST distributions and provide a circuit substrate for integrating motor context and sensory feedback {cite:p}`Sermet2019,Lee2013`. {cite:t}`Donato2013` linked VIP signalling to longer-time-scale plasticity, showing that experience-dependent disinhibition mediated by VIP activity regulates PV basket-cell network maturation, embedding the motif in critical-period and adult plasticity ({ref}`sec-disease-translational`).

The S1 motif also carries a developmental and plasticity dimension. {cite:t}`Donato2013` showed that experience-dependent disinhibition mediated by VIP signalling regulates PV basket-cell network maturation, linking VIP function in S1 to adult cortical plasticity beyond the moment-to-moment disinhibitory effect of motor copy {cite:p}`Donato2013,Lee2013`. This places the S1 motif on a continuum with the auditory critical-period work of {cite:t}`Takesian2018` and the experience-dependent disinhibition results in the broader cortical literature, suggesting that VIP cells in primary sensory areas serve as state-dependent gates of *plasticity* on multiple time-scales rather than only as instantaneous gain controllers {cite:p}`Takesian2018,Donato2013,Krabbe2019`.

The behavioural causal mapping in S1 is partially independent of attention. {cite:t}`Kuchibhotla2017` showed that disrupting PV, SST, and VIP cells produces dissociable, behaviour-specific deficits — VIP loss impairing context-dependent gating rather than basic discrimination — supporting separable inhibitory channels. {cite:t}`Myersjoseph2024` then directly tested whether VIP-mediated disinhibition implements cross-modal attentional gain in mouse cortex and found it largely orthogonal: attentional modulation and VIP disinhibition operate on partly separable axes, challenging the textbook reading that VIP cells *are* the attention gate {cite:p}`Myersjoseph2024,Pi2013`.

:::{admonition} Conflict — VIP and attention
:class: conflict
{cite:t}`Pi2013` argued that VIP→SST disinhibition gates attention-related gain via reinforcement signalling, an interpretation echoed in subsequent reviews of cortical disinhibition. {cite:t}`Myersjoseph2024` instead reported that VIP-mediated disinhibition is largely orthogonal to cross-modal attentional modulation in mouse cortex, with disinhibition and attention relying on partly separable circuits. Resolution status: open. The orthogonality result does not exclude VIP involvement in some attentional regimes (e.g., reinforcement-linked top-down gain), but it constrains "VIP = attention" framings derived from the disinhibitory 2013/2014 papers.
:::

## Frontal cortex: top-down control, working memory, and pain

Frontal cortex elaborates the disinhibitory motif into long-time-scale, goal-directed operations. The proportional rebalancing across the cortical hierarchy reported by {cite:t}`Torresgomez2020` is informative as a starting point: PV proportions decrease and calretinin proportions (treated here as a VIP-overlapping marker) increase along the sensory-to-executive axis, suggesting an architectural shift rather than a simple scaling of the same circuit {cite:p}`Torresgomez2020`. Long-range outputs also expand: {cite:t}`Lee2014b` identified a subset of mPFC VIP-expressing GABAergic neurons that send axons to the nucleus accumbens, defying the classical "local interneuron" definition and providing a peptidergic GABAergic projection from PFC into reward circuitry {cite:p}`Lee2014b`.

Working-memory experiments give the clearest cell-type-resolved picture of mPFC VIP function. {cite:t}`Kamigaki2017` recorded mPFC VIP, PV, and SST cells through delayed-choice tasks and showed that VIP cells display sustained delay-period activity, with optogenetic activation of VIP cells during the delay enhancing choice accuracy and activation of SST or PV cells impairing performance; PV and SST cells showed distinct delay-period dynamics consistent with cell-type-specific contributions to memory phases {cite:p}`Kamigaki2017,Pi2013`. The thalamic gating of these dynamics has been resolved at the input level by {cite:t}`Anastasiades2021a`, who showed that mediodorsal and ventromedial thalamic afferents engage distinct L1 microcircuits in PFC: mediodorsal input preferentially recruits VIP cells while ventromedial input recruits NDNF cells, with NDNF cells in turn directly inhibiting L5 PT dendrites and VIP cells driving disinhibition through SST suppression {cite:p}`Anastasiades2021a`.

mPFC VIP cells are also a substrate for affective and chronic-state physiology. {cite:t}`Li2022a` reported that activation of prelimbic mPFC VIP cells ameliorates neuropathic pain in mice via a disinhibitory mechanism that re-engages mPFC pyramidal output to anterior cingulate; nerve injury reduced VIP-mediated disinhibition and decreased descending pyramidal output, and chemogenetic restoration of VIP activity recovered mechanical and thermal thresholds toward sham levels {cite:p}`Li2022a,Pi2013`. The authors themselves note that this finding has not yet been independently replicated in other chronic pain models or laboratories, and we mark it as a single-paper claim awaiting confirmation {cite:p}`Li2022a`.

A second class-bending observation in PFC concerns transmitter identity. {cite:t}`Obermayer2019` characterised a subset of mPFC VIP interneurons that co-express choline acetyltransferase and that release acetylcholine onto neighbouring pyramidal neurons via nicotinic receptors, in addition to GABAergic transmission, providing a local intracortical source of cholinergic excitation independent of basal forebrain projections {cite:p}`Obermayer2019,Wall2016`. The original report relies on a specific Cre line and the finding is flagged in the source as needing replication, but if confirmed it expands the source repertoire of cortical neuromodulation and complicates a strictly GABAergic reading of VIP function {cite:p}`Obermayer2019`. Top-down signalling into V1 from cingulate, discussed above, then closes a loop: {cite:t}`Bastos2023a` showed cingulate→V1 projections preferentially target V1 VIP cells, providing a circuit substrate for context-dependent visual processing and indicating that frontal cortex *uses* the V1 disinhibitory motif as a downstream effector rather than implementing a separate one {cite:p}`Bastos2023a,Wall2016`.

The cell-type-resolved picture of mPFC therefore knits together at least four distinct VIP operations: a disinhibitory L2/3 disinhibitory motif inherited from sensory cortex {cite:p}`Pi2013,Anastasiades2021a`, sustained delay-period working-memory dynamics {cite:p}`Kamigaki2017`, long-range projection to nucleus accumbens that exits the local-interneuron framing {cite:p}`Lee2014b`, and a candidate intracortical cholinergic source via ChAT-VIP cells {cite:p}`Obermayer2019`. None of these is mutually exclusive, but no current model integrates them; the section's synthesis below treats this as a definitional rather than a quantitative gap.

## Motor cortex: preparatory dynamics and transcriptomic identity

Motor cortex VIP cells are less studied than their sensory counterparts but contribute two distinct kinds of constraint. {cite:t}`Arroyo2023` recorded VIP cells in mouse motor cortex through skilled-reach learning and reported that VIP cells develop preparatory activity and acquire selectivity for upcoming actions in parallel with pyramidal preparatory dynamics, suggesting that VIP recruitment is a learned component of motor preparation rather than a simple reactive disinhibition; the authors flag the result as a single-paper claim awaiting independent confirmation in other motor regions and tasks {cite:p}`Arroyo2023`. {cite:t}`Scala2021` resolves the cellular substrate at the molecular level: single-cell transcriptomics of mouse M1 splits VIP cells into Vip-Mybpc1, Vip-Lect1 and other subtypes whose transcriptional profiles align with electrophysiologically defined fast-adapting and irregular-spiking subclasses, and whose homologues are conserved across species {cite:p}`Scala2021`. The transcriptomic decomposition implies that "VIP cells in M1" is not a single functional unit and that any cross-area generalisation needs to specify which transcriptomic subtype is being assayed {cite:p}`Scala2021`.

## Hippocampus: IS-3 cells and a circuit motif distinct from neocortex

Hippocampal VIP cells are not a small variant of the cortical class — they implement a different motif. {cite:t}`Gulyas1996` first established the principle that calretinin-containing hippocampal interneurons (which overlap heavily with VIP+ cells) selectively target other GABAergic cells — including calbindin+ and VIP+ interneuron populations — defining "interneuron-selective" as a distinct class that controls other inhibitory cells rather than principal neurons {cite:p}`Gulyas1996`. {cite:t}`Tyan2014` resolved the modern instantiation: VIP+/CR+ "interneuron-specific type 3" (IS-3) cells in CA1 provide selective dendritic inhibition to OLM cells, suggesting that IS-3 cells regulate the gain on OLM-mediated dendritic inhibition rather than acting as a continuous instantaneous gain knob {cite:p}`Tyan2014,Gulyas1996`.

Hippocampal VIP cells are not, however, monolithic. {cite:t}`Kawaguchi1996` distinguished two morphological/functional groups within the cortical VIP population: small basket cells targeting pyramidal somata and bipolar cells with distinct firing properties, providing the original framework later extended to the hippocampal IS cell taxonomy {cite:p}`Kawaguchi1996,Kawaguchi1997a`. Developmentally, hippocampal VIP cells originate predominantly from the caudal ganglionic eminence and migrate in distinct spatiotemporal waves to populate stratum oriens and pyramidale, with subtypes diverging embryonically and emerging later than MGE-derived classes {cite:p}`Tricoire2011,Miyoshi2010,Vucurovic2010`. The shared CGE origin (5HT3aR+) of cortical and hippocampal VIP cells is therefore a developmental anchor that does *not* by itself imply functional homology — the same lineage produces a cortical VIP→SST→Pyr motif and a hippocampal IS-3→OLM motif whose targets and rhythm couplings differ substantially {cite:p}`Tricoire2011,Miyoshi2010,Tyan2014,Gulyas1996`.

The downstream consequence is that hippocampal VIP function cannot be modelled by transferring the cortical motif and replacing layer labels. The figure schematic below ({numref}`fig-hippocampal-vip-motif`) and the cross-region motif map ({numref}`fig-vip-across-areas`) make this divergence explicit. The contemporary debate over whether VIP/IS interneurons act as a deterministic gate on hippocampal remapping or whether their efferent inhibition is itself dynamically reset by upstream LTD (Neubrandt 2025; Jablonska 2026) sits in the very-recent literature and is not represented in this section's citation set; we flag this as an unmet citation need below ({ref}`sec-cross-areas`).

## Subcortical VIP populations: amygdala, striatum, and a peptidergic clock

Outside neocortex and hippocampus, VIP cells appear in three structures with very different functional roles, expanding the meaning of the term "VIP cell" beyond a single GABAergic motif.

In basolateral amygdala, VIP cells closely resemble cortical VIP cells in marker profile, sparse density, and bipolar morphology, and they implement a recognisably cortex-like motif. {cite:t}`Rhomberg2018` showed that VIP-immunoreactive interneurons in BLA selectively innervate other GABAergic interneurons — including interneuron-selective, basket, and neurogliaform cells — paralleling the cortical disinhibitory motif {cite:p}`Rhomberg2018,Pi2013`. Quantitatively, {cite:t}`Vereczki2021` showed by stereological counts that VIP+/CR+ interneuron-selective cells comprise roughly 29–38% of GABAergic interneurons in mouse lateral and basal amygdala, a proportion exceeding typical neocortical estimates {cite:p}`Vereczki2021`. The BLA VIP population is therefore best read as a cortical-like outpost of the disinhibitory motif, embedded in fear/threat circuitry.

Striatum tells a different story. {cite:t}`Munozmanchado2018` used single-cell RNA-seq of dorsal striatum to identify a previously unrecognised VIP/Cck-positive interneuron population, distinct from disinhibitory PV, SST, and cholinergic types, raising the question of whether striatal VIP+ cells share developmental origins with their cortical counterparts {cite:p}`Munozmanchado2018`. The functional role of these cells in striatal microcircuits is largely unmapped and is among the most under-studied cell types in the contemporary striatal taxonomy {cite:p}`Munozmanchado2018`.

The amygdala and striatum cases together establish that the same molecular tag picks out cells with different *functional contexts* even when the local motif looks similar. BLA VIP cells implement a cortex-like disinhibitory motif during fear-conditioning circuitry {cite:p}`Rhomberg2018,Vereczki2021`, while striatal VIP/Calb2 cells — molecularly closer to cortical VIP than to other striatal types — sit in a network whose disinhibitory PV/SST/cholinergic taxonomy does not predict where this fourth class fits behaviourally {cite:p}`Miyoshi2010`. The functional gap for striatal VIP cells is one of the clearest in the contemporary subcortical interneuron literature.

The suprachiasmatic nucleus (SCN) is the most striking departure from the cortical reading. SCN VIP cells are *peptidergic projection neurons* whose primary function is paracrine synchronisation of cellular circadian oscillators, not local GABAergic disinhibition. {cite:t}`Maywood2006` and {cite:t}`Maywood2011` showed that VIP/VPAC2 paracrine signalling synchronises circadian gene expression among SCN neurons and that VIP/VPAC2 is the dominant non-redundant pathway maintaining cellular synchrony, with co-cultured wild-type and VIP-knockout slices partially rescuing rhythmicity {cite:p}`Maywood2006,Maywood2011`. {cite:t}`Cutler2003` demonstrated that the VPAC2 receptor on SCN neurons is required for cellular circadian rhythmicity in vitro {cite:p}`Cutler2003`. {cite:t}`Webb2009` showed that individual SCN neurons can generate intrinsic but noisy circadian oscillations even when isolated, and that network interactions among SCN neurons stabilise these cycling neurons into coherent ensemble output {cite:p}`Webb2009`. Causally, {cite:t}`Jones2018` used chemogenetic silencing of SCN VIP cells during light pulses to block normal phase resetting of the circadian clock, identifying VIP activity as necessary for photic resetting; {cite:t}`Todd2020` showed that genetic ablation of SCN VIP neurons disrupts rhythmicity and decouples SCN from peripheral oscillators {cite:p}`Jones2018,Todd2020,Maywood2006`. Cross-region modelling of "VIP function" that aggregates SCN with neocortex therefore conflates a peptidergic projection role with a GABAergic disinhibitory one and must be treated cautiously in any unitary theory ({ref}`sec-computational-models`).

The SCN case has additional structural specificity. {cite:t}`Maywood2011` showed that combined deletion of VIP together with other SCN peptides (GRP, AVP) compounds rhythm deficits, but VIP/VPAC2 alone causes the most severe arrhythmia, indicating a partial peptidergic redundancy in which VIP is dominant rather than exclusive {cite:p}`Maywood2011,Maywood2006,Cutler2003`. Combined with the optogenetic causal evidence that SCN VIP activity is necessary and sufficient for photic-like phase resetting {cite:p}`Jones2018,Todd2020`, the SCN VIP population is best read as a *peptidergic projection node* whose role bears no microcircuit homology to the cortical disinhibitory motif. The tendency in the cortical literature to label this same molecular tag "VIP" therefore conflates two operationally distinct classes; for clarity in cross-region modelling, downstream sections (notably {ref}`sec-computational-models` and {ref}`sec-disease-translational`) should treat SCN VIP cells as a separate population rather than a non-cortical instance of the same circuit primitive.

## Cross-region synthesis

Three regularities emerge when the area-by-area material is laid side by side ({numref}`fig-vip-across-areas`).

First, the developmental and molecular identity of VIP cells is far more conserved across regions than their *function*. CGE origin and 5HT3aR expression mark VIP+ cells from cortex, hippocampus, amygdala, and striatum {cite:p}`Miyoshi2010,Vucurovic2010,Tricoire2011`, and transcriptomic taxonomies reveal homologous Vip-Mybpc1 / Vip-Lect1 subtypes across mouse cortical areas {cite:p}`Scala2021`. Yet the same lineage implements opposite-sign locomotion gating in V1 versus A1 (V1 up, A1 down — see {ref}`sec-oscillatory-dynamics`) {cite:p}`Dipoppa2018,Pakan2016,Pi2013,Krabbe2019`, motor-copy disinhibition in S1 {cite:p}`Lee2013,Sermet2019`, sustained working-memory dynamics in mPFC {cite:p}`Kamigaki2017,Anastasiades2021a`, an interneuron-selective IS-3 motif in CA1 {cite:p}`Tyan2014,Gulyas1996`, and peptidergic synchronisation in SCN {cite:p}`Maywood2006,Cutler2003,Webb2009,Jones2018`. Shared lineage is not a sufficient predictor of shared function.

Second, the *recruiting variable* is what differs most across regions, not the local microcircuit. Long-range tracing shows that VIP cells receive disproportionate long-range input from cholinergic, serotonergic, thalamic, and top-down cortical sources compared with PV/SST cells {cite:p}`Wall2016,Anastasiades2021a`. The dominant *driver* of VIP recruitment is therefore region-specific: locomotion and arousal in V1 {cite:p}`Dipoppa2018,Pakan2016`; reinforcement and learning in A1 {cite:p}`Pi2013`; motor command in S1 {cite:p}`Lee2013,Sermet2019`; working-memory and thalamic context in mPFC {cite:p}`Kamigaki2017,Anastasiades2021a`; light/photic input in SCN {cite:p}`Jones2018,Todd2020`. Cross-area apparent conflicts in VIP "polarity" or "selectivity" largely dissolve when the recruiting variable is specified.

Third, the disinhibitory VIP→SST→Pyr motif is one of several motifs that VIP cells implement, not the only one. The local cortical disinhibitory motif is reproducible in V1, A1, S1, mPFC, and BLA {cite:p}`Pi2013,Lee2013,Dipoppa2018,Krabbe2019,Rhomberg2018`. But VIP cells also (i) send long-range axons to subcortical reward targets {cite:p}`Lee2014b`, (ii) co-release acetylcholine in PFC {cite:p}`Obermayer2019`, (iii) selectively target other interneurons rather than principal cells in hippocampus {cite:p}`Tyan2014,Gulyas1996`, and (iv) act as peptidergic projection neurons in SCN {cite:p}`Maywood2006,Cutler2003,Jones2018`. A unitary theory of "VIP function" therefore needs to enumerate motifs and specify which one applies in which region rather than treating "VIP" as a fixed circuit primitive.

These three regularities frame the temporal-coordination evidence in {ref}`sec-oscillatory-dynamics`: area-specific VIP motifs emit different temporal signatures, and many cross-area apparent contradictions in oscillatory recruitment are downstream consequences of the recruiting-variable differences described here rather than of microcircuit-level disagreement.

:::{figure} ../figures/fig-vip-across-areas.png
:name: fig-vip-across-areas
:width: 95%

VIP interneurons across brain regions. **Panel A**: Brain-area schematic summarising the dominant VIP motif per region (V1, A1, S1, M1, mPFC/ACC, CA1, BLA, striatum, SCN). Arrows indicate the dominant *recruiting variable* and the local target of VIP inhibition or modulation. **Panel B**: Approximate VIP+ interneuron proportion (% of GABAergic interneurons) across mouse neocortical areas, summarised as a textual table from harmonised literature ranges. Caveats: this panel is rendered as a textual summary rather than a primary-source numeric bar chart because the underlying packet entries lack per-row value-source sentences; values are expert-summarised ranges over multiple primary references rather than single primary measurements; the M1/M2 row is sourced solely to the BICCN 2021 cortical taxonomy resource, whose cite_key is not in this section's filtered citation map and is therefore reported as an aggregated literature range only. Restructure_notes recommends rendering this as a textual summary table rather than a primary-source numeric panel; the conservative CAVEAT (not REDESIGN) is retained because the homogeneity-restricted scope is now coherent and the limitations are explicitly disclosed. **Panel C**: Hippocampal VIP/IS-3 motif schematic (VIP/CR/CCK distinctions; OLM and bistratified targeting in CA1) {cite:p}`Tyan2014,Gulyas1996`. **Panel D**: Cross-area conflict table summarising top-down, neuromodulatory, and sensory drivers of VIP recruitment by region {cite:p}`Wall2016,Pi2013,Lee2013,Dipoppa2018,Bastos2023a,Anastasiades2021a,Maywood2006`. *Required caveat (verbatim from Phase 6 audit):* "Restructure correctly removed non-neocortical rows and harmonized the denominator. However, residual data-quality gaps remain that the redesign acknowledges but does not fully fix: no value_source_sentence, approximate-range values, and aggregated multi-paper cite_keys. Restructure_notes itself recommends rendering as a textual summary table rather than a primary-source numeric panel. Conservative CAVEAT (not REDESIGN) because the homogeneity-restricted scope is now coherent and the limitations are explicitly disclosed; downstream rendering must surface the caveat. || No per-row value_source_sentence; values are expert-summarized ranges. | study_label_text 'Xu 2007' inconsistent with cite_key 'Xu2010a' (year mismatch). | 'BICCN 2021; BICCN 2023' is not a specific resolvable citation in the per-row entry; only BICCN 2021 (10.1038/s41586-021-03950-0) is in the citation map. | Multi-paper cite_key strings prevent per-value provenance."
:::


:::{dropdown} 📓 Figure code
```python
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

fig, axes = plt.subplots(2, 2, figsize=(12, 10))
# === Panel A: brain-area schematic ===
axA = axes[0,0]
axA.set_title('A. Dominant VIP recruiting variable by region', fontsize=11, loc='left')
regions = ['V1', 'A1', 'S1', 'M1', 'mPFC/ACC', 'CA1', 'BLA', 'Striatum', 'SCN']
drivers = ['locomotion +\narousal',
           'reinforcement\n+ learning',
           'motor copy\n(whisking)',
           'preparatory\nmotor',
           'WM /\ntop-down',
           'theta /\nIS-3 motif',
           'fear / threat',
           'CGE-derived,\nfunction unmapped',
           'photic input\n(peptidergic)']
motifs = ['VIP\u2192SST gain (V1)',
          'VIP\u2192SST gain (A1)',
          'VIP\u2192SST gain (S1)',
          'VIP prep\n(M1)',
          'VIP\u2192SST + ChAT-VIP\n+ long-range',
          'IS-3 \u2192 OLM',
          'VIP\u2192SST/PV (BLA)',
          'VIP/Calb2 type',
          'VIP/VPAC2\nsynchroniser']
colors = ['#1f77b4','#ff7f0e','#2ca02c','#9467bd','#d62728',
          '#8c564b','#e377c2','#7f7f7f','#17becf']
for i,(r,d,m,c) in enumerate(zip(regions, drivers, motifs, colors)):
    x = (i%5)*0.20 + 0.02
    y = 0.55 - (i//5)*0.45
    rect = mpatches.FancyBboxPatch((x, y), 0.18, 0.36,
                                    boxstyle='round,pad=0.01', linewidth=1.2,
                                    edgecolor=c, facecolor=c, alpha=0.18)
    axA.add_patch(rect)
    axA.text(x+0.09, y+0.30, r, ha='center', va='center', fontsize=11, fontweight='bold')
    axA.text(x+0.09, y+0.20, d, ha='center', va='center', fontsize=8)
    axA.text(x+0.09, y+0.06, m, ha='center', va='center', fontsize=7, style='italic')
axA.set_xlim(0,1); axA.set_ylim(0,1.05); axA.axis('off')

# === Panel B: textual summary table of approx VIP+ proportion ===
axB = axes[0,1]
axB.set_title('B. Approximate VIP+ proportion across mouse neocortex (literature ranges)',
              fontsize=10, loc='left')
axB.axis('off')
rows = [
    ['Region','Approx % of GABAergic INs','Primary subtype(s)','Reference'],
    ['V1',   '~10\u201315%', 'bipolar / multipolar; VIP+/CR+, VIP+/ChAT+', 'Xu 2010; Vucurovic 2010'],
    ['S1 barrel','~10\u201312%', 'bipolar; VIP+/CR+',                       'Lee 2013; Sermet 2019'],
    ['A1',   '~10%',        'bipolar; L1 NDNF subset',                    'Pi 2013; Takesian 2018; Krabbe 2019'],
    ['mPFC/PL/CG','~15\u201318%', 'bipolar; ChAT-VIP; rare long-range',    'Pi 2013; Lee 2014; Granger 2020'],
    ['M1/M2','~12\u201315%', 'BICCN VIP-Mybpc1, VIP-Lect1, others',        'BICCN 2021 (aggregated)']
]
tbl = axB.table(cellText=rows, loc='center', cellLoc='left',
                colWidths=[0.13,0.22,0.32,0.33])
tbl.auto_set_font_size(False); tbl.set_fontsize(8)
tbl.scale(1, 1.5)
for j in range(4):
    tbl[(0,j)].set_facecolor('#dddddd')
    tbl[(0,j)].set_text_props(weight='bold')
axB.text(0.0, -0.05, 'Caveat: expert-summarized literature ranges; no per-row value_source_sentence.',
         transform=axB.transAxes, fontsize=7, style='italic', color='#aa0000')

# === Panel C: hippocampal VIP/IS-3 motif schematic ===
axC = axes[1,0]
axC.set_title('C. Hippocampal CA1 VIP/IS-3 motif', fontsize=11, loc='left')
axC.set_xlim(0,1); axC.set_ylim(0,1); axC.axis('off')
# Layers
layers = [('s.l-m', 0.85), ('s.radiatum', 0.62), ('s.pyramidale', 0.42), ('s.oriens', 0.20)]
for name, y in layers:
    axC.axhline(y, color='#cccccc', lw=0.5, ls='--')
    axC.text(0.01, y+0.01, name, fontsize=7, color='#888')
# Pyramidal cell
axC.add_patch(mpatches.FancyBboxPatch((0.45,0.38),0.10,0.08, boxstyle='round,pad=0.01',
                                       facecolor='#5599cc', edgecolor='k'))
axC.text(0.50, 0.42, 'CA1 Pyr', ha='center', va='center', fontsize=8, color='white')
axC.plot([0.50,0.50],[0.46,0.92], color='k', lw=1.2)  # apical dendrite
# OLM
axC.add_patch(mpatches.Circle((0.30,0.20), 0.04, facecolor='#cc7755', edgecolor='k'))
axC.text(0.30, 0.13, 'OLM', ha='center', fontsize=8)
# IS-3
axC.add_patch(mpatches.Circle((0.70,0.32), 0.045, facecolor='#bb44aa', edgecolor='k'))
axC.text(0.70, 0.24, 'IS-3 (VIP/CR/CCK)', ha='center', fontsize=8)
# Bistratified
axC.add_patch(mpatches.Circle((0.20,0.55), 0.035, facecolor='#88aa44', edgecolor='k'))
axC.text(0.20, 0.48, 'Bistrat.', ha='center', fontsize=8)
# Arrows: IS-3 -> OLM (inhibit), IS-3 -> Bistrat (inhibit). OLM -> distal apical (inhibit)
axC.annotate('', xy=(0.34,0.20), xytext=(0.66,0.30),
             arrowprops=dict(arrowstyle='-|>', color='#bb44aa', lw=1.4))
axC.annotate('', xy=(0.24,0.55), xytext=(0.66,0.34),
             arrowprops=dict(arrowstyle='-|>', color='#bb44aa', lw=1.4))
axC.annotate('', xy=(0.49,0.85), xytext=(0.34,0.22),
             arrowprops=dict(arrowstyle='-|>', color='#cc7755', lw=1.2))
axC.text(0.55, 0.15, 'IS-3 disinhibits OLM/Bistrat. \u2192 distal-dendritic\nrelief on CA1 Pyr', fontsize=7, style='italic')

# === Panel D: cross-area driver/motif conflict table ===
axD = axes[1,1]
axD.set_title('D. Recruiting drivers vs local motif (cross-area)', fontsize=11, loc='left')
axD.axis('off')
rows_d = [
    ['Region','Top-down','Neuromod.','Sensory/state','Local motif'],
    ['V1','ACC \u2192 VIP','ACh / 5-HT','locomotion+stim','VIP\u2192SST (low-contrast gain)'],
    ['A1','frontal','NB-cholinergic','reinforcement','VIP\u2192SST + L1-VIP\u2192PV'],
    ['S1','M1 motor copy','ACh','active touch','VIP\u2192SST'],
    ['mPFC','MD/VM thalamus','ChAT-VIP intrinsic','WM delay','VIP\u2192SST + long-range'],
    ['CA1','EC, septum','ACh / 5-HT','theta/ripple','IS-3 \u2192 OLM (interneuron-selective)'],
    ['BLA','aud. cortex','\u2014','CS+ tone','VIP\u2192SST/PV'],
    ['SCN','\u2014','intrinsic light','photic','VIP/VPAC2 paracrine']
]
tbl2 = axD.table(cellText=rows_d, loc='center', cellLoc='left',
                 colWidths=[0.13,0.16,0.17,0.18,0.36])
tbl2.auto_set_font_size(False); tbl2.set_fontsize(7.5)
tbl2.scale(1, 1.45)
for j in range(5):
    tbl2[(0,j)].set_facecolor('#dddddd')
    tbl2[(0,j)].set_text_props(weight='bold')

fig.suptitle('VIP interneurons across brain regions', fontsize=13, fontweight='bold', y=0.995)
fig.tight_layout(rect=[0,0,1,0.97])
fig.savefig('../fig-vip-across-areas.png', dpi=200, bbox_inches='tight')
fig.savefig('../fig-vip-across-areas.pdf', bbox_inches='tight')
print('Saved fig-vip-across-areas.png/.pdf')
```
:::
:::{figure} ../figures/fig-hippocampal-vip-motif.png
:name: fig-hippocampal-vip-motif
:width: 90%

Hippocampal VIP/IS-3 motif distinct from neocortex (schematic). **Panel A**: CA1 lamellar cartoon with VIP/IS-3 cell soma in stratum oriens/pyramidale, axonal projections onto OLM and bistratified cells, and disinhibition of CA1 pyramidal cell distal-dendritic input by removal of OLM-mediated dendritic inhibition {cite:p}`Gulyas1996`. **Panel B**: Comparison of cortical versus hippocampal VIP motifs — cortical VIP cells are bipolar with descending axons targeting L5 SST cells {cite:p}`Kawaguchi1996,Kawaguchi1997a,Gonchar2008`, whereas hippocampal IS-3 cells preferentially target other GABAergic interneurons rather than principal cells {cite:p}`Gulyas1996`. **Panel C**: Subcortical VIP pathways summarised for cross-region completeness — BLA VIP cells implement a cortex-like disinhibitory motif {cite:p}`Rhomberg2018,Vereczki2021`, dorsal striatum contains a previously unrecognised CGE-derived VIP/Calb2 type, and SCN VIP cells act as peptidergic synchronisers via VIP/VPAC2 signalling {cite:p}`Maywood2006,Cutler2003,Jones2018`. Schematic with no quantitative data substrate.
:::


:::{dropdown} 📓 Figure code
```python
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

fig, axes = plt.subplots(1, 3, figsize=(14, 5.5))

# Panel A: CA1 lamellar cartoon
axA = axes[0]
axA.set_title('A. CA1 lamellar VIP/IS-3 motif', fontsize=11, loc='left')
axA.set_xlim(0,1); axA.set_ylim(0,1); axA.axis('off')
layers = [('s.lacunosum-mol.', 0.85, '#f3e8ff'),
          ('s.radiatum',     0.62, '#ffeaea'),
          ('s.pyramidale',   0.42, '#fff4d6'),
          ('s.oriens',       0.18, '#e6f3ff')]
for name, y, c in layers:
    axA.add_patch(mpatches.Rectangle((0.0, y-0.10), 1.0, 0.20, facecolor=c, alpha=0.6, edgecolor='none'))
    axA.text(0.99, y, name, fontsize=7, ha='right', va='center', color='#444')
# Pyr soma
axA.add_patch(mpatches.FancyBboxPatch((0.42, 0.36), 0.16, 0.10, boxstyle='round,pad=0.01', facecolor='#5599cc', edgecolor='k'))
axA.text(0.50, 0.41, 'CA1 Pyr', ha='center', va='center', fontsize=9, color='white', fontweight='bold')
# Apical dendrite
axA.plot([0.50, 0.50], [0.46, 0.94], color='k', lw=1.4)
# Basal
axA.plot([0.50, 0.50], [0.36, 0.18], color='k', lw=1.0)
# IS-3 (oriens/pyramidale border)
axA.add_patch(mpatches.Circle((0.78, 0.30), 0.045, facecolor='#bb44aa', edgecolor='k'))
axA.text(0.78, 0.21, 'IS-3\n(VIP/CR/CCK)', ha='center', va='top', fontsize=8)
# OLM
axA.add_patch(mpatches.Circle((0.22, 0.18), 0.045, facecolor='#cc7755', edgecolor='k'))
axA.text(0.22, 0.09, 'OLM', ha='center', va='top', fontsize=8)
# Bistratified
axA.add_patch(mpatches.Circle((0.18, 0.54), 0.04, facecolor='#88aa44', edgecolor='k'))
axA.text(0.18, 0.46, 'Bistrat.', ha='center', va='top', fontsize=8)
# IS-3 -> OLM
axA.annotate('', xy=(0.27, 0.20), xytext=(0.74, 0.28),
             arrowprops=dict(arrowstyle='-|>', color='#bb44aa', lw=1.6))
# IS-3 -> Bistrat
axA.annotate('', xy=(0.22, 0.55), xytext=(0.74, 0.32),
             arrowprops=dict(arrowstyle='-|>', color='#bb44aa', lw=1.6))
# OLM -> distal apical (inhibits SLM)
axA.annotate('', xy=(0.49, 0.86), xytext=(0.25, 0.20),
             arrowprops=dict(arrowstyle='-|>', color='#cc7755', lw=1.2, alpha=0.8))
# Bistrat -> mid apical/basal
axA.annotate('', xy=(0.49, 0.62), xytext=(0.22, 0.54),
             arrowprops=dict(arrowstyle='-|>', color='#88aa44', lw=1.0, alpha=0.8))
axA.text(0.02, 0.02, 'IS-3 selectively targets other interneurons \u2192\ndisinhibits OLM/Bistrat. \u2192 distal-dendritic\nrelief on CA1 Pyr',
         fontsize=7.5, style='italic', color='#333')

# Panel B: cortex vs hippocampus comparison
axB = axes[1]
axB.set_title('B. Cortex vs hippocampus VIP motif', fontsize=11, loc='left')
axB.set_xlim(0,1); axB.set_ylim(0,1); axB.axis('off')
# left half: cortex
axB.text(0.18, 0.95, 'Neocortex (V1, A1, S1, mPFC)', fontsize=9, ha='center', fontweight='bold', color='#1f77b4')
axB.add_patch(mpatches.Circle((0.18, 0.78), 0.045, facecolor='#bb44aa', edgecolor='k'))
axB.text(0.18, 0.70, 'VIP\n(L2/3 bipolar)', ha='center', va='top', fontsize=7.5)
axB.add_patch(mpatches.Circle((0.18, 0.45), 0.045, facecolor='#cc7755', edgecolor='k'))
axB.text(0.18, 0.37, 'SST\n(L5 Martinotti)', ha='center', va='top', fontsize=7.5)
axB.add_patch(mpatches.FancyBboxPatch((0.10, 0.10), 0.16, 0.10, boxstyle='round,pad=0.01',
                                       facecolor='#5599cc', edgecolor='k'))
axB.text(0.18, 0.15, 'L5 Pyr', ha='center', va='center', fontsize=8, color='white')
axB.annotate('', xy=(0.18, 0.50), xytext=(0.18, 0.74),
             arrowprops=dict(arrowstyle='-|>', color='#bb44aa', lw=1.4))
axB.annotate('', xy=(0.18, 0.21), xytext=(0.18, 0.41),
             arrowprops=dict(arrowstyle='-[', color='#cc7755', lw=1.2))
axB.text(0.04, 0.55, 'VIP\u2192SST\n(disinhibition)', fontsize=7, color='#bb44aa')
# divider
axB.plot([0.5,0.5],[0.05,0.95], color='#bbbbbb', lw=0.8, ls='--')
# right half: hippocampus
axB.text(0.78, 0.95, 'Hippocampus (CA1)', fontsize=9, ha='center', fontweight='bold', color='#bb44aa')
axB.add_patch(mpatches.Circle((0.78, 0.78), 0.045, facecolor='#bb44aa', edgecolor='k'))
axB.text(0.78, 0.70, 'IS-3\n(VIP/CR/CCK)', ha='center', va='top', fontsize=7.5)
axB.add_patch(mpatches.Circle((0.65, 0.45), 0.04, facecolor='#cc7755', edgecolor='k'))
axB.text(0.65, 0.37, 'OLM', ha='center', va='top', fontsize=7.5)
axB.add_patch(mpatches.Circle((0.91, 0.45), 0.04, facecolor='#88aa44', edgecolor='k'))
axB.text(0.91, 0.37, 'Bistrat.', ha='center', va='top', fontsize=7.5)
axB.add_patch(mpatches.FancyBboxPatch((0.70, 0.10), 0.16, 0.10, boxstyle='round,pad=0.01',
                                       facecolor='#5599cc', edgecolor='k'))
axB.text(0.78, 0.15, 'CA1 Pyr', ha='center', va='center', fontsize=8, color='white')
axB.annotate('', xy=(0.66, 0.49), xytext=(0.75, 0.75),
             arrowprops=dict(arrowstyle='-|>', color='#bb44aa', lw=1.4))
axB.annotate('', xy=(0.90, 0.49), xytext=(0.81, 0.75),
             arrowprops=dict(arrowstyle='-|>', color='#bb44aa', lw=1.4))
axB.annotate('', xy=(0.74, 0.21), xytext=(0.66, 0.41),
             arrowprops=dict(arrowstyle='-[', color='#cc7755', lw=1.0))
axB.annotate('', xy=(0.82, 0.21), xytext=(0.90, 0.41),
             arrowprops=dict(arrowstyle='-[', color='#88aa44', lw=1.0))
axB.text(0.55, 0.55, 'IS-3 \u2192 OLM/Bistrat\n(interneuron-selective)', fontsize=7, color='#bb44aa')

# Panel C: subcortical VIP populations
axC = axes[2]
axC.set_title('C. Subcortical VIP populations', fontsize=11, loc='left')
axC.set_xlim(0,1); axC.set_ylim(0,1); axC.axis('off')
items = [
    ('BLA',     'cortex-like\nVIP\u2192SST/PV',          'fear / threat',                    '#e377c2', 0.78),
    ('Striatum','VIP/Calb2 type\nCGE-derived',           'function unmapped',                '#7f7f7f', 0.50),
    ('SCN',     'VIP/VPAC2\npeptidergic projection',     'circadian / photic resetting',     '#17becf', 0.22),
]
for label, motif, role, color, y in items:
    axC.add_patch(mpatches.FancyBboxPatch((0.05, y-0.08), 0.25, 0.16,
                                           boxstyle='round,pad=0.01',
                                           facecolor=color, edgecolor='k', alpha=0.25))
    axC.text(0.175, y+0.03, label, ha='center', va='center', fontsize=11, fontweight='bold')
    axC.text(0.175, y-0.04, motif, ha='center', va='center', fontsize=7.5, style='italic')
    axC.add_patch(mpatches.FancyBboxPatch((0.40, y-0.08), 0.55, 0.16,
                                           boxstyle='round,pad=0.01',
                                           facecolor='white', edgecolor=color, lw=1.5))
    axC.text(0.675, y, role, ha='center', va='center', fontsize=8.5)
    axC.annotate('', xy=(0.40, y), xytext=(0.30, y),
                 arrowprops=dict(arrowstyle='-|>', color=color, lw=1.4))
axC.text(0.5, 0.02, 'Aggregating SCN with neocortical VIP cells\nconflates peptidergic projection with disinhibition',
         ha='center', fontsize=7, style='italic', color='#aa0000')

fig.suptitle('Hippocampal VIP/IS-3 motif distinct from neocortex (schematic)', fontsize=12, fontweight='bold', y=1.0)
fig.tight_layout(rect=[0,0,1,0.95])
fig.savefig('../fig-hippocampal-vip-motif.png', dpi=200, bbox_inches='tight')
fig.savefig('../fig-hippocampal-vip-motif.pdf', bbox_inches='tight')
print('Saved fig-hippocampal-vip-motif.png/.pdf')
```
:::
## Closing synthesis: what cross-area variation constrains

Taken together, the area-by-area evidence reviewed here makes three structural commitments. (i) The VIP→SST→Pyr disinhibitory motif is a real and reproducible primitive in V1, A1, S1, mPFC, and BLA, but its *operation* — multiplicative versus contrast-dependent gain, broadcast versus localised disinhibition, instantaneous versus learned recruitment — is region- and context-specific {cite:p}`Pi2013,Lee2013,Dipoppa2018,Millman2020,Karnani2016b,Krabbe2019,Bastos2023a,Rhomberg2018`. (ii) The recruiting variable, not the local microcircuit, is what differs most across regions, and many cross-area apparent contradictions in VIP "polarity" or "selectivity" dissolve once the recruiting variable is specified {cite:p}`Wall2016,Anastasiades2021a,Lee2013,Pakan2016,Jones2018`. (iii) Hippocampal IS-3 cells and SCN peptidergic VIP cells implement motifs distinct enough from the cortical motif that aggregating them into a single "VIP function" misrepresents the data {cite:p}`Tyan2014,Gulyas1996,Maywood2006,Cutler2003,Jones2018`. These commitments motivate the temporal-coordination treatment in {ref}`sec-oscillatory-dynamics`, the species and disease comparisons in {ref}`sec-disease-translational`, and the modelling reassessment in {ref}`sec-computational-models` and the concluding synthesis.

## Caveats and unmet citation needs

Three classes of citation need are unmet by this section's filtered citation map and are flagged for downstream resolution.

1. **V1/A1 locomotion polarity reversal** — the direct claim that locomotion *increases* V1 VIP activity and *decreases* A1 spiking and encoding efficiency is commonly attributed to Fu 2014 (V1) and Bigelow 2019 (A1). Neither is present in this section's filtered citation map; the claim is therefore made indirectly here via the available V1-side ({cite:p}`Dipoppa2018,Pakan2016`) and A1-side ({cite:p}`Pi2013`) evidence. The direct polarity-reversal citations should be added when {ref}`sec-oscillatory-dynamics` is integrated.
2. **Shared-variability conflict in V1** — the conflict between Xu 2026 and Lenkey 2025 over whether VIP gain control adds correlations or reduces shared variability in V1 cannot be rendered as an admonition block because neither key is in this section's filtered citation map. The conflict is documented in the unmet-citation-needs file.
3. **Hippocampal VIP gating versus upstream-LTD reset** — the conflict between Neubrandt 2025 and Jablonska 2026 over whether VIP/IS interneurons provide a deterministic gate on hippocampal remapping or whether their efferent inhibition is itself dynamically reset by upstream LTD cannot be rendered here for the same reason. The conflict is documented in the unmet-citation-needs file.

Two additional caveats apply to the figures themselves: the brain-region proportion table embedded in {numref}`fig-vip-across-areas` Panel B is an expert-summarised range over multiple primary references rather than a primary-source numeric panel, and is rendered textually with the verbatim Phase 6 caveat above. The hippocampal motif figure ({numref}`fig-hippocampal-vip-motif`) is a schematic with no quantitative data substrate.
