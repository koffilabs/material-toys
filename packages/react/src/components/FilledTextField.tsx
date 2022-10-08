import React, {
  FormEvent,
  MouseEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import {css} from "@emotion/css";
import {applyReactiveStyle, m3} from "@material-toys/common";
import {useTheme} from "../hooks/useTheme";
import merge from "lodash-es/merge";

interface FilledTextProps {
  icon?: any;
  children?: ReactNode;
  label: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onMouseOut?: MouseEventHandler;
  onKeyDown?: (e: KeyboardEvent) => {};
  value?: any;
  supportingText?: string;
  onInput?: (e: FormEvent<HTMLInputElement>) => {};
  maxLength?: number;
  size?: number;
  error?: boolean;
  prefix?: string;
  characterCounter?: boolean;
}

export const FilledTextField = ({
                                  icon,
                                  leadingIcon,
                                  trailingIcon,
                                  label,
                                  disabled = false,
                                  children,
                                  className = "",
                                  onClick,
                                  onMouseOver,
                                  onMouseDown,
                                  onMouseUp,
                                  onMouseOut,
                                  onInput,
                                  onKeyDown,
                                  supportingText,
                                  value: valueProp = "",
                                  characterCounter = false,
                                  size,
                                  maxLength,
                                  error = false,
                                  prefix = "",
                                  ...props
                                }: FilledTextProps) => {

  const {ThemeContext, VariantContext, ThemeFunctionContext} = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, {variant});
  const userTheme: any = useContext(ThemeFunctionContext);
  const node = useRef(null);

  let width: number, height: number;
  const [value, setValue] = useState(`${prefix}${valueProp}`);
  useEffect(() => {
    setValue(`${prefix}${valueProp}`);
  }, [valueProp]);
  const [textFieldClass, setTextFieldClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.FilledTextField",
        theme: merge(theme, userTheme(variant))
      })
    )
  );
  const __onInput = (e: FormEvent<HTMLInputElement>) => {
    const target = (e.target as HTMLInputElement);
    if (prefix) {
      if (!target.value.startsWith(prefix)) {
        target.value = `${prefix}${target.value}`;
      }
    }
    // substring: android does not honor maxLength before the blur
    setValue(target.value.substring(0, maxLength));
    (typeof onInput === "function") && onInput(e);
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
    <div ref={node} {...events}
         className={`${textFieldClass} ${className}${leadingIcon ? " leadingIcon" : ""}${trailingIcon
           ? " trailingIcon" : ""}${disabled ? " disabled" : ""}${error ? " error" : ""}`}>
      <div className="mt-shape">
        {icon}
        <input maxLength={maxLength} {...props} value={value} onInput={__onInput} spellCheck="false"
               disabled={disabled}/>
        <div className={`container${value.length ? " filled" : ""}`}>
          {leadingIcon && <div className="leadingIcon-container">
            {leadingIcon}
          </div>}
          <div className="mt-state"></div>
          <div className="label">{label}</div>
          <div className="activeIndicator"></div>
        </div>
        {trailingIcon && <div className="trailingIcon-container">
          {trailingIcon}
        </div>}

      </div>
      <div className="supportingTextContainer">
        {supportingText && <div className="supportingText">{supportingText}</div>}
        {characterCounter && maxLength && <div className="characterCounter">{value.length}/{maxLength}</div>}
      </div>
    </div>
  );
};
