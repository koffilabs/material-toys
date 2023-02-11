import { M3Options } from "./index";
import {
  MdSysMotionDurationShort4,
  MdSysMotionEasingStandard,
} from "./polyfill";

export const LinearProgressIndicator = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    height: "4px",
    svg: {
      display: "block",
    },
    ".mt-linear-progress-track": {
      strokeWidth: "4px",
      stroke: tokens[`MdSysColorSurfaceContainerHighest${variant}`],
    },
    ".mt-linear-progress-indicator": {
      strokeWidth: "4px",
      transition: `${MdSysMotionDurationShort4}ms stroke-dasharray cubic-bezier(${MdSysMotionEasingStandard})`,
      stroke: tokens[`MdSysColorPrimary${variant}`],
    },
  };
};
