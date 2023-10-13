import { M3Options } from "./index";
import { elevation } from "../elevation";
import { roundedShape } from "../../util/shape";
import { fontWeights } from "./fontWeights";
import { rgba } from "../../util/rgba";
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
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: "0",
      color: tokens[`MdSysColorOnSurface${variant}`],
      fontSize: `${tokens.MdSysTypescaleLabelLargeSize}px`,
      fontFamily: tokens.MdSysTypescaleLabelLargeFont,
      letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,
      fontWeight: fontWeights[tokens.MdSysTypescaleLabelLargeWeight],
      lineHeight: `${tokens.MdSysTypescaleLabelLargeLineHeight}px`,
      padding: "0 8px",

      height: "48px",
      placeItems: "center start",
      ".mt-leading-icon": {
        paddingRight: "12px",
        display: "grid",
        placeItems: "center",
        fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      },
      ".mt-trailing-icon": {
        paddingLeft: "12px",
        display: "grid",
        placeItems: "center",
        fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      },
      "&[data-selected]": {
        backgroundColor: tokens[`MdSysColorSecondaryContainer${variant}`],
        color: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
      "&:hover:not([data-disabled])": {
        backgroundColor: rgba(tokens[`MdSysColorOnSurface${variant}`], 0.08),
        color: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
      "&[data-disabled]": {
        color: rgba(tokens[`MdSysColorOnSecondaryContainer${variant}`], 0.38),
        ".mt-leading-icon, .mt-trailing-icon": {
          fill: "currentColor",
        },
      },
    },
  };
};
