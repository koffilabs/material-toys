import React, {
  ReactNode,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { Ripple } from "./Ripple";
import merge from "lodash-es/merge";

interface CardProps {
  disabled: boolean;
  className: string;
  children?: ReactNode;
  [prop: string]: any;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const node = useRef<HTMLDivElement>();
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);

  let width, height;
  const [cardClass, setCardClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.Card",
        theme: merge(theme, userTheme(variant)),
      })
    )
  );
  useEffect(() => {
    if (node?.current) {
      ({ width, height } = (
        node.current as HTMLElement
      ).getBoundingClientRect());
      setCardClass(
        css(
          applyReactiveStyle({
            target: "components.Card",
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
      <div ref={node} className={`${cardClass} ${className}`} {...props}>
        <div className="state" />
        {children}
      </div>
    </Ripple>
  );
};
