import React, { ReactNode } from "react";
import { MenuIcon } from "@material-yue/icons-react";
import { RippleIcon } from "./RippleIcon";
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
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    onCollapse && onCollapse();
  };
  return (
    <div onClick={clickHandler}>
      {navigationIcon === "collapse" && <RippleIcon icon={MenuIcon} />}
      {children}
    </div>
  );
};
