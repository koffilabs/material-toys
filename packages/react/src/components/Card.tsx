import React, {
  ReactNode,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
interface CardProps {
  disabled: boolean;
  className: string;
  onClick?: Function;
  children?: ReactNode;
}
export const Card = ({ children, className }: CardProps) => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const node = useRef(null);
  const theme = m3(tokens, { variant });
  let width, height;
  const [cardClass, setCardClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.Card",
        theme,
      })
    )
  );
  useEffect(() => {
    if (node?.current) {
      ({ width, height } = (
        node.current as HTMLElement
      ).getBoundingClientRect());
      console.log("new width", width);
      setCardClass(
        css(
          applyReactiveStyle({
            target: "components.Card",
            theme,
            width,
            height,
          })
        )
      );
    }
  }, [node]);
  return (
    <Ripple>
      <div ref={node} className={`${cardClass} ${className}`}>
        <div className="state" />
        {children}
      </div>
    </Ripple>
  );
};
