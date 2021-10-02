export const theme: any = {
  colors: {
    primary: "hsl(230, 70%, 70%)",
    accent: "hsl(310, 70%, 70%)",
  },
  components: {
    Button: {
      color: "yellow",
      position: "relative",
      "text-transform": "capitalize",
      height: "10vh",
      "line-height": "10vh",
      width: "10vw",
      "text-align": "center",

      "& span": {
        "text-transform": "uppercase",
      },
      "&:hover": {
        "&:before": {
          background: "blue",
        },
      },
      "&:before": {
        content: "''",
        background: "@yue:theme[colors.primary]",
        "z-index": -1,
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // "clip-path": "path('M20 0 H 200 V 100 H -180 L 0 180 L20 0')",
        "clip-path":
          "@yue:interpolate[path('M20 0 H ${width} V ${height} H -180 L 0 180 L20 0')]",
      },
      // "clip-path":
      //   "path('M41,154.25C241,146.385 234.615,140 226.75,140L125.25,140C117.385,140 111,146.385 111,154.25L111,182.75C111,190.615 117.385,197 125.25,197L226.75,197C234.615,197 241,190.615 241,182.75L241,154.25Z')",
    },
  },
};
