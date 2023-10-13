import React, {
  FocusEvent,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";

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
    <div
      {...props}
      tabIndex={0}
      className={"mt-menu-item"}
      data-focused={hasFocus || null}
      data-selected={selected || null}
      data-disabled={disabled || null}
    >
      {leadingIcon && <div className="mt-leading-icon">{leadingIcon}</div>}
      {children}
      {trailingIcon && <div className="mt-leading-icon">{trailingIcon}</div>}
    </div>
  );
};
