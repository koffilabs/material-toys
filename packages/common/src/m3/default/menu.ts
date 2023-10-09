import { M3Options } from "./index";
import { elevation } from "../elevation";
import { roundedShape } from "../../util/shape";
import { fontWeights } from "./fontWeights";
const duration = ".1s";

export const Menu = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    minWidth: "126px",
    padding: "4px 0",
    backgroundColor: tokens[`MdSysColorSurfaceContainer${variant}`],
    borderRadius: roundedShape({ shape: tokens.MdSysShapeCornerExtraSmallTop }),

    ...elevation.level2,
    ".mt-divider": {
      margin: "8px 0",
    },
    ".mt-menu-item": {
      color: tokens[`MdSysColorOnSurface${variant}`],
      fontSize: `${tokens.MdSysTypescaleLabelLargeSize}px`,
      fontFamily: tokens.MdSysTypescaleLabelLargeFont,
      letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,
      fontWeight: fontWeights[tokens.MdSysTypescaleLabelLargeWeight],
      lineHeight: `${tokens.MdSysTypescaleLabelLargeLineHeight}px`,
      padding: "0 8px",

      height: "48px",
      display: "grid",
      placeItems: "center start",
      "&[data-selected]": {
        backgroundColor: tokens[`MdSysColorSecondaryContainer${variant}`],
      },
    },
  };
};
