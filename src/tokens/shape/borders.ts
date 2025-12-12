import type { Token } from "../../core/types";

export const borders = {
  hairline: { value: "1px", description: "Hairline border width." } satisfies Token,
  thin: { value: "2px", description: "Thin border width." } satisfies Token,
  thick: { value: "3px", description: "Thick border width." } satisfies Token
} as const;
