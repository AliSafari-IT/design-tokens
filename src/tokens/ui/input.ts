import type { Token } from "../../core/types";

export const input = {
  bg: { value: "var(--asm-color-input-bg)", description: "Input background." } satisfies Token,
  text: { value: "var(--asm-color-input-text)", description: "Input text." } satisfies Token,
  border: { value: "var(--asm-color-input-border)", description: "Input border." } satisfies Token,
  borderHover: { value: "var(--asm-color-input-border-hover)", description: "Input border (hover)." } satisfies Token,
  borderFocus: { value: "var(--asm-color-input-border-focus)", description: "Input border (focus)." } satisfies Token,
  placeholder: { value: "var(--asm-color-input-placeholder)", description: "Input placeholder text." } satisfies Token,
  errorBorder: { value: "var(--asm-color-input-error-border)", description: "Input error border." } satisfies Token,
  successBorder: { value: "var(--asm-color-input-success-border)", description: "Input success border." } satisfies Token
} as const;
