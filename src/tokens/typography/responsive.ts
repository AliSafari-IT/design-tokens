import type { Token } from "../../core/types";

export const responsive = {
  bodyMaxWidth: {
    value: "68ch",
    description: "Recommended max-width for long-form text blocks."
  } satisfies Token,
  scaleMobile: {
    value: 0.95,
    description: "Typography scale factor for mobile contexts.",
    meta: { note: "Use with clamp() in consuming apps when needed." }
  } satisfies Token<number>,
  scaleTablet: {
    value: 1,
    description: "Typography scale factor for tablet contexts."
  } satisfies Token<number>,
  scaleDesktop: {
    value: 1.05,
    description: "Typography scale factor for desktop contexts."
  } satisfies Token<number>
} as const;
