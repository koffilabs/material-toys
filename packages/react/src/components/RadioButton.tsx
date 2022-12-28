import React, { useContext, useEffect, useRef, useState } from "react";
import { css } from "@emotion/css";
import {
  RadioButtonUncheckedIcon,
  RadioButtonCheckedIcon,
  RemoveIcon,
} from "@material-toys/icons-react";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import merge from "lodash-es/merge";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { Ripple } from "./Ripple";

interface RadioButtonProps {
  disabled?: boolean;
  [prop: string]: any;
}

export const RadioButton = ({
  disabled = false,
  ...rest
}: RadioButtonProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);
  const node = useRef(null);

  const [radioButtonClass, setRadioButtonClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.RadioButton",
        theme: merge(theme, userTheme(variant)),
      })
    )
  );
  useEffect(() => {
    setRadioButtonClass(
      css(
        applyReactiveStyle({
          target: "components.RadioButton",
          theme: merge(theme, userTheme(variant)),
        })
      )
    );
  }, [node, variant]);

  return (
    <Ripple>
      <div ref={node} className={`${radioButtonClass}`}>
        <input disabled={disabled} {...rest} type="radio" />
        <div className="mt-state mt-shape">
          <div className="mt-outline">
            <div className="mt-radio">
              <div className="mt-radio-checked">
                <RadioButtonCheckedIcon size={"20"} />
              </div>
              <div className="mt-radio-unchecked">
                <RadioButtonUncheckedIcon size={"20"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Ripple>
  );
};
