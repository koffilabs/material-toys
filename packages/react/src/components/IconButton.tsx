import React, { MouseEventHandler, ReactNode } from "react";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";
type Type = "toggle" | "";
interface IconButtonProps {
  renderIcon: ({ selected }: { selected?: boolean }) => ReactNode;
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
  renderIcon,
  children,
  className = "default",
  selected = false,
  type = "",
  ...props
}: IconButtonProps) => {
  const { className: iconButtonClass } = useComponentClass({
    path: "components.IconButton",
  });
  return (
    <Ripple>
      <button
        {...props}
        data-variant={type}
        data-selected={selected}
        className={`${iconButtonClass} ${className}`}
      >
        <div className="mt-shape">
          <div className="state" />
          {renderIcon({ selected })}
        </div>
      </button>
    </Ripple>
  );
};
