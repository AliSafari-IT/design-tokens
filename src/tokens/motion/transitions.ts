import type { Token } from "../../core/types";

export const transitions = {
  fade: {
    value: "opacity var(--asm-motion-duration-normal) var(--asm-motion-easing-standard)",
    description: "Fade transition preset."
  } satisfies Token,
  slide: {
    value: "transform var(--asm-motion-duration-normal) var(--asm-motion-easing-standard)",
    description: "Slide transition preset."
  } satisfies Token,
  scale: {
    value: "transform var(--asm-motion-duration-fast) var(--asm-motion-easing-emphasized)",
    description: "Scale transition preset."
  } satisfies Token
} as const;
