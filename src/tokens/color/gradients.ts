import type { Token } from "../../core/types";

export const gradients = {
  primary: {
    value: "linear-gradient(135deg, #3A5AFE 0%, #8B5CF6 100%)",
    description: "Primary brand gradient (used for hero/marketing accents)."
  } satisfies Token,
  subtleHero: {
    value: "linear-gradient(180deg, rgba(58, 90, 254, 0.10) 0%, rgba(249, 250, 251, 0) 80%)",
    description: "Subtle hero gradient background overlay (light).",
    meta: { note: "Use theme override in dark/high-contrast." }
  } satisfies Token
} as const;
