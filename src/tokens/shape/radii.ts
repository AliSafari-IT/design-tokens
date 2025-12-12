import type { Token } from "../../core/types";

export const radii = {
  sm: { value: "6px", description: "Small radius." } satisfies Token,
  md: { value: "10px", description: "Medium radius." } satisfies Token,
  lg: { value: "12px", description: "Large radius (cards)." } satisfies Token,
  xl: { value: "16px", description: "Extra-large radius." } satisfies Token,
  full: { value: "9999px", description: "Full pill/circle radius." } satisfies Token
} as const;
