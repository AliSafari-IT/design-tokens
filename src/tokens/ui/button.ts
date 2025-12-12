import type { Token } from "../../core/types";

export const button = {
  primaryBg: { value: "var(--asm-color-button-primary-bg)", description: "Primary button background." } satisfies Token,
  primaryText: { value: "var(--asm-color-button-primary-text)", description: "Primary button text." } satisfies Token,
  primaryBgHover: {
    value: "var(--asm-color-button-primary-bg-hover)",
    description: "Primary button background (hover)."
  } satisfies Token,
  primaryBgActive: {
    value: "var(--asm-color-button-primary-bg-active)",
    description: "Primary button background (active)."
  } satisfies Token,

  secondaryBg: { value: "var(--asm-color-button-secondary-bg)", description: "Secondary button background." } satisfies Token,
  secondaryText: { value: "var(--asm-color-button-secondary-text)", description: "Secondary button text." } satisfies Token,

  ghostBgHover: { value: "var(--asm-color-button-ghost-bg-hover)", description: "Ghost button hover background." } satisfies Token,

  destructiveBg: { value: "var(--asm-color-button-destructive-bg)", description: "Destructive button background." } satisfies Token,
  destructiveText: { value: "var(--asm-color-button-destructive-text)", description: "Destructive button text." } satisfies Token,

  disabledBg: { value: "var(--asm-color-button-disabled-bg)", description: "Disabled button background." } satisfies Token,
  disabledText: { value: "var(--asm-color-button-disabled-text)", description: "Disabled button text." } satisfies Token
} as const;
