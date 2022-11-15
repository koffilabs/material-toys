import React, {
  FocusEventHandler,
  FormEvent,
  MouseEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
  FocusEvent, ComponentPropsWithoutRef, forwardRef, ForwardedRef, Ref
} from "react";
import {css} from "@emotion/css";
import {applyReactiveStyle, m3} from "@material-toys/common";
import {useThemeContexts} from "../hooks/useThemeContexts";
import merge from "lodash-es/merge";

const CUT_START = 12;

interface OutlinedTextProps extends ComponentPropsWithoutRef<"input"> {
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
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  value?: any;
  supportingText?: string;
  onInput?: (e: FormEvent<HTMLInputElement>) => {};
  maxLength?: number;
  size?: number;
  error?: boolean;
  prefix?: string;
  characterCounter?: boolean;
}


export const OutlinedTextField = forwardRef<HTMLInputElement, OutlinedTextProps>(({
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
                                                                                    onFocus,
                                                                                    onBlur,
                                                                                    supportingText,
                                                                                    value: valueProp = "",
                                                                                    characterCounter = false,
                                                                                    size,
                                                                                    maxLength,
                                                                                    error = false,
                                                                                    prefix = "",
                                                                                    ...props
                                                                                  }, ref) => {

  const {ThemeContext, VariantContext, UserThemeContext} = useThemeContexts();
  const tokens: any = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, {variant});
  const userTheme: any = useContext(UserThemeContext);
  const node = useRef(null);
  const outlineNode = useRef(null);
  const labelNode = useRef<HTMLDivElement>(null);
  const inputNode = useRef<HTMLInputElement>(null);
  ref = inputNode;

  let width: number, height: number;
  const [value, setValue] = useState(`${prefix}${valueProp}`);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFocus, setHasFocus] = useState(false);
  const smallLabelWidth = useRef(0)
  useEffect(() => {
    setValue(`${prefix}${valueProp}`);
  }, [valueProp]);
  useEffect(() => {
    if (value.length === 0) {
      if (outlineNode?.current && inputNode?.current && (inputNode.current !== document.activeElement)) {
        const length = (labelNode.current as HTMLElement).getBoundingClientRect().width
        const start = CUT_START, end = start + length + 8;
        (outlineNode.current as HTMLElement).style.clipPath = getClosedPolygon({start, length})
      }
    }
  }, [value])
  useEffect(() => {
    if (labelNode?.current && outlineNode.current) {
      // labelNode.current.style.transition = "none";
      const cs = window.getComputedStyle(labelNode.current);
      // labelNode.current.style.transform = `scale(0.75)`;
      const width = (labelNode.current as HTMLElement).getBoundingClientRect().width * (value.length ? 1 : .75);
      smallLabelWidth.current = width;
      const length = width, start = CUT_START, end = start + length + 8;

      // initial filled style
      if (value.length) {
        if (outlineNode?.current) {
          const length = smallLabelWidth.current
          const start = CUT_START, end = start + length + 8;
          (outlineNode.current as HTMLElement).style.clipPath = getOpenPolygon({start, end})

        }
      } else {
        if (outlineNode.current) {
          const length = smallLabelWidth.current, start = CUT_START, end = start + length + 8;
          (outlineNode.current as HTMLElement).style.clipPath = getClosedPolygon({start, length})
        }
      }
      setIsLoading(false);
    }
  }, []);
  const [textFieldClass, setTextFieldClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.OutlinedTextField",
        theme: merge(theme, userTheme(variant))
      })
    )
  );
  interface Measures {
    start: number
    length?: number
    end?: number
  }

  const getClosedPolygon = ({start, length = 0}: Measures) => `polygon(
    0 0,
    ${(start + length / 2)}px 0,
    ${(start + length / 2)}px 8px,
    ${(start + length / 2)}px 8px,
    ${(start + length / 2)}px 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0
      )`;
  const getOpenPolygon = ({start, end}: Measures) => `polygon(
        0 0,
        ${start}px 0,
        ${start}px 8px,
        ${end}px 8px,
        ${end}px 0,
        100% 0,
        100% 100%,
        0 100%,
        0 0
          )`;

  interface Node {
    node: HTMLInputElement
  }

  const __onFocus = (e: FocusEvent<HTMLElement>) => {
    setHasFocus(true);
    const length = smallLabelWidth.current, start = CUT_START, end = start + length + 8;

    if (outlineNode.current && value.length === 0) {
      (outlineNode.current as HTMLElement).style.clipPath = getOpenPolygon({start, end})
    }
    (typeof onFocus === "function") && onFocus(e);
  };
  const __onBlur = (e: FocusEvent<HTMLElement>) => {
    const length = smallLabelWidth.current, start = CUT_START, end = start + length + 8;
    if (value.length === 0 && outlineNode.current) {
      (outlineNode.current as HTMLElement).style.clipPath = getClosedPolygon({start, length})

    }
    setHasFocus(false);
    (typeof onBlur === "function") && onBlur(e);
  };

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
            target: "components.OutlinedTextField",
            theme: merge(theme, userTheme(variant)),
            width,
            height
          })
        ));
    }
  }, [node, variant])
  return (
    <div ref={node} {...events}
         className={`${textFieldClass} ${className}${leadingIcon ? " leadingIcon" : ""}${trailingIcon
           ? " trailingIcon" : ""}${disabled ? " disabled" : ""}${error ? " error" : ""}${hasFocus ? " mt-focus" : ""}
           ${isLoading ? " mt-loading" : ""}`}>
      <div className="mt-shape">
        <div className="mt-outline" ref={outlineNode}>

        </div>
        {icon}
        <div className={`container${value.length ? " filled" : ""}`}>
          {leadingIcon && <div className="leadingIcon-container">
            {leadingIcon}
          </div>}
          <div className="mt-state"></div>
          <div ref={labelNode} className="label">{label}</div>
        </div>
        <input ref={inputNode} maxLength={maxLength} {...props} value={value} onInput={__onInput} onFocus={__onFocus}
               onBlur={__onBlur} spellCheck="false"
               disabled={disabled}/>
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
});
