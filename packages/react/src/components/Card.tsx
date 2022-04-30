import React, { ReactNode, useContext } from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
interface CardProps {
  disabled: boolean;
  className: string;
  onClick?: Function;
  children?: ReactNode;
}
export const Card = ({ children, className }: CardProps) => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);

  const theme = m3(tokens, { variant });

  const card = css(
    applyReactiveStyle({
      target: "components.Card",
      theme,
    })
  );
  return (
    <Ripple>
      <div className={`${card} ${className}`}>
        <div className="state" />
        {children}
      </div>
    </Ripple>
  );
};
