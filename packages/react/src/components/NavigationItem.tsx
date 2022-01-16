import React, { MouseEventHandler, ReactNode, useContext } from "react";
import { css } from "@emotion/css";
import { useTheme } from "../hooks/useTheme";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import { Ripple } from "./Ripple";

interface NavigationItemProps {
  icon?: React.Component;
  badge?: string;
  active?: boolean;
  divider?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler;
  railLabel?: "show" | "selected" | "none";
}
export const NavigationItem = ({
  icon,
  children,
  badge,
  active = false,
  divider = false,
  onClick = () => {},
  railLabel = "selected",
}: NavigationItemProps) => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const itemTheme = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.NavigationItem,
      theme,
    })
  );
  const rippleTarget = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.NavigationItemRippleTarget,
      theme,
    })
  );
  // const rippleTarget = css({
  //   overflow: "hidden",
  //   borderRadius: "24px",
  // });
  return (
    <>
      <Ripple>
        <div onClick={onClick} className={rippleTarget}>
          <div
            data-rail-label={railLabel}
            data-active={active}
            className={itemTheme}
          >
            <div className="state" />
            <div className="itemContent">
              {icon}
              <div className="children">{children}</div>
              <div className="badge">{badge}</div>
            </div>
            {railLabel !== "none" && (
              <div className="railContent">{children}</div>
            )}
          </div>
        </div>
      </Ripple>
      {divider && <div className={"divider"} />}
    </>
  );
};
