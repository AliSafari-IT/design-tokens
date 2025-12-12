import type { Token } from "../../core/types";

export const headings = {
  h1: {
    value: "var(--asm-font-size-6xl) / var(--asm-line-height-h1) var(--asm-font-family-primary)",
    description: "H1 shorthand (size/line-height/family).",
    meta: { note: "Use size/weight/lineHeight tokens for precise control." }
  } satisfies Token,
  h2: {
    value: "var(--asm-font-size-5xl) / var(--asm-line-height-h2) var(--asm-font-family-primary)",
    description: "H2 shorthand (size/line-height/family)."
  } satisfies Token,
  h3: {
    value: "var(--asm-font-size-4xl) / var(--asm-line-height-h3) var(--asm-font-family-primary)",
    description: "H3 shorthand (size/line-height/family)."
  } satisfies Token,
  h4: {
    value: "var(--asm-font-size-3xl) / var(--asm-line-height-h4) var(--asm-font-family-primary)",
    description: "H4 shorthand (size/line-height/family)."
  } satisfies Token,
  h5: {
    value: "var(--asm-font-size-2xl) / var(--asm-line-height-h5) var(--asm-font-family-primary)",
    description: "H5 shorthand (size/line-height/family)."
  } satisfies Token,
  h6: {
    value: "var(--asm-font-size-xl) / var(--asm-line-height-h6) var(--asm-font-family-primary)",
    description: "H6 shorthand (size/line-height/family)."
  } satisfies Token
} as const;
