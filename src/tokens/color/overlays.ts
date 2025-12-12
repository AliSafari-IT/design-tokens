import type { Token } from "../../core/types";

export const overlays = {
  scrimStrong: {
    value: "rgba(17, 24, 39, 0.64)",
    description: "Strong scrim for modals/overlays."
  } satisfies Token,
  scrim: {
    value: "rgba(17, 24, 39, 0.48)",
    description: "Default scrim for overlays."
  } satisfies Token,
  scrimSubtle: {
    value: "rgba(17, 24, 39, 0.24)",
    description: "Subtle scrim for light overlays."
  } satisfies Token,
  glassFill: {
    value: "rgba(249, 250, 251, 0.72)",
    description: "Glass/blur fill for frosted surfaces (light).",
    meta: { note: "For dark theme, use theme override." }
  } satisfies Token
} as const;
