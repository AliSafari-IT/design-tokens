import type { Token } from "../../core/types";

export const reducedMotion = {
  disableTransitions: {
    value: 1,
    description: "If true, consumers should disable non-essential transitions when prefers-reduced-motion is enabled.",
    meta: { hint: "Use @media (prefers-reduced-motion: reduce) in CSS." }
  } satisfies Token<number>
} as const;
