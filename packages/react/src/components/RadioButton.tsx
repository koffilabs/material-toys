import React, { useRef } from "react";
import {
  RadioButtonUncheckedIcon,
  RadioButtonCheckedIcon,
} from "@material-toys/icons-react";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";

interface RadioButtonProps {
  disabled?: boolean;
  [prop: string]: any;
}

export const RadioButton = ({
  disabled = false,
  ...rest
}: RadioButtonProps) => {
  const node = useRef(null);
  const { className: radioButtonClass } = useComponentClass({
    path: "components.RadioButton",
  });

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
