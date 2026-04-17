"""Reproduce figures/sec-14/fig_sec14_outstanding_agenda.png.

Data: evidence/sec14_outstanding_agenda.json (distilled from
content/sec-13-synthesis.md lines 326-350, 'Untested predictions and
experimental gaps'). Layout: header row + 5 body rows + legend row, with
4 columns (gap number, prediction, thematic axis, required tool).
Forward-looking complement to sec-13's conflict map; does not duplicate
the adjudication counts."""
import json, textwrap
from pathlib import Path
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

ROOT = Path(__file__).resolve().parent.parent.parent
with open(ROOT / "evidence" / "sec14_outstanding_agenda.json") as f:
    D = json.load(f)
gaps = D["gaps"]; n = len(gaps)

C_AXIS       = "#c62828"
C_TOOL_READY = "#2e7d32"
C_TOOL_HARD  = "#f9a825"
C_ROW_ALT    = "#f5f5f5"
C_HEADER_BG  = "#e0e0e0"

# Column geometry (data coords)
W_NUM, W_TITLE, W_AXIS, W_TOOL = 0.9, 4.8, 4.0, 6.8
GAP = 0.25
X_NUM   = 0.0
X_TITLE = X_NUM   + W_NUM   + GAP
X_AXIS  = X_TITLE + W_TITLE + GAP
X_TOOL  = X_AXIS  + W_AXIS  + GAP
X_END   = X_TOOL  + W_TOOL

ROW_H  = 1.25
HEAD_H = 0.55
LEG_H  = 0.65
total_h = HEAD_H + n * ROW_H + LEG_H

def wrap(s, width):
    return "\n".join(textwrap.wrap(s, width=width)) if s else ""

fig_w = 13.5
fig_h = total_h * 0.62 + 0.4
fig, ax = plt.subplots(figsize=(fig_w, fig_h))

def row_y_top(i):
    return total_h - HEAD_H - i * ROW_H

# Header
ax.add_patch(mpatches.Rectangle((0, total_h - HEAD_H), X_END, HEAD_H,
                                facecolor=C_HEADER_BG, edgecolor="none"))
hy = total_h - HEAD_H / 2
ax.text(X_NUM + W_NUM / 2, hy, "#", fontsize=11, fontweight="bold",
        ha="center", va="center", color="#222")
ax.text(X_TITLE, hy, "Untested prediction", fontsize=11, fontweight="bold",
        ha="left", va="center", color="#222")
ax.text(X_AXIS + W_AXIS / 2, hy,
        "Axis adjudicated\n(sec-13 conflict map)",
        fontsize=10.5, fontweight="bold", ha="center", va="center", color="#222")
ax.text(X_TOOL, hy, "Tool / measurement required",
        fontsize=11, fontweight="bold", ha="left", va="center", color="#222")

# Body rows
for i, g in enumerate(gaps):
    y_top = row_y_top(i)
    y_bot = y_top - ROW_H
    y_mid = (y_top + y_bot) / 2

    if i % 2 == 0:
        ax.add_patch(mpatches.Rectangle((0, y_bot), X_END, ROW_H,
                                        facecolor=C_ROW_ALT, edgecolor="none",
                                        zorder=0))

    ax.text(X_NUM + W_NUM / 2, y_mid, f"Gap {g['id']}", fontsize=11,
            fontweight="bold", ha="center", va="center", color="#222")

    title = wrap(g["title"], width=40)
    title_y = y_mid + 0.15 if g["anchor_cites"] else y_mid
    ax.text(X_TITLE, title_y, title, fontsize=10.5, fontweight="bold",
            color="#111", ha="left", va="center")
    if g["anchor_cites"]:
        ax.text(X_TITLE, y_bot + 0.22,
                "anchor studies: " + ", ".join(g["anchor_cites"]),
                fontsize=8.4, color="#666", style="italic",
                ha="left", va="center")

    chip_pad_x, chip_pad_y = 0.18, 0.22
    ax.add_patch(mpatches.FancyBboxPatch(
        (X_AXIS + chip_pad_x, y_bot + chip_pad_y),
        W_AXIS - 2 * chip_pad_x, ROW_H - 2 * chip_pad_y,
        boxstyle="round,pad=0.02,rounding_size=0.08",
        facecolor=C_AXIS, edgecolor="none", alpha=0.9, zorder=1))
    ax.text(X_AXIS + W_AXIS / 2, y_mid, wrap(g["axis"], width=26),
            fontsize=10, ha="center", va="center", color="white",
            fontweight="bold", zorder=2)

    dot_x = X_TOOL + 0.18
    ax.add_patch(mpatches.Circle((dot_x, y_mid), 0.14,
                                 facecolor=(C_TOOL_READY if g["tools_exist"] else C_TOOL_HARD),
                                 edgecolor="white", lw=1.2, zorder=2))
    ax.text(dot_x + 0.30, y_mid, wrap(g["tool"], width=58),
            fontsize=9.8, color="#222", ha="left", va="center")

ax.plot([0, X_END], [total_h - HEAD_H, total_h - HEAD_H], color="#888", lw=0.8)

# Legend row
ly = LEG_H / 2
ax.add_patch(mpatches.Circle((0.2, ly), 0.14, facecolor=C_TOOL_READY,
                             edgecolor="white", lw=1.2))
ax.text(0.5, ly, "tools exist — measurement not yet performed",
        fontsize=9.5, va="center", color="#333")
ax.add_patch(mpatches.Circle((7.0, ly), 0.14, facecolor=C_TOOL_HARD,
                             edgecolor="white", lw=1.2))
ax.text(7.3, ly,
        "tool development required (e.g. primate viral opto)",
        fontsize=9.5, va="center", color="#333")

ax.set_xlim(-0.05, X_END + 0.05)
ax.set_ylim(-0.05, total_h + 0.05)
ax.set_axis_off()
plt.tight_layout()
out = ROOT / "figures" / "sec-14" / "fig_sec14_outstanding_agenda.png"
fig.savefig(out, dpi=200, bbox_inches="tight")
print(f"Wrote {out.relative_to(ROOT)} ({out.stat().st_size} bytes)")
