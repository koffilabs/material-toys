import { M3Options } from "./index";
import { fontWeights } from "./fontWeights";

const duration = ".4s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";
export const NavigationItemRippleTarget = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    "[data-mode=rail] &,[data-collapsed=true] &": {
      borderRadius: 0,
    },
    overflow: "hidden",
    borderRadius: "32px",
    height: "56px",
    position: "relative",
    transition: `${duration} border-radius ${easing}`,
    ".ripple": {
      // TODO: replace me,
      //    cannot find md.sys.color.on-surface-state-layer
      backgroundColor: tokens[`MdSysColorOnSurface${variant}`],
    },
  };
};
export const NavigationItem = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    "[data-mode=rail] &,[data-collapsed=true] &": {
      "&[data-active=true]:not([data-rail-label=none])": {
        height: "32px",
        marginBottom: "24px",
        ".railContent": {
          opacity: 1,
          transform: "translate(-50%, 0)",
        },
        svg: {
          transform: "translateY(-12px)",
        },
      },
      "&[data-rail-label=show]": {
        height: "32px",
        marginBottom: "24px",
        paddingBottom: "6px",
        ".railContent": {
          opacity: 1,
          transform: "translate(-50%, 0)",
        },
        svg: {
          transform: "translateY(-12px)",
        },
        ".state": {
          borderRadius: 0,
          height: "56px",
        },
      },
      // svg: {
      //   opacity: "1",
      //   // marginRight: "0",
      //   // flex: "none",
      // },
      "h1,.children,.badge": {
        opacity: 0,
        // width: 0,
      },
    },

    position: "relative",
    overflow: "visible",
    height: "56px",
    margin: 0,
    padding: 0,
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
    transition: `box-shadow ${duration} ${easing}, background-color ${duration} ${easing},
  color ${duration} ${easing}, height ${duration} ${easing}, margin ${duration} ${easing}`,
    ".railContent": {
      opacity: 0,
      position: "absolute",
      top: "13px",
      left: "28px",
      zIndex: 100,
      transform: "translate(-50%, 5px)",
      transition: `${duration} opacity ${easing}, ${duration} transform ${easing}`,
      "*": {
        fontSize: "12px",
      },
    },
    ".itemContent": {
      padding: "0 24px 0 16px",
      height: "56px",
      display: "flex",
      width: "336px",
      justifyContent: "center",
      alignItems: "center",
    },
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
      borderRadius: "32px",
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

    // badge style end

    svg: {
      flexGrow: "0",
      fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      marginLeft: "0",
      transition: `${duration} transform ${easing}`,
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
