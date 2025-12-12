import type { Token } from "../../core/types";

export const dataViz = {
  series1: { value: "#3A5AFE", description: "DataViz series color 1 (brand primary)." } satisfies Token,
  series2: { value: "#14B8A6", description: "DataViz series color 2 (brand secondary)." } satisfies Token,
  series3: { value: "#8B5CF6", description: "DataViz series color 3." } satisfies Token,
  series4: { value: "#F59E0B", description: "DataViz series color 4." } satisfies Token,
  series5: { value: "#EF4444", description: "DataViz series color 5." } satisfies Token,
  series6: { value: "#0EA5E9", description: "DataViz series color 6." } satisfies Token,
  series7: { value: "#84CC16", description: "DataViz series color 7." } satisfies Token,
  series8: { value: "#EC4899", description: "DataViz series color 8." } satisfies Token,
  series9: { value: "#6366F1", description: "DataViz series color 9." } satisfies Token,
  series10: { value: "#F97316", description: "DataViz series color 10." } satisfies Token,
  series11: { value: "#22C55E", description: "DataViz series color 11." } satisfies Token,
  series12: { value: "#A855F7", description: "DataViz series color 12." } satisfies Token,
  gridline: { value: "#D1D5DB", description: "DataViz gridline color." } satisfies Token,
  axis: { value: "#6B7280", description: "DataViz axis label color." } satisfies Token,
  tooltipBg: { value: "#111827", description: "DataViz tooltip background color." } satisfies Token,
  tooltipText: { value: "#F9FAFB", description: "DataViz tooltip text color." } satisfies Token
} as const;
