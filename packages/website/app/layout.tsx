"use client";
import "../css/main.scss";
import dynamic from "next/dynamic";
import Logo from "../components/Logo";
import GithubIcon from "../components/GithubIcon";
import TwitterIcon from "../components/TwitterIcon";

import { useState, useEffect } from "react";
import {
  MT,
  useMatchMedia,
  MOBILE,
  TABLET,
  Surface,
  NavigationDrawer,
  NavigationItem,
  NavigationHeadline,
  TopAppBar,
} from "@material-toys/react";
import { useRouter } from "next/navigation";
import classes from "./Layout.module.scss";
import { useSwipeable } from "react-swipeable";

import { material_tokens } from "@material-toys/common";
import {
  OutlinedDarkModeIcon,
  OutlinedLightModeIcon,
  OutlinedHomeIcon as HomeIcon,
  MenuIcon,
  OutlinedPaletteIcon as PaletteIcon,
  RoundedCornerIcon,
  // InfoIcon,
  // BoltIcon
} from "@material-toys/icons-react";
import Link from "next/link";
const Layout = dynamic(
  () =>
    import("../components/layout").then((mod) => {
      return mod.default;
    }),
  {
    ssr: false,
  },
);

const tokens = { ...material_tokens };
// tokens.MdSysColorPrimaryContainer = tokens.MdSysColorSurface;

export default function app({ children }) {
  let activeItem = 0;
  const [UIMode, setUIMode] = useState("Light");
  useEffect(() => {
    // tokens.MdSysColorSecondaryContainerLight = "#eae3f9";
    // tokens.MdSysColorSurfaceLight = "#f7f4fc";
  }, []);
  const myTheme = (variant) => {
    return {
      components: {
        NavigationItem: {
          ".primary &": {
            // backgroundColor: tokens[`MdSysColorSurface${variant}`],
            backgroundColor: "transparent",
          },
        },
        NavigationDrawer: {
          "&.primary": {
            // backgroundColor: tokens[`MdSysColorSurface${variant}`],
            backgroundColor: "transparent",
          },
          "&.primary[data-mode=modal]": {
            zIndex: 10,
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
            // backgroundColor: "transparent",
          },
        },
        NavigationBar: {
          "&.primary": {
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
          },
        },
        NavigationBarItem: {
          ".primary &": {
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
            // backgroundColor: "red",
          },
        },
        TopAppBar: {
          backgroundColor: "transparent",
          "&.primary": {
            // backgroundColor: tokens[`MdSysColorSurface${variant}`],
          },
        },
      },
    };
  };

  return (
    <html>
      <body>
        <MT tokens={tokens} theme={myTheme} variant={UIMode}>
          <Layout
            tokens={tokens}
            setUIMode={setUIMode}
            UIMode={UIMode}
            activeItem={activeItem}
            hasCollapseButton={true}
            railLabels={"selected"}
            mobileNavigation="drawer"
          >
            {children}
          </Layout>
        </MT>
        <style global jsx>
          {`
            html,
            body,
            #__next,
            div#__next > div {
              height: 100%;
            }
          `}
        </style>
      </body>
    </html>
  );
}
