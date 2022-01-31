import React, { ReactNode, useState } from "react";
import { useTheme } from "../hooks/useTheme";

import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common";

const tokens = { ...material_tokens_polyfill, ...material_tokens };

interface AppProps {
  children: ReactNode;
  variant?: string;
}
export const MT = ({ children, variant = "" }: AppProps) => {
  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);
  return (
    <ThemeContext.Provider value={reactiveTokens}>
      <VariantContext.Provider value={variant}>
        {children}
      </VariantContext.Provider>
    </ThemeContext.Provider>
  );
};
