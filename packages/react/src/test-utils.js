import { render } from "@testing-library/react";
import React from "react";
import { useThemeContexts } from "./hooks/useThemeContexts";
// const { ThemeContext, VariantContext, ThemeFunctionContext } = useTheme();

// const AllTheProviders = ({children}) => {
//   return (
//     <ThemeFunctionContext.Provider value={theme}>
//       <ThemeContext.Provider value={reactiveTokens}>
//         <VariantContext.Provider value={variant}>
//           {children}
//         </VariantContext.Provider>
//       </ThemeContext.Provider>
//     </ThemeFunctionContext.Provider>)
// }
// const customRender = (ui, options) => render(ui, {wrapper: AllTheProviders, ...options})

export * from "@testing-library/react";
