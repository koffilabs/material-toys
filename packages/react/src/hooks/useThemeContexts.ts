import {createContext} from "react";
const ThemeContext = createContext({});
const VariantContext = createContext({});
const UserThemeContext = createContext(() => {});
export const useThemeContexts: Function = () => {
    return {ThemeContext, VariantContext, UserThemeContext}
}