import {breakpoints} from "./breakpoints";

export const gridStyle = {
    display: "grid",
    // mobile first
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: "8px", // old syntax
    gap: "8px",
    padding: "8px",
    [breakpoints.SMALL.query]: {
        gridTemplateColumns: "repeat(8, 1fr)",
        gridColumnGap: "8px",
        gap: "8px",
        padding: "8px",
    },
    [breakpoints.SMALL_FLUID.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "8px",
        gap: "8px",
        padding: "8px",
    },
    [breakpoints.MEDIUM.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "12px",
        gap: "12px",
        padding: "12px",
    },
    [breakpoints.LARGE.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "32px",
        gap: "32px",
        padding: "16px",
    }
};
