// TODO: import from node_modules (the library should provide a global css)
import "../css/main.scss";
import dynamic from "next/dynamic";
import { useTheme } from "@material-toys/react";
import { useState } from "react";
import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common";

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

export default function app({ Component, pageProps }) {
  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);

  console.log("Component", Component);
  console.log("pageProps", pageProps);
  return (
    <>
      <ThemeContext.Provider value={reactiveTokens}>
        <VariantContext.Provider value={""}>
          <Layout
            activeItem={0}
            hasCollapseButton={true}
            rai
            lLabels={"selected"}
            mobileNavigation="drawer"
          >
            <Component {...pageProps} />
          </Layout>
        </VariantContext.Provider>
      </ThemeContext.Provider>
      <style global jsx>
        {`
          html,
          body,
          #__next,
          div#__next > div {
            height: 100%;
          }
          .mt-loading * {
            //transition: none !important;
          }
        `}
      </style>
    </>
  );
}
