import { registerPath } from "../util/path";
export const theme: any = {
  colors: {
    primary: "hsl(230, 70%, 70%)",
    accent: "hsl(310, 70%, 70%)",
  },
  components: {
    Card: {
      fontSize: "1rem",
      color: "rgba(0, 0, 0, .74)",
      padding: "1.618rem",
      background: "white",
      "clip-path": registerPath(
        "path('m40 0 " +
          "c ${width-80},0 ${width-80},0 ${width-80},0 " +
          "c 40,0 40,0 40,40 " +
          "c 0,${height-80} 0,${height-80} 0,${height-80} " +
          "c 0,40 0,40 -40,40 " +
          "c -${width-80},0 -${width-80},0 -${width-80},0 " +
          "c -40,0 -40,0 -40,-40 " +
          "c 0,${-height+80} 0,${-height+80} 0,${-height+80} " +
          "c 0,-40 0,-40 40,-40 " +
          "')"
      ),
    },
    Button: {
      fontSize: "1rem",
      border: "none",
      color: "yellow",
      position: "relative",
      "text-transform": "capitalize",
      height: "80px",
      "line-height": "80px",
      width: "140px",
      "text-align": "center",
      background: "@yue:theme[colors.primary]",
      "clip-path": registerPath(
        "path('m40 0 " +
          "c ${width-80},0 ${width-80},0 ${width-80},0 " +
          "c 40,0 40,0 40,40 " +
          "c 0,${height-80} 0,${height-80} 0,${height-80} " +
          "c 0,40 0,40 -40,40 " +
          "c -${width-80},0 -${width-80},0 -${width-80},0 " +
          "c -40,0 -40,0 -40,-40 " +
          "c 0,${-height+80} 0,${-height+80} 0,${-height+80} " +
          "c 0,-40 0,-40 40,-40 " +
          "')"
      ),
      "&:hover": {
        background: "blue",
      },
    },
  },
};
