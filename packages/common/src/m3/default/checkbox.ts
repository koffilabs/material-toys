import { M3Options } from "./index";
import { rgba } from "../../util/rgba";

const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";
const duration = ".3s";
export const Checkbox = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    borderRadius: "50%",
    position: "relative",
    overflow: "hidden",
    height: "40px",
    width: "40px",
    display: "inline-grid",
    placeItems: "center",
    margin: "0",
    ".ripple": {
      backgroundColor: tokens[`MdSysColorPrimary${variant}`],
    },

    ".mt-check": {
      fill: "transparent",
    },

    ".mt-state": {
      transition: `${duration} background-color ${easing}`,
    },
    "input[type=checkbox]": {
      opacity: 0,
      zIndex: 1,
      width: "42px",
      height: "42px",
      position: "absolute",
      "&:hover:not(:disabled) + .mt-state, &:focus:not(:disabled) + .mt-state":
        {
          backgroundColor: rgba(
            tokens[`MdSysColorOnSurface${variant}`],
            tokens.MdSysStateHoverStateLayerOpacity
          ),
        },
      "&:checked:hover:not(:disabled) + .mt-state, &:checked:focus:not(:disabled) + .mt-state":
        {
          backgroundColor: rgba(
            tokens[`MdSysColorPrimary${variant}`],
            tokens.MdSysStateHoverStateLayerOpacity
          ),
        },
      "& + .mt-state": {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        padding: "11px", // (40 - 18) / 2
      },
      "& + .mt-state .mt-outline": {
        borderRadius: "2px",
        width: "18px",
        height: "18px",
        outlineWidth: "2px",
        outlineOffset: "-2px",
        outlineStyle: "solid",
        outlineColor: tokens[`MdSysColorOnSurface${variant}`],
      },
      "&:disabled": {
        outlineColor: tokens[`MdSysColorOnSurface${variant}`],
        "& + .mt-state": {
          opacity: 0.38,
          ".mt-outline": {
            outlineColor: tokens[`MdSysColorOnSurface${variant}`],
          },
        },
      },
      "&:checked": {
        outlineColor: tokens[`MdSysColorPrimary${variant}`],

        "& + .mt-state": {
          ".mt-outline": {
            outlineColor: tokens[`MdSysColorPrimary${variant}`],
            backgroundColor: tokens[`MdSysColorPrimary${variant}`],
            ".mt-check": {
              opacity: 1,
              fill: tokens[`MdSysColorOnPrimary${variant}`],
            },
          },
        },
        "&:disabled": {
          outlineColor: tokens[`MdSysColorOnSurface${variant}`],
          "& + .mt-state": {
            opacity: 0.38,
            ".mt-outline": {
              outlineColor: tokens[`MdSysColorOnSurface${variant}`],
              backgroundColor: tokens[`MdSysColorOnSurface${variant}`],
              ".mt-check": {
                opacity: 1,
                fill: tokens[`MdSysColorSurface${variant}`],
              },
            },
          },
        },
      },
    },
    "&.error": {
      "input[type=checkbox]": {
        "&:hover:not(:disabled) + .mt-state, &:focus:not(:disabled) + .mt-state":
          {
            backgroundColor: rgba(
              tokens[`MdSysColorError${variant}`],
              tokens.MdSysStateHoverStateLayerOpacity
            ),
          },
        "&:checked:hover:not(:disabled) + .mt-state, &:checked:focus:not(:disabled) + .mt-state":
          {
            backgroundColor: rgba(
              tokens[`MdSysColorError${variant}`],
              tokens.MdSysStateHoverStateLayerOpacity
            ),
          },
        "& + .mt-state .mt-outline": {
          outlineColor: tokens[`MdSysColorError${variant}`],
        },
        "&:checked": {
          outlineColor: tokens[`MdSysColorError${variant}`],
          "& + .mt-state": {
            ".mt-outline": {
              outlineColor: tokens[`MdSysColorError${variant}`],
              backgroundColor: tokens[`MdSysColorError${variant}`],
              ".mt-check": {
                fill: tokens[`MdSysColorOnError${variant}`],
              },
            },
          },
        },
        "&:checked:disabled": {
          outlineColor: tokens[`MdSysColorError${variant}`],
          "& + .mt-state": {
            ".mt-outline": {
              outlineColor: tokens[`MdSysColorOnSurface${variant}`],
              backgroundColor: tokens[`MdSysColorOnSurface${variant}`],
              ".mt-check": {
                fill: tokens[`MdSysColorSurface${variant}`],
              },
            },
          },
        },
        "&:disabled": {
          outlineColor: tokens[`MdSysColorOnSurface${variant}`],
          "& + .mt-state": {
            opacity: 0.38,
            ".mt-outline": {
              outlineColor: tokens[`MdSysColorOnSurface${variant}`],
            },
          },
        },
      },
    },
  };
};
