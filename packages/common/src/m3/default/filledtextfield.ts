import {rgba} from "../../util/rgba";
import {M3Options} from "./index";
import {roundedShape} from "../../util/shape";

const duration = ".1s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const FilledTextField = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    height: "56px",
    position: "relative",
    borderRadius: roundedShape({shape: tokens.MdSysShapeCornerExtraSmallTop}),
    backgroundColor: tokens[`MdSysColorSurfaceVariant${variant}`],
    display: "grid",
    placeItems: "center",
    padding: "0 12px",
    "input": {
      caretColor: tokens[`MdSysColorPrimary${variant}`],
      backgroundColor: "transparent",
      fontFamily: tokens.MdSysTypescaleLabelLargeFont,
      lineHeight: `${tokens.MdSysTypescaleBodyLargeLineHeight}px`,
      fontSize: tokens.MdSysTypescaleBodyLargeSize,
      fontWeight: tokens.MdSysTypescaleBodyLargeWeight,

      // border: "none",
      border: "1px dashed black",
      // position: "absolute",
      // top: "10px",
      // left: "10px",
      // right: "10px",
      // bottom: "10px",
    },
    ".activeIndicator": {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      height: "1px",
      backgroundColor: tokens[`MdSysColorOnSurfaceVariant${variant}`],
    }
  }
};
