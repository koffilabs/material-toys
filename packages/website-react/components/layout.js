import React, { useEffect, useState } from "react";
import classes from "./Layout.module.scss";
import { material_tokens } from "@material-toys/common";
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
  OutlinedDarkModeIcon,
  OutlinedLightModeIcon,
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
  setUIMode,
  UIMode,
  navigationArea,
  mobileNavigation = "bar",
  railLabels = "selected",
  children,
}) => {
  // @ts-ignore
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const navigateTo = (url, aI) => {
    router.push(url, null, { shallow: true });
    setActiveItem(aI);
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
  useEffect(() => {
    setTransitionClass("");
  }, [UIMode]);
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
  const layoutClass = `${classes.layout} ${transitionClass}`;
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
      <div className={layoutClass}>
        {mediaMatch !== MOBILE && (
          <nav {...swipeHandlers} className={classes.navigation}>
            <NavigationDrawer
              className="primary"
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
                  navigateTo("/", 0);
                }}
              >
                <a>Material Toys</a>
              </NavigationItem>
              <NavigationItem
                icon={<FastForwardIcon />}
                onClick={() => {
                  navigateTo("/quickstart", 1);
                }}
              >
                <a>Quick start</a>
              </NavigationItem>
              <NavigationItem
                icon={<InfoIcon />}
                onClick={() => {
                  navigateTo("/", 2);
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
              className="primary"
              navigationIcon={navMode === "modal" ? <MenuIcon /> : null}
              onNavButtonClick={onCollapse}
              headline={
                <div className={classes.logo}>
                  <Logo fill={material_tokens[`MdSysColor${UIMode}`]} />
                </div>
              }
              trailingIcons={
                <div
                  className={classes.topAppBarTarget}
                  onClick={() => {
                    setUIMode((mode) => {
                      setTransitionClass(classes["no-transition"]);
                      return mode === "Light" ? "Dark" : "Light";
                    });
                  }}
                >
                  {/*{ <OutlinedLightModeIcon/><OutlinedDarkModeIcon />}*/}
                  {UIMode === "Light" ? (
                    <OutlinedDarkModeIcon />
                  ) : (
                    <OutlinedLightModeIcon />
                  )}
                </div>
              }
            />
          </div>
          <div className={classes.content}>
            <main className={mainClassName}>{children}</main>
            {mediaMatch === MOBILE && (
              <nav>
                <NavigationBar
                  className="primary"
                  labels={"show"}
                  activeItem={activeItem}
                >
                  <NavigationBarItem
                    icon={<OutlinedHomeIcon size={24} />}
                    activeIcon={<HomeIcon size={24} />}
                    link="/layout"
                    onClick={() => {
                      navigateTo("/", 0);
                    }}
                    iconsAnimations={zoomIn}
                  >
                    Material Toys
                  </NavigationBarItem>
                  <NavigationBarItem
                    className="primary"
                    icon={<OutlinedFastForwardIcon size={24} />}
                    activeIcon={<FastForwardIcon size={24} />}
                    link="/layout"
                    onClick={() => {
                      navigateTo("/quickstart", 1);
                    }}
                    iconsAnimations={rectReveal}
                  >
                    Quick start
                  </NavigationBarItem>

                  <NavigationBarItem
                    className="primary"
                    icon={<OutlinedInfoIcon size={24} />}
                    activeIcon={<InfoIcon size={24} />}
                    link="/layout"
                    iconsAnimations={zoomIn}
                  >
                    About
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
