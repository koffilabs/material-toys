import { useContext, useEffect, useState } from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import merge from "lodash-es/merge";
import { useThemeContexts } from "./useThemeContexts";

interface UseComponentClassProps {
  path: string;
}
export const useComponentClass = ({ path }: UseComponentClassProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext<any>(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);

  const getClassName = () =>
    css(
      applyReactiveStyle({
        target: path,
        theme: merge(theme, userTheme(variant)),
      })
    );

  const [className, setClassName] = useState(getClassName);
  useEffect(() => {
    setClassName(getClassName);
  }, [variant]);
  return { className };
};
