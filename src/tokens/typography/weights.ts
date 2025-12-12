import type { Token } from "../../core/types";

export const weights = {
  w100: { value: 100, description: "Font weight 100 (thin)." } satisfies Token<number>,
  w200: { value: 200, description: "Font weight 200 (extra light)." } satisfies Token<number>,
  w300: { value: 300, description: "Font weight 300 (light)." } satisfies Token<number>,
  w400: { value: 400, description: "Font weight 400 (regular)." } satisfies Token<number>,
  w500: { value: 500, description: "Font weight 500 (medium)." } satisfies Token<number>,
  w600: { value: 600, description: "Font weight 600 (semibold)." } satisfies Token<number>,
  w700: { value: 700, description: "Font weight 700 (bold)." } satisfies Token<number>,
  w800: { value: 800, description: "Font weight 800 (extra bold)." } satisfies Token<number>,
  w900: { value: 900, description: "Font weight 900 (black)." } satisfies Token<number>
} as const;
