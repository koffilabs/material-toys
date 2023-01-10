import React, { ReactNode } from "react";

interface TabSectionProps {
  children?: ReactNode;
}
export const TabSection = ({ children }: TabSectionProps) => {
  return <div>{children}</div>;
};
