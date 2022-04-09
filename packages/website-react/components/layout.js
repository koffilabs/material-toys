import React, { useEffect, useMemo, useState } from "react";
import classes from "./Layout.module.scss";

import {
  NavigationDrawer,
  NavigationBar,
  NavigationBarItem,
  TopAppBar,
  Surface,
  NavigationHeadline,
  NavigationItem,
  useMatchMedia,
  MOBILE,
  TABLET,
  zoomIn,
  fadeIn,
  circleReveal,
  rectReveal,
} from "@material-toys/react";
import {
  OutlinedAccountCircleIcon,
  OutlinedHomeIcon,
  HomeIcon,
  OutlinedFastForwardIcon,
  FastForwardIcon,
  OutlinedInfoIcon,
  InfoIcon,
} from "@material-toys/icons-react";
import { useRouter } from "next/router";
import Logo from "../pages/components/Logo";
import { useSwipeable } from "react-swipeable";

export default ({
  activeItem,
  navigationArea,
  mobileNavigation = "bar",
  railLabels = "selected",
  children,
}) => {
  // @ts-ignore
  const router = useRouter();
  const navigateTo = (url, attrs = {}) => {
    router.push(url, null, { shallow: true });
    if (mediaMatch === MOBILE || mediaMatch === TABLET) {
      setTimeout(() => {
        setNavigationCollapsed(true);
      }, 400);
    }
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
  const [navMode, setNavMode] = useState(isModalAtStart ? "rail" : "drawer");
  const onCollapse = () => {
    // setNavMode((state) => {
    //   return state === "modal" ? "drawer" : "modal";
    // });
    setNavigationCollapsed(!isNavigationCollapsed);
  };
  useEffect(() => {
    const isModal = mediaMatch === MOBILE || mediaMatch === TABLET;
    setNavigationCollapsed(isModal);
    setNavMode(isModal ? "rail" : "drawer");
  }, [mediaMatch]);
  const mainClassName = `${classes.body} ${
    isModalAtStart ? classes.collapsed : ""
  }`;
  const wrapperClassName = `${classes.contentWrapper} ${
    isModalAtStart ? classes.collapsed : ""
  }`;
  const swipeHandlers = useSwipeable(
    {
      onSwipedLeft: (eventData) => {
        setNavigationCollapsed(true);
      },
    },
    {
      preventDefaultTouchmoveEvent: true,
    }
  );
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
        {mediaMatch !== MOBILE && (
          <nav {...swipeHandlers} className={classes.navigation}>
            <NavigationDrawer
              // style={{ position: "absolute" }}
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
                icon={<FastForwardIcon />}
                onClick={() => {
                  navigateTo("/quickstart", "quickstart");
                }}
              >
                <a>Quick Start</a>
              </NavigationItem>
              <NavigationItem
                icon={<InfoIcon />}
                onClick={() => {
                  navigateTo("/");
                }}
              >
                <a>About</a>
              </NavigationItem>
            </NavigationDrawer>
          </nav>
        )}
        <div className={wrapperClassName}>
          <div className="appBar">
            <TopAppBar
              navigationIcon={navMode === "modal" ? <MenuIcon /> : null}
              onNavButtonClick={onCollapse}
              headline={
                <div className={classes.logo}>
                  <Logo />
                </div>
              }
              trailingIcons={[<OutlinedAccountCircleIcon />]}
            />
          </div>
          <div className={classes.content}>
            <main className={mainClassName}>{children}</main>
            {mediaMatch === MOBILE && (
              <nav>
                <NavigationBar labels={"show"} activeItem={0}>
                  <NavigationBarItem
                    icon={<OutlinedHomeIcon size={24} />}
                    activeIcon={<HomeIcon size={24} />}
                    link="/layout"
                    iconsAnimations={zoomIn}
                  >
                    Inbox
                  </NavigationBarItem>
                  <NavigationBarItem
                    icon={<OutlinedFastForwardIcon size={24} />}
                    activeIcon={<FastForwardIcon size={24} />}
                    link="/layout"
                    iconsAnimations={rectReveal}
                  >
                    Movies
                  </NavigationBarItem>

                  <NavigationBarItem
                    icon={<OutlinedInfoIcon size={24} />}
                    activeIcon={<InfoIcon size={24} />}
                    link="/layout"
                    badge={8}
                    iconsAnimations={zoomIn}
                  >
                    Favorites
                  </NavigationBarItem>
                </NavigationBar>
              </nav>
            )}
          </div>
        </div>
      </div>
    </Surface>
  );
};
