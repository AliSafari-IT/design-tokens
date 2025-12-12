import type { Token } from "../../core/types";

export const semantic = {
  success: {
    value: "#16A34A",
    description: "Semantic success color (base)."
  } satisfies Token,
  successSubtle: {
    value: "#DCFCE7",
    description: "Semantic success background/surface (subtle)."
  } satisfies Token,
  warning: {
    value: "#F59E0B",
    description: "Semantic warning color (base)."
  } satisfies Token,
  warningSubtle: {
    value: "#FEF3C7",
    description: "Semantic warning background/surface (subtle)."
  } satisfies Token,
  error: {
    value: "#EF4444",
    description: "Semantic error color (base)."
  } satisfies Token,
  errorSubtle: {
    value: "#FEE2E2",
    description: "Semantic error background/surface (subtle)."
  } satisfies Token,
  info: {
    value: "#0EA5E9",
    description: "Semantic info color (base)."
  } satisfies Token,
  infoSubtle: {
    value: "#E0F2FE",
    description: "Semantic info background/surface (subtle)."
  } satisfies Token
} as const;
