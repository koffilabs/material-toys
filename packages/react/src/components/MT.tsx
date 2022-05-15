import React, { ReactNode, useState } from "react";
import { useTheme } from "../hooks/useTheme";

import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common";

const defaultTokens = { ...material_tokens_polyfill, ...material_tokens };

interface AppProps {
  children: ReactNode;
  tokens?: any;
  theme?: any;
  variant?: string;
}
export const MT = ({ children, tokens = {}, theme = {}, variant = "" }: AppProps) => {
  // TODO: add two new contexts for the user provided theme and the tokens
  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(defaultTokens);
  return (
    <ThemeContext.Provider value={reactiveTokens}>
      <VariantContext.Provider value={variant}>
        {children}
      </VariantContext.Provider>
    </ThemeContext.Provider>
  );
};
