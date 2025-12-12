import type { Token } from "../../core/types";

export const surface = {
  background: { value: "var(--asm-color-bg)", description: "App background surface." } satisfies Token,
  surface: { value: "var(--asm-color-surface)", description: "Default surface (cards)." } satisfies Token,
  surfaceMuted: { value: "var(--asm-color-surface-muted)", description: "Muted surface." } satisfies Token,
  panel: { value: "var(--asm-color-panel)", description: "Panel surface." } satisfies Token,
  modal: { value: "var(--asm-color-modal)", description: "Modal surface." } satisfies Token
} as const;
