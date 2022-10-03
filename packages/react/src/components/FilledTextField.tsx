import React, {
  ChangeEvent,
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
  value?: any;
  onInput?: (e: FormEvent<HTMLInputElement>) => {};
}

export const FilledTextField = ({
                                  icon,
                                  leadingIcon,
                                  trailingIcon,
                                  label,
                                  disabled = false,
                                  children,
                                  className,
                                  onClick,
                                  onMouseOver,
                                  onMouseDown,
                                  onMouseUp,
                                  onMouseOut,
                                  onInput,
                                  value: valueProp = "",
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
  useEffect(() => {
    setValue(valueProp);
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
    setValue((e.target as HTMLInputElement).value);
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
         className={`${textFieldClass} ${className}${leadingIcon ? " leadingIcon" : ""}${trailingIcon ? " trailingIcon" : ""}`}>
      <div className="mt-shape">
        {icon}
        <input {...props} value={value} onInput={__onInput} spellCheck="false" type="text" disabled={disabled}/>
        <div className={`container${value.length ? " filled" : ""}`}>
          {leadingIcon && <div className="leadingIcon-container">
            {leadingIcon}
          </div>}
          <div className="label">{label}</div>
          <div className="activeIndicator"></div>
        </div>
        {trailingIcon && <div className="trailingIcon-container">
          {trailingIcon}
        </div>}

      </div>
    </div>
  );
};
