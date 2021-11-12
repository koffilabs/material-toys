import { rgba } from "emotion-rgba";
const duration = ".1s";
export const FAB = (tokens) => ({
  border: "none",
  background: tokens.MdSysColorPrimaryContainer,
  "border-radius": "16px",
  position: "relative",
  margin: "8px",
  height: "56px",
  width: "56px",
  "line-height": tokens.MdSysTypescaleLabelLargeLineHeight,
  "text-align": "center",
  willChange: "transform opacity",
  overflow: "hidden",
  padding: "16px",
  transition: `box-shadow ${duration} ease-in-out, background-color ${duration} ease-in-out, 
  fill ${duration} ease-in-out`,
  fill: tokens.MdSysColorOnPrimaryContainer,
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
    background: tokens.MdSysColorPrimary,
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
    fill: `${rgba(tokens.MdSysColorPrimary, 0.38)}`,
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
  },
  "&.surface": {
    background: tokens.MdSysColorSurface,
    fill: tokens.MdSysColorPrimary,
    "&:disabled": {
      fill: `${rgba(tokens.MdSysColorPrimary, 0.38)}`,
    }
  },
  "&.secondary": {
    background: tokens.MdSysColorSecondaryContainer,
    fill: tokens.MdSysColorOnSecondaryContainer,
    "&:disabled": {
      fill: `${rgba(tokens.MdSysColorPrimary, 0.38)}`,
    },
    "&>.state": {
      background: tokens.MdSysColorOnSecondaryContainer,
    }
  },
  "&.tertiary": {
    background: tokens.MdSysColorTertiaryContainer,
    fill: tokens.MdSysColorOnTertiaryContainer,
    "&:disabled": {
      fill: `${rgba(tokens.MdSysColorPrimary, 0.38)}`,
    },
    "&>.state": {
      background: tokens.MdSysColorOnTertiaryContainer,
    }
  },
  "&.small": {
    height: "40px",
    width: "40px",
    "border-radius": "12px",
    padding: "8px",
  },
  "&.large": {
    height: "96px",
    width: "96px",
    "border-radius": "28px",
    padding: "16px",
  }
});
