import type { Token } from "../../core/types";

export const easing = {
  standard: { value: "cubic-bezier(0.2, 0, 0, 1)", description: "Standard easing." } satisfies Token,
  emphasized: { value: "cubic-bezier(0.2, 0, 0, 1.2)", description: "Emphasized easing." } satisfies Token,
  entrance: { value: "cubic-bezier(0, 0, 0, 1)", description: "Entrance easing." } satisfies Token,
  exit: { value: "cubic-bezier(0.4, 0, 1, 1)", description: "Exit easing." } satisfies Token
} as const;
