import { breakpoints } from "./breakpoints";

export const applicationStyle = {
  display: "grid",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "auto 1fr",
  gridTemplateAreas: `"appbar appbar"
    "nav body"`,
  gridColumnGap: "8px", // old syntax
  gap: "8px",
  padding: "0",
  ".appBar": {
    gridArea: "appbar",
  },
  ".navigation": {
    gridArea: "nav",
  },
  ".body": {
    gridArea: "body",
    background: "#333",
    color: "#ddd",
    padding: "1.618rem",
    fontFamily: "Roboto, sans-serif",
  },
  [breakpoints.EXTRA_SMALL.query]: {
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: `"appbar"
    "body"
    "nav"`,
  },
  [breakpoints.SMALL.query]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"appbar appbar"
    "nav body"`,
  },
  [breakpoints.SMALL_FLUID.query]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"appbar appbar"
    "nav body"`,
  },
  [breakpoints.MEDIUM.query]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"appbar appbar"
    "nav body"`,
  },
  [breakpoints.LARGE.query]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"appbar appbar"
    "nav body"`,
  },
  "&.drawer": {
    [breakpoints.EXTRA_SMALL.query]: {
      gridTemplateColumns: "auto 1fr",
      gridTemplateRows: "auto 1fr",
      gridTemplateAreas: `"appbar appbar"
    "nav body"`,
    },
  },
};
