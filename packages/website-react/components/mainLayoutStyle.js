import { breakpoints } from "@material-toys/common";
const duration = ".4s";
export const applicationStyle = {
  display: "grid",
  background: "transparent",
  position: "absolute",
  overflow: "hidden",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  gridTemplateRows: "auto 1fr",
  // gridTemplateRows: "auto 1fr",
  gridTemplateAreas: `"appbar"
    "content"`,
  gridColumnGap: "8px", // old syntax
  gap: "8px",
  padding: "0",
  ".appBar": {
    gridArea: "appbar",
  },
  ".content": {
    display: "flex",
    gridArea: "content",
    overflow: "hidden",
  },
  ".navigation": {
    background: "transparent",
  },

  ".body": {
    gridArea: "body",
    background: "transparent",
    color: "#333",
    padding: "1.618rem",
    fontFamily: "Roboto, sans-serif",
    transition: `margin-left ${duration} ease-in-out`,
    "&.collapsed": {
      marginLeft: "0",
    },
  },
  [breakpoints.EXTRA_SMALL.query]: {
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: `"appbar"
    "content"`,
  },
  [breakpoints.SMALL.query]: {
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"appbar appbar"
    "content"`,
  },
  [breakpoints.SMALL_FLUID.query]: {
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"appbar"
    "content"`,
  },
  [breakpoints.MEDIUM.query]: {
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"appbar"
    "content"`,
    ".body": {
      border: "1px solid red",
      marginLeft: "360px",
    },
  },
  [breakpoints.LARGE.query]: {
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"appbar"
    "content"`,
  },
  "&.drawer": {
    [breakpoints.EXTRA_SMALL.query]: {
      gridTemplateRows: "auto 1fr",
      gridTemplateAreas: `"appbar"
    "content"`,
    },
  },
};
