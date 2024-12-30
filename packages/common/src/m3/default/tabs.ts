import { M3Options } from "./index";
import { roundedShape } from "../../util/shape";
import { rgba } from "../../util/rgba";
import { Tokens } from "./tokens";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";
const duration = ".2s";
export const Tabs = (tokens: Tokens, options?: M3Options) => {
  const variant = options?.variant ?? "";
  return {
    color: tokens[`MdSysColorOnSurface${variant}`],
    ".mt-tabs-header": {
      position: "relative",
      backgroundColor: tokens[`MdSysColorSurface${variant}`],
      borderBottom: `1px solid ${tokens[`MdSysColorSurfaceVariant${variant}`]}`,
      borderRadius: tokens.MdSysShapeCornerNone,
      // text only
      // height: "48px",
      // icons and text
      // height: "64px",
      display: "flex",
      width: "100%",
      ".mt-tabs-stripe": {
        position: "absolute",
        height: "3px",
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: "0",
        ".mt-tab-active-indicator": {
          position: "absolute",
          borderRadius: roundedShape({ shape: "3 3 0 0" }),
          // transition: `${tokens.MdSysMotionDurationShort4}ms transform ${easing}, ${tokens.MdSysMotionDurationShort4}ms width ${easing}`,
          left: "0",
          willChange: "width, transform, translate",
          width: "10px",
          background: "red",
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
          height: "3px",
        },
      },

      ".mt-tab": {
        flex: 1,
        fontFamily: tokens.MdSysTypescaleTitleSmallFont,
        fontSize: tokens.MdSysTypescaleTitleSmallSize,
        fontWeight: tokens.MdSysTypescaleTitleSmallWeight,
        color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        transition: `${duration} fill ${easing}`,
        ".mt-tab-content": {
          transition: `${duration} color ${easing}`,
        },
        "&:hover": {
          backgroundColor: rgba(
            tokens[`MdSysColorOnSurface${variant}`],
            tokens.MdSysStateHoverStateLayerOpacity,
          ),
        },
        "&.mt-active-tab": {
          fill: tokens[`MdSysColorPrimary${variant}`],
          ".mt-tab-content": {
            color: tokens[`MdSysColorPrimary${variant}`],
          },
          "&:hover": {
            backgroundColor: rgba(
              tokens[`MdSysColorPrimary${variant}`],
              tokens.MdSysStateHoverStateLayerOpacity,
            ),
          },
        },
      },
    },
    "&.secondary .mt-tabs-header .mt-tabs-stripe": {
      height: "2px",
      ".mt-tab-active-indicator": {
        height: "2px",
        borderRadius: "0",
      },
    },
    ".mt-fixed-tabs-container": {
      overflow: "hidden",
      ".mt-fixed-tabs-sliding-section": {
        overflow: "visible",
        whiteSpace: "nowrap",
        ".mt-fixed-tab-content": {
          display: "inline-block",
          width: "100%",
        },
      },
    },
  };
};
