import "../css/main.scss";
import dynamic from "next/dynamic";
import { MT, useTheme } from "@material-toys/react";
import { useEffect, useState } from "react";
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

tokens.MdSysColorPrimaryContainer = tokens.MdSysColorSurface;
// tokens.MdSysColorPrimary = "#fff";
// tokens.MdSysColorOnSurfaceVariant = "#ffd";
// tokens.MdSysColorSecondaryContainer = "hsl(210, 90%, 90%)";

export default function app({ Component, pageProps }) {
  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);
  useEffect(() => {
    console.log("app re rendered");
  });
  // useEffect(() => {
  //   setTimeout(() => {
  //     tokens.MdSysColorPrimaryContainer = "red";
  //     setReactiveTokens({ ...tokens });
  //     console.log("after timeout");
  //     // tokens.MdSysColorSecondaryContainer = "hsl(210, 90%, 90%)";
  //   }, 3000);
  // }, []);
  let activeItem = 0;
  const myTheme = (variant) => {
    return {
      components: {
        NavigationItem: {
          ".primary &": {
            // backgroundColor: "red",
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
          },
        },
        NavigationDrawer: {
          "&.primary": {
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
          },
        },
        NavigationBar: {
          "&.primary": {
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
          },
        },
        NavigationBarItem: {
          ".primary &": {
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
            // backgroundColor: "red",
          },
        },
        TopAppBar: {
          "&.primary": {
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
          },
        },
      },
    };
  };
  return (
    <>
      <MT tokens theme={myTheme} variant="">
        {/*<ThemeContext.Provider value={reactiveTokens}>*/}
        {/*<VariantContext.Provider value={""}>*/}
        <Layout
          activeItem={activeItem}
          hasCollapseButton={true}
          railLabels={"selected"}
          mobileNavigation="drawer"
        >
          <Component {...pageProps} />
        </Layout>
        {/*</VariantContext.Provider>*/}
        {/*</ThemeContext.Provider>*/}
      </MT>

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
