# @asafarim/design-tokens

A production-grade design-tokens package for the ASafariM ecosystem.

This package provides:

- CSS variables (runtime theming) for:
  - light / dark / high-contrast
  - density (compact / comfortable)
  - RTL support (logical property guidance)
- TypeScript exports for strongly-typed token consumption
- Programmatic theming helpers (SSR-safe)
- Validation utilities for safe token evolution

## Why design tokens

Design tokens are the single source of truth for design decisions (color, typography, spacing, motion…).

- **Consistency** across apps (React/Angular/Vue/vanilla)
- **Themeability** at runtime via CSS variables
- **Governance**: controlled evolution with semantic versioning

## Install

From the monorepo root (pnpm workspaces):

```bash
pnpm -C packages/design-tokens build
```

In a consuming package/app:

```bash
pnpm add @asafarim/design-tokens
```

## CSS usage (any framework)

Import the CSS entrypoint once at app startup:

```ts
import "@asafarim/design-tokens/css";
```

This ships a layered CSS setup:

1. `:root` base tokens (spacing, typography, motion, radii, z-index…)
2. `[data-theme]` theme tokens (colors, surfaces)
3. `[data-density]` density tokens
4. `[dir="rtl"]` RTL helpers

### Theme switching

```ts
document.documentElement.dataset.theme = "light";
// or
document.documentElement.dataset.theme = "dark";
// or
document.documentElement.dataset.contrast = "high";
```

### Density switching

```ts
document.documentElement.dataset.density = "compact";
// or
document.documentElement.dataset.density = "comfortable";
```

## TypeScript usage

```ts
import { tokens, themes, applyThemeToElement } from "@asafarim/design-tokens";

console.log(tokens.color.brand.primary500.value); // "#3A5AFE"

applyThemeToElement(document.documentElement, themes.light);
```

### Accessing CSS variable names

```ts
import { cssVarNames } from "@asafarim/design-tokens";

// dot-path -> CSS var
console.log(cssVarNames["color.brand.primary500"]); // "--asm-color-brand-primary-500"
```

## SSR safety

- `prefersColorScheme()` will not crash when `window` is unavailable.
- `applyThemeToElement()` can be used in tests or SSR hydration flows.

## Client overrides (branding)

You can apply partial overrides without forking the package:

```ts
import { applyThemeToElement, themes } from "@asafarim/design-tokens";

applyThemeToElement(document.documentElement, themes.light, {
  overrides: {
    "--asm-color-brand-primary-500": "#00A3FF"
  }
});
```

## High-contrast + reduced motion guidance

- High contrast is enabled using `[data-contrast="high"]`.
- Reduced motion is handled via `@media (prefers-reduced-motion: reduce)` and the motion preset tokens.

## Contribution rules (token governance)

- **Never rename or delete** existing semantic token keys in a minor/patch release.
- **Prefer adding** new semantic tokens, deprecating old ones with `meta.deprecated`.
- When changing a value of an existing token:
  - Patch: only if it’s a clear bug fix (e.g., invalid color)
  - Minor: safe visual adjustments
  - Major: visual/systemic shifts

Run validation before publishing:

```bash
pnpm -C packages/design-tokens build
node -e "import('@asafarim/design-tokens').then(m => console.log(m.validateTokens()))"
```

## Versioning rules

- **PATCH**: bug fixes, documentation, token metadata
- **MINOR**: additive tokens, new themes, non-breaking build changes
- **MAJOR**: renames/removals, behavior changes in theming helpers, breaking token semantics
