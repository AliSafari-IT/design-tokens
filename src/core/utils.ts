import type { TokenLeaf, TokenTree } from "./types";

export function isTokenLeaf(value: unknown): value is TokenLeaf {
  return (
    typeof value === "object" &&
    value !== null &&
    "value" in value &&
    "description" in value &&
    (typeof (value as any).value === "string" || typeof (value as any).value === "number") &&
    typeof (value as any).description === "string"
  );
}

export function toKebabCase(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

export function joinPath(path: string[], sep = "."): string {
  return path.filter(Boolean).join(sep);
}

export function walkTokenTree(
  tree: TokenTree,
  visitor: (args: { path: string[]; leaf: TokenLeaf }) => void,
  path: string[] = []
) {
  for (const [key, value] of Object.entries(tree)) {
    const nextPath = [...path, key];

    if (isTokenLeaf(value)) {
      visitor({ path: nextPath, leaf: value });
      continue;
    }

    if (typeof value === "object" && value !== null) {
      walkTokenTree(value as TokenTree, visitor, nextPath);
    }
  }
}
