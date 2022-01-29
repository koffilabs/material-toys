import { rgba } from "../../util/rgba";
import { M3Options } from "./index";
const duration = ".1s";

export const Card = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    display: "inline-block",
    overflow: "hidden",
    position: "relative",
    borderRadius: "12px",
    paddingLeft: "16px",
    paddingRight: "16px",
    marginRight: "8px",
    marginLeft: "8px",
    transition: `box-shadow ${duration} ease-in-out, background-color ${duration} ease-in-out, 
      color ${duration} ease-in-out`,
    "&>.state": {
      top: "0",
      left: "0",
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: "0",
      zIndex: "-1",
      background: tokens[`MdSysColorOnSurface${variant}`],
      transition: `opacity ${duration} ease-in-out`,
    },

    "&:hover": {
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
    "&.elevated": {
      background: tokens[`MdSysColorSurface${variant}`],
      // level 1
      boxShadow: `0 2px 1px -1px ${rgba(
        tokens.MdSysColorShadow,
        0.2
      )}, 0 1px 1px 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
      "&:hover": {
        // level 2
        boxShadow: `0 3px 1px -2px ${rgba(
          tokens.MdSysColorShadow,
          0.2
        )}, 0 2px 2px 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 
        0 1px 5px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
        "&>.state": {
          background: tokens[`MdSysColorOnSurface${variant}`],
        },
      },
      "&:focus": {
        // level 1
        boxShadow: `0 2px 1px -1px ${rgba(
          tokens.MdSysColorShadow,
          0.2
        )}, 0 1px 1px 0 ${rgba(
          tokens.MdSysColorShadow,
          0.14
        )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
      },
      "&:active": {
        // level 1
        boxShadow: `0 2px 1px -1px ${rgba(
          tokens.MdSysColorShadow,
          0.2
        )}, 0 1px 1px 0 ${rgba(
          tokens.MdSysColorShadow,
          0.14
        )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
      },
    },
    "&.filled": {
      background: tokens[`MdSysColorSurfaceVariant${variant}`],
      // level 0
      boxShadow: `0 0 0 0 ${rgba(tokens.MdSysColorShadow, 0.2)}, 0 0 0 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 0 0 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
      "&:hover": {
        // level 1
        boxShadow: `0 2px 1px -1px ${rgba(
          tokens.MdSysColorShadow,
          0.2
        )}, 0 1px 1px 0 ${rgba(
          tokens.MdSysColorShadow,
          0.14
        )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
        "&>.state": {
          background: tokens[`MdSysColorOnSurface${variant}`],
        },
      },
      "&:focus": {
        // level 1
        boxShadow: `0 2px 1px -1px ${rgba(
          tokens.MdSysColorShadow,
          0.2
        )}, 0 1px 1px 0 ${rgba(
          tokens.MdSysColorShadow,
          0.14
        )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
      },
      "&:active": {
        // level 0
        boxShadow: `0 0 0 0 ${rgba(
          tokens.MdSysColorShadow,
          0.2
        )}, 0 0 0 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 0 0 0 0 ${rgba(
          tokens.MdSysColorShadow,
          0.12
        )}`,
      },
    },
    "&.outlined": {
      background: tokens[`MdSysColorSurface${variant}`],
      border: `1px solid ${tokens.MdSysColorOutline}`,
      // level 0
      boxShadow: `0 0 0 0 ${rgba(tokens.MdSysColorShadow, 0.2)}, 0 0 0 0 ${rgba(
        tokens.MdSysColorShadow,
        0.14
      )}, 0 0 0 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
      "&:hover": {
        "&>.state": {
          background: tokens[`MdSysColorOnSurface${variant}`],
        },
      },
      "&:focus": {},
      "&:active": {},
    },
  };
};
