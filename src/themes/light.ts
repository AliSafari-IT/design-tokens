import type { ThemeDefinition } from "../core/types";
import { brand } from "../tokens/color/brand";
import { neutral } from "../tokens/color/neutral";
import { semantic } from "../tokens/color/semantic";
import { overlays } from "../tokens/color/overlays";

export const light: ThemeDefinition = {
  name: "light",
  tokens: {
    "--asm-color-bg": neutral.gray50.value,
    "--asm-color-surface": neutral.white.value,
    "--asm-color-surface-muted": "#F3F4F6",
    "--asm-color-panel": neutral.white.value,
    "--asm-color-modal": neutral.white.value,

    "--asm-color-text": neutral.gray900.value,
    "--asm-color-text-muted": neutral.gray500.value,
    "--asm-color-border": neutral.gray300.value,

    "--asm-color-brand-primary-50": brand.primary50.value,
    "--asm-color-brand-primary-500": brand.primary500.value,
    "--asm-color-brand-primary-600": brand.primary600.value,
    "--asm-color-brand-primary-700": brand.primary700.value,

    "--asm-color-semantic-success": semantic.success.value,
    "--asm-color-semantic-warning": semantic.warning.value,
    "--asm-color-semantic-error": semantic.error.value,
    "--asm-color-semantic-info": semantic.info.value,

    "--asm-color-button-primary-bg": brand.primary600.value,
    "--asm-color-button-primary-bg-hover": brand.primary700.value,
    "--asm-color-button-primary-bg-active": brand.primary700.value,
    "--asm-color-button-primary-text": neutral.white.value,

    "--asm-color-button-secondary-bg": neutral.white.value,
    "--asm-color-button-secondary-text": neutral.gray900.value,

    "--asm-color-button-ghost-bg-hover": "rgba(17, 24, 39, 0.06)",

    "--asm-color-button-destructive-bg": semantic.error.value,
    "--asm-color-button-destructive-text": neutral.white.value,

    "--asm-color-button-disabled-bg": neutral.gray300.value,
    "--asm-color-button-disabled-text": neutral.gray700.value,

    "--asm-color-input-bg": neutral.white.value,
    "--asm-color-input-text": neutral.gray900.value,
    "--asm-color-input-border": neutral.gray300.value,
    "--asm-color-input-border-hover": neutral.gray500.value,
    "--asm-color-input-border-focus": brand.primary600.value,
    "--asm-color-input-placeholder": neutral.gray500.value,
    "--asm-color-input-error-border": semantic.error.value,
    "--asm-color-input-success-border": semantic.success.value,

    "--asm-color-focus-ring": brand.primary500.value,

    "--asm-color-overlay-scrim": overlays.scrim.value,

    "--asm-color-dataviz-gridline": neutral.gray300.value,
    "--asm-color-dataviz-axis": neutral.gray500.value,
    "--asm-color-dataviz-tooltip-bg": neutral.gray900.value,
    "--asm-color-dataviz-tooltip-text": neutral.gray50.value
  }
};
