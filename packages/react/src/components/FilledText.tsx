import React, {MouseEventHandler, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {css} from "@emotion/css";
import {applyReactiveStyle, m3} from "@material-toys/common";
import {useTheme} from "../hooks/useTheme";
import merge from "lodash-es/merge";

interface FilledTextProps {
  icon?: any;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onMouseOut?: MouseEventHandler;
}

export const Button = ({
                         icon,
                         disabled = false,
                         children,
                         className = "elevated",
                         onClick,
                         onMouseOver,
                         onMouseDown,
                         onMouseUp,
                         onMouseOut,
                         ...props
                       }: FilledTextProps) => {
  const {ThemeContext, VariantContext, ThemeFunctionContext} = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, {variant});
  const userTheme: any = useContext(ThemeFunctionContext);
  const node = useRef(null);

  let width: number, height: number;
  const [textInputClass, setTextInputClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.Button",
        theme: merge(theme, userTheme(variant))
      })
    )
  );
  const events = {
    onClick, onMouseOver, onMouseDown, onMouseUp, onMouseOut,
  };
  useEffect(() => {
    if (node?.current) {
      ({width, height} = (
        node.current as HTMLElement
    ).getBoundingClientRect());
      setTextInputClass(
        css(
          applyReactiveStyle({
            target: "components.FilledText",
            theme: merge(theme, userTheme(variant)),
            width,
            height
          })
        ));
    }


  }, [node])
  return (
      <div ref={node} {...events} {...props} className={`${textInputClass} ${className}`}>
        <div className="mt-shape">
          {icon}
          <input type="text" disabled={disabled}/>
          <div>{children}</div>
        </div>
      </div>
  );
};
