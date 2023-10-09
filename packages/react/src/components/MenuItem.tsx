import React, { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  selected?: boolean;
}
export const MenuItem = ({ children, selected = false }: MenuItemProps) => {
  return (
    <div className={"mt-menu-item"} data-selected={selected || null}>
      {children}
    </div>
  );
};
