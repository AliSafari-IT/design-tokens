import type { Token } from "../../core/types";

export const strokeWidths = {
  thin: { value: 1, description: "Thin icon stroke width." } satisfies Token<number>,
  regular: { value: 1.5, description: "Regular icon stroke width." } satisfies Token<number>,
  bold: { value: 2, description: "Bold icon stroke width." } satisfies Token<number>
} as const;
