import {createContext} from "react";
const ThemeContext = createContext({});
const VariantContext = createContext({});
export const useTheme: Function = () => {

    return {ThemeContext, VariantContext}
}