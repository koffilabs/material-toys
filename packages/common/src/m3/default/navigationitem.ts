import { M3Options } from "./index";
import { fontWeights } from "./fontWeights";

const duration = ".3s";

export const NavigationItem = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    "[data-mode=rail] &,[data-collapsed=true] &": {
      svg: {
        opacity: "1",
        // marginRight: "0",
        flex: "none",
      },
      "&[data-active=true]": {
        // svg: {
        //   transform: "translateY(-10px)",
        // },
      },
      ".children,.badge": {
        opacity: 0,
        // width: 0,
      },
    },

    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "56px",
    padding: "0 24px 0 16px",
    margin: 0,
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
    userSelect: "none",
    "&[data-active=true]": {
      backgroundColor: tokens[`MdSysColorSecondaryContainer${variant}`],
      // backgroundColor: "red",
      svg: {
        fill: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
      a: {
        color: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
    },

    "&>.state": {
      zIndex: "0",
      top: "0",
      left: "0",
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: "0",
      backgroundColor: tokens[`MdSysColorOnSurface${variant}`],
      transition: `opacity ${duration} ease-in-out`,
    },
    "&:hover": {
      cursor: "pointer",
      color: tokens[`MdSysColorOnSurface${variant}`],
      fill: tokens[`MdSysColorOnSurface${variant}`],
      a: {
        color: tokens[`MdSysColorOnSurface${variant}`],
      },
      "&>.state": {
        opacity: ".16",
      },
    },
    "&:focus": {
      cursor: "pointer",
      color: tokens[`MdSysColorOnSurface${variant}`],
      fill: tokens[`MdSysColorOnSurface${variant}`],
      a: {
        color: tokens[`MdSysColorOnSurface${variant}`],
      },
      "&>.state": {
        opacity: ".24",
      },
    },
    "&:active": {
      cursor: "pointer",
      color: tokens[`MdSysColorOnSurface${variant}`],
      fill: tokens[`MdSysColorOnSurface${variant}`],
      a: {
        color: tokens[`MdSysColorOnSurface${variant}`],
      },
      "&>.state": {
        opacity: ".20",
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
      flexGrow: "0",
      fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      marginLeft: "8px",
      transition: `${duration} transform ease-in-out, ${duration} margin ease-in-out`,
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
    ".badge": {
      marginLeft: "auto",
      transition: `${duration} opacity ease-in-out`,
    },
    ".children": {
      marginLeft: "12px",
      transition: `${duration} opacity ease-in-out`,
    },
  };
};
