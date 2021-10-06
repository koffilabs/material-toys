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
        "path('M40 0 " +
          "c ${width-80},0 ${width-80},0 ${width-80},0 " +
          // first round corner
          "c 40,0 40,0 40,40 " +
          "c 0,${height-80} 0,${height-80} 0,${height-80} " +
          "c 0,40 0,40 -40,40 " +
          "c -${width-80},0 -${width-80},0 -${width-80},0 " +
          "c -40,0 -40,0 -40,-40 " +
          "c 0,${-height+80} 0,${-height+80} 0,${-height+80} " +
          "c 0,-40 0,-40 40,-40 " +
          // "L ${width} ${height-20} " +
          "Z')"
      ),
      "&:hover": {
        background: "blue",
      },
    },
  },
};
