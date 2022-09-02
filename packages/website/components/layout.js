import React, {useEffect, useState} from "react";
import classes from "./Layout.module.scss";

import {
  OutlinedDarkModeIcon,
  OutlinedLightModeIcon,
  HomeIcon,
  MenuIcon,
  InfoIcon,
  BoltIcon
} from "@material-toys/icons-react";
import {
  NavigationDrawer, TopAppBar, Surface, NavigationHeadline, NavigationItem,
} from "@material-toys/react";
import {useMatchMedia, MOBILE, TABLET} from "@material-toys/react";
import {useRouter} from "next/router";
import Logo from "../pages/components/Logo";
import {useSwipeable} from "react-swipeable";

export default ({
                  tokens,
                  setUIMode,
                  UIMode,
                  railLabels = "selected", children,
                }) => {
  // @ts-ignore
  // const [activeItem, setActiveItem] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const routes = [
    {i: <HomeIcon />, l: "Material Toys", r: "/"},
    {i: <BoltIcon />, l: "Getting Started", r: "/getting-started"},
    {i: <InfoIcon />, l: "About", r: "/"},
    {l: "Button", r: "/button"},
    {l: "FAB", r: "/fab"},
    {l: "Extended FAB", r: "/extended-fab"},
    {l: "Card", r: "/card"},
    {l: "Grid", r: "/grid"},
    {l: "Navigation Drawer", r: "/navigation-drawer"},
    {l: "Navigation Rail", r: "/navigation-rail"},
    {l: "Navigation Bar", r: "/navigation-bar"},
    {l: "Top App Bar", r: "/top-app-bar"},
  ];
  const router = useRouter();
  useEffect(() => {
    setTransitionClass("");
  }, [UIMode]);
  const activeItem = routes.findIndex(({r}) => r === router.asPath);
  const navigateTo = (url, aI) => {
    router.push(url, null, {shallow: true});
    // setActiveItem(aI);

    if (mediaMatch === MOBILE || mediaMatch === TABLET) {
      setTimeout(() => {
        setNavigationCollapsed(true);
      }, 400);
    }
  };
  // const mtApplication = css(applicationStyle);
  const [mediaMatch] = useMatchMedia();
  const isModalAtStart = mediaMatch === MOBILE || mediaMatch === TABLET;
  const [isNavigationCollapsed, setNavigationCollapsed] = useState(isModalAtStart);
  const [navMode, setNavMode] = useState(isModalAtStart ? "modal" : "drawer");
  const onCollapse = () => {
    setNavigationCollapsed(!isNavigationCollapsed);
  };
  useEffect(() => {
    const isModal = mediaMatch === MOBILE || mediaMatch === TABLET;
    setNavigationCollapsed(isModal);
    setNavMode(isModal ? "modal" : "drawer");
  }, [mediaMatch]);
  useEffect(() => {
    setTransitionClass("");
  }, [UIMode]);

  const mainClassName = `${classes.body} ${isModalAtStart ? classes.collapsed : ""}`;
  const wrapperClassName = `${classes.contentWrapper} ${isModalAtStart ? classes.collapsed : ""}`;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      setNavigationCollapsed(true);
    },
  }, {
    preventDefaultTouchmoveEvent: true,
  });
  const layoutClass = `${classes.layout} ${transitionClass}`;

  return (<Surface
    style={{
      background: tokens[`MdSysColor${UIMode}`],
      position: "absolute", top: "0", left: "0", right: "0", bottom: "0",
    }}
  >
    <div style={{
      background: tokens[`MdSysColorSurface${UIMode}`],
      position: "absolute", top: "0", left: "0", right: "0", bottom: "0",
    }}
         className={layoutClass}>
      <nav {...swipeHandlers} className={classes.navigation}>
        <NavigationDrawer className="primary"
                          header={<div className={classes.logo}>
                            <Logo fill={tokens[`MdSysColorOnBackground${UIMode}`]}/>
                          </div>}
                          onDismiss={() => {
                            setNavigationCollapsed(true);
                          }}
                          railLabels={railLabels}
                          collapsed={isNavigationCollapsed}
                          activeItem={activeItem}
                          mode={navMode}
        >
          {
            routes.slice(0, 3).map((route, index) => <NavigationItem
              icon={route.i}
              key={route.l}
              divider={index === 2}

              onClick={() => {
                  navigateTo(`${route.r}`);
                }}
              >
                <a>{route.l}</a>
              </NavigationItem>
            )
          }
          <div className="primary">
            <NavigationHeadline>Components</NavigationHeadline>
          {
            routes.slice(3).map((route, index) => <NavigationItem
              key={route.l}
              onClick={() => {
                  navigateTo(`${route.r}`);
                }}
              >
                <a>{route.l}</a>
              </NavigationItem>
            )
          }
          </div>
        </NavigationDrawer>
      </nav>
      <div className={wrapperClassName}>
        <div className="appBar">
          <TopAppBar
            navigationIcon={navMode === "modal" ? <MenuIcon/> : null}
            onNavButtonClick={onCollapse}
            headline={"Material Toys"}
            trailingIcons={<div
              className={classes.topAppBarTarget}
              onClick={() => {
                setUIMode((mode) => {
                  setTransitionClass(classes["no-transition"]);
                  return mode === "Light" ? "Dark" : "Light";
                });
              }}
            >
              {/*{ <OutlinedLightModeIcon/><OutlinedDarkModeIcon />}*/}
              {UIMode === "Light" ? (<OutlinedDarkModeIcon/>) : (<OutlinedLightModeIcon/>)}
            </div>}/>
        </div>
        <div className={classes.content}>
          <main
            style={{background: tokens[`MdSysColorBackground${UIMode}`]}}
            className={mainClassName}>{children}</main>
        </div>
      </div>
    </div>
  </Surface>);
};