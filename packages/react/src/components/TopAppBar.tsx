import React, { Component, ReactNode, useContext } from "react";
import { RippleIcon } from "./RippleIcon";
import { DESKTOP, LAPTOP, useMatchMedia } from "../hooks/useMatchMedia";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useTheme } from "../hooks/useTheme";
import merge from "lodash-es/merge";

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
  const { ThemeContext, VariantContext, ThemeFunctionContext } = useTheme();
  const userTheme: any = useContext(ThemeFunctionContext);
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    onNavButtonClick && onNavButtonClick();
  };
  const barTheme = css(
    applyReactiveStyle({
      target: "components.TopAppBar",
      theme: merge(theme, userTheme(variant)),
    })
  );
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
