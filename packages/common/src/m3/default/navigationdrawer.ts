import { rgba } from "../../util/rgba";
import { M3Options } from "./index";

const duration = ".4s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const NavigationDrawer = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    ".listContainer": {
      height: "100%",
      width: "336px",
      flex: 1,
      overflow: "visible",
      transition: `width ${duration} ease-in-out`,
    },
    ".buttonsContainer": {
      position: "absolute",
      padding: "48px 0 0 0", // no specifications
      left: "0",
      right: "0",
      top: "0",
      display: "flex",
      gap: "16px",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      ".menuContainer": {
        border: "3px dashed black",
        position: "relative",
        overflowY: "scroll",
        cursor: "pointer",
        ".ripple": {
          backgroundColor: tokens[`MdSysColorOnPrimaryContainer${variant}`],
        },
        "&:hover": {
          //   cursor: "pointer",
          //   "&>.state": {
          //     opacity: ".12",
          //   },
          // },
          ".state": {
            top: "0",
            left: "0",
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: ".12",
            background: "transparent",
            transition: `opacity ${duration} ease-in-out`,

            // backgroundColor: tokens[`MdSysColorOnPrimaryContainer${variant}`],
          },
        },
        "&>button": {
          margin: 0,
        },
      },
    },
    "&[data-justify=start]": {
      justifyContent: "flex-start",
    },
    "&[data-justify=center]": {
      justifyContent: "center",
    },
    "&[data-justify=end]": {
      justifyContent: "flex-end",
    },
    display: "inline-flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    borderRadius: "12px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "12px",
    paddingRight: "12px",
    marginRight: "8px",
    marginLeft: "0",
    // border: "1px solid #333",
    height: "100%",
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
    transition: `${duration} width ${easing}, transform ${duration} ease-in-out`,
    willChange: "width",
    "&:hover": {
      overflowY: "scroll",
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

    "&[data-mode=rail]": {
      width: "80px",
      overflow: "hidden",

      ".listContainer": {
        width: "56px",
      },

      "h1,.divider,.secondary": {
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
      "&[data-collapsed=true]": {
        transform: "translateX(-100%)",
      },
    },
  };
};
