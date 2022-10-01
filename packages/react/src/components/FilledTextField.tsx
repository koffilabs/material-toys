import React, {FormEvent, MouseEventHandler, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {css} from "@emotion/css";
import {applyReactiveStyle, m3} from "@material-toys/common";
import {useTheme} from "../hooks/useTheme";
import merge from "lodash-es/merge";

interface FilledTextProps {
  icon?: any;
  children?: ReactNode;
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onMouseOut?: MouseEventHandler;
}

export const FilledTextField = ({
                                  icon,
                                  label,
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
  const [value, setValue] = useState("");
  const [textFieldClass, setTextFieldClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.FilledTextField",
        theme: merge(theme, userTheme(variant))
      })
    )
  );

  const onInput = (e: FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  }
  const events = {
    onClick, onMouseOver, onMouseDown, onMouseUp, onMouseOut,
  };
  useEffect(() => {
    if (node?.current) {
      ({width, height} = (
        node.current as HTMLElement
      ).getBoundingClientRect());
      setTextFieldClass(
        css(
          applyReactiveStyle({
            target: "components.FilledTextField",
            theme: merge(theme, userTheme(variant)),
            width,
            height
          })
        ));
    }


  }, [node])
  return (
    <div ref={node} {...events} {...props} className={`${textFieldClass} ${className}`}>
      <div className="mt-shape">
        {icon}
        <input onInput={onInput} spellcheck="false" type="text" disabled={disabled}/>
        <div className={`container${value.length ? " filled" : ""}`}>
          <div className="label">{label}</div>
          <div className="activeIndicator"></div>
        </div>
      </div>
    </div>
  );
};
