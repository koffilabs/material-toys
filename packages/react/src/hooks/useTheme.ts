import {createContext} from "react";
const ThemeContext = createContext({});
const VariantContext = createContext({});
const ThemeFunctionContext = createContext(() => {});
export const useTheme: Function = () => {
    return {ThemeContext, VariantContext, ThemeFunctionContext}
}