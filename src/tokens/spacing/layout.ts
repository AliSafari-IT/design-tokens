import type { Token } from "../../core/types";

export const layout = {
  pagePaddingX: {
    value: "clamp(16px, 3vw, 32px)",
    description: "Default horizontal page padding (responsive)."
  } satisfies Token,
  pagePaddingY: {
    value: "clamp(16px, 3vw, 40px)",
    description: "Default vertical page padding (responsive)."
  } satisfies Token,
  sectionGap: {
    value: "clamp(24px, 4vw, 64px)",
    description: "Vertical spacing between major sections."
  } satisfies Token,
  componentGap: {
    value: "16px",
    description: "Default spacing between components within a section."
  } satisfies Token
} as const;
