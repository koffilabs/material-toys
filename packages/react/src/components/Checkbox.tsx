import React, { useContext, useEffect, useRef, useState } from "react";
import { css } from "@emotion/css";
import { CheckIcon, RemoveIcon } from "@material-toys/icons-react";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import merge from "lodash-es/merge";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { Ripple } from "./Ripple";

interface CheckboxProps {
  indeterminate?: boolean;
  error?: boolean;
}

export const Checkbox = ({
  indeterminate = false,
  error = false,
  ...rest
}: CheckboxProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);
  const node = useRef(null);
  let width: number, height: number;

  const [checkboxClass, setCheckboxClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.Checkbox",
        theme: merge(theme, userTheme(variant)),
      })
    )
  );
  useEffect(() => {
    setCheckboxClass(
      css(
        applyReactiveStyle({
          target: "components.Checkbox",
          theme: merge(theme, userTheme(variant)),
        })
      )
    );
  }, [node, variant]);

  return (
    <Ripple>
      <div ref={node} className={`${checkboxClass}${error ? " error" : ""}`}>
        <input {...rest} type="checkbox" />
        <div className="mt-state mt-shape">
          <div className="mt-outline">
            <div className="mt-check">
              {indeterminate ? (
                <RemoveIcon size={"18"} />
              ) : (
                <CheckIcon size={"18"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Ripple>
  );
};
