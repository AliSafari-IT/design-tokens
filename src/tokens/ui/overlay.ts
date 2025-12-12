import type { Token } from "../../core/types";

export const overlay = {
  scrim: { value: "var(--asm-color-overlay-scrim)", description: "Overlay scrim color." } satisfies Token,
  backdropBlur: { value: "var(--asm-effect-blur-md)", description: "Default overlay backdrop blur." } satisfies Token
} as const;
