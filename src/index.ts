import type { DensityDefinition, ThemeDefinition, Token, ValidateResult } from "./core/types";
import { themes } from "./themes";
import { tokens } from "./tokens";
import { toCssVars, toCssVarNames } from "./build/toCssVars";
import { validateTokens as validateTokensInternal } from "./build/validate";

export type { ThemeDefinition, Token };
export type { ValidateResult };

export { tokens };
export { themes };

export const cssVarNames = toCssVarNames(tokens as any);

export { toCssVars };

export type ApplyThemeOptions = {
  overrides?: Record<string, string | number>;
  cleanup?: boolean;
};

export function applyThemeToElement(
  element: { style: { setProperty: (k: string, v: string) => void; removeProperty: (k: string) => void } },
  theme: ThemeDefinition | DensityDefinition,
  options?: ApplyThemeOptions
) {
  const cleanup = options?.cleanup ?? false;

  const keys = Object.keys(theme.tokens);
  if (cleanup) {
    for (const k of keys) {
      element.style.removeProperty(k);
    }
  }

  for (const [k, v] of Object.entries(theme.tokens)) {
    element.style.setProperty(k, String(v));
  }

  if (options?.overrides) {
    for (const [k, v] of Object.entries(options.overrides)) {
      element.style.setProperty(k, String(v));
    }
  }
}

export function prefersColorScheme(): "light" | "dark" | undefined {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return undefined;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function validateTokens(): ValidateResult {
  return validateTokensInternal({
    tokens: tokens as any,
    themes: [themes.light, themes.dark, themes.highContrast]
  });
}
