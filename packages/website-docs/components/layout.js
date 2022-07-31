import React, {useEffect, useState} from "react";
import classes from "./Layout.module.scss";
import {
  OutlinedDarkModeIcon,
  OutlinedLightModeIcon,
  OutlinedHomeIcon,
  HomeIcon,
  MenuIcon,
  OutlinedFastForwardIcon,
  FastForwardIcon,
  OutlinedInfoIcon,
  InfoIcon,
} from "@material-toys/icons-react";
import {
  NavigationDrawer, TopAppBar, Surface, NavigationHeadline, NavigationItem,
} from "@material-toys/react";
import {useMatchMedia, MOBILE, TABLET} from "@material-toys/react";
import {BoltIcon} from "@material-toys/icons-react";
import {useRouter} from "next/router";
import Logo from "../pages/components/Logo";
import {useSwipeable} from "react-swipeable";

export default ({
                  setUIMode,
                  UIMode,
                  railLabels = "selected", children,
                }) => {
  // @ts-ignore
  const [activeItem, setActiveItem] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const router = useRouter();
  useEffect(() => {
    setTransitionClass("");
  }, [UIMode]);
  const navigateTo = (url, attrs = {}) => {
    router.push(url, null, {shallow: true});

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
  const [isNavigationCollapsed, setNavigationCollapsed] = useState(isModalAtStart);
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
      position: "absolute", top: "0", left: "0", right: "0", bottom: "0",
    }}
  >
    <div className={layoutClass}>
      <nav {...swipeHandlers} className={classes.navigation}>
        <NavigationDrawer
          header={<div className={classes.logo}>
            <Logo/>
          </div>}
          // style={{ position: "absolute" }}
          onDismiss={() => {
            setNavigationCollapsed(true);
          }}
          railLabels={railLabels}
          collapsed={isNavigationCollapsed}
          activeItem={activeItem}
          mode={navMode}
        >
          <NavigationItem
            icon={<HomeIcon/>}
            onClick={() => {
              navigateTo("/");
            }}
          >
            <a>Material Toys</a>
          </NavigationItem>
          <NavigationItem
            icon={<BoltIcon/>}
            onClick={() => {
              navigateTo("/quickstart", "quickstart");
            }}
          >
            <a>Quick Start</a>
          </NavigationItem>
          <NavigationItem
            icon={<InfoIcon/>}
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
          <main className={mainClassName}>{children}</main>
        </div>
      </div>
    </div>
  </Surface>);
};
