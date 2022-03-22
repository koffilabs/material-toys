import React, { useEffect, useMemo, useState } from "react";
// import { applicationStyle } from "./mainLayoutStyle";
import classes from "./Layout.module.scss";
import { css } from "@emotion/css";
import {
  MenuIcon,
  OutlinedAccountCircleIcon,
} from "@material-toys/icons-react";
import {
  NavigationDrawer,
  TopAppBar,
  Surface,
  NavigationHeadline,
  NavigationItem,
} from "@material-toys/react";
import { useMatchMedia, MOBILE, TABLET } from "@material-toys/react";
import {
  InboxIcon,
  HomeIcon,
  BoltIcon,
  InfoIcon,
} from "@material-toys/icons-react";
import { useRouter } from "next/router";

export default ({
  activeItem,
  navigationArea,
  mobileNavigation = "bar",
  railLabels = "selected",
  children,
}) => {
  // @ts-ignore
  const router = useRouter();
  const navigateTo = (url) => {
    setTimeout(() => {
      router.push(url);
    }, 500);
  };
  // const mtApplication = css(applicationStyle);
  const [mediaMatch] = useMatchMedia();
  // const cname = `${mtApplication}${
  //   mobileNavigation === "drawer" ? " drawer" : ""
  // }`;

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
  const mainClassName = `${classes.body} ${isModalAtStart ? "collapsed" : ""}`;
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
      <div className={classes.layout}>
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
              <NavigationHeadline>Main</NavigationHeadline>
              <NavigationItem
                icon={<HomeIcon />}
                onClick={() => {
                  navigateTo("/");
                }}
              >
                <a>Material Toys</a>
              </NavigationItem>
              <NavigationItem
                icon={<BoltIcon />}
                onClick={() => {
                  navigateTo("/quickstart");
                }}
              >
                <a>Quick Start</a>
              </NavigationItem>
              <NavigationItem
                icon={<InfoIcon />}
                divider={true}
                onClick={() => {
                  navigateTo("/");
                }}
              >
                <a>About</a>
              </NavigationItem>
              <div className="secondary">
                <NavigationHeadline>Buttons</NavigationHeadline>
                <NavigationItem
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>Button</a>
                </NavigationItem>
                <NavigationItem
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>FAB</a>
                </NavigationItem>
                <NavigationItem
                  divider={true}
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>Extended FAB</a>
                </NavigationItem>
                <NavigationHeadline>Layout</NavigationHeadline>
                <NavigationItem
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>Card</a>
                </NavigationItem>
                <NavigationItem
                  divider={true}
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>Grid</a>
                </NavigationItem>
                <NavigationHeadline>Navigation</NavigationHeadline>
                <NavigationItem
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>Navigation Drawer</a>
                </NavigationItem>
                <NavigationItem
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>Navigation Rail</a>
                </NavigationItem>
                <NavigationItem
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>Navigation Bar</a>
                </NavigationItem>
                <NavigationItem
                  onClick={() => {
                    navigateTo("/");
                  }}
                >
                  <a>Top App Bar</a>
                </NavigationItem>
              </div>
            </NavigationDrawer>
          </nav>
          <main className={mainClassName}>{children}</main>
        </div>
      </div>
    </Surface>
  );
};
