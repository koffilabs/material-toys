"use client";
import React, {
  FocusEventHandler,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
  FocusEvent,
  ComponentPropsWithoutRef,
  forwardRef,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useThemeContexts } from "../hooks/useThemeContexts";
import merge from "lodash-es/merge";

interface FilledTextProps extends ComponentPropsWithoutRef<"input"> {
  icon?: any;
  children?: ReactNode;
  label: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  disabled?: boolean;
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
  [prop: string]: any;
}
export type Ref = HTMLInputElement;

export const FilledTextField = forwardRef<Ref, FilledTextProps>(
  (
    {
      icon,
      leadingIcon,
      trailingIcon,
      label,
      disabled = false,
      children,
      className = "",
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
    },
    ref
  ) => {
    const { ThemeContext, VariantContext, UserThemeContext } =
      useThemeContexts();
    const tokens = useContext(ThemeContext);
    const variant: string = useContext(VariantContext);
    const theme = m3(tokens, { variant });
    const userTheme: any = useContext(UserThemeContext);
    const node = useRef<HTMLDivElement>(null);

    let width: number, height: number;
    const [value, setValue] = useState(`${prefix}${valueProp}`);
    const [hasFocus, setHasFocus] = useState(false);
    useEffect(() => {
      setValue(`${prefix}${valueProp}`);
    }, [valueProp]);
    const [textFieldClass, setTextFieldClass] = useState(
      css(
        applyReactiveStyle({
          target: "components.FilledTextField",
          theme: merge(theme, userTheme(variant)),
        })
      )
    );
    const __onFocus = (e: FocusEvent<HTMLElement>) => {
      setHasFocus(true);
      typeof onFocus === "function" && onFocus(e);
    };
    const __onBlur = (e: FocusEvent<HTMLElement>) => {
      setHasFocus(false);
      typeof onBlur === "function" && onBlur(e);
    };

    const __onInput = (e: FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      if (prefix) {
        if (!target.value.startsWith(prefix)) {
          target.value = `${prefix}${target.value}`;
        }
      }
      // substring: android does not honor maxLength before the blur
      setValue(
        typeof maxLength === "undefined"
          ? target.value
          : target.value.substring(0, maxLength)
      );
      typeof onInput === "function" && onInput(e);
    };
    useEffect(() => {
      if (node?.current) {
        ({ width, height } = node.current?.getBoundingClientRect());
        setTextFieldClass(
          css(
            applyReactiveStyle({
              target: "components.FilledTextField",
              theme: merge(theme, userTheme(variant)),
              width,
              height,
            })
          )
        );
      }
    }, [variant]);
    return (
      <div
        ref={node}
        {...props}
        className={`${textFieldClass} ${className}${
          leadingIcon ? " leadingIcon" : ""
        }${trailingIcon ? " trailingIcon" : ""}${disabled ? " disabled" : ""}${
          error ? " error" : ""
        }${hasFocus ? " mt-focus" : ""}`}
      >
        <div className="mt-shape">
          {icon}
          <div className={`container${value.length ? " filled" : ""}`}>
            {leadingIcon && (
              <div className="leadingIcon-container">{leadingIcon}</div>
            )}
            <div className="mt-state"></div>
            <div className="label">{label}</div>
            <div className="activeIndicator"></div>
          </div>
          <input
            ref={ref}
            maxLength={maxLength ?? Infinity}
            {...props}
            value={value}
            onInput={__onInput}
            onFocus={__onFocus}
            onBlur={__onBlur}
            spellCheck="false"
            disabled={disabled}
          />
          {trailingIcon && (
            <div className="trailingIcon-container">{trailingIcon}</div>
          )}
        </div>
        <div className="supportingTextContainer">
          {supportingText && (
            <div className="supportingText">{supportingText}</div>
          )}
          {characterCounter && maxLength && (
            <div className="characterCounter">
              {value.length}/{maxLength}
            </div>
          )}
        </div>
      </div>
    );
  }
);
