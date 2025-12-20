import type { ThemeDefinition } from "../core/types";
import { brand } from "../tokens/color/brand";
import { neutral } from "../tokens/color/neutral";
import { semantic } from "../tokens/color/semantic";
import { overlays } from "../tokens/color/overlays";

export const dark: ThemeDefinition = {
  name: "dark",
  tokens: {
    "--asm-color-bg": "#0B1220",
    "--asm-color-surface": "#0F172A",
    "--asm-color-surface-muted": "#111B2E",
    "--asm-color-panel": "#0F172A",
    "--asm-color-modal": "#0F172A",

    "--asm-color-text": "#E5E7EB",
    "--asm-color-text-muted": "#9CA3AF",
    "--asm-color-border": "#1F2937",

    "--asm-color-brand-primary-50": brand.primary50.value,
    "--asm-color-brand-primary-500": brand.primary500.value,
    "--asm-color-brand-primary-600": brand.primary500.value,
    "--asm-color-brand-primary-700": brand.primary600.value,

    "--asm-color-semantic-success": semantic.success.value,
    "--asm-color-semantic-warning": semantic.warning.value,
    "--asm-color-semantic-error": semantic.error.value,
    "--asm-color-semantic-info": semantic.info.value,

    "--asm-color-button-primary-bg": brand.primary500.value,
    "--asm-color-button-primary-bg-hover": brand.primary600.value,
    "--asm-color-button-primary-bg-active": brand.primary600.value,
    "--asm-color-button-primary-text": neutral.white.value,

    "--asm-color-button-secondary-bg": "#111B2E",
    "--asm-color-button-secondary-text": "#E5E7EB",

    "--asm-color-button-ghost-bg-hover": "rgba(229, 231, 235, 0.08)",

    "--asm-color-button-destructive-bg": "#F87171",
    "--asm-color-button-destructive-text": "#0B1220",

    "--asm-color-button-disabled-bg": "#1F2937",
    "--asm-color-button-disabled-text": "#9CA3AF",

    "--asm-color-input-bg": "#0B1220",
    "--asm-color-input-text": "#E5E7EB",
    "--asm-color-input-border": "#1F2937",
    "--asm-color-input-border-hover": "#374151",
    "--asm-color-input-border-focus": brand.primary500.value,
    "--asm-color-input-placeholder": "#9CA3AF",
    "--asm-color-input-error-border": "#F87171",
    "--asm-color-input-success-border": "#22C55E",

    "--asm-color-focus-ring": brand.primary500.value,

    "--asm-color-overlay-scrim": overlays.scrimStrong.value,

    "--asm-color-dataviz-gridline": "#1F2937",
    "--asm-color-dataviz-axis": "#9CA3AF",
    "--asm-color-dataviz-tooltip-bg": "#111827",
    "--asm-color-dataviz-tooltip-text": "#F9FAFB"
  }
};
