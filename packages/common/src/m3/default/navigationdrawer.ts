import { rgba } from "../../util/rgba";
import { M3Options } from "./index";

const duration = ".2s";
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
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    borderTopRightRadius: "0",
    borderBottomTopRightRadius: "0",
    padding: "0",
    marginRight: "0",
    marginLeft: "0",
    // border: "1px solid #333",
    height: "100%",
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
    transition: `${duration} width ${easing}, transform ${duration} ease-in-out, border-radius ${duration} ease-in-out`,
    willChange: "width",
    header: {},
    "&.primary": {
      color: tokens[`MdSysColorPrimary${variant}`],
      backgroundColor: tokens[`MdSysColorPrimaryContainer${variant}`],
    },
    "&.secondary": {
      color: tokens[`MdSysColorSecondary${variant}`],
      backgroundColor: tokens[`MdSysColorSecondaryContainer${variant}`],
    },
    "&.tertiary": {
      color: tokens[`MdSysColorTertiary${variant}`],
      backgroundColor: tokens[`MdSysColorTertiaryContainer${variant}`],
    },
    ".scroller": {
      padding: "0 12px",
      zIndex: 1, // iOS fix, otherwise the scrollbar will be clipped!
      overflowX: "hidden",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: "5px",
        height: "8px",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "transparent",
      },

      scrollbarColor: "transparent transparent",
      scrollbarWidth: "thin",
      "&:hover": {
        "&::-webkit-scrollbar": {
          backgroundColor:
            tokens[`MdSysColorSurface${variant}`] /* or add it to the track */,
        },
        "&::-webkit-scrollbar-thumb": {
          background: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        },

        scrollbarColor:
          tokens[`MdSysColorOnSurfaceVariant${variant}`] +
          " " +
          tokens[`MdSysColorSurface${variant}`],
      },
    },
    h1: {
      display: "flex",
      alignItems: "center",
      fontFamily: tokens.MdSysTypescaleTitleSmallFont,
      color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
      fontSize: `${tokens.MdSysTypescaleTitleSmallSize}px`,
      fontWeight: tokens.MdSysTypeScaleTitleSmallWeight,
      lineHeight: `${tokens.MdSysTypescaleTitleSmallLineHeight}px`,
      letterSpacing: tokens.MdSysTypescaleTitleSmallTracking,
      height: `56px`,
      margin: "0",
      marginLeft: "15px",
      // marginBottom: "17px",
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
      ".scroller": {
        overflowY: "hidden",
      },
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
      borderTopRightRadius: "12px",
      borderBottomTopRightRadius: "12px",
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
