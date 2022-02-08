import React, {
  MouseEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { css } from "@emotion/css";
import { useTheme } from "../hooks/useTheme";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { usePrevious } from "../hooks/usePrevious";
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
  onClick: MouseEventHandler;
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
  ...props
}: NavigationBarItemProps) => {
  const previousActive = usePrevious(active);
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const iconNode = useRef(null);
  const activeIconNode = useRef(null);
  const itemTheme = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.NavigationBarItem,
      theme,
    })
  );
  useEffect(() => {
    const immediate = typeof previousActive === "undefined";
    if (iconsAnimations?.icon && iconsAnimations?.activeIcon) {
      iconNode.current &&
        (iconNode.current as HTMLElement).animate(iconsAnimations.icon, {
          ...animationOptions,
          duration: immediate ? 0 : defaultDuration,
          direction: active ? "normal" : "reverse",
        });
      activeIconNode.current &&
        (activeIconNode.current as HTMLElement).animate(
          iconsAnimations.activeIcon,
          {
            ...animationOptions,
            duration: immediate ? 0 : defaultDuration,
            direction: active ? "normal" : "reverse",
          }
        );
      // animateIcons({ icon: iconNode, activeIcon: activeIconNode });
    } else {
      // default animations
      iconNode.current &&
        (iconNode.current as HTMLElement).animate(defaultKeyframes.icon, {
          ...animationOptions,
          direction: active ? "normal" : "reverse",
          duration: 0,
        });
      activeIconNode.current &&
        (activeIconNode.current as HTMLElement).animate(
          defaultKeyframes.activeIcon,
          {
            ...animationOptions,
            direction: active ? "normal" : "reverse",
            duration: 0,
          }
        );
    }
  }, [active]);
  const _onClick: MouseEventHandler = (e) => {
    // TODO: reverse animation

    typeof onClick === "function" && onClick(e);
  };

  return (
    <div
      onClick={_onClick}
      data-label={label}
      data-active={active}
      className={itemTheme}
      {...props}
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
        </div>
        <div className="mt-children">{children}</div>
        <div className="badge">{badge}</div>
      </div>
    </div>
  );
};
