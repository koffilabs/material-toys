import React from "react";
import { RippleIcon } from "./RippleIcon";
import { useComponentClass } from "../hooks/useComponentClass";

interface TopAppBarProps {
  type?: "center-aligned" | "small" | "medium" | "large";
  onNavButtonClick: () => void;
  headline: string;
  navigationIcon: JSX.Element;
  trailingIcons?: JSX.Element;
  className?: string;
}
export const TopAppBar = ({
  type = "center-aligned",
  navigationIcon,
  trailingIcons,
  headline,
  onNavButtonClick = () => {},
  className = "",
}: TopAppBarProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    onNavButtonClick && onNavButtonClick();
  };
  const { className: barTheme } = useComponentClass({
    path: "components.TopAppBar",
  });
  return (
    <div
      data-type={type}
      className={`${barTheme}${className ? ` ${className}` : ""}`}
    >
      {navigationIcon && (
        <div onClick={clickHandler} className="mt-leading-navigation-icon">
          {/*{(mediaMatch === LAPTOP || mediaMatch === DESKTOP) &&*/}
          {/*  navigationIcon === "collapse" && */}
          <RippleIcon icon={navigationIcon} />
          {/*}*/}
        </div>
      )}
      <div className="mt-headline">{headline}</div>
      <div className="mt-trailing-icons">
        {/*{trailingIcons &&*/}
        {/*  trailingIcons.map((trailingIcon: ReactNode, index) => (*/}
        {/*    <RippleIcon key={index} icon={trailingIcon} />*/}
        {/*  ))}*/}
        {trailingIcons}
      </div>
    </div>
  );
};
