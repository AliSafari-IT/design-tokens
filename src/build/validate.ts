import type { ThemeDefinition, TokenTree, ValidateResult } from "../core/types";
import { walkTokenTree } from "../core/utils";
import { tokenPathToCssVarName } from "./toCssVars";

const HEX_COLOR = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

export function validateTokens(args: {
  tokens: TokenTree;
  themes: ThemeDefinition[];
}): ValidateResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const seenDotKeys = new Set<string>();
  const seenCssVars = new Set<string>();

  walkTokenTree(args.tokens, ({ path, leaf }) => {
    const dotKey = path.join(".");
    if (seenDotKeys.has(dotKey)) {
      errors.push(`Duplicate token key: ${dotKey}`);
    } else {
      seenDotKeys.add(dotKey);
    }

    if (!leaf.description || leaf.description.trim().length === 0) {
      errors.push(`Missing description for token: ${dotKey}`);
    }

    const cssVar = tokenPathToCssVarName(path);
    if (!cssVar.startsWith("--asm-")) {
      errors.push(`Invalid CSS var prefix (must be --asm-): ${cssVar}`);
    }

    if (seenCssVars.has(cssVar)) {
      errors.push(`Duplicate CSS var name generated: ${cssVar} (from ${dotKey})`);
    } else {
      seenCssVars.add(cssVar);
    }

    const v = leaf.value;
    if (typeof v === "string" && v.startsWith("#") && !HEX_COLOR.test(v)) {
      errors.push(`Invalid hex color for ${dotKey}: ${v}`);
    }
  });

  const requiredThemeVars = [
    "--asm-color-bg",
    "--asm-color-surface",
    "--asm-color-text",
    "--asm-color-border",
    "--asm-color-button-primary-bg",
    "--asm-color-input-border-focus",
    "--asm-color-focus-ring",
    "--asm-color-overlay-scrim"
  ];

  const themeNames = new Set(args.themes.map(t => t.name));
  for (const name of ["light", "dark", "high-contrast"] as const) {
    if (!themeNames.has(name)) {
      errors.push(`Missing required theme: ${name}`);
    }
  }

  for (const theme of args.themes) {
    if (theme.name !== "light" && theme.name !== "dark" && theme.name !== "high-contrast") {
      warnings.push(`Theme has non-standard name: ${theme.name}`);
    }

    for (const varName of requiredThemeVars) {
      if (!(varName in theme.tokens)) {
        errors.push(`Theme '${theme.name}' missing required token override: ${varName}`);
      }
    }

    for (const [key, value] of Object.entries(theme.tokens)) {
      if (!key.startsWith("--asm-")) {
        errors.push(`Theme '${theme.name}' contains non --asm- var: ${key}`);
      }
      if (typeof value === "string" && value.startsWith("#") && !HEX_COLOR.test(value)) {
        errors.push(`Theme '${theme.name}' invalid hex for ${key}: ${value}`);
      }
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings
  };
}
