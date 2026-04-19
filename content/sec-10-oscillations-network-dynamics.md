---
title: "Oscillatory Dynamics and Temporal Coordination"
short_title: "Oscillations & networks"
label: sec-oscillations
---

# Oscillatory Dynamics and Temporal Coordination

:::{admonition} Section summary
:class: tip

Sections [](#sec-in-vivo-behavior) and [](#sec-regions) established that VIP interneurons change their firing rates with arousal, locomotion and region-specific task demands. This section adds the missing **temporal axis**. When we ask not only *whether* VIP cells fire but *how their spikes align with population rhythms*, the canonical single-role story fragments further. Gamma oscillations behave oppositely under VIP manipulation depending on preparation and model {cite:p}`Veit2023,Fu2014,Lee2025,Kranz2025`; hippocampal theta locks some VIP subtypes into high firing while silencing others on the same cycle {cite:p}`Francavilla2018a,Francavilla2018b,Luo2020`; ripple-band participation seems to live in a small, still-controversial cell population {cite:p}`Szabo2022,Schlingloff2014`; and sleep-state engagement has only just begun to be characterised {cite:p}`Rolle2025`. The practical consequence: oscillatory inferences about "VIP" must specify subtype, region, behavioural state and whether the manipulation was closed-loop — defaults that are missing from the majority of the cluster.
:::

## Why oscillations are the adjudicating axis

The canonical story that motivated this review frames VIP cells as a *gain-control knob* — disinhibitory drive onto SST, recovery of pyramidal activity, amplified sensory response during arousal {cite:p}`Fu2014,Pakan2016`. Gain, however, is a rate-coded concept. It can be correct and still tell us nothing about whether VIP perturbations *synchronise* or *desynchronise* the local network, and synchronisation is what matters for downstream readout, plasticity and inter-areal coupling {cite:p}`Buzsaki2012`. Act 2 of this review repeatedly showed that rate and synchrony can dissociate at the VIP node {cite:p}`Veit2023`; Section 10 presses on that dissociation.

We organise the section around five oscillatory regimes — gamma ({ref}`sec-10-gamma`), theta ({ref}`sec-10-theta`), beta and low-frequency coupling ({ref}`sec-10-beta`), sleep-state rhythms and ripples ({ref}`sec-10-sleep-ripples`), and causal/closed-loop tests ({ref}`sec-10-closed-loop`). Each regime surfaces at least one within-cluster directional conflict, four of which we flag explicitly in {ref}`sec-10-conflicts`. Throughout, the section sticks to the oscillatory cluster and cross-references — rather than repeats — rate-level evidence from Sections [](#sec-in-vivo-behavior) and [](#sec-regions), subtype and connectivity evidence from Sections [](#sec-synaptic-connectivity) and [](#sec-computational-models), and the disease-state reframing in Section [](#sec-species-translation).

(sec-10-gamma)=
## Gamma oscillations and the VIP node

### The empirical pivot: Veit 2023

The pivotal empirical result in this cluster is the Veit et al. 2023 Neuron paper, which combined Neuropixels recordings with optogenetic inactivation across visual conditions in mouse V1. {cite:t}`Veit2023` report that "suppressing VIP neurons strongly enhanced gamma band power and phase coupling of V1 units across both locomoting and quiescent states" and, across visual stimuli, that VIP activity was anti-correlated with gamma power ($r = {-0.84}$, $p = 0.005$) while SST activity was positively correlated ($r = +0.76$, $p = 0.019$). The same team reports that SST inactivation instead *reduced* gamma — identifying SST as the rhythm-generating partner and VIP as a **damping** element whose job is to adjust gain without letting the SST-PV-pyramidal loop over-synchronise.

That reading directly contradicts the framing inherited from {cite:t}`Fu2014`, in which locomotion *activates* VIP cells and VIP activation *increases* pyramidal firing via SST disinhibition — a circuit story that, extrapolated naïvely to LFP, predicts VIP-dependent *strengthening* of arousal-associated gamma. The two results are not directly incompatible at the rate level — VIP can lift gain while damping synchrony — but the oscillatory literature has frequently conflated the two. We call this **Conflict C1** and return to it in {ref}`sec-10-conflicts`.

```{figure} ../figures/sec-10/fig10_2_vip_gamma_effects_tiered.png
:label: fig-sec10-vip-gamma-effects-tiered
:alt: Two-tier comparison of VIP manipulation effects on cortical gamma
:width: 100%

**Effect of VIP manipulation on cortical gamma, organised as a two-tier comparison.** **Tier 1** (left): empirical Pearson correlations between cell-type activity and gamma power in mouse V1 {cite:p}`Veit2023`. VIP activity is strongly anti-correlated with gamma ($r = {-0.84}$) while SST activity is strongly positively correlated ($r = +0.76$). **Tier 2** (right): qualitative direction of gamma change when VIP activity is reduced in two recent computational models. {cite:t}`Kranz2025` reports an increase in θ–γ and α–γ modulation index in low-VIP regimes ($P<0.001$) — direction consistent with Tier 1. {cite:t}`Lee2025` reports the *opposite* qualitative direction (oscillatory activity suppression under VIP silencing in a predictive-coding model; frequency range depends on model time constants). **Directional disagreement** between Veit 2023 and Lee 2025 is flagged in red. CAVEATS: Tier 1 and Tier 2 axes are NOT shared (Pearson r vs. qualitative direction); the Tier 2 models differ in circuit scope (single-column biophysical vs. larger spiking network), cellular detail (ion channels vs. LIF) and the specific gamma observable (MI vs. coherence); Tier 2 encodings were harmonised to "direction of gamma change when VIP activity is reduced" for display, which discards magnitude.
```

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import json, matplotlib.pyplot as plt, os, sys
sys.path.insert(0, os.path.abspath("../scripts"))
from shared_style import COLORS, apply_style, save_figure
apply_style()

# Tier 1 data — Veit 2023 (r, p for VIP and SST vs gamma power)
# Tier 2 data — Kranz 2025 (+1 = gamma ↑ in low-VIP, P<0.001)
#               Lee 2025   (-1 = gamma ↓ under VIP silencing, qualitative)

fig = plt.figure(figsize=(10.0, 5.2))
gs  = fig.add_gridspec(1, 2, width_ratios=[1.0, 1.35], wspace=0.48)

ax1 = fig.add_subplot(gs[0, 0])
rs   = [-0.84, 0.76]; cols = [COLORS["VIP"], COLORS["SST"]]
ax1.bar(range(2), rs, color=cols, edgecolor="black", linewidth=1.0, width=0.55)
ax1.axhline(0, color="black", lw=0.8)
ax1.text(0, -0.92, "r = −0.84\np = 0.005", ha="center", va="top",
         fontsize=9, color="white", fontweight="bold",
         bbox=dict(facecolor=COLORS["VIP"], edgecolor="none", pad=2))
ax1.text(1,  0.84, "r = +0.76\np = 0.019", ha="center", va="bottom",
         fontsize=9, color="white", fontweight="bold",
         bbox=dict(facecolor=COLORS["SST"], edgecolor="none", pad=2))
ax1.set_xticks(range(2))
ax1.set_xticklabels(["VIP\n(Veit 2023)", "SST\n(Veit 2023)"])
ax1.set_ylabel("Pearson r\n(cell-type activity vs gamma power)")
ax1.set_ylim(-1.25, 1.25)
ax1.set_title("Tier 1 — Empirical (mouse V1)", fontsize=11, pad=8)
ax1.spines["top"].set_visible(False); ax1.spines["right"].set_visible(False)
ax1.text(0.5, -0.22, "Neuropixels + optogenetic inactivation\nacross visual conditions",
         transform=ax1.transAxes, ha="center", va="top",
         fontsize=8, color="#333333", style="italic")

ax2 = fig.add_subplot(gs[0, 1])
studies = ["Kranz 2025\n(L4 biophysical model)", "Lee 2025\n(spiking-network model)"]
directions = [+1, -1]
metric_labels = ["θ–γ / α–γ MI ↑\nin low-VIP\n(P < 0.001)",
                 "γ gain / coherence ↓\nunder VIP silencing\n(qualitative)"]
cols2 = [COLORS["accent1"], COLORS["accent2"]]
ax2.set_xlim(-0.55, 1.55); ax2.set_ylim(-1.55, 1.55)
ax2.axhline(0, color="#888888", lw=0.8, ls="--")
for i, (d, lbl, col) in enumerate(zip(directions, metric_labels, cols2)):
    ax2.annotate("", xy=(i, 0.9*d), xytext=(i, 0),
                 arrowprops=dict(arrowstyle="-|>", lw=2.4, color=col, mutation_scale=22))
    ytxt, va = (-0.35, "top") if d > 0 else (0.35, "bottom")
    ax2.text(i, ytxt, lbl, ha="center", va=va, fontsize=8.5, color="#222222")
ax2.set_xticks(range(2)); ax2.set_xticklabels(studies)
ax2.set_yticks([-1, 0, 1]); ax2.set_yticklabels(["γ ↓", "baseline", "γ ↑"])
ax2.set_ylabel("Direction of gamma change\nwhen VIP activity is reduced")
ax2.set_title("Tier 2 — Computational models", fontsize=11, pad=8)
ax2.spines["top"].set_visible(False); ax2.spines["right"].set_visible(False)

fig.suptitle("Effect of VIP manipulation on cortical gamma — two-tier comparison (axes NOT shared)",
             fontsize=12, y=1.00)
fig.text(0.5, -0.02,
         "⚠  Directional disagreement: Veit 2023 (empirical) ↔ Kranz 2025 consistent (VIP↓ ⇒ γ↑); "
         "Lee 2025 (in silico) reports opposite direction (VIP↓ ⇒ γ↓).",
         ha="center", va="top", fontsize=9.5, color=COLORS["conflict"], fontweight="bold")
save_figure(fig, "fig10_2_vip_gamma_effects_tiered.png")
```
:::

### Mechanism: PING, ING and where VIP fits

The gamma-generation machinery in cortical microcircuits is well characterised. Pyramidal-interneuron network gamma (PING) depends on reciprocal excitation-inhibition between pyramidal cells and fast-spiking PV basket cells, while interneuron-network gamma (ING) can be supported by mutual PV-PV interactions under sufficient drive {cite:p}`Buzsaki2012,Schlingloff2014,Cattani2024`. In both regimes, the oscillation is set by the time constants and synaptic kinetics of fast perisomatic inhibition {cite:p}`Schlingloff2014,Chen2017,Kang2020`. VIP cells — which target SST preferentially and PV only weakly — do not belong to the inner PING/ING loop, so their influence on gamma is necessarily *indirect*, mediated by how strongly VIP releases SST (and therefore PV and pyramidal) from inhibition.

Two classes of indirect effect are predicted. A *disinhibitory* account — in which VIP→SST→PV chains lift PV drive onto pyramidal cells — would make VIP an *enabler* of gamma via stronger PING {cite:p}`Fu2014,Wagatsuma2022a,Wagatsuma2022b`. A *damping* account — in which VIP throttles SST, which itself resonates with the PING loop — would make VIP a *brake* on gamma {cite:p}`Veit2023`. The Veit 2023 data favour damping; a subset of the computational literature converges with this (see {ref}`sec-10-gamma-computational`). But several mechanistic studies of gamma *generation* in cortex never explicitly test VIP: {cite:t}`Schlingloff2014` report that optogenetically recruiting PV basket cells alone is sufficient for persistent gamma in CA3 slices, {cite:t}`Chen2017` characterise a PV-basket autaptic contribution that tunes the rhythm, and {cite:t}`Kang2020` show that blocking persistent sodium current (INaP) in PV basket cells and pyramidal cells disrupts gamma without reference to VIP. None of these studies rules out VIP modulation; they simply do not examine it. This shapes how we read the cluster: *gamma generation* is primarily a PV story, and the *VIP contribution is modulatory*.

:::{admonition} What "PING" and "ING" mean in this section
:class: note
PING (pyramidal-interneuron network gamma) is a gamma rhythm generated by reciprocal excitation between pyramidal cells and fast-spiking PV+ basket cells: pyramidal spiking recruits PV inhibition, which silences pyramidal cells for the duration of the IPSC, after which they fire again — producing a ~30–80 Hz cycle. ING (interneuron network gamma) is generated by mutual inhibition between PV+ cells under sufficient tonic excitation, without requiring phasic pyramidal feedback. Both depend on fast perisomatic GABA-A kinetics and glutamatergic drive. VIP cells are not part of the inner loop of either mechanism.
:::

(sec-10-gamma-computational)=
### Computational predictions are themselves split

{cite:t}`Kranz2025` built a biophysically constrained layer-4 cortical model (based on rodent S1) to ask what happens to cross-frequency coupling when VIP drive is varied. Their key result: in low-VIP regimes, *theta–gamma* and *alpha–gamma* modulation indices (MI) increase by approximately 200% and 100% respectively (significant at $P<0.001$; see their Figure 4A–F). That direction is qualitatively consistent with Veit 2023 — suppressing VIP lets gamma grow stronger (and more phase-locked to slower rhythms). Separately, {cite:t}`Hahn2022` — using a different laminar cortical model — reports that the network operates in distinct regimes: an *inhibited* state with prominent slow beta-band activity, particularly in deep layers, that transitions to fast gamma in superficial layers when the circuit moves into a *disinhibited* state. Both results place "release from inhibition" and "gamma expression" on the same side of the equation.

{cite:t}`Lee2025` is the disagreement. In a spiking-network model oriented around VIP→SST→pyramidal arithmetic, the authors describe a circuit in which VIP silencing *diminishes* pyramidal gain and, qualitatively, the gamma coherence that depends on pyramidal-PV co-activation. We classify the Veit 2023 ↔ Lee 2025 pair as a **directional** disagreement (**Conflict C2**) because they predict opposite *signs* of the VIP → gamma effect; we flag it prominently on [](#fig-sec10-vip-gamma-effects-tiered). Several likely sources of the discrepancy exist: Lee 2025's network operates under a different SST–PV connectivity balance, without explicit spatial laminar structure, and without the visual-stimulus drive regime in which Veit 2023 measured gamma. None of these differences can be resolved from the cluster alone — the models do not share observables that would permit quantitative cross-validation.

A third class of model results sits alongside these. {cite:t}`Moreni2025b` demonstrates, in a corticothalamic loop model that explicitly includes VIP, that VIP activity sets gamma-band coupling between L5 pyramidal cells and higher-order thalamus in an input-dependent way; whether gamma goes up or down with VIP depends on ongoing thalamic drive.  {cite:t}`Wagatsuma2025` manipulates the PV population rather than VIP but reaches an overlapping conclusion: when E/I is tipped by reducing PV, beta (20–30 Hz), low-gamma (30–60 Hz) and high-gamma (>60 Hz) rhythmic signatures all change together, and the phase relationship between PV and pyramidal firing inverts. Collectively, these models confirm that VIP is a plausible VIP-gamma gatekeeper but resist a single sign assignment — the sign depends on which regime the network is in before the perturbation.

(sec-10-gamma-disease)=
### Gamma during development, disease and reward

A handful of studies in the cluster connect gamma to interneuron development and disease in ways that involve VIP only indirectly but constrain the interpretation of the VIP story. {cite:t}`DominguezSala2022` and {cite:t}`GonzalezBurgos2015` link gamma alterations in schizophrenia to disrupted fast-spiking PV function, with VIP implicated only through its projection to the PV pathway. {cite:t}`Yan2025` describe gamma deficits in Alzheimer's-model mice that are partially rescued by stimulating interneuron subpopulations; the rescue that {cite:t}`Wang2025a` reports uses 40-Hz sensory (GENUS) stimulation to entrain gamma and slow tau spread, but does not manipulate VIP directly. {cite:t}`Park2020` connects amyloid-beta oligomer pathology to PV hyperactivity and gamma instability in APP/PS1 and hAPPJ20 mice. {cite:t}`Ichim2024` proposes that VIP interneurons, among other interneuron classes, play a role in gamma-mediated circuit maintenance (the GAMER hypothesis). In Parkinson's models, {cite:t}`Consumi2025` describe VIP-related circuit changes that include altered beta and gamma power in cortico-basal loops. And {cite:t}`Guan2022` describes ripple-band and gamma-band coupling defects in an epilepsy-adjacent model that implicate VIP activity in temporal-lobe cortex. Finally reports pharmacological effects on hippocampal gamma that, while not specifically VIP-targeted, supply a drug-modulatable gamma reference frame.

The common thread: VIP-relevant gamma abnormalities are reported across development ({cite:t}`Ikebara2025`), schizophrenia, Alzheimer's, autism and Parkinson's. None is yet a closed causal loop back to VIP. Section [](#sec-species-translation) handles the translational implications of these observations; here we only flag that the disease-model literature is consistent with the central point of {ref}`sec-10-gamma` — VIP sits on the *modulatory* shoulder of gamma, and when you break the modulatory shoulder, gamma deranges but in region- and state-specific ways.

(sec-10-theta)=
## Theta: a single region, three different VIP subtypes, three different theta phenotypes

### Within-VIP heterogeneity in CA1

The clearest demonstration that "VIP" names a family rather than a functional unit comes from hippocampal work on VIP subtypes during theta. {cite:t}`Francavilla2018a` imaged CA1 stratum oriens/alveus VIP cells with two-photon calcium imaging in awake head-fixed mice and showed that M2R$^-$/CR$^-$ type-II VIP$^+$ interneurons *increase* their activity ~3-fold during theta-run episodes relative to quiet wakefulness (31.8 ± 3.3% → 96.8 ± 6.1% ΔF/F, $p<0.001$, Mann–Whitney, $n=14$ cells over 162 stationary and 190 theta-run periods). These are recruited by running — consistent with a "theta-ON" label at the subtype level. [](#fig-sec10-vip-theta-modulation-ca1) displays this single-study effect.

```{figure} ../figures/sec-10/fig10_1_vip_theta_modulation_ca1.png
:label: fig-sec10-vip-theta-modulation-ca1
:alt: Type-II VIP+ CA1 interneurons increase activity during theta-run episodes
:width: 70%

**Brain-state modulation of type-II VIP⁺ CA1 interneurons during theta-run.** M2R$^-$/CR$^-$ cells imaged by two-photon Ca$^{2+}$ imaging in awake head-fixed mice; mean ± SEM ΔF/F during quiet wakefulness vs. theta-run episodes, $n=14$ cells across 162 stationary and 190 theta-run periods ($p<0.001$, Mann–Whitney). Restricted to Francavilla 2018a — the Szabo 2022 TORO cell data were omitted from a cross-paper comparison because (i) ΔF/F (Ca$^{2+}$ imaging) and firing rate in Hz (juxtacellular) cannot be plotted on a shared axis without implying a quantitative equivalence that does not exist, and (ii) the brain-state contrast is different (theta-run vs quiet wake here; theta vs ripple in Szabo 2022). CAVEATS: ΔF/F is a non-linear proxy for spiking; single-study panel; state contrast is locomotion-driven theta rather than theta-vs-ripple.
```

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import json, matplotlib.pyplot as plt, os, sys
sys.path.insert(0, os.path.abspath("../scripts"))
from shared_style import COLORS, apply_style, save_figure
apply_style()

means = [31.8, 96.8]; sems = [3.3, 6.1]
states = ["Quiet\nwakefulness", "Theta-run\nepisodes"]
fig, ax = plt.subplots(figsize=(4.2, 4.4))
ax.bar(range(2), means, yerr=sems,
       color=[COLORS["neutral"], COLORS["VIP"]],
       edgecolor="black", linewidth=1.0, capsize=6, width=0.55,
       error_kw={"elinewidth":1.2, "ecolor":"black"})
ytop = max(m+s for m,s in zip(means,sems)) + 6
ax.plot([0,0,1,1],[ytop-2,ytop,ytop,ytop-2], color="black", lw=1.0)
ax.text(0.5, ytop+1.5, "p < 0.001  (Mann–Whitney)", ha="center", va="bottom", fontsize=9)
for x, m, s in zip(range(2), means, sems):
    ax.text(x, m/2, f"{m:.1f}\n± {s:.1f}", ha="center", va="center",
            fontsize=10, color="white", fontweight="bold")
ax.set_xticks(range(2)); ax.set_xticklabels(states)
ax.set_ylabel(r"$\Delta$F/F (%)")
ax.set_title("Type-II VIP$^+$ CA1 interneurons\n(M2R$^-$/CR$^-$, two-photon Ca$^{2+}$ imaging)",
             fontsize=11)
ax.set_ylim(0, 125)
ax.spines["top"].set_visible(False); ax.spines["right"].set_visible(False)
ax.text(0.5, -0.24,
        "n = 14 cells • 162 stationary + 190 theta-run periods\n"
        "Data: Francavilla et al. 2018a (10.1038/s41467-018-07162-5)",
        transform=ax.transAxes, ha="center", va="top", fontsize=8, color="#333333")
save_figure(fig, "fig10_1_vip_theta_modulation_ca1.png")
```
:::

In the same hippocampal CA1 region, **VIP-LRP** (VIP-expressing long-range-projecting M2R$^+$/CR$^-$) cells behave oppositely. {cite:t}`Francavilla2018b` and {cite:t}`Luo2018` report that VIP-LRP cells are preferentially active during quiet, non-theta states and *silent* during theta-run episodes — a theta-OFF phenotype. {cite:t}`Katona2017` extend this by showing that VIP-LRP cells fire at specific theta phases on the rare occasions when they do fire during theta, fitting a theta-timing role in a non-theta-recruited cell. A third hippocampal VIP class — **VIP-IS** (interneuron-selective, including IS3) — is theta-phase-locked but with delayed recruitment relative to theta-ON VIP-BC cells {cite:p}`Luo2020`. {cite:t}`GuetMcCreight2019` and {cite:t}`Michaud2024b` use computational and morphology-constrained modelling to confirm that biophysically distinct VIP subtypes (type-1 and type-2 in their taxonomy) sit at different points along the theta cycle.

The combined picture is that within a single ~500 μm patch of CA1 stratum oriens/radiatum, three VIP cell classes present three different theta relationships: recruited (type-II VIP-BC), silent (VIP-LRP) and phase-locked but delayed (VIP-IS). **Conflict C3** — that VIP-LRP's theta-OFF status contradicts the more common assumption of a uniformly theta-engaged VIP population — is visible between {cite:t}`Francavilla2018b` and the earlier literature that treated VIP as a homogeneous theta partner {cite:p}`Chamberland2010,Tahvildari2012`. We return to the implications in {ref}`sec-10-conflicts`.

### Cortical theta and cross-region VIP

Outside hippocampus, theta-band dynamics involving VIP are dominated by prefrontal and sensorimotor cortex. {cite:t}`Lee2019` and {cite:t}`Pancotti2022` report prefrontal VIP cells tracking theta-band rhythms during goal-directed behaviour; {cite:t}`Lin2024` describe theta coupling between PFC and hippocampus that depends on intact VIP signalling. {cite:t}`Kranz2025` — the model introduced above — predicts increased theta-gamma MI when VIP drive drops. {cite:t}`Bilash2023` characterises entorhinal-cortical VIP inputs to CA1 that could provide a route by which cortical theta engages the hippocampal VIP population. {cite:t}`Ferraguti2005` and {cite:t}`Chamberland2010` provide the older anatomical foundation that shaped how these functional observations were interpreted.

Theta is also the cleanest demonstration within the cluster that subtype identity propagates all the way up to a network-level observable. In {cite:t}`Francavilla2020` and {cite:t}`Booker2018` reviews of CA1 interneuron diversity, the within-VIP functional spread in CA1 is argued to mirror the transcriptomic heterogeneity documented in Section [](#sec-molecular-identity); combining the theta phenotypes with the transcriptomic split produces a coherent map in which the molecular subtype predicts the theta relationship. What the field does not yet have — and what {ref}`sec-10-closed-loop` will return to — is the closed-loop causal test that would prove theta phenotype follows from subtype, not the other way round.

### Theta in disease: epilepsy and amygdala pathology

In the BLA, {cite:t}`Tuna2025` ablated each of VIP, SST, and PV interneurons separately and observed that each subtype ablation produced a distinct but significant effect on peak BLA theta power ($F(3,36)=114.7$, $p<0.0001$, one-way ANOVA). This is the clearest causal demonstration in the cluster that VIP loss perturbs theta — but the direction (increase or decrease) depends on subtype and measurement window, and the result applies to BLA, not neocortex. {cite:t}`LopezPigozzi2016` shows hippocampus-PFC theta coherence is disrupted in an AD-amyloid model in a manner that co-occurs with VIP interneuron changes. {cite:t}`Dubey2022` provides a related observation in a different pathology context. {cite:t}`Rahimi2023b` shows that anatomically restricted inhibition of VIP-INs of the ventral subiculum is sufficient to reduce seizures in the intrahippocampal kainic-acid model of epilepsy, changing the circadian rhythm of seizures — again a causal result, but framed at the seizure level rather than the theta level per se.

### Cross-reference: what rate and what phase

The theta story illustrates why the oscillatory axis is needed. Several of the same papers that show VIP *rate* increases during arousal or locomotion also show VIP *phase* is either neutral, opposite, or subtype-specific with respect to theta. A correct statement of the field is not "VIP cells track theta" — it is "some VIP subtypes track theta-run rate, some are theta-OFF, and some are phase-locked but delayed, and the subtypes are molecularly, morphologically and developmentally distinguishable," which is precisely the heterogeneity argued in Sections [](#sec-molecular-identity), [](#sec-development), and [](#sec-morphology).

(sec-10-beta)=
## Beta and low-frequency coupling

Beta-band (12–30 Hz) dynamics are less heavily studied in the VIP cluster than gamma or theta, but three threads organise what is available. The first is laminar: {cite:t}`Hahn2022` reports a cortical-column model in which deep-layer beta emerges in the *inhibited* state (high SST tone, low VIP drive), while superficial-layer gamma emerges when VIP drive lifts the SST brake — a mapping that makes beta the "VIP-off" rhythm and gamma the "VIP-on" rhythm in their model. In computational simulations, {cite:t}`Wagatsuma2022a` and {cite:t}`Wagatsuma2022b` show that progressive reduction of PV engagement shifts the dominant cortical rhythm from gamma to beta in a spiking network model, with VIP activity tracking the transition. {cite:t}`Wagatsuma2025` extends that to show that beta, low-gamma and high-gamma signatures all change when E/I ratio is tipped by PV reduction, and that the PV-pyramidal phase relationship inverts in the beta-dominated regime. Together, these three papers argue that beta is the network's *default* rhythm when fast inhibition loses grip and the slow SST-mediated brake engages — and that VIP activity is the third-party modulator of the transition.

The second thread is inter-areal. {cite:t}`Bastos2023` and adjacent work argue that alpha–beta coupling between higher and lower cortical areas is carried by top-down pathways that engage VIP interneurons in target areas; in these models VIP acts as a gating element on long-range feedback. {cite:t}`Chalkiadakis2025` reports developmental changes in beta and gamma spectral peaks across the first postnatal weeks in cortex that co-occur with maturation of VIP circuitry, and {cite:t}`Ikebara2025` similarly links beta-band trajectory to developmental VIP integration. {cite:t}`Haziza2025` provides more recent evidence for a selective role of VIP cells in shaping beta-range temporal structure during exploratory behaviour.

The third thread is reward and neuromodulation. Several papers connect VIP's neuromodulatory inputs (Section [](#sec-synaptic-connectivity)) to slow oscillatory effects: {cite:t}`Unal2018` on basal forebrain cholinergic drive and {cite:t}`Hakim2018` on cholinergic and serotonergic control of cortical VIP cells — all predict that beta and slow-gamma spectral transitions are modulated by the moment-to-moment cholinergic state. These papers are not primarily beta studies, but they supply the neuromodulatory substrate without which {ref}`sec-10-beta`'s beta observations would have no mechanism.

Taken together, the beta evidence is consistent with {ref}`sec-10-gamma`'s damping story but points toward a second role for VIP: not only a damper of fast PING gamma, but a gate on the deep-layer-beta ↔ superficial-layer-gamma switch that distinguishes inhibited and disinhibited network regimes. We note this as a tentative **subsumption** rather than a tested causal claim — the cluster has no closed-loop test of this specific hypothesis.

(sec-10-sleep-ripples)=
## Sleep-state rhythms, up/down transitions and ripples

### Sleep states

{cite:t}`Rolle2025` provides the most comprehensive sleep-state characterisation of cortical VIP cells to date: two-photon Ca$^{2+}$ imaging of layer-2/3 VIP interneurons in naturally sleeping male mice across wake, slow-wave sleep (SWS), REM sleep, cortical spindles and slow oscillations. VIP activity is state-specific — reduced on average during SWS, elevated during REM, and modulated on spindle timescales — suggesting VIP cells actively participate in sleep-stage cortical dynamics rather than simply following arousal. This is early literature: the cluster contains few replications, and the within-cluster cross-references (e.g., {cite:t}`Hosseini2025`, {cite:t}`Rolle2025`) mostly frame rather than test the result. Nonetheless, {ref}`sec-10-sleep-ripples` sides with the scaffold's claim that *VIP contribution to up/down transitions and sleep-state oscillations is understudied relative to cortical gamma work* — only one primary study in-cluster directly addresses VIP activity across SWS / REM / wake at the cell population level.

Up/down transitions are studied primarily through SST rather than VIP in this cluster. {cite:t}`Neske2016` shows that SST cells are the principal controller of pyramidal firing during Up states. That result frames the VIP role as indirect: VIP's disinhibitory drive onto SST should, by inference, modulate the Up-state firing-rate envelope, but the causal test has not been performed with the cluster's available preparations. {cite:t}`Ichim2024` provide related observations in neuromodulatory and autism-model contexts respectively. **Conflict C4** sits here implicitly — whether VIP drive during cortical Up states *accelerates* pyramidal recruitment (the disinhibition inference) or *stabilises* firing via SST-PV damping (the Veit 2023 inference) is not resolved in the cluster.

### Ripples: ripple generation, VIP-adjacent cells and the TORO controversy

Sharp-wave ripples (SPW-Rs, ~150–250 Hz in rodent CA1) are the fastest population rhythm the cluster discusses. The classical account places PV basket cells at the ripple centre. {cite:t}`Schlingloff2014` shows that recruitment of PV basket cells is sufficient for persistent gamma and, by extension, that PV cells are plausibly the ripple pacemaker. {cite:t}`Schlingloff2025` updates this with mechanistic detail on how PV fast-spiking dynamics shape ripple timing. {cite:t}`Hu2023b` characterises neocortical ripplets as involving FS interneuron synchrony and feedforward inhibition, with excitatory RS-RS cascades as the primary driver — analogous to but mechanistically distinct from hippocampal ripples. And {cite:t}`SchefferTeixeira2025` reports that during ripple events, CA1 pyramidal cells fire maximally just before the ripple trough while interneuron activity peaks just afterward — consistent with classical PV-based ripple gating. {cite:t}`Sengupta2025` shows that increased overall firing during ripple events can be reproduced in large-enough pyramidal networks without VIP-specific manipulation, bounding how much ripple generation requires a VIP-like cell.

{cite:t}`Szabo2022` describes a *ripple-selective GABAergic projection population* in CA1 — the theta-OFF / ripple-ON ("TORO") cells — that fire at distinctly high rates during ripples ($173.7 \pm 26.0$ Hz) but almost silently during theta ($2 \pm 2.5$ Hz), $n=7$ juxtacellularly recorded cells. The open question: are TORO cells a VIP subtype, a CCK-expressing basket cell group, or something else? The source paper does not unambiguously identify them as VIP, and the cluster contains the genuine conflict (**Conflict C5**): if TORO cells are VIP, then VIP participates directly in ripple generation via an entirely distinct, theta-OFF subpopulation, and the "VIP damps fast rhythms" reading of {ref}`sec-10-gamma` would need a ripple-specific exception. Because identity is unresolved, we explicitly exclude TORO cells from the quantitative cross-study comparison in [](#fig-sec10-vip-theta-modulation-ca1) (see that figure's caveats).

{cite:t}`Lapray2012` and {cite:t}`Unal2018` provide in vivo subtype-specific ripple-phase data for CA1 interneurons that are consistent with either TORO interpretation, depending on the identification of long-range projecting subtypes. {cite:t}`Luo2018`, {cite:t}`Luo2020` and {cite:t}`Francavilla2018a` supply the VIP-specific hippocampal ripple-phase observations that place known VIP subtypes *outside* the ripple peak — which, combined, argue that if TORO cells are VIP, they are a small, molecularly distinct class whose dynamics do not generalise to the bulk of the VIP population. {cite:t}`Guan2022` reports ripple-band disruption in a VIP-relevant disease model. {cite:t}`Rozov2024` provide newer hippocampal interneuron ripple characterisations from the last few years.

### Spindles and slow oscillations

{cite:t}`Rolle2025` is again the primary source for VIP engagement during cortical spindles and slow oscillations, with the caveat that this is a largely single-study observation in the cluster. {cite:t}`Hencz2023` offers a converging observation in a related cortical region, and {cite:t}`Dumont2019` provides developmental context for how these slower rhythms mature alongside VIP circuitry. Beyond these, the cluster contains more modelling than empirical work on VIP-specific roles in spindle and slow-oscillation genesis — {cite:t}`PittmanPolletta2021` and {cite:t}`Cattani2024` are examples. The paucity is itself the finding: {ref}`sec-10-sleep-ripples` reports a literature gap.

(sec-10-closed-loop)=
## Closed-loop perturbations and the causality problem

Most of the causal inferences we have drawn so far — that VIP damps gamma, that VIP silences ripple-related cells, that VIP lifts the PING brake — rest on *open-loop* manipulations: optogenetic or chemogenetic perturbations delivered without reference to the ongoing oscillatory phase. That design can establish a net effect averaged across many cycles, but cannot test whether the *phase* of VIP activity within a cycle is causal. The scaffold's fifth key claim is that "closed-loop optogenetic tests remain rare; most causal oscillatory inferences rest on open-loop manipulations," and the cluster supports that view.

{cite:t}`Yan2025` and {cite:t}`Wang2025a` use 40-Hz sensory or optogenetic entrainment (the GENUS family of interventions) to entrain gamma in an open-loop but feedback-to-brain fashion — *drive the eye or the ear, measure the cortex*. These preparations demonstrate that entraining gamma has measurable behavioural and molecular consequences (e.g., reductions in tau spread, improvements in cognition in mouse AD models) but they do not trigger VIP stimulation based on the ongoing rhythm. Closer to a closed-loop design, {cite:t}`Veit2023`, {cite:t}`Lenkey2025` and {cite:t}`Rahimi2023b` all perform optogenetic or chemogenetic VIP manipulations during defined behavioural epochs, but none conditions the perturbation on the phase of an ongoing oscillation.

{cite:t}`Moreni2025b` argue from modelling that phase-specific VIP manipulation should have qualitatively different effects from open-loop manipulation of the same net duration — with the prediction that VIP silencing *during gamma troughs* should have the opposite sign of VIP silencing *during gamma peaks*. This prediction is testable but un-tested. A small number of cluster papers provide infrastructure that could support such a test in principle — {cite:t}`Haziza2025` on fast behavioural readouts, {cite:t}`Rademacher2025` on closed-loop intervention frameworks, and {cite:t}`Iqbal2025` on state-aware imaging pipelines — but none yet couples closed-loop optogenetics to VIP-restricted lines.

The gap is significant. Until a phase-locked VIP manipulation is performed, the directional disagreement between {cite:t}`Veit2023` and {cite:t}`Lee2025` cannot be resolved at the mechanistic level: both are consistent with some averaged open-loop result, and the sign difference may live entirely in the phase. We flag this as **Conflict C6** — a *methodological* conflict rather than a data conflict: the two main causal framings of the VIP-gamma relationship make incompatible predictions that cannot be chosen between with the currently available experimental design.

(sec-10-conflicts)=
## Cross-study synthesis: four (plus two) conflicts

The following table summarises the conflicts surfaced in this section. Four are *directional* data disagreements; two are framing/design issues that propagate into interpretation.

:::{table} Oscillatory conflicts surfaced in this section (cluster 10).
:label: tbl-sec10-conflicts

| ID  | Type | Papers | Nature of disagreement | Plausible resolution |
|-----|------|--------|------------------------|----------------------|
| **C1** | Framing | {cite:p}`Veit2023` ↔ {cite:p}`Fu2014` | VIP activity tracks arousal (Fu) **and** anti-correlates with gamma power (Veit). Rate vs. synchrony are independently controlled; the canonical motif conflates them. | Separate "gain" from "synchrony" readouts in all future VIP papers. |
| **C2 ⚠** | Directional | {cite:p}`Veit2023,Kranz2025` ↔ {cite:p}`Lee2025` | VIP silencing → γ↑ in Veit 2023 and increased θ–γ / α–γ cross-frequency coupling in Kranz 2025; VIP silencing → γ↓ in Lee 2025 model. | Phase-locked closed-loop VIP manipulation under matched visual drive ({ref}`sec-10-closed-loop`). |
| **C3** | Directional | {cite:p}`Francavilla2018a,Luo2020` ↔ {cite:p}`Francavilla2018b` | Type-II VIP-BC: theta-ON (run-recruited). VIP-LRP: theta-OFF (silenced by running). | Subtype identity — VIP-LRP and VIP-BC are molecularly and morphologically distinct; not a true contradiction once subtype is specified. |
| **C4** | Framing | {cite:p}`Fu2014`-derived disinhibition inference ↔ {cite:p}`Veit2023,Neske2016` SST-centric inference | Up-state pyramidal firing: accelerated by VIP (disinhibition) or stabilised by SST with VIP as damper? | Closed-loop Up-state-triggered VIP perturbation; currently absent in cluster. |
| **C5** | Identity/directional | {cite:p}`Szabo2022` ↔ {cite:p}`Francavilla2018a,Luo2018,Francavilla2018b` | TORO ripple-selective cells: are they a VIP subtype? If yes, VIP participates in ripple *generation*, contrary to the {ref}`sec-10-gamma` damping story. | Molecular identification of TORO cells; figure 10.1 currently omits them for this reason. |
| **C6** | Methodological | {cite:p}`Veit2023` ↔ {cite:p}`Lee2025`; open-loop vs. phase-locked | Open-loop manipulation cannot adjudicate phase-specific claims. | Closed-loop, phase-locked VIP optogenetics under matched network regime. |

:::

The conflicts are not symmetric. **C3 dissolves** once subtype heterogeneity is acknowledged — which is why Sections [](#sec-molecular-identity) and [](#sec-morphology) matter operationally for interpreting this section. **C1 and C4** dissolve once rate and synchrony are measured separately in the same preparation — a design change rather than a new experiment. **C5** needs a molecular identification of TORO cells, which is tractable. **C2 and C6** are the hard conflicts: they cannot be adjudicated with the preparations currently published. Together they represent the structural limit of what the oscillatory VIP literature can claim causally as of the date of this cluster.

:::{admonition} What a well-designed decisive experiment would look like
:class: warning
Closed-loop optogenetic silencing of a genetically defined VIP subtype (e.g., VIP-BC versus VIP-LRP) triggered on the phase of an ongoing narrow-band gamma rhythm recorded with Neuropixels, in a mouse performing a matched visual-stimulus protocol across arousal levels, with rate *and* spectral coherence readouts measured simultaneously. This single experiment would adjudicate **C2**, **C5** and **C6** at once. It has not been performed in any paper in this cluster; the {cite:t}`Haziza2025` and {cite:t}`Rademacher2025` infrastructure papers move toward it without crossing the finish line.
:::

## Bridge to Section 11

Section [](#sec-species-translation) picks up the disease-model threads that appear repeatedly in {ref}`sec-10-gamma-disease` and {ref}`sec-10-sleep-ripples`. The common constraint is that the signatures we have been calling *VIP-dependent oscillatory phenotypes* in healthy mouse cortex recur in human disease populations in the form of narrow-band gamma power changes, theta–gamma coupling anomalies and ripple-band disruptions. What Section 11 adds is the question of whether the healthy-mouse VIP biology — with its subtype-dependent theta roles, context-dependent gamma sign and still-speculative ripple involvement — translates to the human brain, and whether any of the open directional conflicts surfaced here ([](#tbl-sec10-conflicts)) are resolvable in primate, human tissue, or higher-animal preparations where the subtype composition and behavioural repertoire differ. The VIP circuit that Act 1 built as a cell class, Act 2 interrogated as a circuit and this section interrogates as a temporal coordinator, Act 3 will test as a translational target.
