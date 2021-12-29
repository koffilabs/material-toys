import React, { Component, FC } from "react";
import { applicationStyle } from "@material-yue/common";
import { css } from "@emotion/css";
import { NavigationDrawer } from "./NavigationDrawer";
import { NavigationBar } from "./NavigationBar";
import {
  useMatchMedia,
  MOBILE,
  TABLET,
  LAPTOP,
  DESKTOP,
} from "../hooks/useMatchMedia";
import { NavigationRail } from "./NavigationRail";
interface ApplicationArgs {
  activeItem?: number;
  appBarArea: Component;
  navigationArea: Component;
  bodyArea: Component;
  mobileNavigation?: "bar" | "drawer";
}
export const Application: FC<ApplicationArgs> = ({
  activeItem,
  appBarArea,
  navigationArea,
  bodyArea,
  mobileNavigation = "bar",
}) => {
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
  console.log("mode", navigationMode);
  return (
    <div className={cname}>
      {/*{mediaMatch}*/}
      <div className="appBar">{appBarArea}</div>
      <nav className="navigation">
        {mediaMatch === MOBILE && mobileNavigation === "bar" ? (
          <NavigationBar>{navigationArea}</NavigationBar>
        ) : (
          <NavigationDrawer activeItem={activeItem} mode={navigationMode}>
            {navigationArea}
          </NavigationDrawer>
        )}
      </nav>
      <main className="body">{bodyArea}</main>
    </div>
  );
};
