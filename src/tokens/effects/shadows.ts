import type { Token } from "../../core/types";

export const shadows = {
  sm: {
    value: "0 1px 2px rgba(17, 24, 39, 0.06)",
    description: "Shadow sm (subtle elevation)."
  } satisfies Token,
  md: {
    value: "0 6px 20px rgba(17, 24, 39, 0.10)",
    description: "Shadow md (card elevation)."
  } satisfies Token,
  lg: {
    value: "0 16px 40px rgba(17, 24, 39, 0.14)",
    description: "Shadow lg (overlay elevation)."
  } satisfies Token,
  xl: {
    value: "0 24px 60px rgba(17, 24, 39, 0.18)",
    description: "Shadow xl (modal elevation)."
  } satisfies Token
} as const;
