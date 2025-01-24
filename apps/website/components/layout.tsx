"use client";
import {
  OutlinedHomeIcon as HomeIcon,
  MenuIcon,
  OutlinedDarkModeIcon,
  OutlinedLightModeIcon,
  OutlinedPaletteIcon as PaletteIcon,
  RoundedCornerIcon,
} from "@material-toys/icons-react";
import {
  MOBILE,
  NavigationDrawer,
  NavigationHeadline,
  NavigationItem,
  Surface,
  TABLET,
  TopAppBar,
  useMatchMedia,
} from "@material-toys/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import GithubIcon from "./GithubIcon";
import classes from "./Layout.module.scss";
import Logo from "./Logo";
import TwitterIcon from "./TwitterIcon";

export default ({ tokens, setUIMode, UIMode, children }) => {
  // @ts-ignore
  // const [activeItem, setActiveItem] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const routes = [
    { i: <HomeIcon />, l: "Material Toys", r: "/" },
    { i: <PaletteIcon />, l: "Theming", r: "/theming" },
    { i: <RoundedCornerIcon />, l: "Shapes", r: "/shapes" },
    // {i: <BoltIcon />, l: "Getting Started", r: "/getting-started"},
    // {i: <InfoIcon />, l: "About", r: "/"},
    { l: "Button", r: "/button" },
    { l: "Icon button", r: "/icon-button" },
    { l: "FAB", r: "/fab" },
    { l: "Extended FAB", r: "/extended-fab" },
    { l: "Checkbox", r: "/checkbox" },
    { l: "Radio Button", r: "/radio-button" },
    { l: "Switch", r: "/switch" },
    { l: "Filled Text Field", r: "/filled-text-field" },
    { l: "Outlined Text Field", r: "/outlined-text-field" },
    { l: "Tabs", r: "/tabs" },
    { l: "Progress indicators", r: "/progress-indicators" },
    { l: "Card", r: "/card" },
    { l: "Grid", r: "/grid" },
    { l: "Navigation Drawer", r: "/navigation-drawer" },
    { l: "Navigation Rail", r: "/navigation-rail" },
    { l: "Navigation Bar", r: "/navigation-bar" },
    { l: "Top App Bar", r: "/top-app-bar" },
  ];
  const router = useRouter();
  useEffect(() => {
    setTransitionClass("");
  }, [UIMode]);
  const pathname = usePathname();
  const mobileQuery = "(max-width: 599px)";
  const tabletQuery = "(min-width: 600px) and (max-width: 1239px)";
  const laptopQuery = "(min-width: 1240px) and (max-width: 1439px)";
  const desktopQuery = "(min-width: 1440px)";
  // const activeItem = routes.findIndex(({ r }) => r === pathname);
  const [activeItem, setActiveItem] = useState(
    routes.findIndex(({ r }) => r === pathname),
  );
  useEffect(() => {
    setActiveItem(routes.findIndex(({ r }) => r === pathname));
  }, [pathname]);
  const navigateTo = (url, aI?) => {
    router.push(url);
    // setActiveItem(aI);

    if (isMobile || isTablet) {
      setTimeout(() => {
        setNavigationCollapsed(true);
      }, 400);
    }
  };
  // const mtApplication = css(applicationStyle);
  const isMobile = useMatchMedia(mobileQuery);
  const isTablet = useMatchMedia(tabletQuery);

  const isModalAtStart = isMobile || isTablet;
  const [isNavigationCollapsed, setNavigationCollapsed] =
    useState(isModalAtStart);

  const [navMode, setNavMode] = useState(isModalAtStart ? "modal" : "drawer");
  const onCollapse = () => {
    console.log("is nav collapsed", isNavigationCollapsed);
    setNavigationCollapsed((old) => !old);
  };

  useEffect(() => {
    const isModal = isMobile || isTablet;
    setNavigationCollapsed(isModal);
    setNavMode(isModal ? "modal" : "drawer");
  }, [isMobile, isTablet]);
  useEffect(() => {
    setTransitionClass("");
  }, [UIMode]);

  const mainClassName = `${classes.body} ${
    isModalAtStart ? classes.collapsed : ""
  }`;
  const wrapperClassName = `${classes.contentWrapper} ${
    isModalAtStart ? classes.collapsed : ""
  }`;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      setNavigationCollapsed(true);
    },
    preventScrollOnSwipe: true,
  });
  const layoutClass = `${classes.layout} ${transitionClass}`;

  return (
    <Surface
      style={{
        background: tokens[`MdSysColor${UIMode}`],
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      }}
    >
      <div
        style={{
          background: tokens[`MdSysColorSurface${UIMode}`],
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
        className={layoutClass}
      >
        <nav {...swipeHandlers} className={classes.navigation}>
          <NavigationDrawer
            className="primary"
            header={
              <div className={classes.logo}>
                <Logo fill={tokens[`MdSysColorOnBackground${UIMode}`]} />
              </div>
            }
            onDismiss={() => {
              setNavigationCollapsed(true);
            }}
            collapsed={isNavigationCollapsed}
            activeItem={activeItem}
            mode={navMode}
          >
            {routes.slice(0, 3).map((route, index) => (
              <NavigationItem
                icon={route.i}
                key={route.l}
                active={index === activeItem}
                divider={false}
                onClick={() => {
                  setActiveItem(index);
                  navigateTo(`${route.r}`);
                }}
              >
                <a href={route.r}>{route.l}</a>
              </NavigationItem>
            ))}
            <div className="primary">
              <NavigationHeadline>Components</NavigationHeadline>
              {routes.slice(3).map((route, index) => (
                <NavigationItem
                  key={route.l}
                  active={index + 3 === activeItem}
                  onClick={() => {
                    setActiveItem(index + 3);

                    navigateTo(`${route.r}`);
                  }}
                >
                  <Link href={`${route.r}`}>{route.l}</Link>
                </NavigationItem>
              ))}
            </div>
          </NavigationDrawer>
        </nav>
        <div className={wrapperClassName}>
          <div className="appBar">
            <TopAppBar
              navigationIcon={navMode === "modal" ? <MenuIcon /> : null}
              onNavButtonClick={onCollapse}
              headline={"Material Toys"}
              trailingIcons={[
                <div key="tw" style={{ marginRight: 16 }}>
                  <a href="https://twitter.com/MaterialToys">
                    <TwitterIcon />
                  </a>
                </div>,
                <div key="gh" style={{ marginRight: 32 }}>
                  <a href="https://github.com/koffilabs/material-toys">
                    <GithubIcon />
                  </a>
                </div>,
                <div
                  key="darkmode"
                  className={classes.topAppBarTarget}
                  onClick={() => {
                    setUIMode((mode) => {
                      return mode === "Light" ? "Dark" : "Light";
                    });
                    setTransitionClass(classes["no-transition"]);
                  }}
                >
                  {UIMode === "Light" ? (
                    <OutlinedDarkModeIcon />
                  ) : (
                    <OutlinedLightModeIcon />
                  )}
                </div>,
              ]}
            />
          </div>
          <div className={classes.content}>
            <main
              style={{
                color: tokens[`MdSysColorOnSurface${UIMode}`],
                background: tokens[`MdSysColorBackground${UIMode}`],
              }}
              className={mainClassName}
            >
              {children}
            </main>
          </div>
        </div>
      </div>
    </Surface>
  );
};
