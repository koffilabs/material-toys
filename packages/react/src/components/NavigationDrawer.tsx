import React, { cloneElement, FC, useContext, useEffect, JSX } from "react";
import { css } from "@emotion/css";
import { usePrevious } from "../hooks/usePrevious";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import { useTheme } from "../hooks/useTheme";
import { NavigationItem } from "./NavigationItem";

const scrim = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  // TODO: use tokens instead
  background: "rgba(0, 0, 0, .4)",
});

const Scrim = () => {
  return <div className={scrim}>Scrim</div>;
};

interface NavigationDrawerProps {
  mode?: "drawer" | "modal" | "rail";
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({
  children,
  mode = "drawer",
}): JSX.Element => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant = useContext(VariantContext);
  const onClick = () => {
    console.log("clicked");
  };
  const NavigatorItemMapper = (child: JSX.ReactFragment) => {
    if (child.props && child.props.children && child.type !== NavigationItem) {
      return React.Children.map(child.props.children, NavigatorItemMapper);
    }
    console.log("[mapper] child - ", child.type === NavigationItem);
    return child.type === NavigationItem
      ? cloneElement(child, { onClick })
      : child;
  };

  let styleObj: any = {
    // transition: ".3s width ease-in-out",
    width: `${mode === "rail" ? "80" : "360"}px`,
  };
  const theme = m3(tokens, { variant });

  const drawerTheme = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.NavigationDrawer,
      theme,
    })
  );

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
  const drawer = css(styleObj);

  useEffect(() => {
    // TODO: animations here
    if (mode === "drawer" && previousMode === "rail") {
      console.log("animation: rail to drawer");
    }
    if (mode === "rail" && previousMode === "drawer") {
      console.log("animation: drawer to rail");
    }
  }, [mode]);
  return (
    <>
      {mode === "modal" && <Scrim />}
      <div data-mode={mode} className={`${drawer} ${drawerTheme}`}>
        {React.Children.map(children, NavigatorItemMapper)}
      </div>
    </>
  );
};
