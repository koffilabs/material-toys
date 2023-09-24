import { rgba } from "../../util/rgba";
import { M3Options } from "./index";
import { roundedShape } from "../../util/shape";

const duration = ".1s";
export const IconButton = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    backgroundColor: "transparent",
    display: "inline",
    border: "none",
    position: "relative",
    textTransform: "capitalize",
    textAlign: "center",
    willChange: "transform opacity",
    overflow: "visible",
    outline: "none",
    width: "40px",
    height: "40px",
    padding: "0",
    WebkitTapHighlightColor: "transparent",
    transition: `box-shadow ${duration} ease-in-out, background-color ${duration} ease-in-out, 
  color ${duration} ease-in-out`,
    "& .mt-shape": {
      display: "grid",
      placeItems: "center",
      position: "relative",
      borderRadius: "50%",
      overflow: "hidden",
      backgroundColor: "transparent",
      width: "100%",
      height: "100%",
      padding: "0",
    },
    "& .state": {
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
      "& .state": {
        opacity: ".08", // sysstatehoveropacity?
      },
    },
    "&:focus": {
      "& .state": {
        opacity: ".12",
      },
    },
    "&:active": {
      "& .state": {
        opacity: ".12",
      },
    },
    "&:disabled": {
      cursor: "default",
      "&:hover,&:focus,&:active": {
        "& .state": {
          opacity: 0,
        },
      },
    },
    "&.filled": {
      div: {
        color: tokens[`MdSysColorOnPrimary${variant}`],
      },
      fill: tokens[`MdSysColorOnPrimary${variant}`],
      "& .mt-shape": {
        background: tokens[`MdSysColorPrimary${variant}`],
      },
      ".ripple": {
        backgroundColor: tokens[`MdSysColorOnPrimary${variant}`],
      },
      "&:disabled": {
        color: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        fill: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        "& .mt-shape": {
          backgroundColor: `${rgba(
            tokens[`MdSysColorPrimary${variant}`],
            0.12
          )}`,
        },
      },
      "&:hover:not(:disabled)": {
        "& .mt-shape": {
          boxShadow: `0 2px 1px -1px ${rgba(
            tokens.MdSysColorShadow,
            0.2
          )}, 0 1px 1px 0 ${rgba(
            tokens.MdSysColorShadow,
            0.14
          )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
        },
      },
      "&:active:not(:disabled), &:focus:not(:disabled)": {
        "& .mt-shape": {
          boxShadow: `0 0 0 0 ${rgba("#000", 0.3)},0 0 0 0 ${rgba(
            "#000",
            0.3
          )},0 0 0 0 ${rgba("#000", 0.3)}`,
        },
      },
    },
    "&.filled-tonal": {
      color: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      fill: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      "& .mt-shape": {
        background: tokens[`MdSysColorSecondaryContainer${variant}`],
      },
      ".ripple": {
        backgroundColor: tokens[`MdSysColorOnSecondaryContainer${variant}`],
      },
      "&:hover:not(:disabled)": {
        "& .mt-shape": {
          boxShadow: `0 2px 1px -1px ${rgba(
            tokens.MdSysColorShadow,
            0.2
          )}, 0 1px 1px 0 ${rgba(
            tokens.MdSysColorShadow,
            0.14
          )}, 0 1px 3px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
        },
      },
      "&:active:not(:disabled), &:focus:not(:disabled)": {
        "& .mt-shape": {
          boxShadow: `0 0 0 0 ${rgba("#000", 0.3)},0 0 0 0 ${rgba(
            "#000",
            0.3
          )},0 0 0 0 ${rgba("#000", 0.3)}`,
        },
      },

      "&:disabled": {
        color: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        fill: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        "& .mt-shape": {
          background: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.12)}`,
        },
      },
    },
    "&.outlined": {
      color: tokens[`MdSysColorPrimary${variant}`],
      fill: tokens[`MdSysColorPrimary${variant}`],
      "& .mt-shape": {
        background: "transparent", // tokens.MdSysColorSurface,
        border: `1px solid ${tokens[`MdSysColorOutline${variant}`]}`,
      },
      ".ripple": {
        backgroundColor: tokens[`MdSysColorPrimary${variant}`],
      },
      "&:hover:not(:disabled)": {
        "& .mt-shape": {
          borderColor: tokens[`MdSysColorOutline${variant}`],
          color: tokens[`MdSysColorPrimary${variant}`],
          "& .state": {
            backgroundColor: tokens[`MdSysColorPrimary${variant}`],
          },
        },
      },
      "&:focus:not(:disabled)": {
        "& .mt-shape": {
          borderColor: tokens[`MdSysColorPrimary${variant}`],
          color: tokens[`MdSysColorPrimary${variant}`],
          fill: tokens[`MdSysColorPrimary${variant}`],
          "& .state": {
            backgroundColor: tokens[`MdSysColorPrimary${variant}`],
          },
        },
      },
      "&:active:not(:disabled)": {
        "& .mt-shape": {
          borderColor: tokens[`MdSysColorOutline${variant}`],
          color: tokens[`MdSysColorPrimary${variant}`],
          fill: tokens[`MdSysColorPrimary${variant}`],
          "& .state": {
            backgroundColor: tokens[`MdSysColorPrimary${variant}`],
          },
        },
      },

      "&:disabled": {
        "& .mt-shape": {
          borderColor: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.12)}`,
          color: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
          fill: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        },
      },
    },
    "&.default": {
      color: tokens[`MdSysColorPrimary${variant}`],
      fill: tokens[`MdSysColorPrimary${variant}`],
      background: "transparent",
      ".ripple": {
        backgroundColor: tokens[`MdSysColorPrimary${variant}`],
      },
      "&:hover:not(:disabled)": {
        color: tokens[`MdSysColorPrimary${variant}`],
        fill: tokens[`MdSysColorPrimary${variant}`],
        "& .state": {
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
        },
      },
      "&:active:not(:disabled),&:focus:not(:disabled)": {
        color: tokens[`MdSysColorPrimary${variant}`],
        fill: tokens[`MdSysColorPrimary${variant}`],
        "& .state": {
          backgroundColor: tokens[`MdSysColorPrimary${variant}`],
        },
      },
      "&:disabled": {
        color: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
        fill: `${rgba(tokens[`MdSysColorOnSurface${variant}`], 0.38)}`,
      },
    },
  };
};
