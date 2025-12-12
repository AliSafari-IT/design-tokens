import type { Token } from "../../core/types";

export const accent = {
  purple500: {
    value: "#8B5CF6",
    description: "Accent purple for special contexts (e.g., highlights)."
  } satisfies Token,
  cyan500: {
    value: "#06B6D4",
    description: "Accent cyan for special contexts (e.g., data accents)."
  } satisfies Token,
  pink500: {
    value: "#EC4899",
    description: "Accent pink for special contexts."
  } satisfies Token,
  lime500: {
    value: "#84CC16",
    description: "Accent lime for special contexts."
  } satisfies Token
} as const;
