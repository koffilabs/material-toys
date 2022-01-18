import { rgba } from "emotion-rgba";
import { M3Options } from "./index";
import {
  MdSysTypescaleTitleSmallFont,
  MdSysTypescaleTitleSmallSize,
} from "./tokens";
const duration = ".4s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const NavigationDrawer = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    display: "inline-flex",
    flexDirection: "column",
    // justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    borderRadius: "12px",
    paddingLeft: "12px",
    paddingRight: "12px",
    marginRight: "8px",
    marginLeft: "8px",
    // border: "1px solid #333",
    height: "100%",
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
    transition: `${duration} width ${easing}`,
    willChange: "width",
    h1: {
      fontFamily: tokens.MdSysTypescaleTitleSmallFont,
      color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      fontSize: `${tokens.MdSysTypescaleTitleSmallSize}px`,
      fontWeight: tokens.MdSysTypeScaleTitleSmallWeight,
      lineHeight: `${tokens.MdSysTypescaleTitleSmallLineHeight}px`,
      letterSpacing: tokens.MdSysTypescaleTitleSmallTracking,
      marginLeft: "15px",
      marginBottom: "17px",
    },
    "& .divider": {
      content: "''",
      height: "1px",
      width: "calc(100% - 16px - 28px)",
      marginLeft: "16px",
      marginBottom: "16px",
      backgroundColor: tokens.MdSysColorOutline,
    },
    "&[data-mode=drawer]": {
      width: "360px",
      ".childrenContainer": {
        width: "336px",
      },
    },
    ".divider": {
      transition: `opacity ${duration} ease-in-out`,
    },
    ".secondary": {
      opacity: 1,
      transition: `opacity ${duration} ease-in-out`,
      ".railContent": {
        display: "none",
      },
    },

    "&[data-mode=rail],&[data-collapsed=true]": {
      width: "80px",
      ".divider": {
        opacity: 0,
      },
      ".secondary": {
        opacity: 0,
      },
    },
    "&[data-mode=modal]": {
      boxShadow: `0 2px 1px -1px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 1px 1px 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
    },
  };
};
