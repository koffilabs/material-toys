import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";
import { useOnMount } from "../hooks/useOnMount";
type Type = "toggle" | "";
interface MenuProps {
  renderItem: () => ReactNode;
  items: ReactNode[];
  children: ReactNode;
  [prop: string]: any;
}
const registry = [];
export const Menu = ({ renderItem, children, ...props }: MenuProps) => {
  const node = useRef<HTMLDivElement>();
  const menuId = useRef(Math.random());
  const { className: menuClass } = useComponentClass({
    path: "components.Menu",
  });
  useOnMount(() => {
    registry.push(menuId.current);
    const onKeyDown = () => {
      // TODO: change the selected node
      console.log("onKeyDown handler here, the node ref is", node);
    };
    document.body.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.removeEventListener("keydown", onKeyDown);
      registry.pop();
    };
  });
  return (
    <div ref={node} tabIndex={0} {...props} className={menuClass}>
      <div className="mt-shape">
        <div className="state" />
        {children}
      </div>
    </div>
  );
};
