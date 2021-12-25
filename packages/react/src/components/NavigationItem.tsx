import React, { FC } from "react";
import { css } from "@emotion/css";
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
  return (
    <div data-active={active} className={navigationItemClassName}>
      {icon && icon}
      {label}
      <div className={badgeClassName}>{badge}</div>
    </div>
  );
};
