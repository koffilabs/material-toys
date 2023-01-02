import React, {
  ChangeEvent,
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import merge from "lodash-es/merge";
import { useThemeContexts } from "../hooks/useThemeContexts";
interface Icon {
  size: string;
}
interface SwitchProps {
  indeterminate?: boolean;
  error?: boolean;
  disabled?: boolean;
  selectedIcon?: ({ size }: { size: string }) => JSX.Element;
  unselectedIcon?: ({ size }: { size: string }) => JSX.Element;
  [prop: string]: any;
}

export const Switch = ({
  indeterminate = false,
  disabled = false,
  error = false,
  selectedIcon: SelectedIcon,
  unselectedIcon: UnselectedIcon,
  ...rest
}: SwitchProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);
  const node = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [switchClass, setSwitchClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.Checkbox",
        theme: merge(theme, userTheme(variant)),
      })
    )
  );

  useEffect(() => {
    setSwitchClass(
      css(
        applyReactiveStyle({
          target: "components.Switch",
          theme: merge(theme, userTheme(variant)),
        })
      )
    );
  }, [node, variant]);
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
    <div ref={node} className={`${switchClass}${loaded ? "" : " mt-loading"}`}>
      <input disabled={disabled} {...rest} type="checkbox" />
      <div className="mt-track">
        <div className="mt-state">
          <div className="mt-outline">
            <div className="mt-switch-thumb"></div>
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
