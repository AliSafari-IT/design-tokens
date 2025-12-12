import type { Token } from "../../core/types";

export const sizes = {
  xs: { value: "12px", description: "Icon size XS." } satisfies Token,
  sm: { value: "16px", description: "Icon size SM." } satisfies Token,
  md: { value: "20px", description: "Icon size MD." } satisfies Token,
  lg: { value: "24px", description: "Icon size LG." } satisfies Token,
  xl: { value: "28px", description: "Icon size XL." } satisfies Token
} as const;
