import React, { FC, useContext } from "react";
import { css } from "@emotion/css";
import { useTheme } from "../hooks/useTheme";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import { Ripple } from "./Ripple";

interface NavigationItemProps {
  icon?: React.Component;
  label: string;
  badge?: string;
  active?: boolean;
}
const navigationItemClassName = css({
  display: "flex",
});
const badgeClassName = css({
  marginLeft: "auto",
});
export const NavigationItem: FC<NavigationItemProps> = ({
  icon,
  label,
  badge,
  active = false,
}) => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const itemTheme = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.NavigationItem,
      theme,
    })
  );

  return (
    <Ripple>
      <div data-active={active} className={itemTheme}>
        <div className="state" />
        {icon && icon}
        {label}
        <div className={badgeClassName}>{badge}</div>
      </div>
    </Ripple>
  );
};
