import { M3Options } from "./index";
import { tokens_polyfill } from "./polyfill";
import { Tokens } from "./tokens";
const { MdSysMotionDurationShort4, MdSysMotionEasingStandard } =
  tokens_polyfill;
export const CircularProgressIndicator = (
  tokens: Tokens,
  options?: M3Options,
) => {
  const variant = options?.variant ?? "";
  return {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
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
