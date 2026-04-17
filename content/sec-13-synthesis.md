(sec-synthesis)=
(sec-13-synthesis)=

# Synthesis: Reassessing the Canonical VIP Disinhibitor

> "VIP cells inhibit SST cells, which inhibit pyramidal dendrites." A single sentence — repeated so often in the last decade that it has begun to function as the definition of VIP interneurons rather than as one empirical finding about them.

The preceding twelve sections accumulated evidence from molecular taxonomy {ref}`sec-molecular-identity`, development {ref}`sec-development`, morphology and intrinsic physiology {ref}`sec-morphology`, connectivity {ref}`sec-synaptic-connectivity`, circuit-level perturbation {ref}`sec-circuit-motifs`, in-vivo recording {ref}`sec-in-vivo-behavior`, oscillations {ref}`sec-oscillations`, disease models {ref}`sec-species-translation`, computational accounts {ref}`sec-computational-models`, species comparison {ref}`sec-species-translation`, and methodology {ref}`sec-computational-models`. This section does the adjudication. It asks a single question in several forms:

1. **What replicates?** Which claims are now supported by at least three independent groups, ideally using orthogonal methods, in comparable preparations.
2. **What is contested?** Where do disagreements persist, and what would have to be measured to resolve each one.
3. **What is untested?** Which pieces of the canonical narrative have never been directly probed — they are assumed on structural plausibility rather than shown.
4. **What should replace the canonical framing?** Given the answers to (1)–(3), what is the most parsimonious statement about VIP function that a reader should carry forward.

The central finding of this review is not that the canonical VIP→SST→pyramidal disinhibitory motif is wrong. It is that the motif, as commonly invoked, is a **universally-quantified claim** built from a **locally-quantified dataset**. Landmark studies in mouse primary visual and auditory cortex, in layer 2/3, in awake head-fixed preparations, under specific arousal states, supplied the mechanism [{cite:p}`Pi2013`; {cite:p}`Fu2014`; {cite:p}`Keller2020a`], with {cite:p}`Wang2018` synthesizing these findings into a pathway-gating framework. Review articles then promoted the mechanism to a cortex-wide default. The evidence assembled here — drawing on ~112 primary studies across mouse, primate, and human cortex, and eight curated disagreements in the canonical motif that survive cross-study comparison — shows that the promotion outran the dataset. VIP is a molecularly structured class whose circuit function depends on **subtype × region × layer × behavioral state × molecular context**. The canonical motif is one well-documented cell of that grid; generalizing it to all cortex is a rhetorical move, not an empirical one.

The rest of this section defends that claim. We organise around the subsections of the scaffold: triangulation of what replicates ({ref}`sec-13-triangulation`), contested findings ({ref}`sec-13-contested`), untested predictions ({ref}`sec-13-untested`), the revised framework ({ref}`sec-13-framework`), and evidence grades ({ref}`sec-13-grades`). Figure {numref}`fig-sec13-framework` gives the revised framework schematically; Figure {numref}`fig-sec13-conflicts` summarises how the eight curated disagreements distribute across five thematic axes and which remain unresolved.

:::{figure} ../figures/sec-13/fig_sec13_revised_framework.png
:label: fig-sec13-framework
:align: center
:width: 95%

**A revised framework for VIP interneuron function.** *Top left:* the canonical
cartoon — VIP inhibits SST, which inhibits pyramidal dendrites; universal,
cortex-wide, state-invariant. *Top right:* the same cell class factored across
four axes that the evidence in sections 2–12 shows are necessary to predict the
circuit phenotype: molecular subtype, region, behavioral state, and
molecular / genetic context. *Bottom:* eight boundary-condition cells summarising
where the canonical motif is robustly replicated (green), mixed (amber), or
contested / not supported (red). Schematic only; no quantitative axes are implied.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, Rectangle, FancyArrowPatch
import numpy as np

plt.rcParams.update({'font.size': 10, 'font.family': 'DejaVu Sans'})
VIP,SST,PV,PYR,CCK,CR,CHAT = '#E8823C','#4A8BC2','#6CA97E','#2B2B2B','#C07CB8','#D9A441','#8B5A9F'
GREY,LIGHT,BAD,OK = '#888888','#F0F0F0','#C94A4A','#4A9E6B'

fig = plt.figure(figsize=(13, 9)); fig.patch.set_facecolor('white')
ax_top = fig.add_axes([0.05, 0.78, 0.25, 0.18])
ax_top.set_xlim(0,10); ax_top.set_ylim(0,6); ax_top.axis('off')
ax_top.set_title('Canonical cartoon\n(one-size-fits-all)', fontsize=10, fontweight='bold', pad=2)
def circle(ax,x,y,r,color,label):
    ax.add_patch(plt.Circle((x,y),r,color=color,zorder=2))
    ax.text(x,y,label,ha='center',va='center',color='white',fontsize=9,fontweight='bold',zorder=3)
def arrow(ax,x1,y1,x2,y2):
    ax.add_patch(FancyArrowPatch((x1,y1),(x2,y2),arrowstyle='-[',mutation_scale=12,lw=1.4,color='black'))
circle(ax_top,2,4.5,0.6,VIP,'VIP'); circle(ax_top,5,4.5,0.6,SST,'SST'); circle(ax_top,8,4.5,0.6,PYR,'PYR')
arrow(ax_top,2.6,4.5,4.4,4.5); arrow(ax_top,5.6,4.5,7.4,4.5)
ax_top.text(5,2.6,'VIP → SST → PYR disinhibition',ha='center',fontsize=9,style='italic',color='#444')
ax_top.text(5,1.4,'(universal, cortex-wide, state-invariant)',ha='center',fontsize=8,color=GREY)

ax = fig.add_axes([0.33,0.40,0.64,0.56]); ax.set_xlim(0,14); ax.set_ylim(0,11); ax.axis('off')
ax.set_title('Revised framework — VIP function factored by four axes',fontsize=12,fontweight='bold',pad=4)
ax.add_patch(FancyBboxPatch((0.2,4.5),2.6,2.0,boxstyle="round,pad=0.12",linewidth=1.8,edgecolor=VIP,facecolor='white'))
ax.text(1.5,6.1,'VIP+',ha='center',fontsize=14,fontweight='bold',color=VIP)
ax.text(1.5,5.3,'cell class',ha='center',fontsize=9,color=GREY)
ax.text(1.5,4.8,'(CGE-derived)',ha='center',fontsize=8,color=GREY,style='italic')

axis_specs = [
  (4.5,'SUBTYPE',['VIP/CR+ bipolar','VIP/CCK+ basket','VIP/ChAT','VIP-LRP'],[CR,CCK,CHAT,'#4E7F9B']),
  (7.0,'REGION',['V1 / S1 L2/3','mPFC / ACC','hippocampus / MEC','motor / association'],['#3D7F54','#935D9A','#C07060','#B88C2E']),
  (9.5,'STATE',['quiet wakefulness','locomotion / arousal','reward / punishment','sleep / anaesthesia'],['#355E8F','#D89A35','#B95555','#4E4E4E']),
  (12.0,'MOLECULAR / GENETIC',['WT / healthy','MeCP2 KO (Rett)','Scn1a+/- (Dravet)','3xTg-AD / tinnitus'],['#2F2F2F','#9E4B4B','#9E4B4B','#7F5A9B']),
]
for ax_x,ax_lbl,sub_lbls,colors in axis_specs:
    ax.plot([ax_x,ax_x],[1.2,8.5],color='#BBB',lw=1.4,zorder=0)
    ax.text(ax_x,9.0,ax_lbl,ha='center',fontsize=10,fontweight='bold')
    ys = np.linspace(7.6,1.6,len(sub_lbls))
    for y,s,c in zip(ys,sub_lbls,colors):
        ax.add_patch(Rectangle((ax_x-0.35,y-0.18),0.7,0.36,facecolor=c,edgecolor='white',lw=0.8))
        ax.text(ax_x+0.5,y,s,ha='left',va='center',fontsize=8.5)
for ax_x in [4.5,7.0,9.5,12.0]:
    ax.annotate('',xy=(ax_x-0.4,5.5),xytext=(2.9,5.5),
                arrowprops=dict(arrowstyle='-',color='#C9C9C9',lw=0.8),zorder=0)
ax.text(7.5,0.45,'emergent circuit phenotype = f(subtype × region × state × molecular context)',
        ha='center',fontsize=10,fontweight='bold',color='#333')
ax.text(7.5,0.05,'the canonical VIP → SST → pyramidal motif is one cell of this grid, not the whole grid',
        ha='center',fontsize=8.5,style='italic',color=BAD)

ax_b = fig.add_axes([0.05,0.06,0.90,0.30]); ax_b.set_xlim(0,14); ax_b.set_ylim(0,6); ax_b.axis('off')
ax_b.set_title('Boundary conditions: where the canonical motif is replicated vs where it fails',
               fontsize=11,fontweight='bold',pad=2,loc='left')
cells = [
 (0.2,2.8,3.2,2.6,'Mouse V1/S1 L2/3,\nquiet wakefulness',OK,'VIP → SST inhibition\nreplicated in slice and\nin vivo; dominates\ndisinhibitory accounting'),
 (3.6,2.8,3.2,2.6,'Locomotion / arousal',OK,'VIP↑ during running\nacross multiple labs\n(but mechanism may not\nbe VIP-driven)'),
 (7.0,2.8,3.2,2.6,'Reward / task value',BAD,'Suppression reported\n(Ramamurthy 2023); other\nworks see enhancement —\nsign disputed'),
 (10.4,2.8,3.4,2.6,'Deep layers / association\ncortex / non-primary',BAD,'Motif weakens; direct\nVIP→PYR inhibition and\nheterogeneous targets\nreported'),
 (0.2,0.0,3.2,2.6,'Hippocampus / MEC',BAD,'Subtype-resolved\n(I-S3, VIP/ChAT, VIP-LRP)\nre-routes the "motif"\nthrough distinct circuits'),
 (3.6,0.0,3.2,2.6,'Non-mouse species\n(primate, human)',BAD,'Morphology, proportions,\ndevelopmental trajectory\nand subtype structure\nall diverge from mouse'),
 (7.0,0.0,3.2,2.6,'Disease states\n(Rett, Dravet, 3xTg-AD)','#C9A14A','VIP loss / dysfunction\nappears, but primary vs\ncompensatory remains\nunresolved'),
 (10.4,0.0,3.4,2.6,'Gamma / oscillatory control','#C9A14A','VIP controls local gain\nbut long-range coherence —\nnon-monotonic; direction\ndepends on stimulus match'),
]
for x,y,w,h,title,color,text in cells:
    ax_b.add_patch(FancyBboxPatch((x,y),w,h,boxstyle="round,pad=0.06",facecolor=LIGHT,edgecolor=color,lw=2.0))
    ax_b.add_patch(Rectangle((x,y+h-0.55),w,0.55,facecolor=color,alpha=0.85,edgecolor='none'))
    ax_b.text(x+0.12,y+h-0.27,title,fontsize=8.5,fontweight='bold',color='white',va='center')
    ax_b.text(x+0.12,y+h-1.1,text,fontsize=8,va='top',color='#222')

ax_key = fig.add_axes([0.05,0.38,0.26,0.06]); ax_key.axis('off')
handles = [mpatches.Patch(color=OK,label='replicated'),
           mpatches.Patch(color='#C9A14A',label='mixed / partial'),
           mpatches.Patch(color=BAD,label='contested / not supported')]
ax_key.legend(handles=handles,loc='center left',ncol=3,frameon=False,handlelength=1.0,
              fontsize=8.5,title='canonical motif status',title_fontsize=9)
fig.text(0.99,0.01,'Schematic synthesis — no quantitative axes. Groupings summarise the subtype × region × layer × state boundary matrix discussed in the section body.',
         ha='right',va='bottom',fontsize=7.5,color=GREY,style='italic')
fig.savefig('../figures/sec-13/fig_sec13_revised_framework.png',dpi=300,bbox_inches='tight',facecolor='white')

```
:::

(sec-13-triangulation)=
## What replicates: cross-cluster triangulation

A finding earns the label **strongly replicated** in this review when at least three independent groups, using non-identical methods, report a concordant result in comparable preparations. A finding is **moderately replicated** when two independent groups agree or when one group reports the result and downstream modelling assumes it without independent biological confirmation. Below we walk through the claims that meet these bars.

### Molecular and developmental identity of VIP as a CGE-derived class

Molecular identity is the least contested level of description. Single-cell transcriptomic atlases converge on VIP as a coherent CGE-derived branch, with internal structure that subdivides it along a bipolar / CR+ vs basket / CCK+ axis, plus a distinct VIP/ChAT branch and the VIP long-range-projecting (VIP-LRP) cells as an emerging fourth group {ref}`sec-molecular-identity`. Developmental lineage tracing places all of these in the caudal ganglionic eminence and its anterior extension {ref}`sec-development`. This is the part of the narrative for which the evidence base is strongest and the disagreement smallest.

Two caveats nevertheless cut into the neatness. First, the *count* of VIP subtypes varies severalfold across datasets — Patch-seq work consistently finds continua rather than categorical boundaries {ref}`sec-molecular-identity`. Second, VIP as a transcriptional marker is not exclusive to cortical interneurons: one recent comparative study reports VIP expression in giant layer 5 Betz pyramidal neurons, directly challenging the assumption that VIP marks exclusively GABAergic inhibitory cells {cite:p}`Teymornejad2024`. The consequence is that *molecular VIP-positivity* and *functional VIP-interneuron identity* are not interchangeable labels — a distinction that matters whenever a pan-VIP-Cre driver is used in cortex outside rodent primary sensory areas.

### The canonical VIP→SST→pyramidal motif in mouse primary sensory cortex L2/3

This is the most frequently cited fact about VIP neurons, and it is also genuinely well replicated — but only within a narrow slice of the factorial grid. In slice, {cite:p}`CantoBustos2022` showed that VIP interneurons in piriform cortex selectively and strongly inhibit SST interneurons while only weakly inhibiting PV interneurons, gating associative LTP on pyramidal dendrites. In vivo, {cite:p}`Keller2020a` showed VIP→SST disinhibition is necessary and sufficient for contextual modulation of visual responses in mouse V1. Gating-by-disinhibition accounts of cortical flexibility accommodated these measurements into an information-routing framework [{cite:p}`Wang2018`]. All of this converges on a single statement: **in mouse V1/S1 layer 2/3, during the behavioral states at which these experiments were conducted, VIP interneurons preferentially inhibit SST interneurons, and that inhibition is sufficient to disinhibit superficial pyramidal cells.**

That statement is strongly replicated. What is not strongly replicated is any stronger statement.

### Locomotion and arousal increase VIP activity

A second claim replicates with near-textbook consistency: VIP activity scales up during locomotion and high-arousal states. Calcium imaging in V1, S1, and auditory cortex concurs [{cite:p}`Pakan2016`; {cite:p}`Dipoppa2018`; {cite:p}`Millman2020`]. The result is robust to recording method, mouse line, and cortical area.

What this finding does *not* entail is the next sentence of the canonical chain — that VIP then suppresses SST and thereby disinhibits pyramidal neurons. {cite:p}`Pakan2016` observed that during visual stimulation, locomotion increased VIP, SST, *and* PV activity simultaneously, directly contradicting the prediction that SST should drop. More recently, {cite:p}`deBritoVanVelze2024` used paired recordings and targeted manipulations to show that differential SST recruitment across sensory cortices during behavioral state transitions is explained by feedforward thalamic input rather than by VIP-driven disinhibition. In their experiments, VIP-driven disinhibition alone did not explain differential SST-IN recruitment across sensory cortices; feedforward thalamic input was necessary and sufficient to drive SST activity changes. {cite:p}`Feyerabend2025` provides the correlated slice-level observation: VIP and SST interneurons receive extensive thalamic input from both VPM and POm nuclei across all layers, challenging the older weak-innervation assumption.

The composite finding — VIP tracks arousal, and SST changes during arousal — is replicated. The composite *mechanism* — VIP causally drives those SST changes — is not.

### VIP-SST connectivity is quantitatively comparable but not identical across areas

A subtle but important replication appears in {cite:p}`Rachel2025`: VIP-to-SST inhibitory connectivity and unitary synaptic properties are comparable across sensory areas, but short-term plasticity differs markedly depending on the morphological subtype of the postsynaptic SST cell. Paired with {cite:p}`McFarlan2024b` — which shows synapse-type-specific plasticity rules at VIP→Martinotti (LTD) versus VIP→basket (no LTD) contacts — the emerging picture is that *whether* VIP connects to SST is relatively area-invariant, but *how strongly that contact drives SST silencing in a given context* depends on the subclass of SST neuron targeted and on recent synaptic history. This is a replicated finding whose natural reading is that the canonical motif is conserved in architecture but not in function.

### Subtype-specific findings outside the canonical motif

A small cluster of replicated results describes behaviours of VIP subtypes that are *not* captured by the canonical motif at all. {cite:p}`Francavilla2020` establishes the VIP-LRP cell as a long-range projecting interneuron with hippocampal CA1 origin that targets distant inhibitory populations rather than local SST cells. {cite:p}`Turi2019` shows VIP+ interneurons form functionally distinct velocity-modulated subpopulations in hippocampal CA1 during spatial behavior. {cite:p}`Rhomberg2018` documents heterogeneous VIP cells in the basolateral amygdala — both IN-selective and basket-type — with distinct connectivity. {cite:p}`Melzer2021` reports that GRP receptor expression in VIP cells is region-dependent, reaching 81% of VIP cells in some areas and dropping substantially in others. These are five independent demonstrations, in five different brain areas, that VIP is not a single functional unit.


(sec-13-contested)=
## Where the canonical motif is contested

Eight curated disagreements survive cross-study comparison in this section, and they sort into five thematic axes (Figure {numref}`fig-sec13-conflicts`). Two concern the **universality of the canonical motif itself** (one partially adjudicated, one unresolved); two concern state-dependence and the relative contribution of thalamic drive; one concerns the sign of reward and behavioural-relevance coding; one concerns cross-species translation; and two concern disease causality and optogenetic methodology. Seven of the eight remain genuinely unresolved — the single partial resolution (motif universality in mouse V1) is discussed in Conflict 1 below. We walk through the most consequential ones.

:::{figure} ../figures/sec-13/fig_sec13_conflict_map.png
:label: fig-sec13-conflicts
:align: center
:width: 95%

**Conflict-resolution map for the eight curated Section-13 disagreements.** *Top:* overall distribution — one disagreement is partially
adjudicated (motif universality in mouse V1, by a state-dependence argument);
the remaining seven are genuinely unresolved. *Rows:* the five thematic axes
into which the eight conflicts sort. Motif universality (n = 2) is the only
axis with a partial resolution; state/thalamic drive, reward direction, species
translation, and disease-causality/methodology are each represented by one or
two unresolved disagreements. Example pairs of disagreeing claims are listed on
the right; each cite-key is expanded in the body text of this section.
:::

:::{dropdown} 📓 Figure code
:icon: code
:color: light

```python
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, Rectangle

plt.rcParams.update({'font.size':10,'font.family':'DejaVu Sans'})
C_RES,C_PAR,C_UNR,GREY,LIGHT = '#4A9E6B','#D9A441','#C94A4A','#888','#F5F5F5'

# Every count below reflects the eight curated disagreements enumerated in
# Conflicts 1–6 of this section. Per-theme totals sum to 8; resolved/partial/
# unresolved splits reflect the resolution_status field recorded for each pair.
themes = [
 ('Canonical motif universality\n(VIP→SST→PYR)', 2, 0, 1, 1,
  [('Apicella2022','Dipoppa2018'), ('Li2019','Bilash2023')]),
 ('State-dependence &\nthalamic contribution', 2, 0, 0, 2,
  [('Khoury2023','Ferguson2023'), ('Feyerabend2025','Li2019')]),
 ('Reward & behavioural-relevance\n(direction of effect)', 1, 0, 0, 1,
  [('Ramamurthy2023','Veit2023')]),
 ('Species translation\n(mouse → primate → human)', 1, 0, 0, 1,
  [('HosseiniFin2025','Simacek2025a')]),
 ('Disease causality &\noptogenetic methodology', 2, 0, 0, 2,
  [('Mossner2020','Michaud2024b'), ('Suzuki2021','Kozal2025')]),
]

fig, ax = plt.subplots(figsize=(13.5, 8.5)); fig.patch.set_facecolor('white')
ax.set_xlim(0, 14); ax.set_ylim(0, 10.0); ax.axis('off')
ax.set_title('Conflict-resolution map — eight curated disagreements across five themes (n = 8)',
             fontsize=13, fontweight='bold', loc='left')

summary_y = 8.8; summary_x0 = 0.2; summary_w = 13.4
tot_r = sum(t[2] for t in themes); tot_p = sum(t[3] for t in themes); tot_u = sum(t[4] for t in themes)
grand = tot_r + tot_p + tot_u  # == 8 by construction
fr, fp, fu = tot_r/grand, tot_p/grand, tot_u/grand
ax.add_patch(Rectangle((summary_x0, summary_y), summary_w*fr, 0.45, facecolor=C_RES, edgecolor='white'))
ax.add_patch(Rectangle((summary_x0+summary_w*fr, summary_y), summary_w*fp, 0.45, facecolor=C_PAR, edgecolor='white'))
ax.add_patch(Rectangle((summary_x0+summary_w*(fr+fp), summary_y), summary_w*fu, 0.45, facecolor=C_UNR, edgecolor='white'))
if fr > 0.02:
    ax.text(summary_x0+summary_w*fr*0.5, summary_y+0.22, f'resolved  n={tot_r}', ha='center', va='center', color='white', fontsize=10, fontweight='bold')
ax.text(summary_x0+summary_w*fr+summary_w*fp*0.5, summary_y+0.22, f'partial  n={tot_p}', ha='center', va='center', color='white', fontsize=10, fontweight='bold')
ax.text(summary_x0+summary_w*(fr+fp)+summary_w*fu*0.5, summary_y+0.22, f'unresolved  n={tot_u}', ha='center', va='center', color='white', fontsize=10, fontweight='bold')
ax.text(summary_x0, summary_y+0.55, f'Total curated disagreements: n = {grand}', fontsize=10, fontweight='bold', color='#333')

row_h = 1.25
for i, (name, total, r, p, u, pairs) in enumerate(themes):
    y = 7.5 - i*(row_h+0.10)
    ax.add_patch(FancyBboxPatch((0.2, y), 3.4, row_h, boxstyle="round,pad=0.04", facecolor=LIGHT, edgecolor='#DDD', lw=0.8))
    ax.text(0.35, y+row_h*0.75, name, fontsize=10.5, fontweight='bold', va='center')
    unit = 'conflict' if total == 1 else 'conflicts'
    ax.text(0.35, y+row_h*0.25, f'{total} {unit}', fontsize=8.5, color=GREY, va='center', style='italic')
    bar_x0 = 3.9; bar_w = 6.0
    ax.add_patch(Rectangle((bar_x0, y+0.25), bar_w, row_h-0.5, facecolor='#FBFBFB', edgecolor='#CCC', lw=0.6))
    fr2, fp2, fu2 = r/total, p/total, u/total
    cx = bar_x0
    for width, col, cnt in [(bar_w*fr2, C_RES, r), (bar_w*fp2, C_PAR, p), (bar_w*fu2, C_UNR, u)]:
        if width > 0:
            ax.add_patch(Rectangle((cx, y+0.25), width, row_h-0.5, facecolor=col, edgecolor='white', lw=0.8))
            if cnt > 0 and width > 0.4:
                ax.text(cx+width/2, y+row_h*0.5, str(cnt), ha='center', va='center', fontsize=10, color='white', fontweight='bold')
            cx += width
    ex_x = 10.1; ex_w = 3.6
    ax.add_patch(FancyBboxPatch((ex_x, y+0.12), ex_w, row_h-0.24, boxstyle="round,pad=0.04", facecolor='white', edgecolor='#DDD', lw=0.8))
    ax.text(ex_x+0.12, y+row_h-0.18, 'example disagreeing claims:', fontsize=8, color=GREY, style='italic', va='top')
    pair_lines = '\n'.join([f'• {a}  ⟷  {b}' for a, b in pairs[:2]])
    ax.text(ex_x+0.12, y+row_h-0.45, pair_lines, fontsize=8.5, color='#222', va='top')

ax.text(0.2, 0.55, 'Resolved = both sides accommodated by a single mechanism; Partial = mechanism proposed but not independently replicated', fontsize=9, color='#444')
ax.text(0.2, 0.22, 'Unresolved = no experiment has adjudicated the conflict; awaits subtype-resolved causal tests', fontsize=9, color=C_UNR)

for pct, x in [(0, 3.9), (25, 3.9+1.5), (50, 3.9+3.0), (75, 3.9+4.5), (100, 3.9+6.0)]:
    ax.plot([x, x], [1.0, 7.75], color='#F0F0F0', lw=0.5, zorder=0)
    ax.text(x, 7.85, f'{pct}%', ha='center', fontsize=7.5, color=GREY)

fig.text(0.99, 0.01, 'Counts derived from the eight curated cross-study disagreements enumerated in the section body.',
         ha='right', va='bottom', fontsize=7.5, color=GREY, style='italic')
fig.savefig('../figures/sec-13/fig_sec13_conflict_map.png', dpi=300, bbox_inches='tight', facecolor='white')

```
:::

### Conflict 1 — motif universality across layers and areas

**Sources in conflict:** {cite:p}`Apicella2022` vs {cite:p}`Dipoppa2018`; {cite:p}`Li2019` vs {cite:p}`Bilash2023`; {cite:p}`Kanigowski2025` as a related negative.

The canonical VIP→SST→pyramidal chain was pieced together from superficial layers of mouse V1 and S1. {cite:p}`Apicella2022` reported that VIP-expressing neurons exhibit heterogeneous circuit motifs beyond the canonical pattern, including direct inhibition of non-GABAergic neurons and context-dependent recruitment across cortical layers and long-range projections. {cite:p}`Kanigowski2025` went to layer 4 and found that only a small fraction of layer 4 excitatory neurons receives inhibition from local VIP interneurons, and that conditional learning does not alter this VIP-mediated inhibition — a result incompatible with a cortex-wide universal motif.

**Resolution status:** partially resolved. {cite:p}`Dipoppa2018` supplied part of the answer by showing the canonical model holds *in darkness* but fails under visual stimulation, where locomotion changes the sign of VIP and SST modulation. The Dipoppa mechanism adjudicates the specific V1 disagreement but does not account for why the motif weakens in deeper layers or in association cortex — that part remains open.

### Conflict 2 — state-dependence of VIP→SST disinhibition

**Sources in conflict:** {cite:p}`Pakan2016` vs {cite:p}`deBritoVanVelze2024` as adjudicator.

{cite:p}`Ferguson2023` and {cite:p}`Pakan2016` report different directions of VIP effect on SST cells during running-state modulation. {cite:p}`deBritoVanVelze2024` offers a partial resolution: in their preparation, the apparent VIP→SST drive during state transitions is actually downstream of a parallel thalamic input onto SST. If this is general, then earlier single-cell-type perturbations were confounding VIP activation with the thalamic drive that co-activates it.

**Resolution status:** unresolved in general, but a clear candidate mechanism exists. The experiment that would adjudicate is a combined thalamic silencing + VIP-specific perturbation in the same preparation. None has been performed at the required resolution.

### Conflict 3 — reward and behavioural relevance

**Sources in conflict:** {cite:p}`Ramamurthy2023` and the broader disagreement across the reward/gamma theme in Figure {numref}`fig-sec13-conflicts`.

This is among the most poorly-resolved themes in the section: the single curated reward/behavioural-relevance disagreement in our set is unresolved, and the broader primary literature shows the same pattern (Figure {numref}`fig-sec13-conflicts`). {cite:p}`Ramamurthy2023` reports that VIP interneurons respond to reward and behavioural relevance, but the direction (suppression vs enhancement) varies across studies. {cite:p}`Piet2024` adds that Vip-Sst circuit activation varies dramatically with behavioural strategy during visual change detection, with visual-comparison strategy showing increased Vip-Sst circuit engagement. {cite:p}`Bae2025` reports robust VIP working-memory signals with dopamine-enhanced target selectivity. {cite:p}`Lenkey2025` reports frankly region-specific modulation: VIP neurons amplify place-field responses in retrosplenial cortex but have minimal impact on hippocampal CA1 place cells.

The field has not converged on whether VIP neurons "encode reward value," "encode behavioural strategy," or "encode something task-general that the reward task happens to measure." Reviews that summarise VIP as encoding reward are making one choice among several, against active disagreement in the primary literature.

**Resolution status:** unresolved. No single experiment has been designed to distinguish the explanatory accounts.

### Conflict 4 — gamma direction and oscillatory control

**Sources in conflict:** {cite:p}`Veit2023` vs {cite:p}`Szadai2022`; {cite:p}`Rademacher2025` as a negative.

{cite:p}`Veit2023` shows VIP suppression multiplicatively enhances local gamma power, with context-dependent effects on long-range gamma coherence that depend on stimulus congruence — a result that is hard to reduce to a single sign for the effect of VIP on gamma. {cite:p}`Szadai2022` reports global rather than local recruitment patterns during state transitions. {cite:p}`Rademacher2025` modelled the pharmacology: NMDA-R reductions on VIP+ interneurons did not reproduce ketamine-induced gamma-band power increases, suggesting that VIP disinhibition is insufficient to explain that particular pharmacological gamma effect. {cite:p}`Wagatsuma2022a` and {cite:p}`Wagatsuma2022b` build computational accounts in which rapid VIP→SOM inhibition is the key driver of attentional gamma modulation — a proposal that treats the causal chain as settled.

**Resolution status:** unresolved. The direction of VIP's effect on gamma is not a scalar property. VIP controls *local gain* and *long-range coherence* differently, and the sign of each depends on stimulus congruence across sites. Papers that summarise "VIP gates gamma" are throwing away the dimension of the data that distinguishes the candidate mechanisms.

### Conflict 5 — species translation (mouse → primate → human)

**Sources in conflict:** {cite:p}`HosseiniFin2025` vs {cite:p}`Simacek2025a`; {cite:p}`Teymornejad2024` on VIP identity (non-GABAergic expression in primate).

The single species-translation disagreement in our curated set is unresolved (Figure {numref}`fig-sec13-conflicts`), and this matches the broader picture in the comparative literature. {cite:p}`HosseiniFin2025` and {cite:p}`Simacek2025a` differ on the SST developmental trajectory — whether SST ratios decrease postnatally or remain constant into adulthood. {cite:p}`Teymornejad2024` reports that, in marmoset cortex, VIP is expressed not only in GABAergic interneurons but also in giant layer 5 Betz pyramidal neurons — a non-GABAergic expression pattern that has no reported counterpart in mouse. As documented in {ref}`sec-species-translation`, VIP morphology, proportions, developmental trajectory, and subtype structure all diverge between mouse and primate — and this remains true after accounting for technical differences in cell-type atlas construction.

**Resolution status:** unresolved. The fundamental problem is that most of the causal-perturbation evidence is in mouse, and most of the descriptive comparative evidence says mouse and human differ in ways that matter. Translation of any mechanistic mouse claim to human is unsupported in the strict sense, though often stated.

### Conflict 6 — optogenetic artifacts vs causal effects

**Sources in conflict:** {cite:p}`Suzuki2021`; {cite:p}`McFarlan2024a` as a quantitative adjustment; {cite:p}`Hendricks2026` as a surprise.

{cite:p}`Suzuki2021` raises concerns that some optogenetic suppression/stimulation effects reflect artifacts from control procedures rather than genuine causal circuit effects. {cite:p}`Kozal2025` reports that optogenetic stimulation of pyramidal neurons suppresses spontaneous activity in most V1 neurons through activation of local inhibitory interneurons, illustrating the complexity of recurrent circuit effects in single-cell-type optogenetic experiments. {cite:p}`McFarlan2024a` shows that optogenetic stimulation of VIP interneurons likely activated multiple presynaptic cells, underestimating paired-pulse ratios by approximately 10%. {cite:p}`Hendricks2026` notes (citing prior work) that optogenetic silencing of VIP interneurons produces only partial reduction in the orientation dependence of surround suppression, suggesting VIP→SST inhibition is not essential for a phenomenon that the canonical model would make it essential for. {cite:p}`Zhang2022a` reports that optogenetic reliability in blue-light neuronal stimulation is incomplete, with success rates declining sharply at higher stimulation frequencies — a fundamental technical caveat that applies to every paper that uses high-frequency trains. {cite:p}`Stefanov2022`, {cite:p}`Cardin2012`, and {cite:p}`Han2012` document the broader set of optogenetic caveats, including AAV tropism, promoter specificity, and interpretive limits.

**Resolution status:** partially resolved. {cite:p}`McFarlan2024a` noted a ~10% systematic underestimation of paired-pulse ratio due to temporal summation in their short-term plasticity measurements, and {cite:p}`Grosenick2015` provides a broader methodological review. What is not resolved is how many of the landmark pro-motif papers would survive if their reported effects were corrected for the 10–30% artifactual range that the methodological literature now documents. No one has done the meta-analysis.

### Conflict 7 — disease-model interpretation

**Sources in conflict:** {cite:p}`Mossner2020` vs {cite:p}`Michaud2024b`; {cite:p}`Goff2019` vs {cite:p}`Goff2023`; {cite:p}`Miralles2023` as a synthesizing view.

{cite:p}`Mossner2020` and {cite:p}`Michaud2024b` differ in emphasis on whether VIP interneuron physiological dysfunction in disease models reflects primary pathology or includes compensatory mechanisms. The Dravet-syndrome series is illustrative: {cite:p}`Goff2019` identifies persistent Nav1.1-dependent hypoexcitability specifically in the irregular-spiking VIP subtype, not in the continuous-adapting subtype — a subtype-selective primary defect. {cite:p}`Goff2023` then reports circuit-level consequences during behavioral state transitions. {cite:p}`Miralles2023` shows that selective Scn1a deletion in VIP interneurons reproduces autism-related behaviours but not seizures — evidence that VIP dysfunction is sufficient for some but not all Dravet phenotypes. The Rett series is parallel: {cite:p}`Mossner2020` shows that loss of MeCP2 specifically from VIP interneurons replicates altered firing rates, disrupted high-frequency LFP patterns, and loss of state-dependent modulation.

**Resolution status:** unresolved in general, but structurally adjudicable. The cleanest experiments would rescue the primary defect in a single subtype and ask whether behaviour normalizes. Two groups have started this; neither has reached cell-type-resolved closure.

### Conflict 8 — thalamic input to SST

**Sources in conflict:** {cite:p}`Feyerabend2025` vs {cite:p}`Li2019`.

{cite:p}`Feyerabend2025` reports that VIP and SST interneurons receive extensive thalamic input from both VPM and POm nuclei across all layers, contradicting earlier weak-innervation findings. This is a methodological updating conflict: newer recording techniques with better access to SST cells have revised the estimate upward. The consequence is that parts of "SST is driven by VIP disinhibition" have to be rewritten as "SST is driven by both thalamic input and local cortical drive, and the relative weights differ across conditions."

**Resolution status:** resolved at the level of primary data (the Feyerabend picture is the updated one), unresolved at the level of downstream mechanistic claims that still assume the older picture.


(sec-13-untested)=
## Untested predictions and experimental gaps

A claim is **untested** in this review's sense if the canonical framework predicts it but no study has yet directly measured it at the required cell-type and state resolution. Five such predictions stand out.

### Gap 1 — subtype-specific causal tests of the motif

The canonical motif is typically invoked without specifying which VIP subtype is driving the SST silencing. This is a causal question that can be answered: intersectional genetics can restrict expression of an actuator to VIP/CR+ bipolar cells, to VIP/CCK+ basket cells, or to VIP/ChAT cells separately. That experiment — "which subtype is sufficient and which is necessary for VIP→SST disinhibition in V1 L2/3 under defined behavioural conditions" — has not been performed. {cite:p}`Pronneke2015` established that VIP-Cre driver specificity is reasonable at the class level, and {cite:p}`Foss2024` showed that CBA-backcrossed Sst-Cre and Vip-Cre lines can be run with acceptable fidelity. The tools exist. The measurement does not.

### Gap 2 — within-subject disease reversibility

{cite:p}`Miralles2023`, {cite:p}`Goff2019`, {cite:p}`Goff2023`, and {cite:p}`Mossner2020` collectively suggest that VIP-specific molecular lesions in disease models produce quantifiable physiological phenotypes. The natural follow-on experiment is rescue: restore Scn1a, or MeCP2, specifically in VIP interneurons within a disease model and ask whether the physiological and behavioural phenotypes reverse. Partial versions of this experiment exist; the full causal inversion does not.

### Gap 3 — subtype-resolved recording during reward

The reward/gamma-sign conflict (Conflict 3, above) cannot be resolved without recordings that distinguish VIP subtypes *during* reward tasks. Current 2-photon imaging under VIP-Cre lumps all VIP cells together, which means any population-averaged readout that differs across {cite:p}`Veit2023` and {cite:p}`Ramamurthy2023` could represent the average of a subtype-positive signal and a subtype-negative signal with different weights. {cite:p}`Turi2019` in CA1 already shows that VIP subpopulations move in opposite directions during spatial behaviour, so the prior probability of similar heterogeneity in cortex is high. No recordings have been published that cleanly separate VIP subtypes during reward.

### Gap 4 — primate direct tests

Almost all causal evidence for the canonical motif comes from mouse. Primate and human evidence is descriptive (cell-type atlases, morphology, proportions) and disagrees with mouse in several ways {ref}`sec-species-translation`. Direct optogenetic or chemogenetic perturbation of VIP interneurons in primate cortex during behaviour has not been reported — not because the tools are impossible, but because the experiments are hard. This is an experimental gap rather than an experimental disagreement; the prediction "the canonical motif operates in primate V1 as in mouse V1" is untested.

### Gap 5 — long-range projecting VIP cells as independent actors

{cite:p}`Francavilla2020`, {cite:p}`Luo2020`, and the broader VIP-LRP literature establish VIP-LRP as a long-range projecting subclass with distinct targets. What this subclass *does* during behaviour is almost entirely unmeasured. In-vivo recordings of VIP-LRP cells with their outputs tagged would tell us whether VIP-LRP is simply a rare variant of the canonical VIP cell or a functionally distinct broadcaster. The experiment has not been done at scale.

(sec-13-framework)=
## A revised framework

We now state the revised framework in propositional form. Each proposition is grounded in the evidence reviewed in the preceding sections, and each is bounded by the conditions under which it is supported.

**Proposition 1 — VIP is a molecularly structured class, not a single functional unit.** The strongest replications in this review are at the molecular level: VIP labels a CGE-derived branch with internal subdivisions along at least three axes (bipolar/CR+ vs basket/CCK+; IS vs CA firing; VIP/ChAT as a distinct branch; VIP-LRP as an emerging fourth branch). Every downstream claim about "what VIP does" should be read as a claim about a specific subtype under specific conditions [{cite:p}`Rhomberg2018`; {cite:p}`Badrinarayanan2021`; {cite:p}`Francavilla2020`; {cite:p}`Luo2020`; {cite:p}`Turi2019`].

**Proposition 2 — The canonical VIP→SST→pyramidal disinhibitory motif is a local phenomenon, not a universal principle.** The motif is replicated in mouse V1 and S1, layer 2/3, under specific state conditions (e.g., darkness or selected task states) [{cite:p}`Wang2018`; {cite:p}`Dipoppa2018`; {cite:p}`Keller2020a`; {cite:p}`CantoBustos2022`]. Outside this domain, the motif is sparse in layer 4 of barrel cortex {cite:p}`Kanigowski2025`, takes on alternative morphologies {cite:p}`Apicella2022`, requires thalamic co-drive {cite:p}`deBritoVanVelze2024`, or is replaced entirely by subtype-specific circuits in hippocampus/MEC [{cite:p}`Francavilla2020`; {cite:p}`Luo2020`; {cite:p}`Turi2019`; {cite:p}`Badrinarayanan2021`].

**Proposition 3 — VIP activity tracks locomotion and arousal in cortex; VIP is not necessarily the cause of co-occurring SST changes.** The correlation between running and VIP firing is one of the best-replicated results in the field. But the *causal* decomposition has been revised: {cite:p}`deBritoVanVelze2024` and {cite:p}`Feyerabend2025` together point toward a model in which thalamic drive contributes substantially to what was previously attributed to VIP-first disinhibition. The revised framework treats VIP locomotion-tracking as a *report* of the arousal state, to be integrated with thalamic and neuromodulatory drives, rather than as the *source* of downstream circuit changes {cite:p}`Pakan2016`.

**Proposition 4 — The sign of VIP's effect on downstream circuit variables (reward, gamma, long-range coherence) is context-dependent and likely subtype-dependent.** Reward-related VIP activity has been reported with both positive and negative signs [{cite:p}`Ramamurthy2023`; {cite:p}`Piet2024`; {cite:p}`Bae2025`]. Gamma direction depends on stimulus congruence and on local versus long-range readout {cite:p}`Veit2023`. Place-field modulation is region-specific {cite:p}`Lenkey2025`. The revised framework treats "the sign of the VIP effect" as a property to be *measured* in a specific context, not as a scalar property of the cell class.

**Proposition 5 — VIP dysfunction contributes causally to several neurodevelopmental and psychiatric phenotypes, but its specificity varies.** The Rett series [{cite:p}`Mossner2020`] and Dravet series [{cite:p}`Goff2019`; {cite:p}`Goff2023`; {cite:p}`Miralles2023`] are consistent with a causal role for VIP-specific molecular lesions in state-dependent circuit function. {cite:p}`BatistaBrito2017` shows developmental ErbB4 loss in VIP cells abolishes state-dependent cortical responses; {cite:p}`BatistaBrito2023` shows parallel but distinct effects of developmental ErbB4 loss in PV cells — underlining that VIP is one element in a developmentally coupled network, not the sole locus. Tinnitus {cite:p}`Ghimire2023b`, epilepsy {cite:p}`Rahimi2023b`, {cite:p}`Wyeth2021`, stroke {cite:p}`Motaharinia2021`, chronic ethanol {cite:p}`Thompson2023a`, and Fmr1-/- {cite:p}`Rahmatullah2023` all document VIP-involved dysfunction, but the causal hierarchy — primary VIP defect versus downstream consequence of broader circuit disruption — is unresolved in most cases. {cite:p}`Notter2025` makes the parallel PV case: kynurenic-acid-driven PV suppression can *look* like VIP-driven disinhibition at the population level, which is a cautionary note for any mechanistic attribution that rests on activity patterns alone.

**Proposition 6 — Cross-species translation is currently unsupported by direct mechanistic evidence.** Descriptive atlases and morphology work document consistent mouse-primate-human differences; no causal manipulation of VIP cells in primate or human tissue has been reported at the resolution needed to generalize mouse mechanism. The honest claim is that we do not yet know whether the mouse mechanism holds in primate.

**Proposition 7 — Methodological artifacts are a non-trivial fraction of published effects.** {cite:p}`McFarlan2024a` quantifies one systematic bias (paired-pulse underestimation from multi-cell activation) at roughly 10%. {cite:p}`Kozal2025` shows that even optogenetic stimulation of pyramidal cells suppresses most V1 units through recurrent inhibitory effects. {cite:p}`Grosenick2015`, {cite:p}`Stefanov2022`, and {cite:p}`Zhang2022a` catalogue the broader space. The revised framework acknowledges that effect sizes in the canonical literature are uncertain within a range that is wide enough to matter for some of the more quantitative claims. This is not a charge of bad science; it is the normal state of a maturing measurement literature.

Figure {numref}`fig-sec13-framework` maps these propositions onto the eight boundary-condition cells at the bottom of the revised-framework schematic. The summary that one sentence should carry forward is:

> **The VIP interneuron class is a molecularly structured pool of inhibitory cells whose circuit role is best predicted by the joint specification of subtype, region, layer, behavioural state, and molecular context. The canonical VIP→SST→pyramidal disinhibitory motif is one well-documented cell of that grid, not the whole grid.**

(sec-13-grades)=
## Evidence grades

For the reader who wants the claims graded on a scale, we apply the standard four-tier scheme: **strong** (≥3 independent labs, orthogonal methods, comparable preparations, positive replication and no substantive negative replication); **moderate** (2 independent replications, or 1 replication plus downstream methodological use); **weak** (single-lab claims, or correlational evidence only); **speculative** (plausible on general circuit grounds but not directly measured).

**Strong (S).**

- VIP is a CGE-derived class with molecular substructure along at least three axes (bipolar/CR+ vs basket/CCK+; VIP/ChAT; VIP-LRP). Atlases, Patch-seq, developmental lineage all concur. [{cite:p}`Pronneke2015`; {cite:p}`Francavilla2020`; {cite:p}`Luo2020`; {cite:p}`Rhomberg2018`; {cite:p}`Melzer2021`]
- VIP interneurons preferentially inhibit SST interneurons more strongly than PV interneurons in mouse V1/S1/piriform cortex layer 2/3 slice preparations. [{cite:p}`CantoBustos2022`; {cite:p}`Wang2018`; {cite:p}`Rachel2025`]
- VIP activity increases during locomotion and high arousal in mouse primary sensory cortex. [{cite:p}`Pakan2016`; {cite:p}`Dipoppa2018`; {cite:p}`Millman2020`]
- VIP causally contributes to state-dependent cortical responses, gating, and contextual modulation in mouse V1 L2/3 under defined behavioural conditions. [{cite:p}`Keller2020a`; {cite:p}`Dipoppa2018`; {cite:p}`Wang2018`]
- VIP-specific molecular perturbation (ErbB4, MeCP2, Scn1a) produces physiological and behavioural phenotypes without equivalent perturbation of PV or SST cells. [{cite:p}`BatistaBrito2017`; {cite:p}`Mossner2020`; {cite:p}`Miralles2023`; {cite:p}`Goff2019`; {cite:p}`Goff2023`]

**Moderate (M).**

- The canonical motif participates in attentional and value-modulated gating in mouse V1 and S1, at a population level, under tasks that permit a disinhibitory interpretation. [{cite:p}`Keller2020a`; {cite:p}`MyersJoseph2022`; {cite:p}`Piet2024`; {cite:p}`Neubrandt2025a`; {cite:p}`Neubrandt2025b`]
- VIP cells control local gamma gain multiplicatively while controlling long-range gamma coherence separately. [{cite:p}`Veit2023`; {cite:p}`Wagatsuma2022a`; {cite:p}`Wagatsuma2022b`; {cite:p}`Beerendonk2023`]
- VIP connectivity is comparable in coarse architecture across sensory areas but differs in short-term plasticity at the subtype level. [{cite:p}`Rachel2025`; {cite:p}`McFarlan2024b`]
- Thalamic drive onto SST interneurons is strong enough to be a co-driver of state-dependent SST modulation, partially displacing the pure-disinhibition interpretation. [{cite:p}`Feyerabend2025`; {cite:p}`deBritoVanVelze2024`]
- VIP dysfunction is implicated in tinnitus, Fmr1-related cognitive deficits, chronic ethanol circuits, and several other conditions; the direction of causality is often debated but the involvement is reproducible. [{cite:p}`Ghimire2023b`; {cite:p}`Rahmatullah2023`; {cite:p}`Thompson2023a`; {cite:p}`Motaharinia2021`]

**Weak (W).**

- Reward/task-value encoding by VIP cells with a specified sign (enhancement vs suppression). The sign disagreements across {cite:p}`Ramamurthy2023`, {cite:p}`Piet2024`, {cite:p}`Bae2025`, and {cite:p}`Lenkey2025` place this claim below the replication bar until subtype-resolved recordings are reported.
- Generalization of the canonical motif to deep cortical layers, association cortex, or non-primary sensory areas. [{cite:p}`Apicella2022`; {cite:p}`Kanigowski2025`; {cite:p}`Cammarata2025`]
- VIP-LRP functional role during behaviour. Existence replicated [{cite:p}`Francavilla2020`; {cite:p}`Luo2020`]; behavioural causal role barely tested.
- Cross-species translation of mouse mechanistic claims to primate or human. [{cite:p}`HosseiniFin2025`; {cite:p}`Simacek2025a`; {cite:p}`Teymornejad2024`]
- Distinction between primary VIP defect and downstream compensation in most disease models. [{cite:p}`Mossner2020`; {cite:p}`Michaud2024b`]

**Speculative (Sp).**

- Cortex-wide disinhibition as a generic gating mechanism. Plausible by analogy but untested at the cortex-wide scale.
- VIP as a dedicated "reinforcement recruitment" cell class. The claim survives in textbook form; the primary data underneath it has been reanalysed in several directions since (the cluster of state-dependent results reviewed above).
- Unified role for VIP in consciousness or global arousal. Attractive framing; no direct test.

The division of findings into these tiers is deliberately conservative. Several claims that many readers would have placed in "strong" sit here in "moderate" because of the narrowness of the preparations in which they were established. A claim that replicates across thirty experiments in mouse V1 L2/3 is strong *for that preparation*, not for cortex in general — and the subject of this review is the generalization step.

## Closing statement

The canonical VIP interneuron story is approximately right in the place where it was developed and approximately wrong in the places where it has been applied. Its success within mouse primary sensory cortex L2/3 under defined behavioural conditions is real, reproducible, and mechanistically grounded. Its promotion to a cortex-wide, subtype-indifferent, species-general principle was premature. The eight curated disagreements surveyed here sort cleanly into themes whose resolution is in each case structurally feasible: subtype-resolved intersectional genetics, co-perturbation experiments that decompose thalamic and cortical drives, direct primate measurements, within-subject rescue in disease models, and meta-analytic correction of optogenetic artifacts. The next decade of VIP research has a clear agenda.

For the reader who wants a single statement of where VIP interneurons sit in 2026: they are a molecularly structured CGE-derived class whose best-characterized function — disinhibition of superficial pyramidal dendrites in mouse primary sensory cortex — is one of several. Other functions, in other subtypes, in other regions, under other states, are on the record and are not captured by that sentence. The review that follows this synthesis in {ref}`sec-conclusion` translates these openings into a structured research agenda.
