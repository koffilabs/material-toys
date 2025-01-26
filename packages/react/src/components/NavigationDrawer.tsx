"use client";
import React, {
  cloneElement,
  useState,
  ReactNode,
  ReactElement,
  ComponentType,
  Component,
} from "react";
import { FAB } from "./FAB";
import { css } from "@emotion/css";
import { usePrevious } from "../hooks/usePrevious";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { NavigationItem } from "./NavigationItem";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";
const scrim = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 5,
  // TODO: use tokens instead
  background: "rgba(0, 0, 0, .4)",
});

const Scrim = ({ ...props }) => {
  return <div className={`scrim ${scrim}`} {...props} />;
};

interface NavigationDrawerProps {
  onDismiss?: () => void;
  collapsed?: boolean;
  fab?: ReactNode;
  menu?: ReactNode;
  header?: ReactNode;
  children?: ReactNode;
  mode?: "drawer" | "modal" | "rail";
  justify?: "start" | "center" | "end";
  className?: string;
}

export const NavigationDrawer = ({
  collapsed,
  children,
  fab,
  menu,
  header,
  onDismiss = () => {},
  mode = "drawer",
  justify = "start",
  className = "",
  ...props
}: NavigationDrawerProps) => {
  let styleObj: any = {
    width: `${mode === "rail" ? "80" : "360"}px`,
  };
  const { className: drawerTheme } = useComponentClass({
    path: "components.NavigationDrawer",
  });

  const previousMode = usePrevious(mode);
  if (mode === "modal") {
    styleObj = {
      ...styleObj,
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 110,
    };
  }
  // const drawer = css(styleObj);

  return (
    <>
      {mode === "modal" && !collapsed && <Scrim onClick={onDismiss} />}
      <div
        data-mode={mode}
        data-collapsed={collapsed}
        data-justify={justify}
        {...props}
        className={`${drawerTheme}${className ? ` ${className}` : ""}`}
      >
        <header>{header}</header>
        <div className="scroller">
          <div className="buttonsContainer">
            {menu && (
              <Ripple>
                <div className="menuContainer">
                  {menu}
                  <div className="state" />
                </div>
              </Ripple>
            )}
            {fab}
          </div>
          <div className="listContainer">{children}</div>
        </div>
      </div>
    </>
  );
};
