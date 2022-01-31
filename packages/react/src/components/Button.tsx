import React, { useContext } from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
interface ButtonProps {
  icon: any;
  children?: JSX.Element;
  className?: string;
  disabled?: boolean;
  onClick?: () => {};
}
export const Button = ({
  icon,
  disabled = false,
  children,
  className = "elevated",
}: ButtonProps) => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });

  const btn = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.Button,
      theme,
    })
  );
  return (
    <Ripple>
      <button className={`${btn} ${className}`} disabled={disabled}>
        <div className="state" />
        {icon}
        <div>{children}</div>
      </button>
    </Ripple>
  );
};
