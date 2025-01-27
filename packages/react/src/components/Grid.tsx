import React, { ReactNode } from "react";
import { css } from "@emotion/css";
import { breakpoints, gridStyle } from "@material-toys/common";
interface GridProps {
  children?: ReactNode;
}
interface MediaStyle {
  [key: string]: any;
}
export const Grid = ({ children }: GridProps) => {
  const columnsStyles: MediaStyle[] = [];
  for (let breakpoint of [
    "EXTRA_SMALL",
    "SMALL",
    "SMALL_FLUID",
    "MEDIUM",
    "LARGE",
  ]) {
    const prefix: string = breakpoints[breakpoint].prefix;
    const mediaStyle: MediaStyle = {
      [breakpoints[breakpoint].query]: {},
    };
    columnsStyles.push(mediaStyle);

    for (let i = 1; i <= 12; i++) {
      (prefix ? mediaStyle[breakpoints[breakpoint].query] : gridStyle)[
        `.col-${prefix}${i}`
      ] = {
        gridColumn: `span ${i}`,
        marginRight: 0,
        marginLeft: 0,
      };
    }
  }
  const mtGrid = css([gridStyle, ...columnsStyles]);
  return <div className={mtGrid}>{children}</div>;
};
