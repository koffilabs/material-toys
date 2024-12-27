import { rgba } from "../../util/rgba";
import { M3Options } from "./index";
import { Tokens } from "./tokens";

const duration = ".4s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const NavigationBar = (tokens: Tokens, options?: M3Options) => {
  const variant = options?.variant ?? "";
  return {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",

    height: "80px",
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "stretch",
    alignItems: "stretch",
    flexWrap: "nowrap",
    columnGap: "2px",
    rowGap: "1px",
    flexBasis: "1",
    flexGrow: "1",
    flexShrink: "1",
    // justifyContent: "space-around",
    flexDirection: "row",
    // overflow: "hidden",
    position: "relative",
    borderRadius: "0",
    padding: "0",
    // border: "1px solid #333",
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
    transition: `${duration} width ${easing}`,
    willChange: "width",
    width: "100%",
    "&.primary": {
      backgroundColor: tokens[`MdSysColorPrimaryContainer${variant}`],
    },
    "&.secondary": {
      backgroundColor: tokens[`MdSysColorSecondaryContainer${variant}`],
    },
    "&.tertiary": {
      backgroundColor: tokens[`MdSysColorTertiaryContainer${variant}`],
    },
    h1: {
      fontFamily: tokens.MdSysTypescaleTitleSmallFont,
      color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      fontSize: `${tokens.MdSysTypescaleTitleSmallSize}px`,
      fontWeight: tokens.MdSysTypeScaleTitleSmallWeight,
      lineHeight: `${tokens.MdSysTypescaleTitleSmallLineHeight}px`,
      letterSpacing: tokens.MdSysTypescaleTitleSmallTracking,
      marginLeft: "15px",
      marginBottom: "17px",
      opacity: 1,
      transition: `${duration} opacity ${easing}`,
    },

    ".secondary": {
      opacity: 1,
      transition: `opacity ${duration} ease-in-out`,
      ".railContent": {
        display: "none",
      },
    },
  };
};
