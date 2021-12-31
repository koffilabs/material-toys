import React, { FC, ReactElement, useContext } from "react";
import { css } from "@emotion/css";
import { useTheme } from "../hooks/useTheme";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import { Ripple } from "./Ripple";

interface NavigationItemProps {
  icon?: React.Component;
  badge?: string;
  active?: boolean;
  divider?: boolean;
  onClick?: Function;
}
const badgeClassName = css({
  marginLeft: "auto",
});
export const NavigationItem: FC<NavigationItemProps> = ({
  icon,
  children,
  badge,
  active = false,
  divider = false,
  onClick = () => {},
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
    <>
      <Ripple>
        <div data-active={active} onClick={onClick} className={itemTheme}>
          <div className="state" />
          {icon}
          {children}
          <div className={badgeClassName}>{badge}</div>
        </div>
      </Ripple>
      {divider && <div className={"divider"} />}
    </>
  );
};
