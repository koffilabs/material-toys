import { rgba } from "emotion-rgba";
import {M3Options} from "./index";
const duration = ".1s";
export const Button = (tokens, options?: M3Options) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  "border-radius": "20px",
  position: "relative",
  "text-transform": "capitalize",
  height: "40px",
  "line-height": tokens.MdSysTypescaleLabelLargeLineHeight, // commented to align the icons
  "text-align": "center",
  willChange: "transform opacity",
  fontSize: tokens.MdSysTypescaleLabelLargeSize,
  fontWeight: tokens.MdSysTypescaleLabelLargeWeight,
  fontFamily: tokens.MdSysTypescaleLabelLargeFont,
  letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,
  overflow: "hidden",
  paddingLeft: "24px",
  paddingRight: "24px",
  transition: `box-shadow ${duration} ease-in-out, background-color ${duration} ease-in-out, 
  color ${duration} ease-in-out`,
  "&>.state": {
    top: "0",
    left: "0",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: "0",
    background: tokens.MdSysColorPrimary,
    transition: `opacity ${duration} ease-in-out`,
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
  "&:disabled": {
    cursor: "default",
    "&:hover,&:focus,&:active": {
      "&>.state": {
        opacity: 0,
      },
    },
  },
  "&.elevated": {
    color: tokens.MdSysColorPrimary,
    fill: tokens.MdSysColorPrimary,
    background: tokens.MdSysColorSurface,
    // boxShadow: `0 1px 2px 1px ${rgba(tokens.MdSysColorShadow, 0.3)}`,
    // level1
    boxShadow: `0 2px 1px -1px ${rgba(
      tokens.MdSysColorShadow,
      0.2
    )}, 0 1px 1px 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 0 1px 3px 0 ${rgba(
      tokens.MdSysColorShadow,
      0.12
    )}`,
    "&:hover": {
      boxShadow: `0 3px 1px -2px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 2px 2px 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 1px 5px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
    },
    "&:active, &:focus": {
      boxShadow: `0 2px 1px -1px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 1px 1px 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
    },
    "&>.state": {
      background: tokens.MdSysColorPrimary,
    },
    "&:disabled": {
      color: `${rgba(tokens.MdSysColorPrimary, 0.38)}`,
      fill: `${rgba(tokens.MdSysColorPrimary, 0.38)}`,
      background: `${rgba(tokens.MdSysColorSurface, 0.12)}`,
      boxShadow: `0 0 0 0 ${rgba("#000", 0.3)},0 0 0 0 ${rgba(
        "#000",
        0.3
      )},0 0 0 0 ${rgba("#000", 0.3)}`,
    },
  },
  "&.filled": {
    color: tokens.MdSysColorOnPrimary,
    fill: tokens.MdSysColorOnPrimary,
    background: tokens.MdSysColorPrimary,
    "&>.state": {
      background: tokens.MdSysColorOnPrimary,
    },
    "&:disabled": {
      color: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
      fill: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
      background: `${rgba(tokens.MdSysColorPrimary, 0.12)}`,
    },
    "&:hover:not(:disabled)": {
      boxShadow: `0 2px 1px -1px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 1px 1px 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
    },
    "&:active:not(:disabled), &:focus:not(:disabled)": {
      boxShadow: `0 0 0 0 ${rgba("#000", 0.3)},0 0 0 0 ${rgba(
        "#000",
        0.3
      )},0 0 0 0 ${rgba("#000", 0.3)}`,
    },
  },
  "&.filled-tonal": {
    color: tokens.MdSysColorOnSecondaryContainer,
    fill: tokens.MdSysColorOnSecondaryContainer,
    background: tokens.MdSysColorSecondaryContainer,
    "&>.state": {
      background: tokens.MdSysColorOnSecondaryContainer,
    },
    "&:hover:not(:disabled)": {
      boxShadow: `0 2px 1px -1px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 1px 1px 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
    },
    "&:active:not(:disabled), &:focus:not(:disabled)": {
      boxShadow: `0 0 0 0 ${rgba("#000", 0.3)},0 0 0 0 ${rgba(
        "#000",
        0.3
      )},0 0 0 0 ${rgba("#000", 0.3)}`,
    },

    "&:disabled": {
      color: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
      fill: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
      background: `${rgba(tokens.MdSysColorOnSurface, 0.12)}`,
    },
  },
  "&.outlined": {
    color: tokens.MdSysColorPrimary,
    fill: tokens.MdSysColorPrimary,
    background: "transparent", // tokens.MdSysColorSurface,
    border: `1px solid ${tokens.MdSysColorOutline}`,
    "&>.state": {
      background: tokens.MdSysColorOnSecondaryContainer,
    },
    "&:hover:not(:disabled)": {
      borderColor: tokens.MdSysColorOutline,
      color: tokens.MdSysColorPrimary,
      "&>.state": {
        background: tokens.MdSysColorPrimary,
      },
    },
    "&:focus:not(:disabled)": {
      borderColor: tokens.MdSysColorPrimary,
      color: tokens.MdSysColorPrimary,
      fill: tokens.MdSysColorPrimary,
      "&>.state": {
        background: tokens.MdSysColorPrimary,
      },
    },
    "&:active:not(:disabled)": {
      borderColor: tokens.MdSysColorOutline,
      color: tokens.MdSysColorPrimary,
      fill: tokens.MdSysColorPrimary,
      "&>.state": {
        background: tokens.MdSysColorPrimary,
      },
    },

    "&:disabled": {
      borderColor: `${rgba(tokens.MdSysColorOnSurface, 0.12)}`,
      color: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
      fill: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
    },
  },
  "&.text": {
    color: tokens.MdSysColorPrimary,
    fill: tokens.MdSysColorPrimary,
    background: "transparent",
    "&>.state": {
      background: tokens.MdSysColorOnSecondaryContainer,
    },
    "&:hover:not(:disabled)": {
      color: tokens.MdSysColorPrimary,
      fill: tokens.MdSysColorPrimary,
      "&>.state": {
        background: tokens.MdSysColorPrimary,
      },
    },
    "&:active:not(:disabled),&:focus:not(:disabled)": {
      color: tokens.MdSysColorPrimary,
      fill: tokens.MdSysColorPrimary,
      "&>.state": {
        background: tokens.MdSysColorPrimary,
      },
    },
    "&:disabled": {
      color: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
      fill: `${rgba(tokens.MdSysColorOnSurface, 0.38)}`,
    },
  },
  svg: {
    marginLeft:"-8px",
    marginRight:"8px",
  }
});
