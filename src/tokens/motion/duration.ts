import type { Token } from "../../core/types";

export const duration = {
  fast: { value: "120ms", description: "Fast duration for micro-interactions." } satisfies Token,
  normal: { value: "200ms", description: "Normal duration for standard UI transitions." } satisfies Token,
  slow: { value: "320ms", description: "Slow duration for larger transitions." } satisfies Token
} as const;
