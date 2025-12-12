import type { Token } from "../../core/types";

export const opacity = {
  o0: { value: 0, description: "Opacity 0%." } satisfies Token<number>,
  o10: { value: 0.1, description: "Opacity 10%." } satisfies Token<number>,
  o20: { value: 0.2, description: "Opacity 20%." } satisfies Token<number>,
  o40: { value: 0.4, description: "Opacity 40%." } satisfies Token<number>,
  o60: { value: 0.6, description: "Opacity 60%." } satisfies Token<number>,
  o80: { value: 0.8, description: "Opacity 80%." } satisfies Token<number>,
  o100: { value: 1, description: "Opacity 100%." } satisfies Token<number>
} as const;
