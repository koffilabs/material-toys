import { rgba } from "emotion-rgba";
const duration = ".1s";
export const FAB = (tokens) => ({
  border: "none",
  background: tokens.MdSysColorPrimaryContainer,
  "border-radius": "16px",
  position: "relative",
  height: "56px",
  width: "56px",
  "line-height": tokens.MdSysTypescaleLabelLargeLineHeight,
  "text-align": "center",
  willChange: "transform opacity",
  fontWeight: tokens.MdSysTypescaleLabelLargeWeight,
  fontFamily: "Material Icons",
  fontSize: "24px",
  overflow: "hidden",
  padding: "16px",
  transition: `box-shadow ${duration} ease-in-out, background-color ${duration} ease-in-out, 
  color ${duration} ease-in-out`,
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
    "&:hover,&:focus,&:active": {
      "&>.state": {
        opacity: 0,
      },
    },
  },
});
