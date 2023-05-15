import { M3Options } from "./index";
export const Tab = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    WebkitTapHighlightColor: "transparent",
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    // color: tokens[`MdSysColorOnSurface${variant}`],
    height: "48px",
    ".mt-tab-content": {
      display: "grid",
      placeItems: "center",
    },
    "&.withIcon": {
      height: "64px",
      ".mt-tab-icon": {
        marginBottom: "2px",
      },
    },
  };
};
