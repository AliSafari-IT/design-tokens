import type { Token } from "../../core/types";

export const brand = {
  primary50: {
    value: "#EEF2FF",
    description: "Primary brand color scale - 50 (lightest)."
  } satisfies Token,
  primary100: {
    value: "#E0E7FF",
    description: "Primary brand color scale - 100."
  } satisfies Token,
  primary200: {
    value: "#C7D2FE",
    description: "Primary brand color scale - 200."
  } satisfies Token,
  primary300: {
    value: "#A5B4FC",
    description: "Primary brand color scale - 300."
  } satisfies Token,
  primary400: {
    value: "#818CF8",
    description: "Primary brand color scale - 400."
  } satisfies Token,
  primary500: {
    value: "#3A5AFE",
    description: "Primary brand color scale - 500 (core brand blue).",
    meta: { wcag: "Use for primary actions; pair with onPrimary tokens." }
  } satisfies Token,
  primary600: {
    value: "#304FFE",
    description: "Primary brand color scale - 600."
  } satisfies Token,
  primary700: {
    value: "#1E40FF",
    description: "Primary brand color scale - 700 (darkest brand accent)."
  } satisfies Token,
  secondary500: {
    value: "#14B8A6",
    description: "Optional secondary brand accent (teal)."
  } satisfies Token
} as const;
