import type { Token } from "../../core/types";

export const scale = {
  s0: { value: "0px", description: "Spacing 0." } satisfies Token,
  s1: { value: "4px", description: "Spacing 1 (4px)." } satisfies Token,
  s2: { value: "8px", description: "Spacing 2 (8px)." } satisfies Token,
  s3: { value: "12px", description: "Spacing 3 (12px)." } satisfies Token,
  s4: { value: "16px", description: "Spacing 4 (16px)." } satisfies Token,
  s5: { value: "20px", description: "Spacing 5 (20px)." } satisfies Token,
  s6: { value: "24px", description: "Spacing 6 (24px)." } satisfies Token,
  s8: { value: "32px", description: "Spacing 8 (32px)." } satisfies Token,
  s10: { value: "40px", description: "Spacing 10 (40px)." } satisfies Token,
  s12: { value: "48px", description: "Spacing 12 (48px)." } satisfies Token,
  s16: { value: "64px", description: "Spacing 16 (64px)." } satisfies Token
} as const;
