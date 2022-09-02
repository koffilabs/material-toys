import {
  MT,
  NavigationBarItem,
  NavigationBar,
} from "@material-toys/react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";

import {
  SportsEsportsIcon,
  OutlinedSportsEsportsIcon,
  OutlinedTheatersIcon,
  TheatersIcon,
  OutlinedFavoriteBorderIcon,
  FavoriteIcon,
  OutlinedDeleteIcon,
  DeleteIcon,
} from "@material-toys/icons-react";
import classes from "./navigation-bar.module.scss";
import React, {useContext} from "react";
import {zoomIn, fadeIn, circleReveal, rectReveal, useTheme} from "@material-toys/react";


export default function navigation_bar() {
  const {VariantContext } = useTheme();
  const variant = useContext(VariantContext);

  const navigationBarItems = [
    {
      icon: <OutlinedSportsEsportsIcon size={24}/>,
      activeIcon: <SportsEsportsIcon size={24}/>,
      link: "/layout",
      label: "Inbox",
      iconsAnimations: zoomIn,
    },
    {
      icon: <OutlinedTheatersIcon size={24}/>,
      activeIcon: <TheatersIcon size={24}/>,
      link: "/",
      iconsAnimations: rectReveal,
      label: "Movies",
    },
    {
      icon: <OutlinedFavoriteBorderIcon size={24}/>,
      activeIcon: <FavoriteIcon size={24}/>,
      link: "/layout",
      label: "Favorites",
      iconsAnimations: circleReveal,
    },
    {
      icon: <OutlinedDeleteIcon size={24}/>,
      activeIcon: <DeleteIcon size={24}/>,
      link: "/layout",
      label: "Trash",
      iconsAnimations: fadeIn,
    },
  ];
  return (
    <div className="container">
      <main>
        <h2>Navigation bar</h2>
        <MT variant={variant}>
          <div style={{display: "flex", flex: 1, flexDirection: "column"}}>
            <BlockComponentCanvas showGrid={true}>
              <div className={classes["bar-container"]}>
                <NavigationBar labels={"show"} activeItem={0}>
                  {navigationBarItems.map(
                    ({label, iconsAnimations, icon, activeIcon, link}, i) => {
                      return (
                        <NavigationBarItem
                          key={i}
                          icon={icon}
                          activeIcon={activeIcon}
                          iconsAnimations={iconsAnimations}
                        >
                          <a>{label}</a>
                        </NavigationBarItem>
                      );
                    }
                  )}
                </NavigationBar>
              </div>
            </BlockComponentCanvas>
            <CodeBlock code={`import { MT, NavigationBarItem, NavigationBar, zoomIn, fadeIn, circleReveal, rectReveal } from "@material-toys/react";

const navigationBarItems = [
  {
    icon: <OutlinedSportsEsportsIcon size={24}/>,
    activeIcon: <SportsEsportsIcon size={24}/>,
    link: "/layout",
    label: "Inbox",
    iconsAnimations: zoomIn,
  },
  {
    icon: <OutlinedTheatersIcon size={24}/>,
    activeIcon: <TheatersIcon size={24}/>,
    link: "/",
    iconsAnimations: rectReveal,
    label: "Movies",
  },
  {
    icon: <OutlinedFavoriteBorderIcon size={24}/>,
    activeIcon: <FavoriteIcon size={24}/>,
    link: "/layout",
    label: "Favorites",
    iconsAnimations: circleReveal,
  },
  {
    icon: <OutlinedDeleteIcon size={24}/>,
    activeIcon: <DeleteIcon size={24}/>,
    link: "/layout",
    label: "Trash",
    iconsAnimations: fadeIn,
  },
];
// ...
<NavigationBar labels={"show"} activeItem={0}>
  {navigationBarItems.map(
    ({label, iconsAnimations, icon, activeIcon, link}, i) => {
      return (
        <NavigationBarItem
          key={i}
          icon={icon}
          activeIcon={activeIcon}
          iconsAnimations={iconsAnimations}
        >
          <a>{label}</a>
        </NavigationBarItem>
      );
    }
  )}
</NavigationBar>

`}/>
          </div>
        </MT>
      </main>
    </div>
  );
}
