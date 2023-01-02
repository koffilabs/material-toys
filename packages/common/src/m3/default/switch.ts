import { M3Options } from "./index";
import { rgba } from "../../util/rgba";

const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";
const bounceEasing = "cubic-bezier(.47,1.64,.41,1)";
const duration = ".3s";
export const Switch = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    borderRadius: "16px",
    width: "52px",
    height: "32px",
    position: "relative",
    overflow: "visible",
    display: "inline-grid",
    placeItems: "center",
    margin: "0",
    WebkitTapHighlightColor: "transparent",
    "&.mt-loading *": {
      transition: "none !important",
    },

    ".mt-switch": {
      fill: "transparent",
    },
    ".mt-track": {
      outlineOffset: "-2px",
      // outline: `2px solid ${tokens[`MdSysColorOutline${variant}`]}`,
      overflow: "visible",
      height: "100%",
      width: "100%",
      borderRadius: "16px",
      padding: 0,
      position: "relative",
      transition: `${duration} background-color ${easing}, ${duration} outline-color linear`,
      backgroundColor: tokens[`MdSysColorSurfaceVariant${variant}`],
    },
    ".mt-state": {
      display: "grid",
      placeItems: "center",
      position: "absolute",
      top: "-4px",
      left: "-4px",
      transition: `${duration} background-color ${easing}`,
    },
    "input[type=checkbox]": {
      opacity: 0,
      zIndex: 1,
      width: "52px",
      height: "32px",
      position: "absolute",
      "&:not(:disabled)": {
        cursor: "pointer",
      },

      "&:hover:not(:disabled) + .mt-track .mt-state, &:focus:not(:disabled) + .mt-track .mt-state":
        {
          backgroundColor: rgba(
            tokens[`MdSysColorOnSurface${variant}`],
            tokens.MdSysStateHoverStateLayerOpacity
          ),
        },
      "&:checked:hover:not(:disabled) + .mt-track .mt-state, &:checked:focus:not(:disabled) + .mt-track .mt-state":
        {
          backgroundColor: rgba(
            tokens[`MdSysColorPrimary${variant}`],
            tokens.MdSysStateHoverStateLayerOpacity
          ),
        },
      "&:checked:not(:disabled) + .mt-track": {
        outlineColor: `${tokens[`MdSysColorPrimary${variant}`]}`,
        backgroundColor: tokens[`MdSysColorPrimary${variant}`],
      },

      "& + .mt-track .mt-state": {
        position: "absolute",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        // padding: "11px", // (40 - 18) / 2
        transition: `${duration} transform ${bounceEasing}`,
        transformOrigin: "center center",
        transform: "translateX(0)",
      },
      "& + mt-track .mt-state .mt-outline": {
        position: "absolute",
        top: "12px",
        left: "12px",
      },
      "& + .mt-track .mt-state .mt-outline .mt-checked-icon, & + .mt-track .mt-state .mt-outline .mt-unchecked-icon":
        {
          top: "12px",
          left: "12px",
          transition: `${duration} clip-path ${easing}`,
          position: "absolute",
        },
      "& + .mt-track .mt-state .mt-outline .mt-checked-icon": {
        fill: tokens[`MdSysColorOnPrimaryContainer${variant}`],
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      "& + .mt-track .mt-state .mt-outline .mt-unchecked-icon": {
        fill: tokens[`MdSysColorSurfaceVariant${variant}`],
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      "& + .mt-track .mt-state .mt-outline .mt-switch-thumb": {
        // unselected thumb, enabled, no icon
        transition: `${duration} transform ${easing}, ${duration} background-color ${easing}`,
        padding: 0,
        margin: 0,
        top: "12px",
        left: "12px",
        position: "absolute",
        transformOrigin: "center center",
        transform: "scale(1)",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: tokens[`MdSysColorOutline${variant}`],
        svg: {
          opacity: 0,
        },
      },

      "&:disabled:not(:checked)": {
        outlineColor: tokens[`MdSysColorOnSurface${variant}`],
        "&  + .mt-track": {
          outlineColor: rgba(tokens[`MdSysColorOnSurface${variant}`], 0.12),
          backgroundColor: rgba(tokens[`MdSysColorOnSurface${variant}`], 0.12),
          ".mt-state .mt-outline .mt-switch-thumb": {
            backgroundColor: rgba(
              tokens[`MdSysColorOnSurface${variant}`],
              0.38
            ),
          },
          ".mt-unchecked-icon": {
            opacity: 0.38,
            fill: tokens[`MdSysColorOnSurface${variant}`],
          },
        },
        "&:checked": {},
      },
      "&:active(:not:disabled)": {
        "& + .mt-track .mt-state .mt-outline .mt-switch-thumb": {
          transform: `scale(1.75)`,
        },
      },

      "&:checked": {
        outlineColor: tokens[`MdSysColorPrimary${variant}`],

        "& + .mt-track .mt-state": {
          transform: `translateX(${52 - 32}px)`,

          ".mt-outline": {
            // backgroundColor: tokens[`MdSysColorPrimary${variant}`],
            ".mt-switch": {
              opacity: 1,
              fill: tokens[`MdSysColorOnPrimary${variant}`],
            },
          },
        },
        "& + .mt-track .mt-state .mt-outline .mt-checked-icon": {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        "& + .mt-track .mt-state .mt-outline .mt-unchecked-icon": {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        },

        "& + .mt-track .mt-state .mt-outline .mt-switch-thumb": {
          // selected thumb, enabled, no icon
          // left: "8px",
          width: "16px",
          height: "16px",
          transform: `scale(1.5)`,
          backgroundColor: tokens[`MdSysColorOnPrimary${variant}`],
          svg: {
            opacity: 0,
          },
        },
        "&:active:not(:disabled)": {
          "& + .mt-track .mt-state .mt-outline .mt-switch-thumb": {
            transform: `scale(1.75)`,
          },
        },

        "&:disabled": {
          outlineColor: tokens[`MdSysColorOnSurface${variant}`],
          "& + .mt-track": {
            // outlineColor: rgba(tokens[`MdSysColorOnSurface${variant}`], 0.12),
            outlineColor: "transparent",
            ".mt-state": {
              ".mt-outline": {
                ".mt-checked-icon": {
                  opacity: 0.38,
                  fill: tokens[`MdSysColorOnSurface${variant}`],
                },
              },
            },
          },
          "& + .mt-track .mt-state .mt-outline .mt-switch-thumb": {
            backgroundColor: rgba(tokens[`MdSysColorSurface${variant}`], 1),
          },
        },
      },
    },
  };
};
