"use client";
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { Ripple } from "./Ripple";
import { usePrevious } from "../hooks/usePrevious";
interface FABProps {
  style?: any;
  disabled?: boolean;
  extended?: boolean;
  className?: string;
  icon?: ReactNode;
  children?: ReactNode;
  [prop: string]: any;
}
export const FAB = ({
  children,
  icon,
  className,
  disabled = false,
  style,
  extended = false,
  props,
}: FABProps) => {
  const textNode = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLButtonElement>();
  const { ThemeContext, VariantContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  let sizeClassName;
  switch (true) {
    case className?.includes("small"): {
      sizeClassName = "small";
      break;
    }
    case className?.includes("large"): {
      sizeClassName = "large";
      break;
    }
  }
  const BASE_WIDTH: string =
    // @ts-ignore
    sizeClassName && theme.components.FAB[`&.${sizeClassName}`]
      ? // @ts-ignore
        theme.components.FAB[`&.${sizeClassName}`]?.[".iconContainer"]?.width
      : // @ts-ignore
        theme.components.FAB?.[".iconContainer"]?.width;
  const fab = css(
    applyReactiveStyle({
      target: "components.FAB",
      theme,
    }),
  );
  const [computedWidth, setComputedWidth] = useState("0px");
  const previousExtended = usePrevious(extended);

  useEffect(() => {
    if (extended) {
      const { width } = textNode.current
        ? textNode.current.getBoundingClientRect()
        : { width: 0 };
      // setComputedWidth(`${(icon ? width : width) + parseFloat(BASE_WIDTH)}px`);
      const w = `${width + parseFloat(BASE_WIDTH)}px`;
      setComputedWidth(w);
      root.current &&
        root.current.animate(
          [
            {
              width: BASE_WIDTH,
            },
            {
              width: icon ? w : `${width}px`,
            },
          ],
          {
            duration: typeof previousExtended !== "undefined" ? 150 : 0,
            fill: "forwards",
            easing: "ease-in-out",
          },
        );
      textNode.current &&
        (textNode.current as HTMLElement).animate(
          [
            {
              opacity: 0,
            },
            { opacity: 1 },
          ],
          {
            duration: typeof previousExtended !== "undefined" ? 100 : 0,
            fill: "forwards",
            delay: 50,
            easing: "ease-in-out",
          },
        );
    } else {
      root.current &&
        root.current.animate(
          [
            {
              width: computedWidth,
            },
            {
              width: BASE_WIDTH,
            },
          ],
          {
            duration: typeof previousExtended !== "undefined" ? 150 : 0,
            fill: "forwards",
            easing: "ease-in-out",
          },
        );
      textNode.current &&
        (textNode.current as HTMLElement).animate(
          [
            {
              opacity: 1,
            },
            { opacity: 0 },
          ],
          {
            duration: typeof previousExtended !== "undefined" ? 100 : 0,
            fill: "forwards",
            easing: "ease-in-out",
          },
        );
      setComputedWidth(BASE_WIDTH);
    }
  }, [extended]);
  return (
    <Ripple>
      <button
        disabled={disabled}
        ref={root}
        style={{ ...style }}
        data-extended={extended}
        {...props}
        className={`${fab} ${className ? className : ""}`}
      >
        <div className="state" />
        {icon && <div className={"iconContainer"}>{icon}</div>}
        <div ref={textNode} className="textContainer">
          {children}
        </div>
      </button>
    </Ripple>
  );
};
