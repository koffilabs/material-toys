import React, {
  FocusEvent,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";
import { Ripple } from "./Ripple";

interface MenuItemProps {
  children: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  [prop: string]: any;
}
export const MenuItem = ({
  children,
  leadingIcon,
  trailingIcon,
  selected = false,
  disabled = false,
  ...props
}: MenuItemProps) => {
  const [hasFocus, setHasFocus] = useState(false);
  return (
    <Ripple>
      <div
        {...props}
        tabIndex={0}
        className={"mt-menu-item"}
        data-focused={hasFocus || null}
        data-selected={selected || null}
        data-disabled={disabled || null}
      >
        {/*<div className="mt-shape"></div>*/}

        {leadingIcon && <div className="mt-leading-icon">{leadingIcon}</div>}
        {children}
        {trailingIcon && <div className="mt-leading-icon">{trailingIcon}</div>}
      </div>
    </Ripple>
  );
};
