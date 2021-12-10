import { rgba } from "emotion-rgba";
import { M3Options } from "./index";

const duration = ".1s";
export const ExtendedFAB = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "80px",
    margin: "16px",
    // fontFamily: tokens.MdSysTypescaleButtonFont,
    // Label or Button? no specs for the Button
    fontSize: tokens.MdSysTypescaleLabelLargeSize,
    fontWeight: tokens.MdSysTypescaleLabelLargeWeight,
    fontFamily: tokens.MdSysTypescaleLabelLargeFont,
    letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,

    border: "none",
    background: tokens[`MdSysColorPrimaryContainer${variant}`],
    borderRadius: "16px",
    position: "relative",
    height: "56px",
    lineHeight: `${tokens.MdSysTypescaleLabelLargeLineHeight}px`,
    textAlign: "center",
    willChange: "transform opacity",
    overflow: "hidden",
    padding: "16px",
    ".ripple": {
      backgroundColor: tokens[`MdSysColorOnPrimaryContainer${variant}`],
    },

    transition: `box-shadow ${duration} ease-in-out, background-color ${duration} ease-in-out, 
  fill ${duration} ease-in-out`,
    color: tokens[`MdSysColorOnPrimaryContainer${variant}`],
    fill: tokens[`MdSysColorOnPrimaryContainer${variant}`],
    // level 3
    boxShadow: `0 3px 3px -2px ${rgba(
      tokens.MdSysColorShadow,
      0.2
    )}, 0 3px 4px 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 0 1px 8px 0 ${rgba(
      tokens.MdSysColorShadow,
      0.12
    )}`,
    "&>.state": {
      top: "0",
      left: "0",
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: "0",
      background: tokens[`MdSysColorPrimary${variant}`],
      transition: `opacity ${duration} ease-in-out`,
    },
    "&:hover": {
      cursor: "pointer",
      "&>.state": {
        opacity: ".08",
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
      color: "blue",
      fill: `${rgba(tokens[`MdSysColorPrimary${variant}`], 0.38)}`,
      "&:hover,&:focus,&:active": {
        "&>.state": {
          opacity: 0,
        },
      },
    },
    "&.level1": {
      // level1
      boxShadow: `0 2px 1px -1px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 1px 1px 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 0 1px 3px 0 ${rgba(
        tokens.MdSysColorShadow,
        0.12
      )}`,
      ".ripple": {
        backgroundColor: tokens[`MdSysColorOnPrimaryContainer${variant}`],
      },
    },
    "&.surface": {
      background: tokens[`MdSysColorSurface${variant}`],
      ".ripple": {
        backgroundColor: tokens[`MdSysColorOnPrimaryContainer${variant}`],
      },
      fill: tokens[`MdSysColorPrimary${variant}`],
      "&:disabled": {
        fill: `${rgba(tokens[`MdSysColorPrimary${variant}`], 0.38)}`,
      }
    },
    "&.secondary": {
      background: tokens[`MdSysColorSecondaryContainer${variant}`],
      ".ripple": {
        backgroundColor: tokens[`MdSysColorOnPrimaryContainer${variant}`],
      },
      fill: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      "&:disabled": {
        fill: `${rgba(tokens[`MdSysColorPrimary${variant}`], 0.38)}`,
      },
      "&>.state": {
        background: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      }
    },
    "&.tertiary": {
      background: tokens[`MdSysColorTertiaryContainer${variant}`],
      ".ripple": {
        backgroundColor: tokens[`MdSysColorOnPrimaryContainer${variant}`],
      },
      fill: tokens[`MdSysColorOnTertiaryContainer${variant}`],
      "&:disabled": {
        fill: `${rgba(tokens[`MdSysColorPrimary${variant}`], 0.38)}`,
      },
      "&>.state": {
        background: tokens[`MdSysColorOnTertiaryContainer${variant}`],
      }
    },
    "&.small": {
      height: "40px",
      width: "40px",
      borderRadius: "12px",
      padding: "8px",
    },
    "&.large": {
      height: "96px",
      width: "96px",
      borderRadius: "28px",
      padding: "16px",
    },
    "svg": {
      marginLeft: "-8px",
      marginRight: "8px"
    }
  }
};
