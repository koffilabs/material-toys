import React, { ReactNode, useState } from "react";
import { useThemeContexts } from "../hooks/useThemeContexts";

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
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const [reactiveTokens, setReactiveTokens] = useState({ ...defaultTokens, ...tokens });
  return (
    <UserThemeContext.Provider value={theme}>
      <ThemeContext.Provider value={reactiveTokens}>
        <VariantContext.Provider value={variant}>
          {children}
        </VariantContext.Provider>
      </ThemeContext.Provider>
    </UserThemeContext.Provider>
  );
};
