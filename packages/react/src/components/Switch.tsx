"use client";
import React, { useEffect, useRef, useState } from "react";
import { useComponentClass } from "../hooks/useComponentClass";
interface Icon {
  size: string;
}
interface SwitchProps {
  indeterminate?: boolean;
  error?: boolean;
  selectedIcon?: ({ size }: { size: string }) => JSX.Element;
  unselectedIcon?: ({ size }: { size: string }) => JSX.Element;
  [prop: string]: any;
}

export const Switch = ({
  indeterminate = false,
  error = false,
  selectedIcon: SelectedIcon,
  unselectedIcon: UnselectedIcon,
  ...rest
}: SwitchProps) => {
  const [loaded, setLoaded] = useState(false);
  const { className: switchClass } = useComponentClass({
    path: "components.Switch",
  });

  // remove transitions on load, start
  useEffect(() => {
    if (rest.checked) {
      setLoaded(false);
    }
  }, []);
  useEffect(() => {
    if (!rest.checked) {
      setLoaded(true);
    }
  }, [rest.checked]);
  // remove transitions on load, end
  return (
    <div className={`${switchClass}${loaded ? "" : " mt-loading"}`}>
      <input {...rest} type="checkbox" />
      <div className="mt-track">
        <div className="mt-state">
          <div className="mt-outline">
            <div
              className={`mt-switch-thumb${UnselectedIcon ? " with-icon" : ""}`}
            ></div>
            {SelectedIcon && (
              <div className="mt-checked-icon">
                <SelectedIcon size="16" />
              </div>
            )}
            {UnselectedIcon && (
              <div className="mt-unchecked-icon">
                <UnselectedIcon size="16" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
