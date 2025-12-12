import type { Token } from "../../core/types";

export const density = {
  compactFactor: {
    value: 0.9,
    description: "Density factor applied in compact mode."
  } satisfies Token<number>,
  comfortableFactor: {
    value: 1.05,
    description: "Density factor applied in comfortable mode."
  } satisfies Token<number>
} as const;
