import { M3Options } from "./index";
import { rgba } from "../../util/rgba";

const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";
const duration = ".3s";
export const RadioButton = (tokens, options?: M3Options) => {
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

    ".mt-state": {
      transition: `${duration} background-color ${easing}`,
    },
    "input[type=radio]": {
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
        padding: "10px", // (40 - 20) / 2
        ".mt-radio-checked": {
          display: "none",
        },
        ".mt-radio-unchecked": {
          display: "block",
          opacity: 1,
          fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        },
      },
      "& + .mt-state .mt-outline": {
        width: "18px",
        height: "18px",
      },
      "&:disabled": {
        "& + .mt-state": {
          opacity: 0.38,
          ".mt-outline": {},
          ".mt-radio": {
            ".mt-radio-unchecked": {
              fill: tokens[`MdSysColorOnSurface${variant}`],
            },
          },
        },
      },
      "&:checked": {
        "& + .mt-state": {
          ".mt-outline": {
            ".mt-radio-checked": {
              display: "block",
              opacity: 1,
              fill: tokens[`MdSysColorPrimary${variant}`],
            },
            ".mt-radio-unchecked": {
              display: "none",
            },
          },
        },
        "&:disabled": {
          "& + .mt-state": {
            opacity: 0.38,
            ".mt-outline": {
              ".mt-radio": {
                ".mt-radio-checked": {
                  fill: tokens[`MdSysColorOnSurface${variant}`],
                },
              },
            },
          },
        },
      },
    },
  };
};
