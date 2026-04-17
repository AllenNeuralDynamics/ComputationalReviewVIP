"""Reproduce figures/sec-14/fig_sec14_outstanding_agenda.png.

Data: evidence/sec14_outstanding_agenda.json (distilled from
content/sec-13-synthesis.md lines 326-350, 'Untested predictions and
experimental gaps'). Design: 5 rows, each showing (gap title, thematic
axis addressed, experimental tool required). Forward-looking complement
to sec-13's conflict_map; does not duplicate the adjudication counts."""
import json
from pathlib import Path
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

ROOT = Path(__file__).resolve().parent.parent.parent
with open(ROOT / "evidence" / "sec14_outstanding_agenda.json") as f:
    D = json.load(f)
gaps = D["gaps"]; n = len(gaps)

C_AXIS = "#c62828"; C_TOOL_READY = "#2e7d32"; C_TOOL_HARD = "#f9a825"
fig, ax = plt.subplots(figsize=(13.5, 0.9 + 1.05 * n))
pad = 0.12
col_num, col_title, col_axis, col_tool = 0.0, 0.6, 5.6, 9.4

ax.text(col_num, n + 0.35, "#", fontsize=10, fontweight="bold", color="#333")
ax.text(col_title, n + 0.35, "Untested prediction", fontsize=10, fontweight="bold", color="#333")
ax.text(col_axis, n + 0.35, "Adjudicates which axis of sec-13 conflict map",
        fontsize=10, fontweight="bold", color="#333")
ax.text(col_tool, n + 0.35, "Tool / measurement required",
        fontsize=10, fontweight="bold", color="#333")
ax.plot([col_num - 0.15, 17.0], [n + 0.12, n + 0.12], color="#333", lw=0.8)

for i, g in enumerate(gaps):
    y = n - 1 - i
    if i % 2 == 0:
        ax.add_patch(mpatches.Rectangle((col_num - 0.15, y - pad), 17.15,
                                        1.0 - 2*pad, facecolor="#f5f5f5",
                                        edgecolor="none", zorder=0))
    ax.text(col_num, y + 0.35, f"Gap {g['id']}", fontsize=10, fontweight="bold", color="#222")
    ax.text(col_title, y + 0.35, g["title"], fontsize=10.5, color="#111", fontweight="bold")
    axis_w = 3.55
    ax.add_patch(mpatches.FancyBboxPatch(
        (col_axis, y + 0.02), axis_w, 1.0 - 2*pad - 0.08,
        boxstyle="round,pad=0.02,rounding_size=0.08",
        facecolor=C_AXIS, edgecolor="none", alpha=0.88, zorder=1))
    ax.text(col_axis + axis_w/2, y + 0.35, g["axis"], fontsize=9.5,
            ha="center", va="center", color="white", fontweight="bold", zorder=2)
    mc = C_TOOL_READY if g["tools_exist"] else C_TOOL_HARD
    ax.add_patch(mpatches.Circle((col_tool - 0.15, y + 0.35), 0.12,
                                 facecolor=mc, edgecolor="white", lw=1.2, zorder=2))
    ax.text(col_tool, y + 0.35, g["tool"], fontsize=9.3, color="#222", va="center", wrap=True)
    if g["anchor_cites"]:
        ax.text(col_title, y + 0.05, "anchor studies: " + ", ".join(g["anchor_cites"]),
                fontsize=8.4, color="#666", style="italic")

ax.set_xlim(col_num - 0.2, 17.0); ax.set_ylim(-0.1, n + 0.7); ax.set_axis_off()

legend_y = -0.05
ax.add_patch(mpatches.Circle((0.1, legend_y), 0.11, facecolor=C_TOOL_READY,
                             edgecolor="white", lw=1.2))
ax.text(0.3, legend_y, "tools exist — measurement not yet performed",
        fontsize=8.8, va="center", color="#333")
ax.add_patch(mpatches.Circle((6.5, legend_y), 0.11, facecolor=C_TOOL_HARD,
                             edgecolor="white", lw=1.2))
ax.text(6.7, legend_y, "tool development required (e.g. primate viral opto)",
        fontsize=8.8, va="center", color="#333")

plt.tight_layout()
out = ROOT / "figures" / "sec-14" / "fig_sec14_outstanding_agenda.png"
out.parent.mkdir(parents=True, exist_ok=True)
fig.savefig(out, dpi=200, bbox_inches="tight")
print(f"Wrote {out.relative_to(ROOT)}")
