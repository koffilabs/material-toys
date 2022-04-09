import dynamic from "next/dynamic";
import {
  useTheme,
  NavigationItem,
  NavigationDrawer,
  FAB,
} from "@material-toys/react";
// import {} from "@material-toys/react";
import { useRouter } from "next/router";
import { MenuIcon } from "@material-toys/icons-react";

import {
  InboxIcon,
  SendIcon,
  EditIcon,
  FavoriteBorderIcon,
  DeleteOutlineIcon,
  OutlinedCircleIcon,
  ChangeHistoryIcon,
  CheckBoxOutlineBlankIcon,
} from "@material-toys/icons-react";
import classes from "./navigation-rail.module.scss";
import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common/dist/common.esm";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { ComponentCanvas } from "../../components/ComponentCanvas";

const Application = dynamic(
  () =>
    import("@material-toys/react").then((mod) => {
      return mod.Application;
    }),
  {
    ssr: false,
  }
);
const tokens = { ...material_tokens_polyfill, ...material_tokens };
export default function NavigationRail() {
  const router = useRouter();

  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);
  const navigationItems = [
    {
      icon: <InboxIcon size={24} />,
      link: "/layout",
      label: "Inbox",
    },
    {
      icon: <SendIcon size={24} />,
      link: "/",
      label: "Outbox",
    },
    {
      icon: <FavoriteBorderIcon size={24} />,
      link: "/layout",
      label: "Favorites",
    },
    {
      icon: <DeleteOutlineIcon size={24} />,
      link: "/layout",
      label: "Trash",
    },
  ];
  return (
    <Layout>
      <ThemeContext.Provider value={reactiveTokens}>
        <VariantContext.Provider value={""}>
          <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <ComponentCanvas>
              <div className={classes["rail-container"]}>
                <NavigationDrawer
                  railLabels={"selected"}
                  activeItem={0}
                  mode="rail"
                >
                  {navigationItems.map(({ label, icon, link }, i) => {
                    return (
                      <NavigationItem
                        key={i}
                        icon={icon}
                        badge={i === 0 ? "100+" : ""}
                      >
                        <a>{label}</a>
                      </NavigationItem>
                    );
                  })}
                </NavigationDrawer>
              </div>
              <div className={classes["rail-container"]}>
                <NavigationDrawer
                  railLabels={"selected"}
                  activeItem={0}
                  mode="rail"
                  justify={"center"}
                >
                  {navigationItems.map(({ label, icon, link }, i) => {
                    return (
                      <NavigationItem
                        key={i}
                        icon={icon}
                        badge={i === 0 ? "100+" : ""}
                      >
                        <a>{label}</a>
                      </NavigationItem>
                    );
                  })}
                </NavigationDrawer>
              </div>
              <div className={classes["rail-container"]}>
                <NavigationDrawer
                  railLabels={"show"}
                  activeItem={0}
                  mode="rail"
                  justify={"end"}
                >
                  {navigationItems.map(({ label, icon, link }, i) => {
                    return (
                      <NavigationItem
                        key={i}
                        icon={icon}
                        badge={i === 0 ? "100+" : ""}
                      >
                        <a>{label}</a>
                      </NavigationItem>
                    );
                  })}
                </NavigationDrawer>
              </div>
            </ComponentCanvas>
            Blah blah
            <ComponentCanvas>
              <div className={classes["rail-container"]}>
                <NavigationDrawer
                  railLabels={"show"}
                  activeItem={0}
                  mode="rail"
                >
                  {navigationItems.map(({ label, icon, link }, i) => {
                    return (
                      <NavigationItem
                        key={i}
                        icon={icon}
                        badge={i === 0 ? "100+" : ""}
                      >
                        <a>{label}</a>
                      </NavigationItem>
                    );
                  })}
                </NavigationDrawer>
              </div>
              <div className={classes["rail-container"]}>
                <NavigationDrawer
                  railLabels={"selected"}
                  activeItem={0}
                  mode="rail"
                >
                  {navigationItems.map(({ label, icon, link }, i) => {
                    return (
                      <NavigationItem
                        key={i}
                        icon={icon}
                        badge={i === 0 ? "100+" : ""}
                      >
                        <a>{label}</a>
                      </NavigationItem>
                    );
                  })}
                </NavigationDrawer>
              </div>
              <div className={classes["rail-container"]}>
                <NavigationDrawer
                  railLabels={"none"}
                  activeItem={0}
                  mode="rail"
                >
                  {navigationItems.map(({ label, icon, link }, i) => {
                    return (
                      <NavigationItem
                        key={i}
                        icon={icon}
                        badge={i === 0 ? "100+" : ""}
                      >
                        <a>{label}</a>
                      </NavigationItem>
                    );
                  })}
                </NavigationDrawer>
              </div>
            </ComponentCanvas>
            <ComponentCanvas>
              <div className={classes["rail-container"]}>
                <NavigationDrawer
                  railLabels={"selected"}
                  activeItem={0}
                  fab={<FAB icon={<EditIcon />} className="level1" />}
                  menu={<MenuIcon size={24} />}
                  mode="rail"
                  justify={"center"}
                >
                  {navigationItems.map(({ label, icon, link }, i) => {
                    return (
                      <NavigationItem
                        key={i}
                        icon={icon}
                        badge={i === 0 ? "100+" : ""}
                      >
                        <a>{label}</a>
                      </NavigationItem>
                    );
                  })}
                </NavigationDrawer>
              </div>
            </ComponentCanvas>
          </div>
        </VariantContext.Provider>
      </ThemeContext.Provider>
    </Layout>
  );
}
