import { ThemeContext } from "../providers/ThemeProvider";
import { VariantContext } from "../providers/VariantProvider";
import { UserThemeContext } from "../providers/UserThemeProvider";

export const useThemeContexts: Function = () => {
  return { ThemeContext, VariantContext, UserThemeContext };
};
