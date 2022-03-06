import React, { ReactNode, useContext } from "react";
import { useTheme } from "../hooks/useTheme";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { css } from "@emotion/css";

interface SurfaceProps {
  children: ReactNode;
  props: any;
}
export const Surface = ({ children, ...props }: SurfaceProps) => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });

  const surfaceTheme = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.Surface,
      theme,
    })
  );

  return (
    <div {...props} className={surfaceTheme}>
      {children}
    </div>
  );
};
