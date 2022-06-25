import React, { MouseEventHandler, ReactNode, useContext } from "react";
import { css } from "@emotion/css";
import { useTheme } from "../hooks/useTheme";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { Ripple } from "./Ripple";
import { merge } from "lodash";

interface NavigationItemProps {
  icon?: ReactNode | null;
  badge?: string;
  active?: boolean;
  divider?: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler;
  railLabel?: "show" | "selected" | "none";
  className?: string;
}
export const NavigationItem = ({
  icon,
  children,
  badge,
  active = false,
  divider = false,
  onClick = () => {},
  railLabel = "selected",
  className = "",
}: NavigationItemProps) => {
  const { ThemeContext, VariantContext, ThemeFunctionContext } = useTheme();
  const userTheme: any = useContext(ThemeFunctionContext);
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const finalTheme = merge(theme, userTheme(variant));
  const itemTheme = css(
    applyReactiveStyle({
      target: "components.NavigationItem",
      theme: finalTheme,
    })
  );
  const railTheme = css(
    applyReactiveStyle({
      target: "components.RailContainer",
      theme: finalTheme,
    })
  );
  const rippleTarget = css(
    applyReactiveStyle({
      target: "components.NavigationItemRippleTarget",
      theme: finalTheme,
    })
  );
  // const rippleTarget = css({
  //   overflow: "hidden",
  //   borderRadius: "24px",
  // });
  return (
    <>
      <div
        data-active={active}
        className={`${railTheme}${className ? ` ${className}` : ""}`}
      >
        {railLabel !== "none" && <div className="railContent">{children}</div>}
      </div>
      <Ripple>
        <div onClick={onClick} className={rippleTarget}>
          <div
            data-rail-label={railLabel}
            data-active={active}
            className={`${itemTheme}${className ? ` ${className}` : ""}`}
          >
            <div className="state" />
            <div className="itemContent">
              {icon}
              <div className="children">{children}</div>
              <div className="badge">{badge}</div>
            </div>
          </div>
        </div>
      </Ripple>
      {divider && <div className={"divider"} />}
    </>
  );
};
