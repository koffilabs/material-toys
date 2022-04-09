import dynamic from "next/dynamic";
import {
  useTheme,
  NavigationBarItem,
  NavigationBar,
} from "@material-toys/react";
// import {} from "@material-toys/react";
import { useRouter } from "next/router";
import { MenuIcon } from "@material-toys/icons-react";

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
import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common/dist/common.esm";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { ComponentCanvas } from "../../components/ComponentCanvas";
import { zoomIn, fadeIn, circleReveal, rectReveal } from "@material-toys/react";

const tokens = { ...material_tokens_polyfill, ...material_tokens };
export default function NavBar() {
  const router = useRouter();

  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);
  const navigationBarItems = [
    {
      icon: <OutlinedSportsEsportsIcon size={24} />,
      activeIcon: <SportsEsportsIcon size={24} />,
      link: "/layout",
      label: "Inbox",
      iconsAnimations: zoomIn,
    },
    {
      icon: <OutlinedTheatersIcon size={24} />,
      activeIcon: <TheatersIcon size={24} />,
      link: "/",
      iconsAnimations: rectReveal,
      label: "Movies",
    },
    {
      icon: <OutlinedFavoriteBorderIcon size={24} />,
      activeIcon: <FavoriteIcon size={24} />,
      link: "/layout",
      label: "Favorites",
      iconsAnimations: circleReveal,
    },
    {
      icon: <OutlinedDeleteIcon size={24} />,
      activeIcon: <DeleteIcon size={24} />,
      link: "/layout",
      label: "Trash",
      iconsAnimations: fadeIn,
    },
  ];
  return (
    <Layout>
      <ThemeContext.Provider value={reactiveTokens}>
        <VariantContext.Provider value={""}>
          <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <ComponentCanvas>
              <div className={classes["bar-container"]}>
                <NavigationBar labels={"show"} activeItem={0}>
                  {navigationBarItems.map(
                    ({ label, iconsAnimations, icon, activeIcon, link }, i) => {
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
            </ComponentCanvas>
          </div>
        </VariantContext.Provider>
      </ThemeContext.Provider>
    </Layout>
  );
}
