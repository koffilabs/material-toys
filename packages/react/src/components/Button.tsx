import React, { ReactNode, useContext } from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
import { merge } from "lodash";

interface ButtonProps {
  icon: any;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => {};
}
export const Button = ({
  icon,
  disabled = false,
  children,
  className = "elevated",
  ...props
}: ButtonProps) => {
  const { ThemeContext, VariantContext, ThemeFunctionContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(ThemeFunctionContext);

  const btn = css(
    applyReactiveStyle({
      target: "components.Button",
      theme: merge(theme, userTheme(variant)),
    })
  );
  return (
    <Ripple>
      <button {...props} className={`${btn} ${className}`} disabled={disabled}>
        <div className="state" />
        {icon}
        <div>{children}</div>
      </button>
    </Ripple>
  );
};
