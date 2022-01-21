import React, { ReactNode } from "react";
import { MenuIcon } from "@material-toys/icons-react";
import { RippleIcon } from "./RippleIcon";
import { DESKTOP, LAPTOP, useMatchMedia } from "../hooks/useMatchMedia";
interface TopAppBarProps {
  onCollapse: () => void;
  children: ReactNode;
  navigationIcon?: "collapse" | "";
}
export const TopAppBar = ({
  navigationIcon = "",
  children,
  onCollapse = () => {},
}: TopAppBarProps) => {
  const [mediaMatch] = useMatchMedia();
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    onCollapse && onCollapse();
  };
  return (
    <div onClick={clickHandler}>
      {(mediaMatch === LAPTOP || mediaMatch === DESKTOP) &&
        navigationIcon === "collapse" && <RippleIcon icon={MenuIcon} />}
      {children}
    </div>
  );
};
