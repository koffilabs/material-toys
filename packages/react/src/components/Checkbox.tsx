import React, { useRef } from "react";
import { CheckIcon, RemoveIcon } from "@material-toys/icons-react";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { useComponentClass } from "../hooks/useComponentClass";

import { Ripple } from "./Ripple";

interface CheckboxProps {
  indeterminate?: boolean;
  error?: boolean;
  disabled?: boolean;
  [prop: string]: any;
}

export const Checkbox = ({
  indeterminate = false,
  disabled = false,
  error = false,
  ...props
}: CheckboxProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();

  const node = useRef<HTMLDivElement>(null);
  const { className: checkboxClass } = useComponentClass({
    path: "components.Checkbox",
  });

  return (
    <Ripple>
      <div ref={node} className={`${checkboxClass}${error ? " error" : ""}`}>
        <input disabled={disabled} {...props} type="checkbox" />
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
