import React, {
  MouseEventHandler,
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
import merge from "lodash-es/merge";

interface ButtonProps {
  icon?: any;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onMouseOut?: MouseEventHandler;
  [prop: string]: any;
}

export const Button = ({
  icon,
  disabled = false,
  children,
  className = "elevated",
  ...props
}: ButtonProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);
  const node = useRef(null);

  let width: number, height: number;
  const [btn, setBtnClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.Button",
        theme: merge(theme, userTheme(variant)),
      })
    )
  );
  useEffect(() => {
    if (node?.current) {
      ({ width, height } = (
        node.current as HTMLElement
      ).getBoundingClientRect());
      setBtnClass(
        css(
          applyReactiveStyle({
            target: "components.Button",
            theme: merge(theme, userTheme(variant)),
            width,
            height,
          })
        )
      );
    }
  }, [node, variant]);
  return (
    <Ripple>
      <button
        ref={node}
        {...props}
        className={`${btn} ${className}`}
        disabled={disabled}
      >
        <div className="mt-shape">
          <div className="state" />
          {icon}
          <div>{children}</div>
        </div>
      </button>
    </Ripple>
  );
};
