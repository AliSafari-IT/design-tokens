import type { Token } from "../../core/types";

export const scale = {
  base: { value: 0, description: "Base stacking context." } satisfies Token<number>,
  dropdown: { value: 100, description: "Dropdown menus." } satisfies Token<number>,
  sticky: { value: 200, description: "Sticky headers." } satisfies Token<number>,
  overlay: { value: 300, description: "Overlays/scrims." } satisfies Token<number>,
  modal: { value: 400, description: "Modal dialogs." } satisfies Token<number>,
  popover: { value: 450, description: "Popovers." } satisfies Token<number>,
  tooltip: { value: 500, description: "Tooltips." } satisfies Token<number>,
  toast: { value: 600, description: "Toasts/notifications." } satisfies Token<number>
} as const;
