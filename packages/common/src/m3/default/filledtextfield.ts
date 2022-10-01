import {rgba} from "../../util/rgba";
import {M3Options} from "./index";
import {roundedShape} from "../../util/shape";

const duration = ".1s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const FilledTextField = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    ".mt-shape": {
      height: "56px",
      position: "relative",
      borderRadius: roundedShape({shape: tokens.MdSysShapeCornerExtraSmallTop}),
      backgroundColor: tokens[`MdSysColorSurfaceVariant${variant}`],
      display: "grid",
      placeItems: "center",
      padding: "0",
      "input": {
        position: "relative",
        "z-index": "10",
        padding: "8px 16px", // 16px without icons
        height: "56px",
        caretColor: tokens[`MdSysColorPrimary${variant}`],
        color: tokens[`MdSysColorOnSurface${variant}`],
        backgroundColor: "transparent",
        fontFamily: tokens.MdSysTypescaleLabelLargeFont,
        lineHeight: `${tokens.MdSysTypescaleBodyLargeLineHeight}px`,
        fontSize: tokens.MdSysTypescaleBodyLargeSize,
        fontWeight: tokens.MdSysTypescaleBodyLargeWeight,
        paddingTop: `${(8 + tokens.MdSysTypescaleBodySmallLineHeight)}px`,

        border: "none",
        // border: "1px dashed black",
        // position: "absolute",
        // top: "10px",
        // left: "10px",
        // right: "10px",
        // bottom: "10px",
        "&:focus": {
          outline: "none"
        },
        "&:focus + .container, & + .container.filled": {
          ".label": {
            position: "absolute",
            top: `8px`,
            color: tokens[`MdSysColorPrimary${variant}`],
            lineHeight: `${tokens.MdSysTypescaleBodySmallLineHeight}px`,
            fontSize: tokens.MdSysTypescaleBodySmallSize,
          },
          ".activeIndicator": {
            height: "2px"
          }
        },
      },
      ".container": {
        "z-index": "0",
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0",
        ".label": {
          pointerEvents: "none",
          transition: `${duration} line-height ease-in-out, 
          ${duration} font-size ease-in-out, ${duration} top ease-in-out,
          ${duration} color ease-in-out`,
          willChange: "font-size, top, line-height, color",
          position: "absolute",
          top: `${(56 - tokens.MdSysTypescaleBodyLargeLineHeight) / 2}px`,
          left: "16px", // without icon
          color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
          fontFamily: tokens.MdSysTypescaleBodyLargeFont,
          lineHeight: `${tokens.MdSysTypescaleBodyLargeLineHeight}px`,
          fontSize: tokens.MdSysTypescaleBodyLargeSize,
          fontWeight: tokens.MdSysTypescaleBodyLargeWeight,
          letterSpacing: tokens.MdSysTypescaleBodyLargeTracking,
          "&::selection":{
            backgroundColor: "transparent"
          }
        },
        "&.empty": {
          ".label": {},
        },
        ".activeIndicator": {
          // transition: `${duration} height ease-in-out`,
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "1px",
          backgroundColor: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        },
      }
    }
  }
};
