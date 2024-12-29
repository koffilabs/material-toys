"use client";
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { css } from "@emotion/css";
import merge from "lodash-es/merge";

interface SurfaceProps {
  children: ReactNode;
  className?: string;
  [prop: string]: any;
}
export const Surface = ({ children, className, ...props }: SurfaceProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);
  const node = useRef<HTMLDivElement>(null);

  const [surfaceTheme, setSurfaceTheme] = useState(
    css(
      applyReactiveStyle({
        target: "components.Surface",
        theme: merge(theme, userTheme(variant)),
      }),
    ),
  );
  let width: number, height: number;

  useEffect(() => {
    if (node?.current) {
      ({ width, height } = node.current.getBoundingClientRect());
      setSurfaceTheme(
        css(
          applyReactiveStyle({
            target: "components.Surface",
            theme: merge(theme, userTheme(variant)),
            width,
            height,
          }),
        ),
      );
    }
  }, [node]);
  return (
    <div
      ref={node}
      {...props}
      className={`${surfaceTheme}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
};
