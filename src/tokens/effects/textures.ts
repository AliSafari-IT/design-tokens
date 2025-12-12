import type { Token } from "../../core/types";

export const textures = {
  none: { value: "none", description: "No texture." } satisfies Token,
  noise: {
    value:
      "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.06%22/%3E%3C/svg%3E')",
    description: "Subtle noise texture (data URI).",
    meta: { note: "Use as background-image; keep opacity low." }
  } satisfies Token
} as const;
