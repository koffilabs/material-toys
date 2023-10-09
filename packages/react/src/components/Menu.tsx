import React, { MouseEventHandler, ReactNode } from "react";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";
type Type = "toggle" | "";
interface MenuProps {
  renderItem: () => ReactNode;
  items: ReactNode[];
  children: ReactNode;
  [prop: string]: any;
}

export const Menu = ({ renderItem, children, ...props }: MenuProps) => {
  const { className: menuClass } = useComponentClass({
    path: "components.Menu",
  });
  return (
    <div {...props} className={menuClass}>
      <div className="mt-shape">
        <div className="state" />
        {children}
      </div>
    </div>
  );
};
