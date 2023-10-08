import React, { MouseEventHandler, ReactNode } from "react";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";
type Type = "toggle" | "";
interface DividerProps {
  variant: "horizontal" | "vertical";
}

export const Divider = ({ variant = "horizontal", ...props }: DividerProps) => {
  const { className: dividerClass } = useComponentClass({
    path: "components.Divider",
  });
  return <div className={dividerClass} data-variant={variant}></div>;
};
