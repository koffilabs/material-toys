import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
interface FABProps {
  style?: any;
  disabled: boolean;
  extended?: boolean;
  className: string;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => {};
}
export const FAB = ({
  children,
  icon,
  disabled,
  className,
  style,
  extended = false,
}: FABProps) => {
  const textNode = useRef(null);
  const root = useRef(null);
  const { ThemeContext, VariantContext } = useTheme();
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
      target: m3(tokens, { variant }).components.FAB,
      theme,
    })
  );
  const [computedWidth, setComputedWidth] = useState("0px");
  useEffect(() => {
    console.log("extended from fab is", extended);
    if (extended) {
      const { width } = (
        textNode.current as HTMLElement
      ).getBoundingClientRect();
      setComputedWidth(`${(icon ? width : 0) + parseFloat(BASE_WIDTH)}px`);
      root.current.animate(
        [
          {
            width: BASE_WIDTH,
          },
          {
            width: `${(icon ? width : 0) + parseFloat(BASE_WIDTH)}px`,
          },
        ],
        {
          duration: 100,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
    } else {
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
          duration: 100,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
      setComputedWidth(BASE_WIDTH);
    }
  }, [extended]);
  return (
    <Ripple>
      <button
        ref={root}
        style={{ ...style }}
        data-extended={extended}
        disabled={disabled}
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
