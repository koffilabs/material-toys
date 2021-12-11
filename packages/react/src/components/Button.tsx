import React, { useContext } from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
interface ButtonProps {
  icon: any;
  children?: JSX.Element;
  className: string;
  disabled: boolean;
  onClick?: Function;
}
export const Button = ({
  icon,
  disabled,
  children,
  className,
}: ButtonProps): JSX.Element => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant = useContext(VariantContext);

  const theme = m3(tokens, { variant });

  const btn = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.Button,
      theme,
    })
  );
  return (
    <Ripple>
      <button className={`${btn} ${className}`}>
        <div className="state" />
        {icon}
        <div>{children}</div>
      </button>
    </Ripple>
  );
};
