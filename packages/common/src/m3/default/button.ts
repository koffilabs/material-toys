import { rgba } from "../../util/rgba";
import { M3Options } from "./index";

const duration = ".1s";
export const Button = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: "20px",
    position: "relative",
    textTransform: "capitalize",
    height: "40px",
    lineHeight: `${tokens.MdSysTypescaleLabelLargeLineHeight}px`,
    textAlign: "center",
    willChange: "transform opacity",
    fontSize: tokens.MdSysTypescaleLabelLargeSize,
    fontWeight: tokens.MdSysTypescaleLabelLargeWeight,
    fontFamily: tokens.MdSysTypescaleLabelLargeFont,
    letterSpacing: tokens.MdSysTypescaleLabelLargeTracking,
    overflow: "hidden",
    paddingLeft: "24px",
    paddingRight: "24px",
    outline: "none",
    transition: `box-shadow ${duration} ease-in-out, background-color ${duration} ease-in-out, 
  color ${duration} ease-in-out`,
    "&>.state": {
      zIndex: "0",
      top: "0",
      left: "0",
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: "0",
      backgroundColor: tokens[`MdSysColorPrimary${variant}`],
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
      color: tokens[`MdSysColorPrimary${variant}`],
      fill: tokens[`MdSysColorPrimary${variant}`],
      background: tokens[`MdSysColorSurface${variant}`],
      // boxShadow: `0 1px 2px 1px ${rgba(tokens.MdSysColorShadow, 0.3)}`,
      // level1
      boxShadow: `0 2px 1px -1px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 1px 1px 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
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
      ".ripple": {
        backgroundColor: tokens[`MdSysColorPrimary${variant}`],
      },
      "&:active": {
        "&>.state": {
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
        },
      },
      "&>.state": {
        backgroundColor: tokens[`MdSysColorPrimary${variant}`],
      },
      "&:disabled": {
        color: `${rgba(tokens[`MdSysColorPrimary${variant}`], 0.38)}`,
        fill: `${rgba(tokens[`MdSysColorPrimary${variant}`], 0.38)}`,
        background: `${rgba(tokens[`MdSysColorSurface${variant}`], 0.12)}`,
        boxShadow: `0 0 0 0 ${rgba("#000", 0.3)},0 0 0 0 ${rgba(
          "#000",
          0.3
        )},0 0 0 0 ${rgba("#000", 0.3)}`,
      },
    },
    "&.filled": {
      "div":{
        color: tokens[`MdSysColorOnPrimary${variant}`],
      },
      fill: tokens[`MdSysColorOnPrimary${variant}`],
      background: tokens[`MdSysColorPrimary${variant}`],
      ".ripple": {
        backgroundColor: tokens[`MdSysColorOnPrimary${variant}`],
      },
      "&:disabled": {
        color: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        fill: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        backgroundColor: `${rgba(tokens[`MdSysColorPrimary${variant}`], 0.12)}`,
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
      color: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      fill: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      background: tokens[`MdSysColorSecondaryContainer${variant}`],
      ".ripple": {
        backgroundColor: tokens[`MdSysColorOnSecondaryContainer${variant}`],
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
        color: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        fill: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        background: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.12)}`,
      },
    },
    "&.outlined": {
      color: tokens[`MdSysColorPrimary${variant}`],
      fill: tokens[`MdSysColorPrimary${variant}`],
      background: "transparent", // tokens.MdSysColorSurface,
      border: `1px solid ${tokens[`MdSysColorOutline${variant}`]}`,
      ".ripple": {
        backgroundColor: tokens[`MdSysColorPrimary${variant}`],
      },
      "&:hover:not(:disabled)": {
        borderColor: tokens[`MdSysColorOutline${variant}`],
        color: tokens[`MdSysColorPrimary${variant}`],
        "&>.state": {
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
        },
      },
      "&:focus:not(:disabled)": {
        borderColor: tokens[`MdSysColorPrimary${variant}`],
        color: tokens[`MdSysColorPrimary${variant}`],
        fill: tokens[`MdSysColorPrimary${variant}`],
        "&>.state": {
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
        },
      },
      "&:active:not(:disabled)": {
        borderColor: tokens[`MdSysColorOutline${variant}`],
        color: tokens[`MdSysColorPrimary${variant}`],
        fill: tokens[`MdSysColorPrimary${variant}`],
        "&>.state": {
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
        },
      },

      "&:disabled": {
        borderColor: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.12)}`,
        color: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        fill: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
      },
    },
    "&.text": {
      color: tokens[`MdSysColorPrimary${variant}`],
      fill: tokens[`MdSysColorPrimary${variant}`],
      background: "transparent",
      ".ripple": {
        backgroundColor: tokens[`MdSysColorPrimary${variant}`],
      },
      "&:hover:not(:disabled)": {
        color: tokens[`MdSysColorPrimary${variant}`],
        fill: tokens[`MdSysColorPrimary${variant}`],
        "&>.state": {
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
        },
      },
      "&:active:not(:disabled),&:focus:not(:disabled)": {
        color: tokens[`MdSysColorPrimary${variant}`],
        fill: tokens[`MdSysColorPrimary${variant}`],
        "&>.state": {
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
        },
      },
      "&:disabled": {
        color: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        fill: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
      },
    },
    svg: {
      marginLeft: "-8px",
      marginRight: "8px",
    },
  };
};
