import { M3Options } from "./index";
import { tokens_polyfill } from "./polyfill";
import { Tokens } from "./tokens";
const { MdSysMotionDurationShort4, MdSysMotionEasingStandard } =
  tokens_polyfill;
export const LinearProgressIndicator = (
  tokens: Tokens,
  options?: M3Options,
) => {
  const variant = options?.variant ?? "";
  return {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
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
