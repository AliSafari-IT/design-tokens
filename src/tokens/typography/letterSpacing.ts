import type { Token } from "../../core/types";

export const letterSpacing = {
  tight: { value: "-0.01em", description: "Tight letter spacing." } satisfies Token,
  normal: { value: "0em", description: "Normal letter spacing." } satisfies Token,
  wide: { value: "0.02em", description: "Wide letter spacing." } satisfies Token
} as const;
