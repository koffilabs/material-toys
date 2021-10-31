import * as tokens from "./tokens";
import { rgba } from "emotion-rgba";

export const m3: any = {
  colors: {
    primary: "hsl(20, 70%, 75%)",
    text: "hsl(20, 40%, 30%)",
    accent: "hsl(310, 70%, 70%)",
    resizing: "hsl(60, 95%, 97%)",
  },
  components: {
    _resizingComponent: {
      backgroundColor: "@yue:theme[colors.resizing]",
      backgroundImage: "none !important",
      clipPath: "none",
      color: "transparent",
      border: "1px solid hsl(30, 80%, 80%)",
      borderRadius: "15px",
      "& *": {
        display: "none",
      },
    },
    Card: {
      fontSize: "1rem",
      color: "rgba(0, 0, 0, .74)",
      padding: "1.618rem",
      background: "white",
      height: "20vh",
      willChange: "transform opacity",
    },
    Button: {
      fontSize: `${tokens.MdSysTypescaleLabelLargeSize}`,
      border: "none",
      "border-radius": "20px",
      position: "relative",
      "text-transform": "capitalize",
      height: "40px",
      "line-height": tokens.MdSysTypescaleLabelLargeLineHeight,
      "text-align": "center",
      willChange: "transform opacity",
      fontWeight: tokens.MdSysTypescaleLabelLargeWeight,
      fontFamily: tokens.MdSysTypescaleLabelLargeFont,
      letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,
      overflow: "hidden",
      paddingLeft: "24px",
      paddingRight: "24px",
      "&:disabled": {
        cursor: "default",
        "&:hover,&:focus,&:active": {
          "&>.state": {
            opacity: 0,
          },
        },
      },
      "&>.state": {
        top: "0",
        left: "0",
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: "0",
        background: tokens.MdSysColorPrimary,
      },
      "&:hover": {
        cursor: "pointer",
        "&>.state": {
          opacity: ".08", // sysstatehoveropacity?
        },
      },
      "&:focus": {
        "&>.state": {
          opacity: ".12",
        },
      },
      "&:active": {
        "&>.state": {
          opacity: ".12",
        },
      },
      "&.elevated": {
        color: tokens.MdSysColorPrimary,
        background: tokens.MdSysColorSurface,
        boxShadow: `0 1px 2px 1px ${rgba("#000", 0.3)}`, // should be ${tokens.MdSysColorShadow}
        "&>.state": {
          background: tokens.MdSysColorPrimary,
        },
        "&:disabled": {
          color: `${rgba(tokens.MdSysColorPrimary, 0.38)}`,
          background: `${rgba(tokens.MdSysColorSurface, 0.12)}`,
          boxShadow: `0 0 0 0 ${rgba("#000", 0.3)}`,
        },
      },
      "&.filled": {
        color: tokens.MdSysColorOnPrimary,
        background: tokens.MdSysColorPrimary,
        "&>.state": {
          background: tokens.MdSysColorOnPrimary,
        },
        "&:disabled": {
          color: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
          background: `${rgba(tokens.MdSysColorPrimary, 0.12)}`,
        },
      },
    },
  },
};
