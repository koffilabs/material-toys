import React, { useRef } from "react";
import {
  RadioButtonUncheckedIcon,
  RadioButtonCheckedIcon,
} from "@material-toys/icons-react";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";

interface RadioButtonProps {
  [prop: string]: any;
}

export const RadioButton = ({ ...props }: RadioButtonProps) => {
  const { className: radioButtonClass } = useComponentClass({
    path: "components.RadioButton",
  });

  return (
    <Ripple>
      <div className={`${radioButtonClass}`}>
        <input {...props} type="radio" />
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
