import type { TokenTree } from "../core/types";
import { toKebabCase, walkTokenTree } from "../core/utils";

export type CssVarDict = Record<string, string>;

export function tokenPathToCssVarName(path: string[]): string {
  const kebabParts = path.map(toKebabCase);
  return `--asm-${kebabParts.join("-")}`;
}

export function toCssVars(tree: TokenTree): CssVarDict {
  const out: CssVarDict = {};

  walkTokenTree(tree, ({ path, leaf }) => {
    const cssVar = tokenPathToCssVarName(path);
    out[cssVar] = String(leaf.value);
  });

  return out;
}

export function toCssVarNames(tree: TokenTree): Record<string, string> {
  const out: Record<string, string> = {};

  walkTokenTree(tree, ({ path }) => {
    const dotPath = path.join(".");
    out[dotPath] = tokenPathToCssVarName(path);
  });

  return out;
}
