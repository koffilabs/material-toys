import dynamic from "next/dynamic";
import {
  useTheme,
  NavigationItem,
  NavigationHeadline,
} from "@material-toys/react";
import { useRouter } from "next/router";
import classes from "./index.module.scss";

import {
  InboxIcon,
  HomeIcon,
  BoltIcon,
  InfoIcon,
} from "@material-toys/icons-react";
import Link from "next/link";
import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common";
import { useEffect, useState } from "react";

const MainLayout = dynamic(
  () =>
    import("../components/MainLayout").then((mod) => {
      return mod.MainLayout;
    }),
  {
    ssr: false,
  }
);

const tokens = { ...material_tokens_polyfill, ...material_tokens };
export default function Index() {
  const router = useRouter();

  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);

  return (
    <ThemeContext.Provider value={reactiveTokens}>
      <VariantContext.Provider value={""}>
        <div className={classes}>
          <MainLayout
            activeItem={0}
            hasCollapseButton={true}
            railLabels={"selected"}
            navigationArea={
              <>
                <NavigationHeadline>Main</NavigationHeadline>
                <NavigationItem
                  icon={<HomeIcon />}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <a>Material Toys</a>
                </NavigationItem>
                <NavigationItem
                  icon={<BoltIcon />}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <a>Quick Start</a>
                </NavigationItem>
                <NavigationItem
                  icon={<InfoIcon />}
                  divider={true}
                  onClick={() => {
                    router.push("/quickstart");
                  }}
                >
                  <a>About</a>
                </NavigationItem>
                <div className="secondary">
                  <NavigationHeadline>Buttons</NavigationHeadline>
                  <NavigationItem
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Button</a>
                  </NavigationItem>
                  <NavigationItem
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>FAB</a>
                  </NavigationItem>
                  <NavigationItem
                    divider={true}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Extended FAB</a>
                  </NavigationItem>
                  <NavigationHeadline>Layout</NavigationHeadline>
                  <NavigationItem
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Card</a>
                  </NavigationItem>
                  <NavigationItem
                    divider={true}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Grid</a>
                  </NavigationItem>
                  <NavigationHeadline>Navigation</NavigationHeadline>
                  <NavigationItem
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Navigation Drawer</a>
                  </NavigationItem>
                  <NavigationItem
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Navigation Rail</a>
                  </NavigationItem>
                  <NavigationItem
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Navigation Bar</a>
                  </NavigationItem>
                  <NavigationItem
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Top App Bar</a>
                  </NavigationItem>
                </div>
              </>
            }
            mobileNavigation="drawer"
          />
        </div>
      </VariantContext.Provider>
    </ThemeContext.Provider>
  );
}
