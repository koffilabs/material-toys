import React, { useEffect, useMemo, useState } from "react";
import { applicationStyle } from "./mainLayoutStyle";
// import { applicationStyle } from "@material-toys/common";

import { css } from "@emotion/css";
import { zoomIn, fadeIn, circleReveal, rectReveal } from "@material-toys/react";
import {
  InboxIcon,
  OutlinedInboxIcon,
  OutlinedTheatersIcon,
  TheatersIcon,
  OutlinedFavoriteBorderIcon,
  FavoriteIcon,
  OutlinedDeleteIcon,
  DeleteIcon,
  MenuIcon,
  OutlinedAccountCircleIcon,
} from "@material-toys/icons-react";
import {
  NavigationDrawer,
  NavigationBar,
  NavigationBarItem,
  TopAppBar,
  Surface,
} from "@material-toys/react";
import {
  useMatchMedia,
  MOBILE,
  TABLET,
  LAPTOP,
  DESKTOP,
} from "@material-toys/react";

export const MainLayout = ({
  activeItem,
  navigationArea,
  mobileNavigation = "bar",
  railLabels = "selected",
}) => {
  // @ts-ignore
  const mtApplication = css(applicationStyle);
  const [mediaMatch] = useMatchMedia();
  const cname = `${mtApplication}${
    mobileNavigation === "drawer" ? " drawer" : ""
  }`;

  // mobileNavigation === drawer
  // mobile: modal navigation drawer
  // tablet: modal navigation drawer
  // laptop: navigation drawer
  const isModalAtStart = mediaMatch === MOBILE || mediaMatch === TABLET;
  const [isNavigationCollapsed, setNavigationCollapsed] =
    useState(isModalAtStart);
  const [navMode, setNavMode] = useState(isModalAtStart ? "modal" : "drawer");
  const onCollapse = () => {
    // setNavMode((state) => {
    //   return state === "modal" ? "drawer" : "modal";
    // });
    setNavigationCollapsed(!isNavigationCollapsed);
  };
  useEffect(() => {
    console.log("mediaMatch changed to", mediaMatch);
    const isModal = mediaMatch === MOBILE || mediaMatch === TABLET;
    setNavigationCollapsed(isModal);
    setNavMode(isModal ? "modal" : "drawer");
  }, [mediaMatch]);

  useEffect(() => {
    console.log("isNavigationCollapsed is", isNavigationCollapsed);
  }, [isNavigationCollapsed]);
  return (
    <Surface
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      }}
    >
      <div className={cname}>
        <div className="appBar">
          <TopAppBar
            navigationIcon={<MenuIcon />}
            onNavButtonClick={onCollapse}
            headline={"Material Toys"}
            trailingIcons={[<OutlinedAccountCircleIcon />]}
          />
        </div>
        <div className="content">
          <nav className="navigation">
            <NavigationDrawer
              onDismiss={() => {
                setNavigationCollapsed(true);
              }}
              railLabels={railLabels}
              collapsed={isNavigationCollapsed}
              activeItem={activeItem}
              mode={navMode}
            >
              {navigationArea}
            </NavigationDrawer>
          </nav>
          <main className="body">
            <h1>Material Toys</h1>
            <h2>A Material You implementation for React</h2>
          </main>
        </div>
      </div>
    </Surface>
  );
};
