import React, {
  MouseEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { Ripple } from "./Ripple";
import merge from "lodash-es/merge";
import { useComponentClass } from "../hooks/useComponentClass";
type Type = "toggle" | "";
interface IconButtonProps {
  icon?: any;
  selected?: boolean;
  children?: ReactNode;
  className?: string;
  type?: Type;
  onClick?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onMouseOut?: MouseEventHandler;
  [prop: string]: any;
}

export const IconButton = ({
  icon,
  children,
  className = "default",
  selected = false,
  type = "",
  ...props
}: IconButtonProps) => {
  console.log("icon button type =", type);
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);
  const node = useRef<HTMLButtonElement>(null);
  const { className: iconButtonClass } = useComponentClass({
    path: "components.IconButton",
  });
  return (
    <Ripple>
      <button
        ref={node}
        {...props}
        data-variant={type}
        data-selected={selected}
        className={`${iconButtonClass} ${className}`}
      >
        <div className="mt-shape">
          <div className="state" />
          {children}
        </div>
      </button>
    </Ripple>
  );
};
