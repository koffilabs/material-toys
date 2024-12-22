"use client";
import React, { MouseEventHandler, ReactNode, useEffect, useRef } from "react";
import { usePrevious } from "../hooks/usePrevious";
import { useComponentClass } from "../hooks/useComponentClass";

const animationOptions: KeyframeAnimationOptions = {
  fill: "forwards",
};
const defaultDuration = 200;
const defaultKeyframes = {
  icon: [{ opacity: "1" }, { opacity: "0" }],
  activeIcon: [{ opacity: "0" }, { opacity: "1" }],
};
interface NavigationBarItemProps {
  icon?: React.Component;
  activeIcon?: React.Component;
  iconsAnimations?: { icon: []; activeIcon: [] };
  badge?: string;
  active?: boolean;
  children?: ReactNode;
  label?: "show" | "selected" | "none";
  className?: string;
  onClick: MouseEventHandler;
  [prop: string]: any;
}
interface Rest {
  className?: string;
}
export const NavigationBarItem = ({
  icon,
  activeIcon,
  iconsAnimations,
  children,
  badge,
  active = false,
  label = "show",
  onClick,
  className = "",
  ...props
}: NavigationBarItemProps & Partial<Rest>) => {
  const previousActive = usePrevious(active);
  const iconNode = useRef<HTMLDivElement>();
  const activeIconNode = useRef<HTMLDivElement>();
  const { className: itemTheme } = useComponentClass({
    path: "components.NavigationBarItem",
  });

  useEffect(() => {
    const immediate = typeof previousActive === "undefined";
    if (iconsAnimations?.icon && iconsAnimations?.activeIcon) {
      iconNode.current &&
        iconNode.current.animate(iconsAnimations.icon, {
          ...animationOptions,
          duration: immediate ? 0 : defaultDuration,
          direction: active ? "normal" : "reverse",
        });
      activeIconNode.current &&
        activeIconNode.current.animate(iconsAnimations.activeIcon, {
          ...animationOptions,
          duration: immediate ? 0 : defaultDuration,
          direction: active ? "normal" : "reverse",
        });
      // animateIcons({ icon: iconNode, activeIcon: activeIconNode });
    } else {
      // default animations
      iconNode.current &&
        iconNode.current.animate(defaultKeyframes.icon, {
          ...animationOptions,
          direction: active ? "normal" : "reverse",
          duration: 0,
        });
      activeIconNode.current &&
        activeIconNode.current.animate(defaultKeyframes.activeIcon, {
          ...animationOptions,
          direction: active ? "normal" : "reverse",
          duration: 0,
        });
    }
  }, [active]);
  const _onClick: MouseEventHandler = (e) => {
    // TODO: reverse animation

    typeof onClick === "function" && onClick(e);
  };
  return (
    <div
      {...props}
      onClick={_onClick}
      data-label={label}
      data-active={active}
      className={`${itemTheme}${className ? ` ${className}` : ""}`}
    >
      <div className="state" />
      <div
        className={`mt-itemContent ${
          label === "none"
            ? "mt-no-icon"
            : label === "selected"
            ? "mt-selected"
            : ""
        }`}
      >
        <div className="mt-activeIndicator" />
        <div className="mt-iconContainer">
          <div className="mt-icon" ref={iconNode}>
            {icon}
          </div>
          <div className="mt-activeIcon" ref={activeIconNode}>
            {activeIcon}
          </div>
          {typeof badge !== "undefined" && (
            <div className="mt-badge">{badge}</div>
          )}
        </div>
        <div className="mt-children">{children}</div>
      </div>
    </div>
  );
};
