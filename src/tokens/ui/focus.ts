import type { Token } from "../../core/types";

export const focus = {
  ringColor: { value: "var(--asm-color-focus-ring)", description: "Focus ring color." } satisfies Token,
  ringWidth: { value: "2px", description: "Focus ring width." } satisfies Token,
  ringOffset: { value: "2px", description: "Focus ring offset." } satisfies Token
} as const;
