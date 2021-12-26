import { M3Options } from "./index";
import { fontWeights } from "./fontWeights";

const duration = ".2s";

export const NavigationItem = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    position: "relative",
    overflow: "hidden",
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
    fontWeight: fontWeights[tokens.MdSysTypescaleLabelLargeWeight],
    color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
    transition: `box-shadow ${duration} ease-in-out, background-color ${duration} ease-in-out, 
  color ${duration} ease-in-out`,

    "&>.state": {
      zIndex: "0",
      top: "0",
      left: "0",
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: "0",
      backgroundColor: tokens[`MdSysColorPrimary${variant}`],
      transition: `opacity ${duration} ease-in-out`,
    },
    "&:hover": {
      cursor: "pointer",
      "&>.state": {
        opacity: ".08", // sysstatehoveropacity?
      },
    },
    ".ripple": {
      // TODO: replace me,
      //    cannot find md.sys.color.on-surface-state-layer
      backgroundColor: tokens[`MdSysColorOnSurface${variant}`],
    },

    // badge style end
    h1: {
      fontFamily: tokens.MdSysTypescaleTitleSmallFont,
      color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      fontSize: `${tokens.MdSysTypescaleTitleSmallSize}px`,
      fontWeight: fontWeights[tokens.MdSysTypeScaleTitleSmallWeight],
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
      fontWeight: fontWeights[tokens.MdSysTypescaleLabelLargeWeight],
      fontSize: `${tokens.MdSysTypescaleLabelLargeSize}px`,
    },
  };
};
