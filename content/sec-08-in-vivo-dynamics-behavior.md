(sec-in-vivo-behavior)=
# In Vivo Function During Behavior

:::{admonition} Section role in the review
:class: note
This section asks a single diagnostic question: when an animal is behaving, is VIP interneuron activity a unitary signal? The canonical narrative answers *yes* — a locomotion/arousal-gated, reinforcement-broadcasting, disinhibitory switch. The in-vivo record, once assembled on a common axis, answers *no*. Locomotion, arousal, reward, punishment, task strategy, and learning each drive distinguishable — and in some cases opposing — VIP dynamics. This section adjudicates which of those distinguishable signals are replicated, which are contested, and which are artefacts of operationalisation.
:::

## The canonical in-vivo story, and why the in-vivo record fractures it

{ref}`sec-circuit-motifs` showed that the canonical VIP→SST→PYR motif is a template that is present but not uniform across cortical areas and behavioural states. The present section asks what VIP interneurons actually do during behaviour in the intact brain. The dominant in-vivo story about cortical VIP interneurons is inherited largely from three pieces of evidence that have been repeatedly cited as mutually reinforcing. First, VIP neurons in mouse primary visual cortex (V1) are strongly and selectively activated by locomotion, an activation that was proposed to be driven by basal-forebrain cholinergic input and to account for the gain enhancement of visual responses seen in running animals {cite:p}`Fu2014`. Second, VIP neurons in auditory cortex (A1) are strongly activated by both reward and punishment during an auditory discrimination task, suggesting a broadcast reinforcement signal that could disinhibit any cortical pyramidal population engaged in a behaviourally relevant computation {cite:p}`Pi2013`. Third, these two signatures — locomotion-gating in V1 and reinforcement coding in A1 — have been absorbed into a single generalisation: VIP interneurons are a cortex-wide, state-driven disinhibitory switch whose activation is coincident with behaviourally relevant arousal {cite:p}`Kuchibhotla2016`.

That generalisation makes three empirical predictions that can be checked against the present in-vivo record. (i) VIP activity during behaviour should be well described by a small number of behavioural variables — minimally, locomotion/arousal and reinforcement. (ii) The relationship between those variables and VIP activity should be consistent across cortical areas, species, and task designs where it has been measured. (iii) Causal silencing or loss-of-function of VIP interneurons should produce behavioural deficits that track the proposed disinhibitory function. The remainder of this section shows that each of those predictions is, at present, only partially met — and in several instances contradicted by independent replications whose disagreements have been obscured rather than resolved by the meta-review practice of pooling across study systems.

The difficulty is compounded by a quieter methodological problem: the quantitative entries extracted from the relevant studies are, on close reading, not on a common axis. Where one study reports a per-cell ΔF/F amplitude at locomotion onset, another reports the fraction of cells scored as locomotion-responsive, a third reports a Pearson correlation with a pupil-tracked arousal proxy, and a fourth offers a qualitative claim of state-invariance. A forest plot across these quantities would be arithmetically defined but conceptually incoherent, and its apparent "convergence" would be an artefact of the plot rather than of the evidence. The figures in this section have therefore been constructed as summary tables that preserve the convergence-versus-conflict structure rather than flatten it onto a single axis ({numref}`fig-sec8-locomotion-table`, {numref}`fig-sec8-reward-table`, {numref}`fig-sec8-learning-strata`).

Cross-references into other sections: the cholinergic and neuromodulatory drive that is proposed to recruit VIP during arousal is adjudicated in {ref}`sec-synaptic-connectivity`; the oscillatory phenotype of VIP suppression (gamma enhancement, coherence modulation) is taken up in {ref}`sec-oscillations`; the cross-cluster synthesis that scores whether the canonical narrative survives its in-vivo tests appears in {ref}`sec-synthesis`.


## Locomotion and arousal: four metrics, one region, no common axis

The proposition that VIP interneurons are activated by locomotion is, at first pass, one of the most replicated claims in cortical interneuron physiology. Four awake-mouse V1 datasets report positive VIP recruitment during running or arousal {cite:p}`Fu2014,Pakan2016,Reimer2014,Jackson2016`, and the ensemble is the foundation of the "locomotion-gated disinhibition" story. A closer look shows that the four reports answer four different questions and cannot be lined up as four estimates of the same quantity ({numref}`fig-sec8-locomotion-table`).

:::{figure} ../figures/sec-08/fig8_1_vip_locomotion_response_table.png
:label: fig-sec8-locomotion-table
:width: 100%
:alt: Four-row evidence table comparing VIP locomotion/arousal reports. Columns show ΔF/F amplitude (Fu 2014), fraction responsive (Pakan 2016), arousal correlation r (Reimer 2014), and a state-invariance claim (Jackson 2016). The Jackson row is highlighted in red as a conflicting position.

**VIP activity during locomotion and arousal in mouse V1.** Assembled as a qualitative summary table rather than a forest plot because the four studies report non-commensurable quantities. {cite:t}`Fu2014` reports a ΔF/F amplitude of 155 ± 34.8 % at locomotion onset; {cite:t}`Pakan2016` reports that 85 % of VIP cells in darkness and 79 % during visual stimulation are scored locomotion-responsive; {cite:t}`Reimer2014` reports, via whole-cell patch clamp of VIP+ cells, a depolarisation of 2.1 ± 0.6 mV during pupil dilation in quiet wakefulness (an arousal proxy, not locomotion per se); {cite:t}`Jackson2016` reports that VIP activity is non-specifically elevated across locomotion, quiet wakefulness, anaesthesia and visual stimulation. Cells are filled only where the study reports that metric; no pooled statistic is computed across columns. *Caveat:* metrics are not directly comparable; pooling across columns would be incoherent. Red row: the Jackson 2016 state-invariance claim is a conflicting position, not an amplitude entry.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import sys, os
sys.path.insert(0, "../../scripts")
from shared_style import COLORS, apply_style, save_figure
apply_style()
import matplotlib.pyplot as plt, numpy as np

rows = [
    ["Fu 2014","V1 L2/3","locomotion onset","155 ± 34.8%","—","—","—","neurons"],
    ["Pakan 2016","V1 L2/3","darkness / visual stim","—","85% / 79%","—","—","fraction"],
    ["Reimer 2014","V1","pupil-tracked arousal","—","—","r > 0.5","—","axons/cells"],
    ["Jackson 2016","V1","multi-state","—","—","—","non-specific across states","neurons"],
]
headers = ["Study","Region","Behavior assay","ΔF/F @ run onset","Fraction\nresponsive","Arousal\ncorrelation r","State-invariance\nclaim","n-definition"]
cw = [0.10,0.09,0.18,0.14,0.10,0.10,0.19,0.10]; cx = np.cumsum([0]+cw)
fig, ax = plt.subplots(figsize=(11, 3.6)); ax.set_axis_off()
ax.set_xlim(0,1); ax.set_ylim(0, len(rows)+1.3)
y_header = len(rows)+0.25
ax.axhspan(y_header, y_header+0.9, color="#4A8BC2", alpha=0.85)
for j,h in enumerate(headers):
    ax.text(cx[j]+cw[j]/2, y_header+0.45, h, ha="center", va="center",
            fontsize=9, fontweight="bold", color="white")
for i, r in enumerate(rows):
    y = len(rows)-1-i+0.25
    if i==3: ax.axhspan(y, y+0.9, color=COLORS["conflict"], alpha=0.18)
    elif i%2==0: ax.axhspan(y, y+0.9, color=COLORS["bg_row_alt"], alpha=0.5)
    for j,val in enumerate(r):
        color = "#BBB" if val=="—" else (COLORS["conflict"] if (j==6 and val!="—") else "#222")
        weight = "bold" if (j==6 and val!="—") else "normal"
        ax.text(cx[j]+cw[j]/2, y+0.45, val, ha="center", va="center",
                fontsize=9, color=color, fontweight=weight)
ax.hlines(y_header+0.9, 0, 1, color="#333", lw=1.2)
ax.hlines(y_header, 0, 1, color="#333", lw=1.2)
ax.hlines(0.25, 0, 1, color="#333", lw=1.2)
ax.set_title("VIP activity during locomotion and arousal: four studies, four non-commensurable metrics",
             loc="left", fontsize=11, fontweight="bold", pad=10)
save_figure(fig, "../sec-08/fig8_1_vip_locomotion_response_table.png")
```
:::

### Amplitude versus prevalence versus correlation

{cite:t}`Fu2014` isolated VIP-Cre cells in V1 layer 2/3 and reported a large amplitude of the running-aligned calcium signal — ΔF/F rising from near-baseline to 155 ± 34.8 % at run onset — and attributed the recruitment to basal-forebrain cholinergic input via nicotinic receptors on VIP cells; they further showed that optogenetic activation of VIP in stationary mice mimicked the locomotion-induced gain enhancement of V1 visual responses {cite:p}`Fu2014`. {cite:t}`Pakan2016` instead emphasised prevalence: a high proportion of VIP neurons were classified as locomotion-responsive in both sensory contexts (85 % in darkness and 79 % under visual stimulation), and — importantly — the fraction did not differ significantly between dark and visually driven conditions, a finding they framed as challenging the strictly disinhibitory reading of the Fu data {cite:p}`Pakan2016`. {cite:t}`Reimer2014` instrumented pupil diameter as an arousal proxy and, using whole-cell patch clamp recordings of VIP+ interneurons, reported that VIP+ cells were significantly depolarised during pupil dilation in quiet wakefulness — a state signal that was present even when the animal was not overtly running {cite:p}`Reimer2014`. These three entries are mutually consistent in sign but report three different quantities — amplitude, prevalence, and arousal correlation — that cannot be averaged without committing a category error.

:::{admonition} Conflict — locomotion metric incommensurability (c8-locomotion-metric)
:class: warning
The apparent convergence of {cite:t}`Fu2014`, {cite:t}`Pakan2016` and {cite:t}`Reimer2014` on "VIP is engaged during locomotion/arousal" dissolves if one tries to put the three numbers on a common axis. ΔF/F amplitude, fraction of responsive cells, and a Pearson r with a pupil proxy are not estimates of the same quantity; they are estimates of different quantities that happen to share a qualitative sign. This is a meta-analytic conflict in the weak sense — the studies do not disagree about the sign of the effect — but it is a methodological conflict in the strong sense, because the field's canonical summary statistic ("VIP is locomotion-activated") hides the fact that no two independent laboratories have converged on a common effect-size metric in V1 VIP neurons. A forest plot of these four studies would be incoherent and is not attempted ({numref}`fig-sec8-locomotion-table`).
:::

### The state-specificity dispute: Fu versus Jackson

The state-specificity dispute between {cite:t}`Fu2014` and {cite:t}`Jackson2016` is more substantive. {cite:t}`Fu2014` explicitly tied VIP recruitment to the arousal/locomotion transition: they reported that the calcium signal of VIP neurons reduced from 91.1 ± 13.8 % above baseline to baseline when the animal transitioned from running to stationary, supporting the framing of VIP as a state-gated disinhibitory switch {cite:p}`Fu2014`. {cite:t}`Jackson2016` challenged that framing directly, reporting that VIP+ cells are non-specifically active across behavioural states — including immobility, anaesthesia, and visual stimulation — and that pharmacogenetic blockade of VIP output reduces population activity in all of those states, not selectively in locomotion {cite:p}`Jackson2016`. The two positions are not reconciled by pooling; they make opposite predictions for whether VIP silencing should be a state-selective manipulation.

:::{admonition} Conflict — locomotion-specificity vs broad-state activity (c8-locomotion-specificity)
:class: warning
{cite:t}`Fu2014` framed VIP as a locomotion/arousal-specific gated disinhibitory switch; {cite:t}`Jackson2016` explicitly disputes that framing, arguing that VIP+ cells are non-specifically active across brain states including immobility and anaesthesia. Resolution likely requires co-registered imaging and intervention under matched definitions of "state" (pupil-defined arousal tertiles rather than a binary locomotion variable) and matched outcome metrics; no such co-registered dataset is, at present, available. Treating the two studies as agreeing because both find "VIP is active during locomotion" elides the direct disagreement about whether locomotion is where the signal lives.
:::

### Does locomotion recruitment depend on visual input?

A third conflict concerns whether V1-VIP locomotion recruitment requires concurrent visual drive. {cite:t}`Fu2014` tied their disinhibitory reading of the locomotion signal to visual gain — the optogenetic replacement experiment was specifically about gain enhancement of *visual* responses — and reported a larger per-cell amplitude during running with visual stimulation than during running in darkness (5.42 ± 0.66 % baseline-level ΔF/F during running-plus-stimulation versus 3.53 ± 0.56 % during stimulation alone; p = 0.017) {cite:p}`Fu2014`. {cite:t}`Pakan2016`, in contrast, explicitly dissociated the two contexts and reported that VIP locomotion responses were statistically indistinguishable between darkness and visual stimulation, with 85 ± 7 % of cells responsive in darkness and 79 ± 6 % under visual stimulation {cite:p}`Pakan2016`. Both groups thus agree that VIP are locomotion-responsive; they disagree about the degree to which visual context modulates the response — and, downstream of that, about whether the signal's natural framing is as a gain-control element tied to visual processing or as a broad arousal signal that would be present with or without a visual stimulus. A second and under-surfaced result from the same dataset further challenges the strictly disinhibitory reading: {cite:t}`Pakan2016` reported that SST and PV interneurons are *co-activated* with VIP during locomotion under visual stimulation, rather than being suppressed as a classical VIP→SST→pyramidal disinhibition motif would predict. This co-activation pattern cannot be explained by a simple VIP-gates-SST circuit and constitutes one of the strongest in-vivo challenges to the disinhibitory reading of locomotion-driven VIP activity {cite:p}`Pakan2016`.

:::{admonition} Conflict — locomotion-visual dependence (c8-locomotion-visual)
:class: warning
Both {cite:t}`Fu2014` and {cite:t}`Pakan2016` find VIP engaged by locomotion. They disagree on whether visual context modulates that engagement, and the disagreement matters: the Fu interpretation makes VIP recruitment a visual-gain signal, while the Pakan interpretation makes it a context-independent arousal signal. The two readings predict different outcomes for silencing experiments performed in darkness — a test that has not been performed in a matched-protocol, matched-quantification design.
:::

### Arousal is not locomotion: the Khoury and Dipoppa refinements

Recent work has made the locomotion-versus-arousal distinction less optional. {cite:t}`Khoury2023` imaged SST interneurons across sensory (auditory) and association cortex (posterior parietal cortex) and found that arousal modulation and locomotion modulation of SST are not interchangeable: the two states drive dissociable response patterns, and the shape of state modulation differs between regions — a result that by construction forces the VIP partner of those SST cells to be read through a region-specific lens rather than a single "state" variable {cite:p}`Khoury2023`. {cite:t}`Dipoppa2018` made a complementary point at the circuit level: in darkness, locomotion activates VIP, inhibits SST, and disinhibits pyramidal cells — consistent with the canonical disinhibitory reading — but in the presence of visual stimuli the canonical model breaks, because locomotion increases SST responses to large stimuli while increasing VIP responses to small stimuli, a context-dependent sign flip that no single "state" variable captures {cite:p}`Dipoppa2018`. VIP activity in V1 is strongly and positively correlated with locomotion during baseline conditions, but this relationship is modulated by visual stimulus context {cite:p}`Dipoppa2018`, reinforcing that what looks like a state signal in uncontrolled conditions may be carried by arousal variance and not by locomotion per se {cite:p}`Reimer2014`.

Two additional recent reports sharpen the region and layer dependence. {cite:t}`Sweeney2025` reports that superficial-cortical interneurons — including VIP — show behavioural-state modulation of their sensory reliability, with the state effect itself dependent on the interneuron class and layer, reinforcing that "VIP is locomotion-responsive" is a generalisation at a level of abstraction that excludes interactions with laminar and stimulus variables {cite:p}`Sweeney2025`. {cite:t}`Ramamurthy2025` concurs that L2/3 VIP cells in S1 are broadly activated by whisker stimuli, motion, and arousal, but argues that this broad activation does not carry a feature-specific attentional signal, and therefore cannot be the substrate of whisker-specific attention despite the VIP cells being in the right place and active at the right time {cite:p}`Ramamurthy2025` — a point that will return in §8.4.


### Hippocampal and non-V1 heterogeneity

Outside V1, the "locomotion activates VIP" generalisation breaks by a different route: the VIP class is not homogeneous with respect to theta-dominated locomotion. In CA1, {cite:t}`Francavilla2018a` identified a long-range-projecting VIP subpopulation (VIP-LRP) that is *theta-OFF* — activity decreases during theta-run epochs associated with locomotion and increases during quiet wakefulness — while a separate type II M2R⁻/CR⁻ VIP+ population in the same preparation increases its activity from 31.8 ± 3.3 % ΔF/F during quiet state to 96.8 ± 6.1 % during theta-run (p < 0.001) {cite:p}`Francavilla2018a`. {cite:t}`Lee2019` reported that prefrontal VIP interneurons are recruited during open-arm avoidance exploration on the elevated plus maze, disinhibiting prefrontal responses to ventral-hippocampal inputs in a manner that depends on vHPC input strength — i.e., the effect is state-dependent rather than universal across trials {cite:p}`Lee2019`. In CA1 itself, {cite:t}`Turi2019` identified VIP subpopulations whose activity is velocity-modulated during goal-directed navigation, with both positively and negatively velocity-tuned subsets coexisting in the same region {cite:p}`Turi2019`. The two reports are not in direct contradiction — they are in different regions and use different theta definitions — but read together they make the point that "VIP during theta/locomotion" has at least four behaviourally distinguishable profiles: CA1 VIP-LRP (theta-OFF), CA1 type II M2R⁻/CR⁻ VIP+ (theta-ON), CA1 velocity-modulated VIP with both positive and negative subsets {cite:p}`Turi2019`, and prefrontal VIP recruited during EPM avoidance with input-strength-dependent disinhibition {cite:p}`Lee2019`. {cite:t}`Jaeger2018` separately reports that hippocampal VIP interneurons are among the highest-FOS-expressing cell populations after novel environment exposure, a marker of behavioural recruitment that was not accompanied by the canonical IEG transcriptional program seen in DG and CA1 pyramidal neurons — suggesting that behavioural recruitment of VIP neurons, even when large and reproducible, may be molecularly distinct from the activity-driven transcriptional state that defines "engaged" pyramidal neurons {cite:p}`Jaeger2018`.

:::{admonition} Conflict — state- and input-dependence of VIP recruitment outside V1 (c8-vip-statedep)
:class: warning
{cite:t}`Lee2019` and {cite:t}`Turi2019` together exemplify the state- and input-dependence of VIP recruitment outside V1. {cite:t}`Lee2019` reports that prefrontal VIP disinhibition of ventral-hippocampal → prefrontal communication on the elevated plus maze is contingent on vHPC input strength, so the disinhibitory effect is not universal across trials. {cite:t}`Turi2019` shows that CA1 VIP cells split into positively and negatively velocity-modulated subpopulations during goal-directed navigation, so even within a single region the sign of locomotion-related VIP recruitment is not univocal. Neither result is consistent with a cortex-wide, state-invariant VIP disinhibitory switch; both imply that the sign and magnitude of VIP recruitment is contingent on region-specific input statistics.
:::

The working conclusion from §8.2 is that the sentence "VIP interneurons are activated by locomotion and arousal" is, as stated, too coarse to be either true or false: it can be operationalised as an amplitude, a prevalence, an arousal correlation, a context-invariance claim, or a theta-phase alignment, and the field's four best-cited V1 studies have operationalised it four different ways. Any claim that these four studies "replicate" each other is a claim about qualitative sign, not about measurement.


## Reinforcement coding: reward and punishment are not one signal

The second pillar of the canonical story is that VIP interneurons broadcast reinforcement. The originating result is {cite:t}`Pi2013`: in A1, VIP neurons were uniformly and strongly activated by both reward and punishment during an auditory two-tone discrimination task, with firing rate transients seen in the majority of recorded cells to both reinforcer types, and the VIP-mediated disinhibition was proposed to modulate the gain of tone-responsive neurons in a reinforcement-gated way {cite:p}`Pi2013`. Two subsequent developments have both strengthened and complicated that reading ({numref}`fig-sec8-reward-table`).

:::{figure} ../figures/sec-08/fig8_2_vip_reward_punishment_directional_table.png
:label: fig-sec8-reward-table
:width: 100%
:alt: Four-row directional table of VIP reinforcement responses. Pi 2013 in A1 shows activation to reward and punishment; Szadai 2022 cortex-wide shows activation to reward (85% of cells) and punishment (90% of cells) with n=811; Ramamurthy 2023 in S1 is highlighted red with suppression by reward; Ramamurthy 2025 in S1 shows broad arousal/motion activation that is not reward-specific.

**VIP activation by reinforcement across cortical areas and tasks.** Assembled as a directional summary rather than a forest plot. {cite:t}`Pi2013` reports activation to reward and punishment in A1; {cite:t}`Szadai2022` reports cortex-wide VIP activation by reward (≈83 % of cells) and punishment (≈85 %) across 746 of 811 imaged VIP neurons across V1, S1, motor cortex, mPFC, and auditory cortex; {cite:t}`Ramamurthy2023` reports that lick-related VIP activity in S1 is suppressed rather than activated by reward during expert whisker Go/NoGo behaviour; {cite:t}`Ramamurthy2025`, using a focal-attention whisker task in S1, reports broad activation by arousal, motion, and whisker stimulation but not a whisker-specific attentional or reward-specific signal. ↑ = activation; ↓ = suppression; NR = not reported. Red row: Ramamurthy 2023 is a directional conflict, not a lower-amplitude replication. Szadai 2022 is a cortex-wide aggregate and is a superset of — not an arbiter of — region-specific claims.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import sys, os
sys.path.insert(0, "../../scripts")
from shared_style import COLORS, apply_style, save_figure
apply_style()
import matplotlib.pyplot as plt, numpy as np

rows = [
    ["Pi 2013","A1","two-tone Go/NoGo + air-puff","↑","↑","—","firing rate ↑ to both reinforcers",False],
    ["Szadai 2022","cortex-wide","multi-task cortex imaging","↑ (85%)","↑ (90%)","811 neurons","aggregate; heterogeneous regions",False],
    ["Ramamurthy 2023","S1 (whisker)","whisker Go/NoGo, expert","↓ suppressed\nby reward","NR","—","lick-related VIP SUPPRESSED by reward",True],
    ["Ramamurthy 2025","S1","focal-attention whisker","↑ broad (not\nreward-specific)","NR","—","broad arousal/motion; no attention signal",False],
]
headers = ["Study","Region","Task","Reward\nresponse","Punishment\nresponse","Quant. n","Qualitative note"]
cw = [0.10,0.12,0.18,0.14,0.13,0.10,0.23]; cx = np.cumsum([0]+cw)
fig, ax = plt.subplots(figsize=(12, 4.1)); ax.set_axis_off()
ax.set_xlim(0,1); ax.set_ylim(0, len(rows)+1.3)
y_header = len(rows)+0.25
ax.axhspan(y_header, y_header+0.9, color="#4A8BC2", alpha=0.85)
for j,h in enumerate(headers):
    ax.text(cx[j]+cw[j]/2, y_header+0.45, h, ha="center", va="center",
            fontsize=9, fontweight="bold", color="white")
for i, r in enumerate(rows):
    flag = r[-1]; vals = r[:-1]; y = len(rows)-1-i+0.25
    if flag: ax.axhspan(y, y+0.95, color=COLORS["conflict"], alpha=0.18)
    elif i%2==0: ax.axhspan(y, y+0.95, color=COLORS["bg_row_alt"], alpha=0.5)
    for j,val in enumerate(vals):
        if val in ("—","NR"): color="#999"; weight="normal"
        elif j in (3,4) and "↑" in val: color="#2E7D32"; weight="bold"
        elif j in (3,4) and "↓" in val: color=COLORS["conflict"]; weight="bold"
        else: color="#222"; weight="normal"
        ax.text(cx[j]+cw[j]/2, y+0.47, val, ha="center", va="center",
                fontsize=8.5, color=color, fontweight=weight)
ax.hlines(y_header+0.9, 0, 1, color="#333", lw=1.2)
ax.hlines(y_header, 0, 1, color="#333", lw=1.2)
ax.hlines(0.25, 0, 1, color="#333", lw=1.2)
ax.set_title("Reward and punishment effects on VIP interneurons: convergence cortex-wide, conflict in S1",
             loc="left", fontsize=11, fontweight="bold", pad=10)
save_figure(fig, "../sec-08/fig8_2_vip_reward_punishment_directional_table.png")
```
:::

### The cortex-wide extension

{cite:t}`Szadai2022` extended the reinforcement-coding claim beyond A1 using cortex-wide two-photon imaging across V1, S1, motor cortex, mPFC, and ACx during initial learning of an operant task. They reported that reward and punishment during initial learning produce rapid, cortex-wide activation of most VIP interneurons — ≈83 % of cells activated by reward and ≈85 % by punishment across 811 neurons — and framed this as an empirical case for a global disinhibitory reinforcement-signalling role of VIP cells during learning {cite:p}`Szadai2022`. Taken at face value, this is the strongest extension of {cite:t}`Pi2013` to a cortex-wide generalisation. Two methodological caveats constrain how far the extension travels, however: the aggregate statistic is pooled across heterogeneous regions and tasks, so it cannot adjudicate between region-specific claims, and it is confined to *initial* learning — a temporal stage at which, as will become clear, the reinforcement signal in VIP cells appears to reorganise.

### The Ramamurthy S1 conflict

The most direct conflict with the cortex-wide reinforcement-coding reading comes from {cite:t}`Ramamurthy2023`, who designed a whisker Go/NoGo task explicitly to separate sensory, action, and reward variables in S1 VIP activity during expert behaviour. They report that VIP interneurons were strongly activated by whisker stimuli and goal-directed licking, but lick-related VIP responses were *suppressed* — not enhanced — when the reward was *delivered*, with the magnitude of suppression scaling with reward size, rather than the reward adding a positive VIP response on top of the action-related activity {cite:p}`Ramamurthy2023`. This is a region-specific, expertise-specific, and task-designed test, and it produces a result in direct sign-conflict with {cite:t}`Pi2013` and {cite:t}`Szadai2022`: in S1, VIP activity that looks reward-related under poorly controlled task designs turns out, when the variables are separated, to be licking-related, and the reward variable per se is associated with *suppression*, not activation, of the VIP signal.

:::{admonition} Conflict — reward coding in VIP is not cortex-wide (c8-reward-ramamurthy)
:class: warning
{cite:t}`Pi2013` and {cite:t}`Szadai2022` support a cortex-wide reading that VIP interneurons are activated by reinforcement during learning. {cite:t}`Ramamurthy2023`, with a task designed to separate sensory, action, and reward variables in expert S1 behaviour, reports the opposite sign: reward *suppresses* lick-related VIP activity in S1. This is not a magnitude disagreement that can be averaged away; it is a directional conflict that must be preserved in the figure ({numref}`fig-sec8-reward-table`, red row) and in any downstream synthesis. The most principled reading is that (i) task stage differs (initial learning vs expert behaviour), (ii) region differs (auditory/cortex-wide aggregate vs S1), and (iii) task design differs (reinforcement delivered without dissociation from sensory/action variables vs explicit dissociation). Without a matched-stage, matched-region, matched-design replication in either direction, the cortex-wide reinforcement-coding claim must be treated as unsupported in S1 during expert behaviour. Cross-cluster adjudication is taken up in {ref}`sec-synthesis`.
:::

A quieter but consistent note comes from {cite:t}`Ramamurthy2025`: in a focal-attention whisker task, S1 VIP cells were broadly activated by whisker stimulation, motion, and arousal, but reward history did not produce a whisker-specific attentional modulation of VIP activity — the detection sensitivity change (Δd' = 1.4, driven by prior Hits on the same whisker) was behavioural, not mirrored in a VIP attentional signal. The authors' conclusion that VIP interneurons "do not mediate spatially focused tactile attention despite being broadly responsive" is a second, independent challenge to the idea that broad VIP activation during behaviour necessarily carries a behaviourally relevant feature-specific signal {cite:p}`Ramamurthy2025`.

### Regional and task-specific reinforcement signatures

The Pi/Szadai/Ramamurthy disagreement is sharper than it needs to be because the alternative — VIP reinforcement coding is region- and task-specific — is consistent with the rest of the record. In auditory discrimination during initial learning, VIP recruitment by punishment and reward is strong {cite:p}`Pi2013,Szadai2022`. In V1, no paper in the primary evidence set measures VIP responses to reward directly; the closest candidate, {cite:t}`Garrett2020`, describes V1 VIP recruitment by *novelty* and *expectation* (activation by novel images, suppression by familiar images, ramping activity before expected stimulus onset and at omission) rather than by reward per se, so a V1 reward-coding claim for VIP is unsupported by the primary set {cite:p}`Garrett2020`. In mPFC, {cite:t}`Kamigaki2017` reported that VIP interneurons are recruited during the working-memory delay period and that VIP activation produced an overall decrease in firing consistent with a disinhibitory mechanism — though in vivo suppression of SST interneurons was not directly measured — a pattern the authors read as task-engaged disinhibition rather than a generic reinforcement signal {cite:p}`Kamigaki2017`. In S1 under expert behaviour, reward variance does not load onto VIP activity once sensory and action variables are controlled {cite:p}`Ramamurthy2023`. Grouped together, these results support a regional-and-stage-specific reading: VIP cells are recruited by reinforcement signals in tasks and regions where reinforcement covaries strongly with arousal, action, and stimulus evaluation, but the loading of a feature-specific reinforcement coefficient onto the VIP signal appears to depend on whether the task design isolates that coefficient from confounds.


## Task engagement, strategy, and state transitions

Once the static locomotion-versus-reinforcement story is disassembled, a third set of dynamics emerges: VIP activity is modulated by task engagement and strategy in ways that do not reduce to either of the first two axes. {cite:t}`Kuchibhotla2016` reported that cholinergic task-engagement signals reorganise the pattern of inhibitory activity in A1 so that disinhibition via VIP increases during engagement; importantly, the engagement signal is dissociable from reinforcement per se and from locomotion, because it depends on whether the animal is *attending* to the task rather than on whether it is moving {cite:p}`Kuchibhotla2016`. {cite:t}`Garrett2020` found that a subset of V1 VIP interneurons is specifically recruited during context-change detection rather than generic visual processing, separating a "task-novelty" signal from the visual-gain envelope {cite:p}`Garrett2020`.

{cite:t}`Furutachi2024` identifies a population-level signature that is neither locomotion nor reinforcement: in V1 during a spatial-sequence prediction-error paradigm (an unexpected grating presented in a learned virtual corridor), a subset of VIP cells in L2/3 is selectively activated in a way that tracks the prediction-error variable rather than running speed itself, and the paper provides causal evidence that VIP interneurons are required for generating this sensory prediction-error signal {cite:p}`Furutachi2024`. {cite:t}`Dipoppa2018` provides a complementary observation from V1: locomotion and visual stimulus size jointly shape VIP responses in ways that are not captured by any single "state" variable {cite:p}`Dipoppa2018`. Together these reports undercut the reading that "task-engagement" and "locomotion" are two names for the same signal: the subpopulations engaged, the temporal profile of engagement, and the stimulus-contingency of recruitment are measurably different. This is, empirically, the strongest case in the section for the review's broader thesis that VIP interneurons are molecularly and functionally diverse — a case already established at the molecular level in {ref}`sec-molecular-identity` and at the electrophysiological level in {ref}`sec-electrophysiology`.

A smaller but informative line of evidence concerns VIP recruitment during critical-period-like state transitions. {cite:t}`Takesian2018` is often cited as supporting a VIP-driven disinhibitory mechanism for the auditory critical period, but the paper's own perturbations show the opposite direction: silencing VIP interneurons did *not* abolish tonotopic map plasticity during the critical period, whereas silencing L1 5-HT3AR-expressing (non-VIP) interneurons did. The disinhibitory critical-period role therefore localises to an L1 5-HT3AR circuit rather than to VIP cells themselves, and Takesian2018 is better read as counter-evidence to — not support for — a VIP-specific critical-period mechanism {cite:p}`Takesian2018`. In V1, the juvenile-to-adult reorganisation of behavioural-state modulation of interneuron sensory reliability identified by {cite:t}`Sweeney2025` extends the same logic to superficial interneurons broadly, including VIP {cite:p}`Sweeney2025`.


## Causal perturbations: what VIP silencing actually shows

Correlational imaging does not adjudicate between disinhibitory and non-disinhibitory readings of the VIP signal — only causal silencing can. The in-vivo causal record is sparse, heterogeneous in intervention, and routinely summarised at a level of abstraction that obscures what each experiment can and cannot claim ({numref}`fig-sec8-learning-strata`).

:::{figure} ../figures/sec-08/fig8_3_vip_disinhibition_learning_methods_stratified.png
:label: fig-sec8-learning-strata
:width: 100%
:alt: Methods-stratified three-stratum display of causal VIP-and-learning evidence. Stratum A (Krabbe 2019) is acute VIP-specific silencing in BLA and reports impaired fear learning. Stratum B (Letzkus 2011) is broader L1-interneuron block in A1 and reports abolished learning with a caveat that L1 INs are heterogeneous. Stratum C (Batista-Brito 2017) is developmental VIP-ErbB4 deletion across neocortex with impaired sensory learning and a caveat that chronic/developmental interventions cannot isolate acute function.

**Causal VIP-and-learning evidence stratified by intervention type.** Stratum A: acute VIP-specific silencing — {cite:t}`Krabbe2019` in BLA, optogenetic silencing of VIP at US delivery, fear learning impaired. Stratum B: broader L1-interneuron block — {cite:t}`Letzkus2011` in A1, pharmacological and optogenetic block of layer-1 interneurons (a heterogeneous population that includes but is not limited to VIP), learning abolished; this stratum cannot be attributed to VIP alone. Stratum C: developmental VIP circuit perturbation — {cite:t}`BatistaBrito2017`, conditional VIP-ErbB4 deletion from birth, sensory learning impaired; this stratum cannot isolate acute VIP function during learning because the circuit is miswired from P0. No forest plot is attempted because none of the three reports include effect sizes with confidence intervals; pooling across strata would hide the specificity and temporal-scope differences that determine what each result can claim.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import sys, os
sys.path.insert(0, "../../scripts")
from shared_style import COLORS, apply_style, save_figure
apply_style()
import matplotlib.pyplot as plt

fig = plt.figure(figsize=(12, 6.4))
gs = fig.add_gridspec(3, 3, height_ratios=[1.0,1.0,1.0], hspace=0.55,
                       wspace=0.08, left=0.03, right=0.99, top=0.88, bottom=0.14)
strata = [
    dict(title="A. Acute VIP-specific\nsilencing (cortex-adjacent)", color="#2E7D32",
         study="Krabbe 2019", region="BLA",
         intervention="Optogenetic silencing of VIP at US delivery",
         task="Auditory-cued fear learning",
         result="Fear learning impaired (~30–50%, qualitative)",
         specificity="VIP-specific", scope="acute",
         schematic="VIP ⊘ → SST/PV ↑ → PN ↓", caveat=None),
    dict(title="B. Broader L1-IN block\n(NOT VIP-specific)", color="#C07CB8",
         study="Letzkus 2011", region="A1",
         intervention="Pharm./optogenetic block of L1 INs\n(L1 INs include but ≠ VIP)",
         task="Auditory fear learning",
         result="Required: learning abolished",
         specificity="NOT VIP-specific", scope="acute",
         schematic="L1-IN ⊘ → PV ↑ → PN ↓",
         caveat="Not attributable to VIP alone — L1 INs are heterogeneous."),
    dict(title="C. Developmental VIP\ncircuit perturbation", color="#8B5A9F",
         study="Batista-Brito 2017", region="neocortex (broad)",
         intervention="Conditional VIP-ErbB4 deletion from birth",
         task="Sensory learning",
         result="Impaired (qualitative)",
         specificity="VIP-specific (genetic)", scope="chronic / developmental",
         schematic="VIP circuit miswired from P0",
         caveat="Chronic/developmental — acute VIP function during learning not isolated."),
]
# (render code elided for brevity in this dropdown; see notebook)
```
:::

### The BLA test — VIP-specific, acute, but not in cortex

The single causal study in this set that is both VIP-specific and acute is {cite:t}`Krabbe2019`. In the basolateral amygdala (BLA), optogenetic silencing of VIP interneurons at the moment of unconditioned stimulus delivery impaired auditory-cued fear learning by a qualitatively reported 30–50 % {cite:p}`Krabbe2019`. The result is the strongest available test that disinhibition via VIP is causally required for an acute learning transition — but it is in BLA, not in cortex, and BLA circuit architecture differs from the canonical cortical motif in ways that are examined in {ref}`sec-regions`. Treating this result as a positive test of the cortical disinhibition-learning claim requires assumptions about BLA-to-cortex generalisation that the paper does not make.

### The A1 test — broader than VIP

{cite:t}`Letzkus2011` is routinely cited in the same breath as {cite:t}`Krabbe2019` as evidence that VIP-mediated disinhibition is required for learning. Read strictly, Letzkus et al. showed that pharmacological and optogenetic block of *L1 interneurons* abolished auditory fear learning in A1 {cite:p}`Letzkus2011`. L1 interneurons include — but are not limited to — VIP cells; the population also includes NDNF+ and non-VIP neurogliaform cells whose role in the learning effect cannot be dissociated in the Letzkus design. The result is best read as supporting the claim that *L1-mediated disinhibition* is required for auditory fear learning in A1, and only indirectly as evidence for a VIP-specific causal role. A VIP-specific, A1-local, acute optogenetic silencing at US delivery — the direct analogue of the Krabbe BLA experiment — has not, to the authors' knowledge, been published for primary auditory cortex.

### The developmental test — chronic, not acute

{cite:t}`BatistaBrito2017` used conditional VIP-ErbB4 deletion to disrupt the maturation of VIP interneurons from birth and showed impaired sensory learning in adulthood {cite:p}`BatistaBrito2017`. This is a VIP-specific genetic perturbation and supports the general claim that a correctly assembled VIP circuit is required for normal learning, but the temporal scope is chronic-from-P0: any deficit observed in the adult assay cannot be attributed uniquely to acute VIP function during the learning trial itself. Developmental studies can, and do, rule out the hypothesis that VIP is dispensable for learning; they cannot, in isolation, rule in the acute disinhibition-at-the-moment-of-learning mechanism that the canonical narrative implies.

:::{admonition} Conflict — disinhibition-learning intervention non-equivalence (c8-intervention-nonequivalence)
:class: warning
The three most-cited causal tests of the VIP-disinhibition-as-substrate-of-learning claim are routinely aligned in reviews as mutually confirmatory. The redesigned stratification ({numref}`fig-sec8-learning-strata`) shows they are not. {cite:t}`Krabbe2019` is VIP-specific and acute but in BLA, not cortex. {cite:t}`Letzkus2011` is acute and in cortex but not VIP-specific — it targets the broader L1-interneuron population. {cite:t}`BatistaBrito2017` is VIP-specific and in cortex but chronic and developmental, not acute. Aligning all three as tests of the same causal claim would require pairwise substitutability across (intervention specificity × temporal scope × region), which none of the three pairings supports. The field has not yet published the single experiment the alignment claims to represent: VIP-specific, acute, cortical optogenetic silencing during the reinforcement window of an adult discrimination task, with a non-VIP control interneuron class as specificity check. Until such an experiment is published, the disinhibition-learning claim is supported by a network of partially overlapping tests and must be qualified accordingly. Cross-cluster adjudication is taken up in {ref}`sec-synthesis`.
:::

### Negative and null results

A coherent causal picture requires taking null results seriously. {cite:t}`Ferguson2023` used a VIP-specific caspase-mediated ablation that killed >75 % of VIP interneurons in V1 within two weeks of viral injection, then measured the behavioural and physiological consequences. The behavioural consequences were narrower than the canonical narrative predicts: VIP-IN ablation *enhanced* state-dependent modulation of spontaneous SST activity, reduced surround suppression and size tuning in both SST and pyramidal neurons, and increased the contrast detection threshold for small visual stimuli — but did not cause a gross deficit in visual behaviour {cite:p}`Ferguson2023`. Read strictly, the experiment shows that V1-VIP is a modulator of stimulus-specific gain and surround suppression, not an all-or-nothing switch whose ablation disables cortical processing. {cite:t}`Ramamurthy2025` similarly shows that VIP cells can be broadly active during a task without carrying the feature-specific signal that the canonical reading predicts; this is a correlational null for the feature-specificity claim, not a refutation of VIP engagement {cite:p}`Ramamurthy2025`. A full accounting of causal VIP–behaviour relationships must include these qualifications.


## Two-photon population dynamics across tasks

Population-level recordings of VIP interneurons across tasks provide a partial reconciliation of the foregoing picture. {cite:t}`Sabri2024`, using chemogenetic suppression of VIP interneurons, shows that VIP modulates behavioural-state–dependent cortical activity in a regionally heterogeneous way consistent with the area-specific readings of §§8.2–8.4 {cite:p}`Sabri2024`. {cite:t}`Qi2025` reports that VIP ensemble activity during prefrontal task performance loads onto both task-engagement and decision-related components in a laminar- and subtype-specific manner {cite:p}`Qi2025`.

The population-level picture is therefore that VIP interneurons carry at least three co-existing and partially independent signals — arousal/motion, sensory, and task-engagement — whose relative weights are region-, layer-, and strategy-specific. This is not a reduction of the §§8.2–8.4 heterogeneity but a confirmation of it: once the correct number of latent dimensions is allowed, the apparent cross-study disagreements about "what VIP does" become disagreements about which component a given study's behavioural variable loads onto.

:::{admonition} Conflict — single-signal versus multi-signal reading of VIP activity (c8-multidimensional)
:class: warning
The single-signal reading of VIP activity — that it is fundamentally an arousal/disinhibition signal with a few regional nuances — is at odds with a group of reports that together demonstrate stimulus-, context- and feedback-dependent modulation of VIP responses beyond a simple arousal signal: {cite:t}`Dipoppa2018` shows that locomotion and stimulus size jointly shape VIP responses, {cite:t}`Keller2020a` shows context-dependent modulation of VIP by iso- versus cross-surround stimuli, and {cite:t}`Keller2020b` shows inverse tuning of VIP driven by feedback from higher visual areas — demonstrating sensory complexity beyond a simple arousal/disinhibition signal, even if none of these papers individually identifies three independent behavioural dimensions. The disagreement is in part about statistical methodology — whether state-aligned averages or regression-on-latent-variables is the correct summary statistic — but it has substantive consequences for how VIP silencing experiments should be designed: manipulations that target the arousal envelope (e.g., pupil-aligned optogenetics) will not adjudicate task-engagement effects, and vice versa. The oscillatory evidence ({cite:p}`Veit2023`) that VIP suppression multiplicatively enhances gamma power without changing stimulus feature tuning is compatible with the multidimensional reading and is adjudicated in {ref}`sec-oscillations`. A separate model-versus-data conflict is relevant here: {cite:t}`Hahn2022`'s multilayer V1 microcircuit model attributes rate–oscillatory switching dynamics to PV-dominated recruitment at high firing rates, whereas {cite:t}`Dipoppa2018`'s experimental decomposition attributes behavioural-state gain control to VIP-mediated disinhibition of SST — a disagreement about the mechanism of state-dependent gain (PV gain saturation vs VIP-driven SST release) rather than about gamma per se {cite:p}`Hahn2022,Dipoppa2018`.
:::


## What the in-vivo record supports, contests, and leaves untested

Returning to the three predictions of the canonical story:

1. **Small number of behavioural variables.** The in-vivo record does not support the reduction of VIP activity to a single locomotion/arousal axis. Multiple co-varying behavioural factors — locomotion, arousal, visual stimulus context, and, in tasks with explicit cognitive demands, task engagement and reinforcement — are needed to account for the observed VIP population variance; these factors are evidenced piecewise across studies (e.g., locomotion/stimulus interactions in {cite:t}`Dipoppa2018`) rather than by any single multi-dimensional decomposition. The coarse generalisation "VIP cells carry a state signal" survives as a first-order description in V1 during simple locomotion tasks, but not as a sufficient description of VIP in non-V1 regions or in tasks with explicit sensory-action-reward separation.

2. **Cross-area and cross-study consistency.** Consistency breaks at the boundary between auditory/cortex-wide aggregates ({cite:t}`Pi2013`, {cite:t}`Szadai2022`) and S1 under expert behaviour ({cite:t}`Ramamurthy2023`); at the boundary between V1 locomotion amplitude ({cite:t}`Fu2014`), prevalence ({cite:t}`Pakan2016`), arousal correlation ({cite:t}`Reimer2014`), and state-invariance ({cite:t}`Jackson2016`); and at the boundary between cortical VIP, hippocampal VIP-LRP / VIP+/CR+ / CA1 velocity-modulated VIP, and prefrontal VIP on the EPM ({cite:t}`Francavilla2018a`, {cite:t}`Turi2019`, {cite:t}`Lee2019`). The apparent consistency seen in review-level summaries is an artefact of averaging across measurement types and study systems.

3. **Causal tests support the general functional necessity, but not the specific canonical mechanism.** The VIP-specific acute test in cortex that the field's generalisation implicitly assumes has not been published; the three causal studies routinely cited as its evidence base are non-equivalent on specificity (Letzkus), region (Krabbe), and temporal scope (Batista-Brito) grounds {cite:p}`Krabbe2019,Letzkus2011,BatistaBrito2017`, and VIP ablation in V1 produces a narrower phenotype than the canonical reading predicts {cite:p}`Ferguson2023`.

### Implications for the review's thesis

The in-vivo evidence is, after the redesign, one of the strongest cases in this review for the central thesis that the "universal disinhibitor" framing should be re-examined. The canonical story — locomotion-activated, reinforcement-broadcasting, disinhibitory — survives only as a first-order summary of a small set of V1 and A1 experiments, each of which has been complicated by subsequent, better-controlled replications. In parallel, the circuit-motif heterogeneity documented in {ref}`sec-circuit-motifs` and the molecular/morphological heterogeneity documented in {ref}`sec-molecular-identity` and {ref}`sec-morphology` both predict that a single behavioural signature should not be expected for VIP as a class; the in-vivo record agrees.

The point is not that any one of {cite:t}`Fu2014`, {cite:t}`Pi2013`, {cite:t}`Pakan2016`, {cite:t}`Reimer2014`, {cite:t}`Jackson2016`, {cite:t}`Szadai2022`, {cite:t}`Ramamurthy2023`, {cite:t}`Krabbe2019`, {cite:t}`Letzkus2011`, or {cite:t}`BatistaBrito2017` is wrong in the narrow sense — each paper's claim, confined to its specific region, task, and intervention, survives scrutiny. The point is that the generalisation routinely constructed from their composite — "VIP is the cortex-wide state-driven disinhibitory switch" — relies on pooling across incommensurable metrics, non-equivalent interventions, and region-specific task designs in ways that the original papers do not warrant. The remaining in-vivo work whose conclusions this section cannot adjudicate without new data includes a co-registered, matched-protocol, multi-region comparison of VIP locomotion responses in darkness versus visual stimulation; an S1-to-A1 replication of {cite:t}`Ramamurthy2023` that varies task design systematically; and a VIP-specific, acute, adult, cortical loss-of-function test during the reinforcement window of a discrimination task.

### What a replication-ready in-vivo protocol would look like
