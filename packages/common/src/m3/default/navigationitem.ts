import { M3Options } from "./index";

export const NavigationItem = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "56px",
    padding: "0 24px 0 12px",
    // margin: "0 0",
    borderRadius: "32px",
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
    // badge style
    fontFamily: tokens.MdSysTypescaleLabelLargeFont,
    // lineHeight: `${tokens.MdSysTypescaleLabelLargeLineHeight}px`,
    lineHeight: "56px",
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
      marginRight: "12px",
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
  };
};
