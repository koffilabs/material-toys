import React, { ReactNode, useContext } from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
interface FABProps {
  disabled: boolean;
  className: string;
  children: ReactNode;
  onClick?: () => {};
}
export const FAB = ({ children, disabled, className }: FABProps) => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);

  const theme = m3(tokens, { variant });

  const fab = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.FAB,
      theme,
    })
  );
  return (
    <Ripple>
      <button disabled={disabled} className={`${fab} ${className}`}>
        <div className="state" />
        {children}
      </button>
    </Ripple>
  );
};
