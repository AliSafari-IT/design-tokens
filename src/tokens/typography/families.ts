import type { Token } from "../../core/types";

export const families = {
  primary: {
    value:
      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
    description: "Primary UI font family stack (Inter first)."
  } satisfies Token,
  mono: {
    value:
      "\"JetBrains Mono\", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    description: "Monospace font family stack (JetBrains Mono first)."
  } satisfies Token
} as const;
