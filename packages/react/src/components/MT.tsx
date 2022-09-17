import React, { ReactNode, useState } from "react";
import { useTheme } from "../hooks/useTheme";

import {
  material_tokens,
} from "@material-toys/common";

const defaultTokens = { ...material_tokens };

interface AppProps {
  children: ReactNode;
  tokens?: any;
  theme?: () => void;
  variant?: string;
}
export const MT = ({
  children,
  tokens = {},
  theme = () => {},
  variant = "",
}: AppProps) => {
  const { ThemeContext, VariantContext, ThemeFunctionContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState({ ...defaultTokens, ...tokens });
  return (
    <ThemeFunctionContext.Provider value={theme}>
      <ThemeContext.Provider value={reactiveTokens}>
        <VariantContext.Provider value={variant}>
          {children}
        </VariantContext.Provider>
      </ThemeContext.Provider>
    </ThemeFunctionContext.Provider>
  );
};
