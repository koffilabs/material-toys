import {rgba} from "../../util/rgba";
import {M3Options} from "./index";
import {roundedShape} from "../../util/shape";
import {MdSysStateHoverStateLayerOpacity} from "./polyfill";

const duration = ".15s";
// const easing = "cubic-bezier(.075, .75, .875, .36)";
const easing = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const OutlinedTextField = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    flex: "none",
    position: "relative",
    overflow: "visible",
    "&.mt-loading *": {
      transition: "none !important"
    },

    "&.mt-focus": {
      ".mt-shape": {
        ".mt-outline": {
          outlineWidth: "2px",
          outlineStyle: "solid",
          outlineColor: tokens[`MdSysColorPrimary${variant}`],
        },
        ".container": {
          ".label": {
            top: `-${(tokens.MdSysTypescaleBodySmallLineHeight / 2 - 1)}px`,
            color: tokens[`MdSysColorPrimary${variant}`],
            lineHeight: `${tokens.MdSysTypescaleBodySmallLineHeight}px`,
            fontSize: tokens.MdSysTypescaleBodySmallSize,
          },
        },
      },
      "&.leadingIcon": {
        ".mt-shape": {
          ".container": {
            ".label": {
              left: `16px`,
            }
          }
        }
      }

    },
    "&:hover": {
      ".mt-shape": {
        ".container": {
          ".mt-state": {
            // opacity: MdSysStateHoverStateLayerOpacity
          },

          ".label": {
            color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
          },
        }
      }
    },
    ".supportingTextContainer": {
      // position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      // transform: "translateY(100%)",
      margin: 0,
      padding: "4px 16px 0 16px",
      display: "flex",
      flexDirection: "row",
      height: `${tokens.MdSysTypescaleBodySmallLineHeight + 4}px`,
      ".supportingText, .characterCounter": {
        height: `${tokens.MdSysTypescaleBodySmallLineHeight}px`,
        flex: "none",
        padding: 0,
        color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
        fontFamily: tokens.MdSysTypescaleBodySmallFont,
        lineHeight: `${tokens.MdSysTypescaleBodySmallLineHeight}px`,
        fontSize: `${tokens.MdSysTypescaleBodySmallSize}px`,
        fontWeight: tokens.MdSysTypescaleBodySmallWeight,
        letterSpacing: `${tokens.MdSysTypescaleBodySmallTracking}px`,
      },
      ".characterCounter": {
        marginLeft: "auto"
      }
    },
    "&.leadingIcon": {
      ".supportingTextContainer": {
        paddingLeft: "12px",
      },
      ".mt-shape": {
        "input": {
          paddingLeft: "52px"
        },
        ".container": {
          ".label": {
            left: "52px"
          },
          "&.filled": {
            ".label": {
              "left": "16px"
            }
          },
          ".leadingIcon-container": {
            position: "absolute",
            left: "12px",
            top: `${(56 - 24) / 2}px`,
            fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
          }
        }
      },
    },
    "&.trailingIcon": {
      ".supportingTextContainer": {
        paddingRight: "12px",
      },
      ".mt-shape": {
        "input": {
          paddingRight: "52px"
        },
        ".trailingIcon-container": {
          position: "absolute",
          right: "12px",
          top: `${(56 - 24) / 2}px`,
          fill: tokens[`MdSysColorOnSurfaceVariant${variant}`],
          // zIndex: 20
        }
      }
    },
    ".mt-shape": {
      ".container.filled": {
        ".label": {
          position: "absolute",
          top: `-${(tokens.MdSysTypescaleBodySmallLineHeight / 2 - 1)}px`,
          color: tokens[`MdSysColorPrimary${variant}`],
          lineHeight: `${tokens.MdSysTypescaleBodySmallLineHeight}px`,
          fontSize: tokens.MdSysTypescaleBodySmallSize,
        },
      },
      height: "56px",
      position: "relative",
      ".mt-outline": {
        outlineOffset: "-2px",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        borderRadius: roundedShape({shape: tokens.MdSysShapeCornerExtraSmall}),
        outlineColor: tokens[`MdSysColorOutline${variant}`],
        outlineWidth: "1px",
        outlineStyle: "solid",
      },
      padding: "0",
      "input": {
        position: "relative",
        // "z-index": "10",
        padding: "8px 16px", // 16px without icons
        height: "56px",
        caretColor: tokens[`MdSysColorPrimary${variant}`],
        color: tokens[`MdSysColorOnSurface${variant}`],
        backgroundColor: "transparent",
        fontFamily: tokens.MdSysTypescaleLabelLargeFont,
        lineHeight: `${tokens.MdSysTypescaleBodyLargeLineHeight}px`,
        fontSize: tokens.MdSysTypescaleBodyLargeSize,
        fontWeight: tokens.MdSysTypescaleBodyLargeWeight,
        "&:disabled": {
          opacity: .38,
          pointerEvents: "none"
        },
        border: "none",
        "&:hover": {
          color: tokens[`MdSysColorOnSurface${variant}`],
        },
        "&:focus": {
          outline: "none"
        },
      },
      ".container": {
        "z-index": "0",
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0",
        ".mt-state": {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: tokens[`MdSysColorOnSurface${variant}`],
          opacity: 0,
          transition: `${duration} background-color ease-in-out, ${duration} opacity ease-in-out`,
        },
        ".label": {
          margin: 0,
          padding: 0,
          position: "absolute",
          pointerEvents: "none",
          transition: `${duration} line-height ${easing}, 
          ${duration} font-size ${easing}, ${duration} top ${easing}, ${duration} left ${easing},
          ${duration} color ${easing},
          ${duration} transform ${easing}`,
          willChange: "font-size, top, line-height, color",
          top: `${(56 - tokens.MdSysTypescaleBodyLargeLineHeight) / 2}px`,
          left: "16px", // without leading icon
          color: tokens[`MdSysColorOnSurfaceVariant${variant}`],
          fontFamily: tokens.MdSysTypescaleBodyLargeFont,
          lineHeight: `${tokens.MdSysTypescaleBodyLargeLineHeight}px`,
          fontSize: tokens.MdSysTypescaleBodyLargeSize,
          fontWeight: tokens.MdSysTypescaleBodyLargeWeight,
          letterSpacing: `${tokens.MdSysTypescaleBodyLargeTracking}px`,
          "&::selection": {
            backgroundColor: "transparent"
          }
        },
        "&.empty": {
          ".label": {},
        },
      }
    },
    "&.disabled": {
      "pointerEvents": "none",
      ".mt-shape": {
        backgroundColor: rgba(tokens[`MdSysColorSurfaceVariant${variant}`], .4),
        ".leadingIcon-container, .trailingIcon-container, .label, .supportingTextContainer": {
          opacity: .38
        }
      },
      ".supportingTextContainer": {
        opacity: .38
      }
    },
    "&.error": {
      "&.mt-focus .container": {},
      ".container": {
        ".label": {
          color: tokens[`MdSysColorError${variant}`],
        },
      },

      "&:hover": {
        ".container": {
          ".label": {
            color: tokens[`MdSysColorOnErrorContainer${variant}`],
          },
        },
        ".mt-shape": {
          ".trailingIcon-container": {
            svg: {
              fill: tokens[`MdSysColorOnErrorContainer${variant}`],
            }
          }
        }

      },
      ".supportingTextContainer": {
        ".supportingText, .characterCounter": {
          color: tokens[`MdSysColorError${variant}`],
        },
      },
      ".mt-shape": {
        ".container": {},
        "input": {
          caretColor: tokens[`MdSysColorError${variant}`]
        },

        ".trailingIcon-container": {
          svg: {
            fill: tokens[`MdSysColorError${variant}`],
          }
        }
      }

    },

  }
};
