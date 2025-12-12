import type { Token } from "../../core/types";

export const blur = {
  sm: { value: "4px", description: "Small blur." } satisfies Token,
  md: { value: "8px", description: "Medium blur." } satisfies Token,
  lg: { value: "16px", description: "Large blur (glass)." } satisfies Token
} as const;
