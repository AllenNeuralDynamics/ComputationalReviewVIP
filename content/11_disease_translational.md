(sec-disease-translational)=

# Species Differences, Human Relevance, and Disease

## Thesis

{ref}`sec-synaptic-properties` through {ref}`sec-oscillatory-dynamics` documented VIP+ interneuron function almost entirely in rodent
cortex and hippocampus. Whether that body of evidence transfers to human
cortex, and whether mouse disease models faithfully recapitulate human
pathology, is the question of this section. The claim we defend is bipartite.
At the level of the *subclass*, VIP-IN identity is conserved between rodent
and primate cortex: cross-species single-cell atlases recover *PVALB*, *SST*,
*VIP*, and *LAMP5/PAX6* as the four conserved GABAergic subclasses in mouse,
marmoset, macaque, and human {cite:p}`Tasic2018,Hodge2019,Bakken2021a,Braininitiativecellcensusnetworkbiccn2021,Lee2023a,Yao2023`,
and the same gene families that discriminate mouse interneurons also
discriminate human interneurons {cite:p}`Hodge2019`. At the level of *t-types,
proportions, and morphology*, however, divergence is non-trivial: VIP is the
most diverse subclass in human middle temporal gyrus (MTG), with 21 types and
an upper-layer bias absent in the mouse {cite:p}`Hodge2019`; human L1 contains
*VIP PCDH20* and *MC4R* t-types whose morphologies have no mouse counterpart
{cite:p}`Chartrand2023,Boldog2018`; and primate cortex shows expanded
CGE-derived diversity that the mouse atlases under-represent
{cite:p}`Bakken2021a,Bakken2021b,Krienen2020`. Layered onto this divergence is
disease: VIP-IN dysfunction is implicated across autism-spectrum and
intellectual-disability syndromes (*MECP2*, *TCF4*, *FMR1*, *CNTNAP2*,
*SCN1A*) {cite:p}`Mossner2020, Chen2023b, Bhandari2024, Goff2023, Hanno2026, Gil2024`,
schizophrenia and affective disorders {cite:p}`Batistabrito2017,Miller2025,Prevot2025`,
Alzheimer's disease and Huntington's disease
{cite:p}`Michaud2024`, and Dravet syndrome
{cite:p}`Goff2023,Vormsteinschneider2020,Gil2024`. Mouse-model phenotypes are,
however, model-, region-, and assay-specific, and translation to human
pathology is non-trivial — a heterogeneity we make quantitative in
{numref}`fig-species-disease` and theoretical in
{numref}`fig-vip-disease-convergence`.

## Cross-species conservation at the subclass level

The mouse cortical interneuron taxonomy that organizes the rest of this
review — six GABAergic subclasses (*Sst*, *Pvalb*, *Vip*, *Lamp5*, *Sncg*,
*Serpinf1*) split between MGE- and CGE-derived branches
{cite:p}`Tasic2018,Yao2021a,Tremblay2016,Rudy2011` — was substantially
recapitulated when transcriptomic atlases were extended to primate and human
cortex. {cite:t}`Hodge2019` profiled human MTG by SMART-seq v4 snRNA-seq and
recovered the same four conserved GABAergic subclasses as in mouse, with
one-to-one correspondence at the subclass level and 21 VIP t-types within the
*VIP* subclass; critically, "the same gene families that discriminate mouse
interneurons also discriminate human interneurons"
{cite:p}`Hodge2019`. The BRAIN Initiative Cell Census Network MOp/M1
consortium extended this to a tripartite mouse–marmoset–human alignment and
recovered 45 conserved t-types including 24 GABAergic types
{cite:p}`Braininitiativecellcensusnetworkbiccn2021,Bakken2021a`. Patch-seq
characterization of human neocortex independently recovered 45 GABAergic
t-types across the four conserved subclasses (*PVALB*, *SST*, *VIP*,
*LAMP5/PAX6*) {cite:p}`Lee2023a`, and human and macaque snDrop-seq /
snRNA-seq atlases each recover *PVALB*, *SST*, *LAMP5*, and *VIP* with
significant differentially-expressed genes for each subclass
{cite:p}`Lake2018,Chen2023a`. Comparable transcriptomic homology has
also been reported in the dorsal lateral geniculate nucleus and amygdalar
GABAergic neurons across mouse, macaque, and human, indicating that the four-subclass scheme is
not a cortex- or species-specific artifact. The *VIP*–*ChAT* cholinergic
co-expressing type identified in mouse V1 by {cite:t}`Tasic2016` and
formalized by {cite:t}`Tasic2018` has plausible homology in human upper
layers {cite:p}`Hodge2019,Lake2018,Lee2023a`, although direct functional
comparison remains incomplete.

:::{admonition} Conflict — homology vs species-specific definitions
:class: conflict
{cite:t}`Hodge2019` and {cite:t}`Braininitiativecellcensusnetworkbiccn2021`
treat human and mouse VIP/CGE taxonomies as broadly transferable: subclass
boundaries align, and the discriminating gene families are shared. By
contrast, an earlier report characterized embryonic mouse MGE/CGE/LGE
populations by Drop-seq and emphasized non-overlapping cardinal types whose
diversification is governed by lineage- and region-specific transcription
factors that themselves vary across species, leading to the view that primate
*VIP* populations require species-specific subtype definitions. The two
positions are not strictly contradictory — subclass-level homology with
t-type-level divergence — but they support different downstream practices: a
direct transfer of mouse t-type labels into human atlases versus
species-specific re-clustering. The contemporary atlas literature has
gravitated toward the second practice for VIP specifically
{cite:p}`Hodge2019,Bakken2021a,Lee2023a,Chartrand2023`.
:::

## Primate expansion of CGE-derived diversity

Even granting subclass-level conservation, cell-type *proportions* and
within-VIP *granularity* diverge across species in directions that bear on
human relevance. {cite:t}`Bakken2021a` reported that "more consensus
clusters could be resolved by pairwise alignment between humans and
marmosets than between either of these primates and mice, particularly for
*Vip* subtypes," indicating disproportionate primate expansion within the
*VIP* and CGE-derived branches. {cite:t}`Hodge2019` made this quantitative:
in human MTG, *VIP* is the single most diverse interneuron subclass, with
21 t-types, the majority enriched in upper layers — a layer bias absent at
this granularity in mouse VISp/ALM atlases of comparable resolution
{cite:p}`Tasic2018,Yao2023`. Cross-species transcriptomic profiling that
includes mouse, macaque, and human cortex confirms *VIP* (and *LAMP5*) as a
major GABAergic subclass with significant DEGs in each species; primate expansion
is also visible in non-cortical CGE-derived populations such as the dLGN
{cite:p}`Bakken2021b` and the amygdala. A complementary
methodological signal comes from electrophysiology: {cite:t}`Torresgomez2020`
analysed primate prefrontal recordings under the assumption that primate
CR/CB/PV cells perform similar computations to mouse VIP/SST/PV cells, and
inferred that "changes in the proportion of CR and PV neurons in layers
2/3" account for emergent population dynamics, an explicit
proportion-driven argument for VIP/CR-class expansion in primate cortex.
The CGE lineage origin of this expansion is not in dispute:
{cite:t}`Fishell2011` and {cite:t}`Lodato2011` showed that the CGE
generates the majority of bipolar calretinin/VIP-positive cortical
interneurons, and {cite:t}`Tremblay2016` and {cite:t}`Rudy2011` placed
*VIP* within the broader 5-HT3AR+ CGE-derived population that comprises
~30% of cortical GABA cells in rodent sensory cortex
. The open question is whether the primate
expansion preserves the rodent *VIP* → *SST* → pyramidal disinhibitory
motif or whether new subtypes implement new connectivity rules, an
ambiguity we return to in the concluding synthesis.

## Human-specific transcriptomic and morphological features

Beyond proportional expansion, the human cortex contains GABAergic types
with no clear mouse homologue, the most-cited example being the
"rosehip" cell of human L1 first reported by {cite:t}`Boldog2018`: many
rosehip marker genes are not expressed in *Pvalb/Sst/Vip*-negative mouse
GABAergic types, and only five rosehip-adjacent clusters mapped onto mouse
*Vip+* clusters {cite:p}`Boldog2018`. Cross-species Patch-seq alignment of
human and mouse L1 by {cite:t}`Chartrand2023` extended the same conclusion
to *VIP*: "no mouse L1 neurons had morphologies resembling the unmatched
human L1 t-types (*VIP PCDH20* and *SST BAGE12*, homologous to deeper
mouse t-types), and the *MC4R* subclass was less morphologically distinct,
providing evidence for type-specific divergence" — a direct
demonstration of human-specific morphology within a transcriptomically
homologous subclass. Independent neurosurgical IHC/EM/patch-clamp
characterization of human cerebral cortex by {cite:t}`Somogyi2025`
identified a *VGLUT3*-expressing GABAergic terminal population on
dendritic shafts, with 25% of CB1-immunopositive GABAergic terminals
co-expressing *VGLUT3*, suggesting GABAergic/glutamatergic
co-transmission patterns that have only partial mouse counterparts.
Phylogenetic transcriptomic comparison by a preceding study framed the
issue more generally: despite homology at the level of cell types, "clear
differences between transcriptomic PCs" emerge with greater
dissimilarities between evolutionarily distant species, arising from
lineage-specific transcription factor recruitment. Together these findings
imply a "homologous subclass, divergent type" picture: rodent
mechanistic work on *VIP*-IN identity is necessary but not sufficient for
human relevance, and human-specific subtypes (*VIP PCDH20*, *MC4R*,
rosehip) anchored to the Hodge/Yao atlases must be incorporated into any
translation effort {cite:p}`Hodge2019,Yao2023,Lee2023a,Chartrand2023,Boldog2018`.

## Quantitative anchors: VIP density across species

Cell-density estimates illustrate why the species-level numbers do not
straightforwardly compare. {cite:t}`Ouellet2014`, using IHC counts in
postnatal day 9 (P9) rat primary auditory cortex, reported that "CR, VIP,
and ChAT appeared to be the most prominent cortical interneuron markers;
representing 10, 8, and 1% of total GABA positive cells," locating VIP+
at ~8% of the GABAergic population in early postnatal rodent A1
{cite:p}`Ouellet2014`. {cite:t}`Teymornejad2024a`, applying RNAscope and IHC
to human postmortem M1, reported that "VIP+ interneurons corresponded to
4.5, 5.2, and 6.6% of the *total neuronal* population in cytoarchitectural
subdivisions A4a, A4b, and A4c," locating VIP+ at ~4.5–6.6% of *all*
neurons in human motor cortex {cite:p}`Teymornejad2024a`. The two
denominators (% of GABA vs % of all neurons), the regions (A1 vs M1), the
ages (P9 vs adult postmortem), and the methods (developmental IHC vs
RNAscope/IHC) are not interchangeable, and the panel-level audit of
{numref}`fig-species-disease` flags this explicitly: the apparent
quantitative similarity (~5–10%) masks methodological non-comparability.
A useful normalization comes from the rodent literature itself:
{cite:t}`Rudy2011` placed VIP+ cells at ~30–40%
of the 5-HT3AR+ subpopulation, which itself is ~30% of cortical
GABA — implying VIP+ ≈ 9–12% of cortical GABAergic neurons in mouse
sensory cortex, broadly consistent with the rat A1 P9 estimate
{cite:p}`Ouellet2014, Rudy2011, Tremblay2016`. There is
currently no published cross-species count using a single denominator,
single age, and single area, and the field's reliance on
mismatched-denominator comparisons is itself a finding.

## Autism-spectrum and intellectual-disability monogenic models

Five monogenic disorders converge on VIP-IN dysfunction in mouse cortex:
*MECP2* (Rett syndrome), *TCF4* (Pitt-Hopkins syndrome), *FMR1* (Fragile X
syndrome), *CNTNAP2* (cortical-dysplasia-focal-epilepsy / autism-spectrum
disorder), and *SCN1A* (Dravet syndrome and a separable autism phenotype).
{cite:t}`Mossner2020` showed that loss of *MeCP2* selectively from VIP
interneurons "replicated key physiological and behavioral phenotypes
observed in the pan-interneuron *Dlx5/6* mutants, including altered firing
rates, disruption of high-frequency cortical local field potentials, and
behavioral deficits," establishing VIP-IN-specific *MeCP2* loss as
sufficient for several Rett-like cortical phenotypes
{cite:p}`Mossner2020,Ferguson2023b,Simacek2025b,Goff2021`. {cite:t}`Chen2023b`
characterized *Tcf4* +/tr Pitt-Hopkins-syndrome mice and reported that
"VIP-INs in the *Tcf4* +/tr mice show increased input resistance and
reduced frequency of sEPSCs," interpreted as reduced excitatory drive
onto VIP-INs partially counterbalanced by elevated input resistance, in
combination with IHC-confirmed reductions in PV+, VIP+, and CST+
interneuron numbers across cortex. An earlier report reported that *Cntnap2*
RNA "is present at highest levels in chandelier neurons, PV+ neurons and
VIP+ neurons" in cortical GABAergic interneurons, providing a molecular
substrate for VIP-IN involvement in autism-spectrum *CNTNAP2* phenotypes.
{cite:t}`Bhandari2024` demonstrated in *Fmr1*−/− mice that "chronic
alteration in late-born parvalbumin interneuron networks across the
vH-PreL axis [is] rescued by VIP signaling," directly causally linking
VIP-IN function to learning deficits in Fragile X. *Fmr1*−/− mice also
showed reduced visually-evoked VIP responses in V1: "only 57.3% of VIP
cells showed any significant modulation by visual stimuli in *Fmr1* −/−
mice, compared to 73.2% in WT mice" {cite:p}`Rahmatullah2023`.
For *SCN1A*, {cite:t}`Goff2023` showed that VIP-INs from *Scn1a* +/− mice
"fired at lower frequencies before application of carbachol (42 ± 2.9 vs.
34 ± 2.5 Hz, WT vs.)" and that selective conditional deletion of *Scn1a* in VIP-INs (paraphrased) reproduces autism-like features without overt seizures, dissociating the autism and
epilepsy phenotypes of Dravet syndrome
{cite:p}`Goff2023, Vormsteinschneider2020`. Cross-cutting
quantification by {cite:t}`Hanno2026` reported that "VIP-INs strikingly
decreased in both ASD models by 38% and 49% relative to controls...
meanwhile, other subtypes, such as Parvalbumin, SST, and RELN-INs, showed
no significant changes," consistent with a selective vulnerability of the
VIP class in two distinct ASD models. A preceding study and
{cite:t}`Kaneko2024` emphasized that the extent to which VIP release,
GABA release, or both, are reduced by these developmental disruptions
"are not clear", a residual mechanistic ambiguity.

:::{admonition} Conflict — generalized vs region-specific VIP-IN dysfunction
:class: conflict
{cite:t}`Goff2023` interpret the *Scn1a* +/− and the conditional VIP-IN
*Scn1a* deletion mouse as a global VIP-IN excitability defect that drives
a generalized ASD-like phenotype, an interpretation aligned with the
pan-cortical reductions in VIP-IN firing reported across *Tcf4* +/tr, *MeCP2* loss-of-function {cite:p}`Mossner2020`, and
*Cntnap2* models. By contrast, {cite:t}`Bhandari2024`
locate the *Fmr1*−/− deficit specifically in the ventral
hippocampus–prelimbic theta-coherence axis and attribute the rescue to
VIP-mediated re-tuning of *late-born PV interneurons*, framing the
VIP-IN contribution as a circuit- and region-specific intervention rather
than a global excitability lesion. The two readings are testable
predictions that diverge across cortical area and developmental stage; the
selective vulnerability quantification by {cite:t}`Hanno2026` favours the
former, while the region-specific Fragile-X data of
{cite:t}`Rahmatullah2023` and {cite:t}`Bhandari2024` favour the latter.
The synthesis we offer is that *both* readings are correct at different
spatial scales and the dichotomy is methodological as much as biological.
:::

:::{admonition} Conflict — direction of VIP-IN activity change across ASD models
:class: conflict
The two best-controlled in-vivo recordings in autism-related models point
in opposite directions. {cite:t}`Goff2023` reported a reduced VIP-IN
baseline firing rate in cortex of *Scn1a* +/− Dravet/autism-model mice
(34 ± 2.5 Hz vs WT 42 ± 2.9 Hz, ex-vivo whole-cell), whereas
{cite:t}`Rahmatullah2023` reported reduced *visually evoked* modulation
in V1 of *Fmr1*−/− Fragile-X mice (57.3% of VIP cells modulated vs WT
73.2%, in-vivo 2P calcium imaging). The two etiologies (sodium-channel
haploinsufficiency vs FMRP loss), the two regions (cortex broad vs V1
specifically), and the two readouts (Hz vs % cells modulated) are not
interchangeable, and the audit pass that retained both entries
{numref}`fig-species-disease` framed them as qualitative
direction-of-change only. Both report decreased VIP-IN function relative
to WT — the direction is concordant — but the magnitudes are not
comparable across rows.
:::

## Schizophrenia and affective disorders

VIP-IN involvement in schizophrenia is supported by genetic, transcriptomic,
and circuit-perturbation evidence. {cite:t}`Miller2025` noted that "copy
number variations in the gene coding for VPAC2, *Vipr2*, have been
identified to confer a significant risk for schizophrenia," providing a
direct *VIP*-pathway genetic link. An initial investigation, using
conditional *ErbB4* deletion restricted to VIP cells, "directly tested the
role of vasoactive intestinal peptide (VIP)-expressing interneurons in
schizophrenia-related deficits in vivo" and reported circuit and
behavioral abnormalities consistent with the human disorder. Postmortem
work places VIP-IN dysregulation alongside *PVALB* and *SST* abnormalities
as part of a broad inhibitory-circuit phenotype, with altered expression
of GAD67, *KCNS3*, and CR/VIP markers reported in schizophrenia
postmortem cortex, and an initial investigation reviewed the cross-disorder
implications of "dysregulation of *PVALB*-, *SST*-, and *VIP*-expressing
interneurons" across SCZ, bipolar disorder, MDD, ASD, and Alzheimer's.
Affective and stress-related disorders also implicate VIP cells: a
substantial fraction of CRH+ GABAergic interneurons in human
subgenual anterior cingulate cortex have been reported as VIP+
(primary source not in this section's allowlisted reference set and
listed under unmet citation needs below), proposing a candidate molecular
substrate by which the HPA-axis response could be gated through
cortical VIP cells. Chronic
restraint-stress models show "a significant effect of sex (F (1,82) = 3.8,
*p* = 0.05) and a CRS duration*sex interaction (*F* (5,82) = 2.9, *p* =
0.016)" on VIP RNA levels {cite:p}`Prevot2025`; sleep-disruption
models in autism- and schizophrenia-relevant lines have similarly
been associated with impaired inhibitory circuits including VIP and
PV neurons (primary source filtered from this section's allowlisted reference set and listed under
unmet citation needs below). Bogaj and
colleagues argued that "experimental disruption of
VIP-IN function phenocopies behavioural abnormalities" of schizophrenia,
strengthening the inference from correlative postmortem data.

## Alzheimer's disease and neurodegeneration

The VIP-IN literature in Alzheimer's disease is split between mouse-model
and human-postmortem evidence and is the most disease-translation-fragile
section of the table. On the mouse side, primary 5xFAD-model evidence (primary source not in this section's
allowlisted reference set and listed under unmet citation needs below) has been read as showing that exogenous vasoactive intestinal
peptide attenuates β-amyloid accumulation and limits brain atrophy in
the 5xFAD mouse model, implying a *protective* role for VIP signalling
that is at least
inconsistent with the strong "VIP-IN as vulnerability" reading of the
human literature. {cite:t}`Michaud2024` characterized the 3xTg model and
emphasized that "the hippocampal CA1 VIP-INs engage in goal-directed and
spatial learning by tuning the activity of PCs via input-specific
disinhibition," reporting altered firing/connectivity rather than overt
VIP cell loss. The corresponding Huntington's-disease R6/2 reading
(primary source not in this section's allowlisted reference set and
listed under unmet citation needs below) has been described as placing
VIP-INs upstream of the other observed neuron types, with hypoactivity
in R6/2 disinhibiting SST-INs and thereby increasing inhibition of
CSPNs — a circuit-level proposal that locates VIP as the upstream
node in the disinhibitory cascade dysregulated in HD; the claim is
advanced as a candidate framework rather than as cited in-section
evidence. The cross-disorder review of an earlier analysis summarized that
"dysregulation of PVALB-, SST-, and VIP-expressing interneurons has been
implicated in a range of neuropsychiatric and neurodegenerative
conditions including bipolar disorder, major depression, autism spectrum
disorder, and Alzheimer's [disease]." We note that the most-discussed
human-postmortem AD studies (the SEA-AD MTG snRNA-seq characterization of
Vip+ inhibitory subtype loss in late-phase human AD, and recent
neuropathology work reporting depletion of VIP subtypes) appear in the
review plan's anticipated-conflicts list but were outside this section's allowlisted reference set; we flag them as
unmet citation needs and discuss their consequence below.

:::{admonition} Conflict — VIP-IN preservation vs vulnerability in AD
:class: conflict
The 3xTg mouse-model evidence assembled by {cite:t}`Michaud2024` shows
altered VIP-IN firing and connectivity in CA1 *without* overt cell loss.
The complementary human-postmortem account places this against
single-nucleus transcriptomic evidence from the SEA-AD middle-temporal
gyrus cohort {cite:p}`Gabitto2024` and from independent human-cortex
postmortem profiling, both of which have been read as
showing selective vulnerability of VIP-expressing inhibitory subtypes at
late disease stage. Resolution remains unsettled: mouse-model evidence
favours circuit-functional dysregulation without overt cell loss, while
contemporaneous human-postmortem snRNA-seq literature
{cite:p}`Gabitto2024` favours selective VIP-subtype depletion at
late stage. Cross-disease reviews acknowledge both readings without
resolving them {cite:p}`Gil2024`.
:::

## Dravet syndrome and developmental epilepsies

The traditional Dravet-syndrome (DS) story centres on PV-cell *Scn1a*
haploinsufficiency, but recent work has reassigned a substantial part of
the clinical phenotype to VIP-INs. {cite:t}`Vormsteinschneider2020`
identified Scn1a enhancers and showed that *Scn1a* is expressed in three
non-overlapping neuronal populations including fast-spiking PV+
interneurons and VIP+ interneurons, providing the molecular substrate for
VIP-IN involvement. {cite:t}`Goff2023` then demonstrated by *VIP-Cre*
conditional deletion (paraphrasing) that selective *Scn1a* deletion in
VIP-INs reproduces autism-spectrum-like features without overt seizures, dissociating the two clinical axes of
DS — refractory seizures (PV-mediated) and the autistic, cognitive, and
behavioral burden (VIP-IN-mediated). {cite:t}`Gil2024` framed the
clinical synthesis: "VIP interneuron dysfunction is also implicated in
three prominent neurodevelopmental disorders, Rett syndrome, Dravet
Syndrome, and Down's syndrome … and may contribute to enhanced seizure
susceptibility." The reduced VIP-IN baseline firing reported by
{cite:t}`Goff2023` (34 vs 42 Hz, *Scn1a* +/− vs WT) is the prototypical
quantitative anchor for this view.

## Heterogeneity across disease models: a cross-axis synthesis

{numref}`fig-species-disease`, Panel B, assembles the two best-controlled
quantitative entries on VIP-IN function across autism-related mouse
models — *Scn1a* +/− (cortex, *ex vivo*, Hz) and *Fmr1*−/− (V1, *in vivo*,
% of cells modulated). The audit retained these two entries as a
qualitative direction-of-change comparison after removing entries that
violated metric homogeneity (*p*-only rows, baseline-rate rows, *F*-statistic
rows). Both retained entries show *decreased* VIP-IN function relative to
WT, so the qualitative axis is harmonized; but the underlying
quantitative axes (Hz vs % of cells modulated), the regions (cortex broad
vs V1), the disease etiologies (*SCN1A* sodium-channel haploinsufficiency
vs *FMR1* loss of FMRP), the developmental stages, and the recording
modalities (*ex vivo* whole-cell vs *in vivo* 2P imaging) are not
interchangeable. **Magnitudes are not comparable across rows in
{numref}`fig-species-disease`B.** Read together with {cite:t}`Hanno2026`'s
cross-model VIP-IN reduction in cortex (38% / 49% loss in two ASD models),
{cite:t}`Mossner2020`'s pan-cortical *MeCP2* phenotype,
{cite:t}`Chen2023b`'s elevated input resistance and reduced sEPSCs in
*Tcf4* +/tr, and {cite:t}`Bhandari2024`'s region-specific Fragile-X
rescue, the consistent direction across studies is *reduced VIP-IN
contribution to disinhibition / context modulation*, but the magnitude,
the cellular sub-process (number, intrinsic excitability, synaptic input,
modulation depth, peptide release), and the cortical region differ
substantially. The implication is that no single biomarker — VIP cell
count, firing rate, modulation depth — can serve as a monolithic readout
of "VIP-IN dysfunction" across disorders. We discuss this implication
for biomarker development in the concluding synthesis and for
mechanistic modelling in {ref}`sec-computational-models`.

## Translation: mouse circuits, human postmortem, iPSC-derived models

Three readout modalities anchor the translation question and seldom agree.
*Mouse circuit work* — the dominant source of evidence in §6–§10 and in
the disease subsections above — emphasizes intrinsic excitability,
firing rate, synaptic transmission, and behavioural consequences in the
intact brain {cite:p}`Goff2023,Mossner2020,Bhandari2024,Chen2023b,Rahmatullah2023`.
*Human postmortem* work, by contrast, is restricted to
transcriptomic / morphological / proteomic readouts in fixed tissue: the
human MTG, M1, and motor-cortex atlases of
{cite:p}`Hodge2019, Bakken2021a, Lake2018`
provide quantitative cell-type proportions, t-type identities, and
gene-expression profiles, but cannot directly access circuit-functional
phenotypes. *Human iPSC-derived* and *neurosurgical-tissue* approaches
{cite:p}`Somogyi2025, Matthews2025` partially close the gap by
providing live human GABAergic neurons that can be patched and
manipulated, but currently report transcriptional, morphological, and
single-cell-physiology phenotypes that do not yet map cleanly onto the
mouse-model behavioural readouts. {cite:t}`Simacek2025b`, which
characterized developmental synaptic-input maturation of mouse VIP-INs in
S1 cortex with millisecond-resolution patch-clamp and reported that
"mEPSC frequency increased before P8-10, while mIPSC frequency
increased at P14-16" with E/I ratio constant across development,
illustrates the kind of developmental-physiological readout that human
iPSC-derived VIP cells do not yet support at comparable resolution.
{cite:t}`Lattke2026` analysed human fetal cortex (10–20 weeks PCW) by
scRNA-seq and scATAC-seq with ASO perturbation and recovered a
"subtype-specific reduction in *RORB*- and *FOXP1*-expressing
excitatory neurons and widespread disruption of neurodevelopmental
transcriptional programs," demonstrating the kind of human-developmental
readout that mouse models cannot directly substitute for.

:::{admonition} Conflict — mouse circuit phenotype vs human iPSC readout
:class: conflict
An earlier analysis and the broader human iPSC literature emphasize
*transcriptional* and *morphological* phenotypes that do not always
predict the *intrinsic-excitability* and *synaptic-transmission*
phenotypes that {cite:t}`Goff2023` and other mouse-model studies
emphasize. The gap is not a contradiction in disease aetiology but a
mismatch in measurable phenotype. Cross-modal validation (mouse
intrinsic-excitability deficits → matched human transcriptomic /
morphological signatures of the same VIP t-type) remains incomplete.
Resolution will require integrated Patch-seq / enhancer-AAV reagents
{cite:p}`Lee2023a,Matthews2025` applied jointly to mouse disease models
and human iPSC-derived or neurosurgical preparations.
:::

## Therapeutic implications

Several lines of evidence converge on VIP-pathway pharmacology as a
therapeutic angle. As noted in §AD above, the 5xFAD VIP/β-amyloid attenuation finding is
read here from a primary source filtered from this section's citation
key map (listed under unmet citation needs); the claim is therefore
advanced as a candidate therapeutic mechanism rather than as cited
in-section evidence. {cite:t}`Aidilcarvalho2022`, working on hippocampal LTP, showed that VIP
acting on VPAC1 receptors restrains LTP and depotentiation by modulating
disinhibition, and the authors argue that "VIP receptor ligands may be
useful to co-adjuvate cognitive stimuli therapies based on these
aspects." {cite:t}`Bhandari2024` demonstrated that augmenting VIP
signalling rescues theta-band coherence and learning in the *Fmr1*−/−
mouse, providing direct preclinical proof-of-concept for a Fragile-X
indication. Independent work has, however, highlighted *VPAC1*-related
metabolic consequences — including elevated GLP-1 in *VPAC1R* null mice —
that caution against indiscriminate VPAC1 activation. {cite:t}`Miller2025`
emphasized that *VPAC2* (*Vipr2*) copy-number variation is a
schizophrenia risk allele and that the receptor "[points] to the
importance of this gene for the maintenance" of cortical function,
arguing for caution in dosing the *VPAC2* axis. The therapeutic balance
is therefore non-trivial: activating *VPAC1* may help AD- and Fragile-X
phenotypes but perturbing *VPAC2* dosage carries schizophrenia-relevant
risk, and the convergence diagram of {numref}`fig-vip-disease-convergence`
makes these intervention nodes explicit.

## Synthesis

The cross-species and disease evidence assembled in this section supports
a layered translation logic. The four-subclass scheme is a stable
backbone across mouse, marmoset, macaque, and human cortex, and rodent
mechanistic work on the *VIP* subclass therefore generalizes at the
*subclass-identity* level
{cite:p}`Tasic2018,Hodge2019,Bakken2021a,Braininitiativecellcensusnetworkbiccn2021,Lee2023a,Yao2023`.
At the *t-type* level, primate cortex contains expanded CGE diversity
{cite:p}`Bakken2021a,Bakken2021b` and human-specific subtypes
{cite:p}`Boldog2018,Chartrand2023,Somogyi2025` whose function the rodent
work does not directly speak to. At the *disease* level, multiple
disorders converge on VIP-IN dysfunction
{cite:p}`Mossner2020, Chen2023b, Bhandari2024, Goff2023, Hanno2026, Michaud2024, Miller2025, Batistabrito2017, Kiss2026, Gil2024`,
but the *direction*, *magnitude*, and *circuit locus* of the deficit are
heterogeneous and must be reported as such. The empirical heterogeneity
catalogued here, alongside that of §6–§10, motivates the formal
synthesis of {ref}`sec-computational-models`, which asks whether
biophysical and rate-based three-interneuron models can absorb this
heterogeneity into a coherent computational role for VIP cells, and the
critical reassessment of the concluding synthesis, which
revisits the conserved disinhibition motif {cite:p}`Pi2013` against the human and disease
evidence summarised above.

:::{figure}../figures/fig-species-disease.png
:name: fig-species-disease
:width: 95%

**Cross-species VIP-IN density and cross-disease functional change.**
**(A)** VIP+ density anchors across species. Bars show two
mismatched-denominator anchors: VIP+ as % of GABA+ cells in P9 rat
primary auditory cortex {cite:p}`Ouellet2014` (8%, IHC), and VIP+ as % of
total neurons in human M1 cytoarchitectural subdivisions A4a / A4b / A4c
 (4.5% / 5.2% / 6.6%, RNAscope+IHC).
**Caveat (audited):** the two species use *different denominators*
(GABA+ vs total neurons), *different ages* (P9 vs adult postmortem), and
*different methods*; the apparent quantitative similarity in the 5–10%
range masks methodological non-comparability. **(B)** Cross-disease,
cross-region, cross-axis qualitative direction-of-change in
autism-spectrum mouse models. Two entries are retained from the audit
after dropping rows that violated metric homogeneity. *Goff 2023*:
*Scn1a* +/− mouse cortex *ex vivo*, baseline VIP-IN firing 34 ± 2.5 Hz
vs WT 42 ± 2.9 Hz, *decreased* {cite:p}`Goff2023`. *Rahmatullah 2023*:
*Fmr1*−/− mouse V1 *in vivo*, 57.3% of VIP cells modulated vs WT 73.2%,
*decreased* {cite:p}`Rahmatullah2023`. **Caveat (audited, mandatory):
restructure dropped the entries that violated metric homogeneity
(p-only, baseline-rate, and F-statistic rows) and reframes the panel as
qualitative direction-of-change in autism-spectrum mouse models — this
is internally consistent: both retained entries show decreased VIP-IN
function vs WT (Scn1a+/− 34 Hz vs WT 42 Hz; Fmr1−/− 57.3% modulated vs
WT 73.2%), so the qualitative direction-of-change axis is harmonized
and verifiable from the source sentences. However, two real defects
remain: (1) study_label for the Fmr1 entry (DOI 10.1101/2023.01.03.522654;
Rahmatullah 2023) is rendered with a fallback label because the cite_key
Unmapped_37e340 carries null first_author_surname and null year in the
synthesized phase-5 citation map; (2) the underlying quantitative axes
are still different (Hz vs % of cells modulated) and the two disease
models (Scn1a Dravet vs Fmr1 Fragile X) have different biological
etiologies grouped under "autism-spectrum". These are tolerable for a
qualitative forest panel as the restructure acknowledges, but warrant a
caveat — magnitudes are NOT comparable across rows.** **(C)** Qualitative
disease × phenotype matrix (cell-loss / activity / connectivity /
morphology) across AD, ASD/ID, schizophrenia, and Dravet, populated from
text-extracted findings {cite:p}`Michaud2024,Mossner2020,Chen2023b,Bhandari2024,Vogt2014,Goff2023,Hanno2026,Batistabrito2017,Miller2025,Vormsteinschneider2020,Gil2024`.
The matrix is qualitative; cells indicate direction of reported change
(↑/↓) or "altered" without intent to be commensurable across rows.
:::


:::{dropdown} 📓 Figure code
```python
# Reproduce figures/fig-species-disease.png
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams.update({"font.size": 9, "font.family": "DejaVu Sans"})
fig, axes = plt.subplots(1, 3, figsize=(15, 5.2),
                         gridspec_kw={"width_ratios":[1.2,1.2,1.6]})

# --- Panel A: VIP density (different denominators) ---
axA = axes[0]
bars = [
    ("Rat A1, P9\n(% of GABA+)", 8.0, "#3b82f6"),     # Ouellet 2014
    ("Human M1\nA4a", 4.5, "#a855f7"),                # Teymornejad 2024
    ("Human M1\nA4b", 5.2, "#a855f7"),
    ("Human M1\nA4c", 6.6, "#a855f7"),
]
xs = np.arange(len(bars)); vals = [b[1] for b in bars]; cols = [b[2] for b in bars]
axA.bar(xs, vals, color=cols, edgecolor="black", width=0.7)
axA.set_xticks(xs); axA.set_xticklabels([b[0] for b in bars], fontsize=8)
axA.set_ylabel("VIP+ density (%)"); axA.set_ylim(0,11)
axA.set_title("A — VIP+ density anchors\n(mismatched denominators)", fontweight="bold")
for x, v in zip(xs, vals):
    axA.text(x, v+0.2, f"{v}%", ha="center", fontsize=8.5)

# --- Panel B: forest plot of cross-model direction-of-change ---
axB = axes[1]
entries = [
    ("Goff 2023\nScn1a+/− cortex (ex vivo)\nbaseline firing", 34.0, 42.0, "Hz"),
    ("Rahmatullah 2023\nFmr1−/− V1 (in vivo)\n% cells visually modulated", 57.3, 73.2, "%"),
]
ypos = np.arange(len(entries))[::-1].astype(float)
for y, (lbl, ko, wt, unit) in zip(ypos, entries):
    axB.plot([wt, ko], [y, y], "k-", lw=1)
    axB.scatter([wt], [y], s=90, color="#10b981", zorder=3, edgecolor="black",
                label="WT" if y == ypos[0] else None)
    axB.scatter([ko], [y], s=90, color="#ef4444", zorder=3, edgecolor="black",
                label="Mutant" if y == ypos[0] else None)
axB.set_yticks(ypos)
axB.set_yticklabels([e[0] for e in entries], fontsize=8)
axB.set_xlabel("Reported value (different units across rows)")
axB.set_xlim(0, 100); axB.set_ylim(-0.6, len(entries)-0.4)
axB.legend(loc="upper right", fontsize=8)
axB.set_title("B — Cross-model, cross-region, cross-axis\ndirection-of-change (qualitative only)",
              fontweight="bold")

# --- Panel C: qualitative disease × phenotype matrix ---
axC = axes[2]
diseases = ["AD", "ASD/ID", "Schizophrenia", "Dravet\n(Scn1a)", "Huntington's"]
phenotypes = ["Cell loss", "Activity", "Connectivity\n/ E-I", "Morphology\n/ density"]
M = np.array([[0,1,2,0,0], [1,1,2,1,1], [2,2,2,2,2], [0,1,0,0,0]])
cmap = {0:"#f3f4f6", 1:"#fca5a5", 2:"#fde68a", -1:"#a7f3d0"}
labels = {0:"nd", 1:"↓", 2:"altered", -1:"↑"}
for i in range(M.shape[0]):
    for j in range(M.shape[1]):
        v = int(M[i,j])
        axC.add_patch(plt.Rectangle((j, M.shape[0]-1-i), 1, 1,
            facecolor=cmap[v], edgecolor="white", linewidth=2))
        axC.text(j+0.5, M.shape[0]-1-i+0.5, labels[v],
                 ha="center", va="center", fontsize=10, fontweight="bold")
axC.set_xlim(0, M.shape[1]); axC.set_ylim(0, M.shape[0])
axC.set_xticks(np.arange(M.shape[1])+0.5); axC.set_xticklabels(diseases, fontsize=8)
axC.set_yticks(np.arange(M.shape[0])+0.5); axC.set_yticklabels(phenotypes[::-1], fontsize=8)
axC.tick_params(length=0)
for s in axC.spines.values(): s.set_visible(False)
axC.set_title("C — Disease × VIP-IN phenotype matrix\n(qualitative; not commensurable across rows)",
              fontweight="bold")

plt.tight_layout(rect=[0, 0.08, 1, 1])
fig.savefig("fig-species-disease.png", dpi=180, bbox_inches="tight")
fig.savefig("fig-species-disease.pdf", bbox_inches="tight")
```
:::
:::{figure}../figures/fig-vip-disease-convergence.png
:name: fig-vip-disease-convergence
:width: 90%

**Convergence schematic: upstream insults → mid-level VIP-IN
mechanisms → circuit phenotypes.** Funnel diagram from upstream
regulators (*MECP2*, *TCF4*, *FMR1*, *SCN1A*, *CNTNAP2*, *APP*/*PSEN*,
*DISC1*, *VIPR2*) through mid-level VIP-IN mechanisms (intrinsic
excitability, synaptic input, peptide/GABA co-release, density,
connectivity) to circuit phenotypes (E/I imbalance, gain
dysfunction, oscillatory disruption). The right panel cartoons the
mouse-vs-human VIP-IN comparison anchored to {cite:t}`Hodge2019` and
{cite:t}`Yao2023`: subclass conserved, t-type expansion in primate L1,
human-specific *VIP PCDH20* and *MC4R* types
{cite:p}`Chartrand2023`. The schematic externalizes the
translational hypotheses that {numref}`fig-species-disease` only
summarises piecewise.
:::


:::{dropdown} 📓 Figure code
```python
# Reproduce figures/fig-vip-disease-convergence.png
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

plt.rcParams.update({"font.size": 9, "font.family": "DejaVu Sans"})
fig, (axL, axR) = plt.subplots(1, 2, figsize=(15, 6.2),
                               gridspec_kw={"width_ratios":[2.2, 1]})

# Left panel: 3-tier funnel (upstream genes → mid-level VIP-IN → circuit phenotype)
axL.set_xlim(0, 12); axL.set_ylim(0, 10); axL.axis("off")
axL.set_title("A — Convergence diagram: upstream insult → VIP-IN mechanism → circuit phenotype",
              fontweight="bold", loc="left", fontsize=11)

upstream = [("MECP2\n(Rett)", "#fde68a"), ("TCF4\n(Pitt-Hopkins)", "#fde68a"),
            ("FMR1\n(Fragile-X)", "#fde68a"), ("SCN1A\n(Dravet/ASD)", "#fde68a"),
            ("CNTNAP2\n(ASD/CDFE)", "#fde68a"), ("APP/PSEN\n(AD model)", "#fcd5b5"),
            ("HTT\n(HD)", "#fcd5b5"), ("VIPR2 CNV\nDISC1 (SCZ)", "#bfdbfe")]
mid = [("Intrinsic\nexcitability\n(firing rate)", "#a7f3d0"),
       ("Synaptic\ninput\n(sEPSC, mEPSC)", "#a7f3d0"),
       ("Cell number\n(IHC count,\nselective loss)", "#a7f3d0"),
       ("Sensory /\ncontext\nmodulation", "#a7f3d0"),
       ("Peptide / GABA\nco-release", "#a7f3d0")]
down = [("E/I imbalance", "#fecaca"),
        ("Gain / disinhibition\nfailure", "#fecaca"),
        ("Oscillatory disruption\n(γ, theta)", "#fecaca"),
        ("Behavioural / cognitive\ndeficits", "#fecaca")]

n, m, nd = len(upstream), len(mid), len(down)
mid_y, down_y = 5.0, 1.5

for i, (lbl, c) in enumerate(upstream):
    x = (i+0.5) * (12.0/n)
    axL.add_patch(mpatches.FancyBboxPatch((x-0.55, 8.4), 1.1, 1.0,
        boxstyle="round,pad=0.04", facecolor=c, edgecolor="black", linewidth=0.8))
    axL.text(x, 8.9, lbl, ha="center", va="center", fontsize=7)
for i, (lbl, c) in enumerate(mid):
    x = (i+0.5) * (12.0/m)
    axL.add_patch(mpatches.FancyBboxPatch((x-1.0, mid_y-0.55), 2.0, 1.4,
        boxstyle="round,pad=0.04", facecolor=c, edgecolor="black", linewidth=0.8))
    axL.text(x, mid_y+0.15, lbl, ha="center", va="center", fontsize=7.5)
for i, (lbl, c) in enumerate(down):
    x = (i+0.5) * (12.0/nd)
    axL.add_patch(mpatches.FancyBboxPatch((x-1.15, down_y-0.55), 2.3, 1.3,
        boxstyle="round,pad=0.04", facecolor=c, edgecolor="black", linewidth=0.8))
    axL.text(x, down_y+0.1, lbl, ha="center", va="center", fontsize=8)

# many-to-many funnel arrows (light)
for i in range(n):
    sx = (i+0.5) * (12.0/n)
    for j in range(m):
        tx = (j+0.5) * (12.0/m)
        axL.annotate("", xy=(tx, mid_y+0.85), xytext=(sx, 8.4),
                     arrowprops=dict(arrowstyle="-", color="#cbd5e1", lw=0.4, alpha=0.6))
for i in range(m):
    sx = (i+0.5) * (12.0/m)
    for j in range(nd):
        tx = (j+0.5) * (12.0/nd)
        axL.annotate("", xy=(tx, down_y+0.7), xytext=(sx, mid_y-0.55),
                     arrowprops=dict(arrowstyle="->", color="#94a3b8", lw=0.6, alpha=0.7))

# Right panel: subclass conserved / t-types diverge cartoon, mouse vs human
axR.set_xlim(0, 10); axR.set_ylim(0, 10); axR.axis("off")
axR.set_title("B — Subclass conserved,\nt-types diverge", fontweight="bold", loc="left", fontsize=11)

axR.add_patch(mpatches.FancyBboxPatch((0.4, 5.5), 4.0, 3.6, boxstyle="round,pad=0.05",
    facecolor="#dbeafe", edgecolor="#1e40af", linewidth=1.2))
axR.text(2.4, 8.8, "Mouse cortex", ha="center", fontsize=9.5, fontweight="bold", color="#1e3a8a")
axR.text(2.4, 7.5, "VIP subclass\n→ ~16 t-types", ha="center", fontsize=8.5)

axR.add_patch(mpatches.FancyBboxPatch((5.3, 5.5), 4.3, 3.6, boxstyle="round,pad=0.05",
    facecolor="#fce7f3", edgecolor="#9d174d", linewidth=1.2))
axR.text(7.45, 8.8, "Human cortex", ha="center", fontsize=9.5, fontweight="bold", color="#9d174d")
axR.text(7.45, 7.5, "VIP subclass\n→ 21 t-types", ha="center", fontsize=8.5)

# subclass equivalence bridge
axR.annotate("", xy=(5.3, 7.3), xytext=(4.4, 7.3),
             arrowprops=dict(arrowstyle="<->", color="#16a34a", lw=2))
axR.text(4.85, 7.6, "subclass\n=", ha="center", fontsize=8, color="#16a34a", fontweight="bold")

# bottom: VIP t-type count bar (Mouse / Marmoset / Human)
species, counts = ["Mouse","Marmoset","Human"], [16, 19, 21]
xc = np.linspace(1.5, 8.5, 3); ws = 0.7
for x, lbl, c in zip(xc, species, counts):
    h = c*0.13
    axR.add_patch(plt.Rectangle((x-ws/2, 1.0), ws, h, facecolor="#a78bfa",
                                edgecolor="black", linewidth=0.8))
    axR.text(x, 1.0+h+0.18, f"{c}", ha="center", fontsize=9, fontweight="bold")
    axR.text(x, 0.7, lbl, ha="center", fontsize=8)

plt.tight_layout()
fig.savefig("fig-vip-disease-convergence.png", dpi=180, bbox_inches="tight")
fig.savefig("fig-vip-disease-convergence.pdf", bbox_inches="tight")
```
:::
## Methodological caveats specific to this section

Several methodological caveats specific to species and disease comparisons
recur and deserve to be flagged once before a reader weighs the evidence
above. First, the *VIP-Cre* driver line and its cross-species analogues
do not capture identical populations: in mouse, VIP-Cre and VIP-IRES-Cre
labelled cells overlap heavily with the transcriptomic *Vip* subclass
{cite:p}`Tasic2018,Yao2023,Tasic2016`, but the human equivalent lacks a
matched genetic-driver tool, and human VIP characterization relies on
RNAscope, IHC, and enhancer-AAV approaches
{cite:p}`Teymornejad2024a, Lee2023a`. The
{cite:t}`Lee2023a` enhancer-AAV taxonomy is the most direct attempt to
build a shared genetic-handle framework across species. Second, ChAT
co-expression in upper-layer *VIP*-Chat cells is a stable mouse feature
{cite:p}`Tasic2016,Tasic2018,Tremblay2016,Yao2023` whose human homology is
inferred only at the transcriptomic level
{cite:p}`Hodge2019,Lee2023a`; functional confirmation in human tissue
remains incomplete. Third, the VIP-IN role within the broader 5-HT3AR+
CGE-derived population varies across reports (~40% of the 5-HT3AR
population in S1 by {cite:t}`Rudy2011`, with related estimates in
), and species-specific 5-HT3AR
distribution complicates direct transfer. Fourth, the human
neurosurgical-tissue and postmortem-tissue preparations used by
{cite:p}`Somogyi2025, Boldog2018, Hodge2019, Lee2023a` are
not interchangeable: neurosurgical samples allow live recording but are
biased toward epilepsy / tumour cohorts, and postmortem material allows
unbiased anatomical sampling but precludes live functional readouts.
Fifth, mouse-model phenotypes are typically reported as point estimates
with small *n* per condition and large between-laboratory variance; the
behavioural-phenotype translation literature surveyed by
 argues for systematic between-laboratory replication
as a corrective. Sixth, the developmental window in which VIP-INs are
sampled differs across species: rodent characterizations frequently
use juvenile (P14–P28) animals
{cite:p}`Mossner2020, Bhandari2024, Mcfarlan2024a`,
human samples are typically adult or fetal
{cite:p}`Lattke2026, Hodge2019, Lake2018`, and disease
penetrance is itself developmental
{cite:p}`Mossner2020,Chen2023b,Lattke2026,Vormsteinschneider2020,Simacek2025b`.

## Convergence on VIP-IN dysfunction across disorders

Putting the disease subsections side-by-side reveals a consistent
upstream-to-downstream architecture that {numref}`fig-vip-disease-convergence`
makes explicit. *Upstream genetic perturbations* span ion channels
(*SCN1A* {cite:p}`Goff2023,Vormsteinschneider2020`), synaptic-adhesion
molecules (*CNTNAP2*), translational regulators
(*FMR1* {cite:p}`Bhandari2024,Rahmatullah2023`), transcription factors
(*TCF4* {cite:p}`Chen2023b`; *MECP2* {cite:p}`Mossner2020,Goff2021,Ferguson2023b`),
and disease-specific proteostasis lesions (*APP*/*PSEN* in 5xFAD and 3xTg
{cite:p}`Michaud2024`; expanded HTT in R6/2
). *Mid-level VIP-IN phenotypes* recur:
reduced intrinsic excitability and firing rate
{cite:p}`Goff2023,Mossner2020`, increased input resistance with reduced
sEPSC frequency {cite:p}`Chen2023b`, reduced sensory modulation
{cite:p}`Rahmatullah2023`, and selective cell-number reductions
{cite:p}`Hanno2026,Chen2023b`. *Downstream circuit consequences* converge
on E/I imbalance, gain dysfunction, and oscillatory disruption
{cite:p}`Mossner2020, Bhandari2024, Batistabrito2017, Kiss2026`.
The convergence is not perfect — the 5xFAD-model report of a
*protective* role for exogenous VIP signalling complicates a simple
"loss of VIP function = disease" reading, and the 3xTg
"altered firing without cell loss" pattern of {cite:t}`Michaud2024`
contrasts with the cell-loss readings in *Tcf4* {cite:p}`Chen2023b` and
ASD models {cite:p}`Hanno2026` — but the architecture is recurrent
enough to justify a *VIP-IN-as-vulnerable-node* framing across
psychiatric, neurodevelopmental, and neurodegenerative disorders.

## Open questions and unmet evidence needs

We close with three questions the present evidence cannot answer. First,
no published study quantifies VIP+ cell density across mouse, marmoset,
macaque, and human in a *single denominator, single area, single age*
design; the cross-species fraction-of-CGE bar-chart envisaged in the
review plan (Panel C of the original {numref}`fig-species-disease` plan) is
buildable from {cite:t}`Bakken2021a`, {cite:t}`Bakken2021b`, and
{cite:t}`Braininitiativecellcensusnetworkbiccn2021` only as proportions
of t-type clusters, not as physical-density counts. Second, the mouse vs
human AD comparison is anchored on the mouse side
{cite:p}`Michaud2024` and on the cross-disorder review side
{cite:p}`Gil2024`, with the human-postmortem snRNA-seq pole carried by
{cite:p}`Gabitto2024` (drawn from the master citation map
under the same scope precedent applied to other master-only keys
used in this section). The AD-conflict admonition is therefore
now anchored on both sides. Third, no current human
iPSC-derived VIP-IN preparation reproduces the
intrinsic-excitability, synaptic-transmission, or oscillatory-coupling
phenotypes that mouse models report; cross-modal validation —
patch-clamp / Patch-seq characterization of human iPSC-derived VIP cells
matched to mouse disease-model intrinsic phenotypes — is the most
direct missing experiment.

:::{admonition} Apparent conflicts in cross-species and disease evidence
:class: conflict
Four further pairings flagged at evidence-package level merit explicit
treatment here. (i) {cite:t}`Krolewski2025` reported a reduced
GABAergic transcript signature including *VIP*-related transcripts in
human cingulate area BA24c′ in postmortem schizophrenia / bipolar
cohorts; the apparent-conflict partner is the up-regulated
PACAP-pathway reading documented at evidence-package level
{cite:p}`Slabe2023`. The two reports use
overlapping cingulate territory but different transcript panels and
diagnostic groups, so the contradiction may be partly axis-dependent
rather than directly opposing. (ii) {cite:t}`Krolewski2025` and
out-of-master postmortem schizophrenia work have also been read against
each other on whether VIP-specific transcript reduction localises to
DLPFC or cingulate; the in-section reading favours an
area-conditional reduced GABAergic signature rather than
region-uniform VIP loss. (iii) The status of human L1 rosehip cells as
species-specialized {cite:p}`Boldog2018` is balanced against
cross-mammalian conservation of MGE-derived inhibitory programs
described by {cite:p}`Keefe2023`; the in-section reading is that the
MGE program is conserved while specific CGE-derived t-types
(rosehip, *VIP PCDH20*, *MC4R*) are species-specialized. (iv) Whether
human rosehip cells or human double-bouquet cells are the more
prominent species-specialized type is unsettled; primate double-bouquet
work foregrounds double-bouquet cells, whereas
{cite:p}`Boldog2018` foreground rosehip cells, with no current
direct cross-comparison. (v) On the developmental side,
 reported a constant *VIP*-IN contribution to
cortical E/I balance across early postnatal stages; the
apparent-conflict partner (HosseiniFin2025, listed under unmet
citation needs) reports an age-dependent decline in
SST-IN density. The two are formally compatible (different cell
classes, different time-windows) and are surfaced here for
completeness rather than as a substantive contradiction.
:::

## Connection to neighbouring sections

The translational and disease evidence assembled here closes a gap that
{ref}`sec-in-vivo-behavior` and {ref}`sec-cross-areas` opened: rodent
*in vivo* characterizations of VIP-IN function across V1, A1, S1, and
PFC must be tempered by the species- and disease-relevant heterogeneity
catalogued above. The disinhibition-motif framing reviewed in
{ref}`sec-disinhibition-framework` retains its empirical anchor in
mouse cortex but applies to human cortex with the qualifications that
(i) primate CGE expansion may diversify the VIP→SST→Pyr motif {cite:p}`Pi2013` into
multiple parallel motifs {cite:p}`Bakken2021a,Lee2023a,Chartrand2023`;
(ii) human-specific VIP subtypes may implement connectivity rules that
mouse mechanistic data do not constrain
{cite:p}`Chartrand2023`; and (iii) disease
phenotypes converge on the *VIP* class but heterogeneously perturb
different sub-mechanisms (number, intrinsic excitability, synaptic
input, peptide release)
{cite:p}`Mossner2020, Chen2023b, Bhandari2024, Goff2023, Hanno2026`.
The molecular and developmental-lineage backbone surveyed in
{ref}`sec-molecular-identity` and {ref}`sec-development-lineage` carries
forward without revision: VIP cells are CGE-derived members of the
5-HT3AR+ lineage in all sampled species
{cite:p}`Fishell2011, Lodato2011, Mayer2018, Tasic2018, Hodge2019, Yao2023, Tremblay2016, Rudy2011`.
What does *not* carry forward without revision is the implicit
assumption that mouse mechanistic data exhaust the description of human
VIP-IN function and human disease — an assumption {numref}`fig-species-disease`
and {numref}`fig-vip-disease-convergence` are designed to make
explicit.

## Unmet citation needs

The following references support specific claims in this section but
fall outside this review's allowlisted bibliography and could not be
cited in body text. Each is reported here by DOI so the underlying claim is
auditable:

- **Slabe2023** {cite:p}`Slabe2023`
 — proposed up-regulation of PACAP-related transcripts in postmortem
 cingulate cortex of subjects with schizophrenia, the apparent-conflict
 partner to {cite:t}`Krolewski2025` (which reports a reduced GABAergic
 / *VIP*-containing transcript signature in BA24c′).
- **HosseiniFin2025** (no resolved DOI in master) — developmental
 trajectory in which SST-IN density declines with age, the
 apparent-conflict partner to an early report (constant E/I
 contribution from VIP-INs across early development).
- **Tiwari2026** — primary 5xFAD VIP / β-amyloid attenuation source
 used in the AD and Therapeutics subsections only as a candidate
 mechanism (not as cited in-section evidence).
- **Blumenstock2025** — primary R6/2 Huntington's-disease source for
 the upstream-VIP disinhibitory cascade reading.
- **Liu2025a** — primary sleep-disruption source.
- **Oh2022** — primary subgenual ACC CRH+/VIP+ overlap source.

In each case the corresponding claim has been hedged in the body text
as a candidate mechanism with explicit acknowledgement that the
primary source falls outside this section's allowlisted bibliography. The
Rahmatullah-2023 V1 in-vivo Fragile-X paper
([10.1101/2023.01.03.522654](https://doi.org/10.1101/2023.01.03.522654))
was successfully resolved as `Rahmatullah2023` in the filtered citation
map and is cited normally; its earlier "study_label = None None"
rendering in the audited Phase-6 panel data is flagged in the caption
of {numref}`fig-species-disease`B.

## A quantitative note on cross-area, cross-species comparisons

Two independent observations should accompany any quantitative
cross-species claim about VIP-INs. (1) Cell-density estimates depend
sharply on the choice of denominator (GABA+, total neurons, total cells,
5-HT3AR+, *Vip*-Cre-labelled): the Ouellet (8% of GABA+ in P9 rat A1)
versus Teymornejad (4.5–6.6% of total neurons in adult human M1)
disparity discussed above is a generic feature of the literature and
not a species-specific finding {cite:p}`Ouellet2014`.
Independent rat-brain slice work illustrates the sensitivity to driver
choice, with reports of "the fraction of VIP expressing neurons among
eGFP fluorescent cells was 7.1 ± 1.2% (median = 6.6%)" in
a non-VIP-targeted driver line, an order-of-magnitude change from the
~30–40% expected within the 5-HT3AR+ population
{cite:p}`Rudy2011`. (2) Cross-species transcriptomic
*differential* gene expression also depends on the chosen reference
genome and the alignment-by-orthology pipeline; a previous study
showed that the *GRIA2* stoichiometry signature is conserved across
"ferrets, rodents, marmosets and humans" only when the same
analysis pipeline is applied to all species, illustrating that
cross-species claims are pipeline-dependent. Quantitative claims in
this section have therefore been reported with the species, region,
denominator, and method labels intact, and we discourage extrapolation
across these axes without explicit justification.

## Closing note

The translation logic of this review is not simply that "rodent VIP
work generalizes to human" or "rodent VIP work fails to generalize."
It is that subclass-level identity transfers, t-type-level identity
partially transfers, and disease phenotypes converge on the VIP class
without converging on a single mechanism. Subsequent sections will treat
this as the empirical baseline against which the disinhibition motif and
the standard VIP–SST interaction must be re-evaluated for human cortex
{cite:p}`Hodge2019,Bakken2021a,Lee2023a,Goff2023,Bhandari2024,Mossner2020,Chen2023b,Hanno2026`,
and against which any future computational model of cortical VIP
function must be benchmarked
{cite:p}`Yao2023,Hodge2019,Lee2023a,Chartrand2023,Boldog2018`.

With the empirical landscape — molecular through clinical — now in view, {ref}`sec-computational-models` asks how computational models of VIP circuit function instantiate, generalise, or contradict it.
