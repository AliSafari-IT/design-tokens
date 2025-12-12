export { light } from "./light";
export { dark } from "./dark";
export { highContrast } from "./highContrast";
export { densityCompact } from "./densityCompact";
export { densityComfortable } from "./densityComfortable";

import { light } from "./light";
import { dark } from "./dark";
import { highContrast } from "./highContrast";
import { densityCompact } from "./densityCompact";
import { densityComfortable } from "./densityComfortable";

export const themes = {
  light,
  dark,
  highContrast,
  density: {
    compact: densityCompact,
    comfortable: densityComfortable
  }
} as const;
