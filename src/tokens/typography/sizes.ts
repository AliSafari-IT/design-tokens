import type { Token } from "../../core/types";

export const sizes = {
  xs: { value: "0.75rem", description: "Font size xs (12px)." } satisfies Token,
  sm: { value: "0.875rem", description: "Font size sm (14px)." } satisfies Token,
  md: { value: "1rem", description: "Font size md (16px)." } satisfies Token,
  lg: { value: "1.125rem", description: "Font size lg (18px)." } satisfies Token,
  xl: { value: "1.25rem", description: "Font size xl (20px)." } satisfies Token,
  x2l: { value: "1.5rem", description: "Font size 2xl (24px)." } satisfies Token,
  x3l: { value: "1.875rem", description: "Font size 3xl (30px)." } satisfies Token,
  x4l: { value: "2.25rem", description: "Font size 4xl (36px)." } satisfies Token,
  x5l: { value: "3rem", description: "Font size 5xl (48px)." } satisfies Token,
  x6l: { value: "3.75rem", description: "Font size 6xl (60px)." } satisfies Token
} as const;
