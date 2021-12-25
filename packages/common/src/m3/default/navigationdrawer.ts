import { rgba } from "emotion-rgba";
import { M3Options } from "./index";
import {
  MdSysTypescaleTitleSmallFont,
  MdSysTypescaleTitleSmallSize,
} from "./tokens";
const duration = ".1s";

export const NavigationDrawer = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    display: "inline-block",
    overflow: "hidden",
    position: "relative",
    borderRadius: "12px",
    paddingLeft: "16px",
    paddingRight: "16px",
    marginRight: "8px",
    marginLeft: "8px",
    border: "1px solid #333",
    height: "100%",
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
    // badge style
    fontFamily: tokens.MdSysTypescaleLabelLargeFont,
    lineHeight: `${tokens.MdSysTypescaleLabelLargeLineHeight}px`,
    fontSize: `${tokens.MdSysTypescaleLabelLargeSize}px`,
    letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,
    fontWeight: tokens.MdSysTypescaleLabelLargeWeight,
    color: tokens[`MdSysColorOnSurfaceVariant${variant}`],

    // badge style end
    h1: {
      fontFamily: tokens.MdSysTypescaleTitleSmallFont,
      color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      fontSize: `${tokens.MdSysTypescaleTitleSmallSize}px`,
      fontWeight: tokens.MdSysTypeScaleTitleSmallWeight,
      lineHeight: `${tokens.MdSysTypescaleTitleSmallLineHeight}px`,
      letterSpacing: tokens.MdSysTypescaleTitleSmallTracking,
    },
    svg: {
      fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
    },
    // backgroundColor: "red",
    a: {
      fontFamily: tokens.MdSysTypescaleLabelLargeFont,
      textDecoration: "none",
      color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      lineHeight: `${tokens.MdSysTypescaleLabelLargeLineHeight}px`,
      letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,
      fontWeight: tokens.MdSysTypescaleLabelLargeWeight,
      fontSize: `${tokens.MdSysTypescaleLabelLargeSize}px`,
    },
    "& [data-active=true]": {
      backgroundColor: tokens[`MdSysColorSecondaryContainer${variant}`],
      // backgroundColor: "red",
      svg: {
        fill: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
      a: {
        color: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
    },
    // modal
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
