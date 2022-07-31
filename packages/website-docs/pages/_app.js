import "../css/main.scss";
import dynamic from "next/dynamic";
import {useState} from "react";
import {MT} from "@material-toys/react";

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

const tokens = {...material_tokens_polyfill, ...material_tokens};
tokens.MdSysColorPrimaryContainer = tokens.MdSysColorSurface;


// tokens.MdSysColorSurface = "#f7f4e7";
// tokens.MdSysColorSecondaryContainer = "hsl(210, 90%, 90%)";
export default function app({Component, pageProps}) {
  let activeItem = 0;
  const [UIMode, setUIMode] = useState("Light");
  const myTheme = (variant) => {
    return {
      components: {
        NavigationItem: {
          ".primary &": {
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
          },
        },
        NavigationDrawer: {
          "&.primary": {
            backgroundColor: tokens[`MdSysColorSurface${variant}`],
            // backgroundColor: "red",
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
            // backgroundColor: "red",
          },
        },
      },
    };
  };

  return (
    <>
      <MT tokens theme={myTheme} variant={UIMode}>
        <Layout
          setUIMode={setUIMode}
          UIMode={UIMode}
          activeItem={activeItem}
          hasCollapseButton={true}
          railLabels={"selected"}
          mobileNavigation="drawer"
        >
          <Component {...pageProps} />
        </Layout>
      </MT>
      <style global jsx>
        {`
          html,
          body,
          #__next,
          div#__next > div {
            height: 100%;
          }
        `}
      </style>
    </>
  );
}
