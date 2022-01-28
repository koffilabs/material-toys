import React, { ReactNode } from "react";
interface NavigationHeadlineProps {
  children?: ReactNode;
}
export const NavigationHeadline = ({ children }: NavigationHeadlineProps) => {
  return <h1>{children}</h1>;
};
