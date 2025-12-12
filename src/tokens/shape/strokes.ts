import type { Token } from "../../core/types";

export const strokes = {
  default: { value: "1px", description: "Default stroke width." } satisfies Token,
  strong: { value: "2px", description: "Strong stroke width." } satisfies Token,
  dash: { value: "4 2", description: "Default dash pattern (stroke-dasharray)." } satisfies Token
} as const;
