import type { Token } from "../../core/types";

export const rtl = {
  logicalInsetStart: {
    value: "inset-inline-start",
    description: "Use logical inset start property for RTL-safe positioning."
  } satisfies Token,
  logicalInsetEnd: {
    value: "inset-inline-end",
    description: "Use logical inset end property for RTL-safe positioning."
  } satisfies Token,
  logicalMarginStart: {
    value: "margin-inline-start",
    description: "Use logical margin start for RTL-safe spacing."
  } satisfies Token,
  logicalMarginEnd: {
    value: "margin-inline-end",
    description: "Use logical margin end for RTL-safe spacing."
  } satisfies Token
} as const;
