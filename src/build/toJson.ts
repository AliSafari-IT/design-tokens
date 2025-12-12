import type { TokenTree } from "../core/types";
import { walkTokenTree } from "../core/utils";

export type FlatTokenJson = Record<string, { value: string | number; description: string; meta?: Record<string, unknown> }>;

export function toJson(tree: TokenTree): FlatTokenJson {
  const out: FlatTokenJson = {};

  walkTokenTree(tree, ({ path, leaf }) => {
    const key = path.join(".");
    if (leaf.meta) {
      out[key] = { value: leaf.value, description: leaf.description, meta: leaf.meta };
      return;
    }

    out[key] = { value: leaf.value, description: leaf.description };
  });

  return out;
}
