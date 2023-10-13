import React, { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
}
export const MenuItem = ({
  children,
  leadingIcon,
  trailingIcon,
  selected = false,
  disabled = false,
}: MenuItemProps) => {
  return (
    <div
      className={"mt-menu-item"}
      data-selected={selected || null}
      data-disabled={disabled || null}
    >
      {leadingIcon && <div className="mt-leading-icon">{leadingIcon}</div>}
      {children}
      {trailingIcon && <div className="mt-leading-icon">{trailingIcon}</div>}
    </div>
  );
};
