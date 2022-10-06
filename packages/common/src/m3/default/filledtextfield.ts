import {rgba} from "../../util/rgba";
import {M3Options} from "./index";
import {roundedShape} from "../../util/shape";

const duration = ".1s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const FilledTextField = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    flex: "none",
    position: "relative",
    overflow: "visible",
    ".supportingTextContainer": {
      // position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      // transform: "translateY(100%)",
      margin: 0,
      padding: "4px 16px 0 16px",
      display: "flex",
      flexDirection: "row",
      height: `${tokens.MdSysTypescaleBodySmallLineHeight + 4}px`,
      ".supportingText, .characterCounter": {
        height: `${tokens.MdSysTypescaleBodySmallLineHeight}px`,
        flex: "none",
        padding: 0,
        // color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        fontFamily: tokens.MdSysTypescaleBodySmallFont,
        lineHeight: `${tokens.MdSysTypescaleBodySmallLineHeight}px`,
        fontSize: `${tokens.MdSysTypescaleBodySmallSize}px`,
        fontWeight: tokens.MdSysTypescaleBodySmallWeight,
        letterSpacing: `${tokens.MdSysTypescaleBodySmallTracking}px`,
      },
      ".characterCounter": {
        marginLeft: "auto"
      }
    },
    "&.leadingIcon": {
      ".supportingTextContainer": {
        paddingLeft: "12px",
      },
      ".mt-shape": {
        "input": {
          paddingLeft: "52px"
        },
        ".container": {
          ".label": {
            left: "52px"
          },
          ".leadingIcon-container": {
            position: "absolute",
            left: "12px",
            top: `${(56 - 24) / 2}px`,
            fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
          }
        }
      }
    },
    "&.trailingIcon": {
      ".supportingTextContainer": {
        paddingRight: "12px",
      },
      ".mt-shape": {
        "input": {
          paddingRight: "52px"
        },
        ".trailingIcon-container": {
          position: "absolute",
          right: "12px",
          top: `${(56 - 24) / 2}px`,
          fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
          zIndex: 20
        }
      }
    },
    ".mt-shape": {
      height: "56px",
      position: "relative",
      borderRadius: roundedShape({shape: tokens.MdSysShapeCornerExtraSmallTop}),
      backgroundColor: tokens[`MdSysColorSurfaceVariant${variant}`],
      padding: "0",
      "input": {
        position: "relative",
        "z-index": "10",
        padding: "8px 16px", // 16px without icons
        height: "56px",
        caretColor: tokens[`MdSysColorPrimary${variant}`],
        color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        backgroundColor: "transparent",
        fontFamily: tokens.MdSysTypescaleLabelLargeFont,
        lineHeight: `${tokens.MdSysTypescaleBodyLargeLineHeight}px`,
        fontSize: tokens.MdSysTypescaleBodyLargeSize,
        fontWeight: tokens.MdSysTypescaleBodyLargeWeight,
        paddingTop: `${(8 + tokens.MdSysTypescaleBodySmallLineHeight)}px`,

        border: "none",
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
        },
        "&:focus + .container": {
          ".activeIndicator": {
            backgroundColor: tokens[`MdSysColorPrimary${variant}`],
            height: "2px"
          }
        }
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
          left: "16px", // without leading icon
          color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
          fontFamily: tokens.MdSysTypescaleBodyLargeFont,
          lineHeight: `${tokens.MdSysTypescaleBodyLargeLineHeight}px`,
          fontSize: tokens.MdSysTypescaleBodyLargeSize,
          fontWeight: tokens.MdSysTypescaleBodyLargeWeight,
          letterSpacing: `${tokens.MdSysTypescaleBodyLargeTracking}px`,
          "&::selection": {
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
          transition: `${duration} background-color ease-in-out, ${duration} border-width ease-in-out`,
          backgroundColor: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        },
      }
    }
  }
};
