import { M3Options } from "./index";
import {
  MdSysMotionDurationShort4,
  MdSysMotionEasingStandard,
} from "./polyfill";
export const CircularProgressIndicator = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    height: "48px",
    width: "48px",
    fill: "transparent",
    strokeWidth: "4px",
    svg: {
      display: "block",
    },
    ".mt-circular-progress-track": {
      stroke: tokens[`MdSysColorSurfaceContainerHighest${variant}`],
    },
    ".mt-circular-progress-indicator": {
      transform: "rotate(-90deg)",
      transformOrigin: "center",
      transition: `${MdSysMotionDurationShort4}ms stroke-dasharray cubic-bezier(${MdSysMotionEasingStandard})`,
      stroke: tokens[`MdSysColorPrimary${variant}`],
      "&.indeterminate": {},
    },
  };
};
