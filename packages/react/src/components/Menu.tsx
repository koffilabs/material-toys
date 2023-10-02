import React, { MouseEventHandler, ReactNode } from "react";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";
type Type = "toggle" | "";
interface MenuProps {
  [prop: string]: any;
}

export const Menu = ({ renderIcon, children, ...props }: MenuProps) => {
  const { className: menuClass } = useComponentClass({
    path: "components.IconButton",
  });
  return (
    <div {...props}>
      <div className="mt-shape">
        <div className="state" />
        This is a menu
      </div>
    </div>
  );
};
