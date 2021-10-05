import { registerPath } from "../util/path";

export const theme: any = {
  colors: {
    primary: "hsl(230, 70%, 70%)",
    accent: "hsl(310, 70%, 70%)",
  },
  components: {
    Button: {
      border: "none",
      color: "yellow",
      position: "relative",
      "text-transform": "capitalize",
      height: "10vh",
      "line-height": "10vh",
      width: "10vw",
      "text-align": "center",
      background: "@yue:theme[colors.primary]",
      "clip-path": registerPath(
        // "path('M${10 + width} ${height / 2} H ${width} V ${height} H -180 L 0 180 L20 0')"
        "path('M20 0 c 0,0 ${width-32},0 ${width-20},0 c 0,0 0,${height} 0,${height} c 0,0 -${width},0 -${width},0 " +
          "c 0,0 0,-${height-10} 0,-${height-10} Z')"
      ),
      "&:hover": {
        background: "blue",
      },
    },
  },
};
