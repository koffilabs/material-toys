import React, { Component, ReactNode } from "react";
import { RippleIcon } from "./RippleIcon";
import { DESKTOP, LAPTOP, useMatchMedia } from "../hooks/useMatchMedia";
interface TopAppBarProps {
  onCollapse: () => void;
  children?: ReactNode;
  menuIcon?: Component;
  navigationIcon?: "collapse" | "";
}
export const TopAppBar = ({
  navigationIcon = "",
  children,
  menuIcon,
  onCollapse = () => {},
}: TopAppBarProps) => {
  const [mediaMatch] = useMatchMedia();
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    onCollapse && onCollapse();
  };
  return (
    <div onClick={clickHandler}>
      {(mediaMatch === LAPTOP || mediaMatch === DESKTOP) &&
        navigationIcon === "collapse" && <RippleIcon icon={menuIcon} />}
      {children}
    </div>
  );
};
