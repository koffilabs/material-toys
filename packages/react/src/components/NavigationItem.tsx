import React, { MouseEventHandler, ReactNode, useContext } from "react";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";
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
  const { className: itemTheme } = useComponentClass({
    path: "components.NavigationItem",
  });
  const { className: railTheme } = useComponentClass({
    path: "components.RailContainer",
  });
  const { className: rippleTarget } = useComponentClass({
    path: "components.NavigationItemRippleTarget",
  });

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
