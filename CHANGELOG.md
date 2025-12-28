# Changelog

All notable changes to `@asafarim/design-tokens` will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

## 0.4.6

- Fixed GitHub Actions workflow to work without lock file
- Removed frozen-lockfile requirement from CI/CD
- Made package independent from monorepo workspace

## 0.4.4

- Added automated GitHub Pages demo deployment
- Demo app now deployed to https://alisafari-it.github.io/design-tokens/
- Fixed GitHub Actions workflow environment configuration
- Updated package homepage to point to live demo

## 0.1.0

- Initial release.
- Added token model with strongly typed token tree.
- Added CSS variable output (`--asm-*`) for base + light/dark/high-contrast + density + RTL.
- Added theme helpers (`applyThemeToElement`, `prefersColorScheme`).
- Added build helpers (`toCssVars`, `toJson`, `validateTokens`).
