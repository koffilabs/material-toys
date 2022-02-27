import React, { useState } from "react";
import { applicationStyle } from "@material-toys/common";
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
} from "@material-toys/icons-react";
import {
  NavigationDrawer,
  NavigationBar,
  NavigationBarItem,
  TopAppBar,
} from "@material-toys/react";
import {
  useMatchMedia,
  MOBILE,
  TABLET,
  LAPTOP,
  DESKTOP,
} from "@material-toys/react";
export const Application2 = () => {
  return <div>Application here</div>;
};
export const Application = ({
  activeItem,
  appBarArea,
  navigationArea,
  bodyArea,
  menuIcon,
  hasCollapseButton = false,
  mobileNavigation = "bar",
  railLabels = "selected",
}) => {
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
    setNavigationCollapsed(!isNavigationCollapsed);
  };
  const navigationBarItems = [
    {
      icon: <OutlinedInboxIcon size={24} />,
      activeIcon: <InboxIcon size={24} />,
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
    <div className={cname}>
      <div className="appBar">
        <TopAppBar
          menuIcon={menuIcon}
          onCollapse={onCollapse}
          navigationIcon={"collapse"}
        >
          {appBarArea}
        </TopAppBar>
      </div>
      <nav className="navigation">
        {mediaMatch === MOBILE && mobileNavigation === "bar" ? (
          <NavigationBar labels={"show"} activeItem={0}>
            <NavigationBarItem
              icon={<OutlinedInboxIcon size={24} />}
              activeIcon={<InboxIcon size={24} />}
              link="/layout"
              iconsAnimations={zoomIn}
            >
              Inbox
            </NavigationBarItem>
            <NavigationBarItem
              icon={<OutlinedTheatersIcon size={24} />}
              activeIcon={<TheatersIcon size={24} />}
              link="/layout"
              iconsAnimations={rectReveal}
            >
              Movies
            </NavigationBarItem>

            <NavigationBarItem
              icon={<OutlinedFavoriteBorderIcon size={24} />}
              activeIcon={<FavoriteIcon size={24} />}
              link="/layout"
              badge={8}
              iconsAnimations={zoomIn}
            >
              Favorites
            </NavigationBarItem>
            <NavigationBarItem
              icon={<OutlinedDeleteIcon size={24} />}
              activeIcon={<DeleteIcon size={24} />}
              link="/layout"
              badge=""
              iconsAnimations={fadeIn}
            >
              Trash
            </NavigationBarItem>
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
