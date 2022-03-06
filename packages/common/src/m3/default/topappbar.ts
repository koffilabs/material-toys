import { rgba } from "../../util/rgba";
import { M3Options } from "./index";

const duration = ".4s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const TopAppBar = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    width: "100%",
    display: "flex",
    alignContent: "stretch",
    alignItems: "stretch",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    flexDirection: "row",
    overflow: "visible",

    backgroundColor: tokens[`MdSysColorSurface${variant}`],
    svg: {
      fill: tokens[`MdSysColorOnSurface${variant}`],
    },
    "[data-scrolling] &": {
      // level 2
      boxShadow: `0 3px 1px -2px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 2px 2px 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 
        0 1px 5px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
    },
    "&[data-type=center-aligned]": {
      height: "64px",
      ".mt-headline": {
        flex: 1,
        letterSpacing: tokens.MdSysTypescaleTitleLargeTracking,
        textAlign: "center",
        lineHeight: "64px",
        fontFamily: tokens.MdSysTypescaleTitleLargeFont,
        fontSize: tokens.MdSysTypescaleTitleLargeSize,
        color: tokens[`MdSysColorOnSurface${variant}`],
      },
      ".mt-leading-navigation-icon": {
        marginTop: "20px",
        width: "48px",
        paddingLeft: "16px",
        paddingRight: "24px",
      },
      ".mt-trailing-icons": {
        display: "flex",
        marginTop: "20px",
        width: "48px",
        paddingRight: "16px",
        marginLeft: "auto",
      },
    },
    "&[data-type=small]": {
      height: "64px",
      ".mt-headline": {
        letterSpacing: tokens.MdSysTypescaleTitleLargeTracking,
        flex: 1,
        textAlign: "left",
        lineHeight: "64px",
        fontFamily: tokens.MdSysTypescaleTitleLargeFont,
        fontSize: tokens.MdSysTypescaleTitleLargeSize,
        color: tokens[`MdSysColorOnSurface${variant}`],
      },
      ".mt-leading-navigation-icon": {
        marginTop: "20px",
        width: "48px",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
      ".mt-trailing-icons": {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginLeft: "auto",
        paddingRight: "16px",

        div: {
          width: "48px",
          textAlign: "center",
          svg: {
            margin: "auto",
          },
        },
      },
    },
    "&[data-type=medium]": {
      height: "112px",
      ".mt-headline": {
        letterSpacing: tokens.MdSysTypescaleTitleLargeTracking,
        flex: 1,
        textAlign: "left",
        // lineHeight: "64px",
        alignSelf: "flex-end",
        padding: 0,
        marginBottom: "20px",
        fontFamily: tokens.MdSysTypescaleTitleLargeFont,
        fontSize: tokens.MdSysTypescaleTitleLargeSize,
        color: tokens[`MdSysColorOnSurface${variant}`],
      },
      ".mt-leading-navigation-icon": {
        marginTop: "20px",
        width: "48px",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
      ".mt-trailing-icons": {
        display: "flex",
        alignContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginLeft: "auto",
        paddingRight: "16px",
        marginTop: "20px",

        div: {
          width: "48px",
          textAlign: "center",
          svg: {
            margin: "auto",
          },
        },
      },
    },
    "&[data-type=large]": {
      height: "152px",
      ".mt-headline": {
        letterSpacing: tokens.MdSysTypescaleTitleLargeTracking,
        flex: 1,
        textAlign: "left",
        // lineHeight: "64px",
        alignSelf: "flex-end",
        padding: 0,
        marginBottom: "20px",
        fontFamily: tokens.MdSysTypescaleTitleLargeFont,
        fontSize: tokens.MdSysTypescaleTitleLargeSize,
        color: tokens[`MdSysColorOnSurface${variant}`],
      },
      ".mt-leading-navigation-icon": {
        marginTop: "20px",
        width: "48px",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
      ".mt-trailing-icons": {
        display: "flex",
        alignContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginLeft: "auto",
        paddingRight: "16px",
        marginTop: "20px",

        div: {
          width: "48px",
          textAlign: "center",
          svg: {
            margin: "auto",
          },
        },
      },
    },
  };
};
