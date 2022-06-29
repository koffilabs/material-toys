import React, { ReactNode, useContext, useRef, useEffect } from "react";
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
  const node = useRef(null);
  const theme = m3(tokens, { variant });
  let width, height;
  let card = css(
    applyReactiveStyle({
      target: "components.Card",
      theme,
      width,
      height,
    })
  );
  useEffect(() => {
    if (node?.current) {
      ({ width, height } = node.current.getBoundingClientRect());
      console.log("new width", width);
      card = css(
        applyReactiveStyle({
          target: "components.Card",
          theme,
          width,
          height,
        })
      );
      console.log("new classname", card);
      // should apply the new created class name
    }
  }, [node]);
  return (
    <Ripple>
      <div ref={node} className={`${card} ${className}`}>
        <div className="state" />
        {children}
      </div>
    </Ripple>
  );
};
