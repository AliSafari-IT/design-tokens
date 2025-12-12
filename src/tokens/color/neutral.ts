import type { Token } from "../../core/types";

export const neutral = {
  gray900: {
    value: "#111827",
    description: "Neutral gray - 900 (near-black)."
  } satisfies Token,
  gray700: {
    value: "#374151",
    description: "Neutral gray - 700."
  } satisfies Token,
  gray500: {
    value: "#6B7280",
    description: "Neutral gray - 500."
  } satisfies Token,
  gray300: {
    value: "#D1D5DB",
    description: "Neutral gray - 300."
  } satisfies Token,
  gray50: {
    value: "#F9FAFB",
    description: "Neutral gray - 50 (near-white)."
  } satisfies Token,
  white: {
    value: "#FFFFFF",
    description: "Pure white."
  } satisfies Token,
  black: {
    value: "#000000",
    description: "Pure black."
  } satisfies Token
} as const;
