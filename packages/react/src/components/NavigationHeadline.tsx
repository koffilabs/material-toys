import React, { FC } from "react";
interface NavigationHeadlineProps {}
export const NavigationHeadline: FC<NavigationHeadlineProps> = ({
  children,
}) => {
  return <h1>{children}</h1>;
};
