// import { rgba } from "emotion-rgba";
import { Button } from "./button";
import { FAB } from "./fab";
import { Card } from "./card";
import { NavigationDrawer } from "./navigationdrawer";
import { NavigationBar } from "./navigationbar";
import { NavigationItem, NavigationItemRippleTarget } from "./navigationitem";
import { NavigationBarItem } from "./navigationbaritem";
import { TopAppBar } from "./topappbar";
export interface M3Options {
  variant?: string;
}
const defaultOptions = {
  variant: "",
};
export const m3 = (tokens, options: M3Options = defaultOptions) => {
  // TODO: default options
  return {
    colors: {
      primary: "hsl(20, 70%, 75%)",
      text: "hsl(20, 40%, 30%)",
      accent: "hsl(310, 70%, 70%)",
      resizing: "hsl(60, 95%, 97%)",
    },
    components: {
      _resizingComponent: {
        backgroundColor: "@yue:theme[colors.resizing]",
        backgroundImage: "none !important",
        clipPath: "none",
        color: "transparent",
        border: "1px solid hsl(30, 80%, 80%)",
        borderRadius: "15px",
        "& *": {
          display: "none",
        },
      },
      // Card: {
      //   fontSize: "1rem",
      //   color: "rgba(0, 0, 0, .74)",
      //   padding: "1.618rem",
      //   background: "white",
      //   height: "20vh",
      //   willChange: "transform opacity",
      // },
      Button: Button(tokens, options),
      FAB: FAB(tokens, options),
      Card: Card(tokens, options),
      NavigationDrawer: NavigationDrawer(tokens, options),
      NavigationBar: NavigationBar(tokens, options),
      NavigationItem: NavigationItem(tokens, options),
      NavigationItemRippleTarget: NavigationItemRippleTarget(tokens, options),
      NavigationBarItem: NavigationBarItem(tokens, options),
      TopAppBar: TopAppBar(tokens, options),
    },
  };
};
