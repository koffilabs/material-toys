import React, { ReactNode } from "react";
interface NavigationBarArgs {
  children: ReactNode;
}
export const NavigationBar = ({ children }: NavigationBarArgs) => {
  return <div>NavigationBar {children}</div>;
};
