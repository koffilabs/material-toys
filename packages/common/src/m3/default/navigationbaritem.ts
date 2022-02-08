import { M3Options } from "./index";
import { fontWeights } from "./fontWeights";

const duration = ".2s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const NavigationBarItem = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    position: "relative",
    paddingTop: "16px",
    paddingBottom: "16px",
    flex: "1 1 0",
    margin: 0,
    // margin: "0 0",
    // borderRadius: "32px",
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
    // badge style
    fontFamily: tokens.MdSysTypescaleLabelLargeFont,
    // lineHeight: `${tokens.MdSysTypescaleLabelLargeLineHeight}px`,
    fontSize: `${tokens.MdSysTypescaleLabelLargeSize}px`,
    letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,
    fontWeight: fontWeights[tokens.MdSysTypescaleLabelLargeWeight],
    color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
    transition: `box-shadow ${duration} ${easing}, background-color ${duration} ${easing},
  color ${duration} ${easing}, height ${duration} ${easing}, margin ${duration} ${easing}`,
    ".mt-iconContainer": {
      overflow: "hidden",
      // border: "1px solid red",
      marginBottom: "4px",
      height: "24px",
      padding: "0",
      width: "24px",
      textAlign: "center",
      position: "relative",
      ".mt-icon, .mt-activeIcon": {
        position: "absolute",
      },
      ".mt-activeIcon": {
        // opacity: "0",
      },
    },
    ".mt-activeIndicator": {
      top: "-3px",
      position: "absolute",
      height: "32px",
      paddingTop: "4px",
      width: "64px",
      borderRadius: "16px",
      transform: "scale(0, 1)",
      transformOrigin: "center center",
      opacity: "0",
      transition: `${duration} transform ${easing}, ${duration} opacity ${easing}`,
    },
    ".mt-itemContent": {
      position: "relative",
      transition: `${duration} transform ${easing}`,
      "&.mt-no-icon, &.mt-selected": {
        transform: "translateY(12px)",
        ".mt-children": {
          opacity: "0",
        },
      },
      zIndex: 1,
      // padding: "0 24px 0 16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    userSelect: "none",
    "&[data-active=true]": {
      // ".mt-icon": {
      //   display: "none",
      // },
      // ".mt-activeIcon": {
      //   display: "block",
      // },
      ".mt-selected": {
        transform: "translateY(0)",
        ".mt-children": {
          opacity: 1,
        },
      },

      ".mt-activeIndicator": {
        transform: "scale(1, 1)",
        opacity: "1",
        backgroundColor: tokens[`MdSysColorSecondaryContainer${variant}`],
      },
      svg: {
        fill: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
      a: {
        color: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
    },

    "&>.mt-state": {
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
      "&>.mt-state": {
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
      // TODO
      display: "none",
    },
    ".mt-children": {
      transition: `${duration} opacity ${easing}`,
      // marginLeft: "12px",
      // transition: `${duration} opacity ease-in-out`,
    },
  };
};
