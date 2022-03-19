import React, { useEffect, useMemo, useState } from "react";
import { applicationStyle } from "./mainLayoutStyle";

import { css } from "@emotion/css";
import {
  MenuIcon,
  OutlinedAccountCircleIcon,
} from "@material-toys/icons-react";
import { NavigationDrawer, TopAppBar, Surface } from "@material-toys/react";
import { useMatchMedia, MOBILE, TABLET } from "@material-toys/react";

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
    const isModal = mediaMatch === MOBILE || mediaMatch === TABLET;
    setNavigationCollapsed(isModal);
    setNavMode(isModal ? "modal" : "drawer");
  }, [mediaMatch]);
  const mainClassName = `body ${isModalAtStart ? "collapsed" : ""}`;
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
            navigationIcon={navMode === "modal" ? <MenuIcon /> : null}
            onNavButtonClick={onCollapse}
            headline={"Material Toys"}
            trailingIcons={[<OutlinedAccountCircleIcon />]}
          />
        </div>
        <div className="content">
          <nav className="navigation">
            <NavigationDrawer
              style={{ position: "absolute" }}
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
          <main className={mainClassName}>
            <h1>Material Toys</h1>
            <h2>A Material You implementation for React</h2>
          </main>
        </div>
      </div>
    </Surface>
  );
};
