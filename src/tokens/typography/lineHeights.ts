import type { Token } from "../../core/types";

export const lineHeights = {
  tight: { value: 1.1, description: "Tight line-height (headings)." } satisfies Token<number>,
  normal: { value: 1.4, description: "Normal line-height (UI)." } satisfies Token<number>,
  relaxed: { value: 1.6, description: "Relaxed line-height (long form)." } satisfies Token<number>,
  h1: { value: 1.05, description: "H1 line-height." } satisfies Token<number>,
  h2: { value: 1.1, description: "H2 line-height." } satisfies Token<number>,
  h3: { value: 1.15, description: "H3 line-height." } satisfies Token<number>,
  h4: { value: 1.2, description: "H4 line-height." } satisfies Token<number>,
  h5: { value: 1.25, description: "H5 line-height." } satisfies Token<number>,
  h6: { value: 1.25, description: "H6 line-height." } satisfies Token<number>
} as const;
