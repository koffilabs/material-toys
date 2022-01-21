import React, { Component, useState } from "react";
import { applicationStyle } from "@material-toys/common";
import { css } from "@emotion/css";
import { NavigationDrawer } from "./NavigationDrawer";
import { NavigationBar } from "./NavigationBar";
import { TopAppBar } from "./TopAppBar";
import {
  useMatchMedia,
  MOBILE,
  TABLET,
  LAPTOP,
  DESKTOP,
} from "../hooks/useMatchMedia";
interface ApplicationArgs {
  activeItem?: number;
  appBarArea: Component;
  navigationArea: Component;
  bodyArea: Component;
  hasCollapseButton?: boolean;
  mobileNavigation?: "bar" | "drawer";
  railLabels?: "show" | "selected" | "none";
}
export const Application = ({
  activeItem,
  appBarArea,
  navigationArea,
  bodyArea,
  hasCollapseButton = false,
  mobileNavigation = "bar",
  railLabels = "selected",
}: ApplicationArgs) => {
  const [isNavigationCollapsed, setNavigationCollapsed] = useState(false);
  // @ts-ignore
  const yueApplication = css(applicationStyle);
  const [mediaMatch] = useMatchMedia();
  const cname = `${yueApplication}${
    mobileNavigation === "drawer" ? " drawer" : ""
  }`;

  // mobileNavigation === drawer
  // mobile: modal navigation drawer
  // tablet: modal navigation drawer
  // laptop: navigation drawer

  // mobileNavigation === bar
  // mobile: navigation bar
  // tablet: navigation rail
  // laptop: permanent navigation drawer
  const navigationMode =
    mediaMatch === MOBILE
      ? "modal"
      : mediaMatch === TABLET
      ? mobileNavigation === "drawer"
        ? "modal"
        : "rail"
      : mediaMatch === LAPTOP || mediaMatch === DESKTOP
      ? "drawer"
      : "rail";
  const onCollapse = () => {
    console.log("onCollapse!");
    setNavigationCollapsed(!isNavigationCollapsed);
  };
  return (
    <div className={cname}>
      <div className="appBar">
        <TopAppBar onCollapse={onCollapse} navigationIcon={"collapse"}>
          {appBarArea}
        </TopAppBar>
      </div>
      <nav className="navigation">
        {mediaMatch === MOBILE && mobileNavigation === "bar" ? (
          <NavigationBar>
            navbar here
            {/*{navigationArea}*/}
          </NavigationBar>
        ) : (
          <NavigationDrawer
            railLabels={railLabels}
            collapsed={isNavigationCollapsed}
            activeItem={activeItem}
            mode={navigationMode}
          >
            {navigationArea}
          </NavigationDrawer>
        )}
      </nav>
      <main className="body">{bodyArea}</main>
    </div>
  );
};
