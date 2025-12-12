import type { Token } from "../../core/types";

export const grid = {
  columns: {
    value: 12,
    description: "Default grid column count."
  } satisfies Token<number>,
  gutter: {
    value: "24px",
    description: "Default grid gutter size."
  } satisfies Token,
  breakpoints: {
    xs: { value: "360px", description: "Breakpoint XS." } satisfies Token,
    sm: { value: "640px", description: "Breakpoint SM." } satisfies Token,
    md: { value: "768px", description: "Breakpoint MD." } satisfies Token,
    lg: { value: "1024px", description: "Breakpoint LG." } satisfies Token,
    xl: { value: "1280px", description: "Breakpoint XL." } satisfies Token,
    x2l: { value: "1536px", description: "Breakpoint 2XL." } satisfies Token
  },
  containerWidths: {
    xs: { value: "480px", description: "Container width XS." } satisfies Token,
    sm: { value: "640px", description: "Container width SM." } satisfies Token,
    md: { value: "768px", description: "Container width MD." } satisfies Token,
    lg: { value: "1024px", description: "Container width LG." } satisfies Token,
    xl: { value: "1280px", description: "Container width XL." } satisfies Token,
    x2l: { value: "1360px", description: "Container width 2XL (ASafariM standard)." } satisfies Token
  }
} as const;
