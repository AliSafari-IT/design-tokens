import type { DensityDefinition } from "../core/types";

export const densityCompact: DensityDefinition = {
  name: "compact",
  tokens: {
    "--asm-density-factor": 0.9,
    "--asm-space-component-gap": "12px",
    "--asm-space-control-padding-y": "6px",
    "--asm-space-control-padding-x": "10px"
  }
};
