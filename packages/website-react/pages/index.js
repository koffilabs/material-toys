import dynamic from "next/dynamic";
import { useTheme } from "@material-toys/react";
import classes from "./index.module.scss";

import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common/dist/common.esm";
import { useEffect, useState } from "react";

const Layout = dynamic(
  () =>
    import("../components/layout").then((mod) => {
      return mod.default;
    }),
  {
    ssr: false,
  }
);

const tokens = { ...material_tokens_polyfill, ...material_tokens };
export default function Index() {
  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);

  return (
    <ThemeContext.Provider value={reactiveTokens}>
      <VariantContext.Provider value={""}>
        <div className={classes}>
          <Layout
            activeItem={0}
            hasCollapseButton={true}
            railLabels={"selected"}
            mobileNavigation="drawer"
          >
            <h1>Material Toys</h1>
            <h2>A Material You implementation for React</h2>
          </Layout>
        </div>
      </VariantContext.Provider>
    </ThemeContext.Provider>
  );
}
