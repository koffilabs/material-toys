"use client";
import { material_tokens } from "@material-toys/common";
import { BoltIcon, HomeIcon, InfoIcon } from "@material-toys/icons-react";
import { useContext, useState } from "react";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";
import classes from "./navigation-rail.module.scss";

const tokens = { ...material_tokens };

import {
  Button,
  MT,
  NavigationDrawer,
  NavigationItem,
  useThemeContexts,
} from "@material-toys/react";
import Head from "next/head";

const myTheme = (variant) => {
  return {
    components: {
      NavigationItem: {
        ".primary &": {
          // backgroundColor: tokens[`MdSysColorSurface${variant}`],
          backgroundColor: "transparent",
        },
      },
      NavigationDrawer: {
        "&.primary": {
          backgroundColor: tokens[`MdSysColorSurface${variant}`],
          // backgroundColor: "red",
        },
      },
    },
  };
};
export default function rail_page() {
  const { VariantContext } = useThemeContexts();
  const variant = useContext(VariantContext);

  const [__mode, setMode] = useState("rail");
  const toggleMode = () => {
    setMode((m) => (m === "rail" ? "drawer" : "rail"));
  };
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Navigation Rail</title>
        <meta property="og:title" content="Navigation Rail" key="title" />
        <meta name="description" content="Navigation Rail page" key="desc" />
        <meta name="og:description" content="Navigation Rail page" />
      </Head>
      <main>
        <h2>Navigation rail</h2>
        <BlockComponentCanvas showGrid={true}>
          <MT theme={myTheme} variant={variant}>
            <div>
              <Button onClick={toggleMode}>Morph!</Button>
            </div>
            <div className={classes["rail-container"]}>
              <NavigationDrawer
                className="primary"
                mode={__mode}
                header={
                  <div style={{ padding: "1rem", textAlign: "center" }}>
                    Header
                  </div>
                }
              >
                <NavigationItem icon={<HomeIcon />}>
                  <a>Material Toys</a>
                </NavigationItem>
                <NavigationItem icon={<BoltIcon />}>
                  <a>Quick Start</a>
                </NavigationItem>
                <NavigationItem icon={<InfoIcon />}>
                  <a>About</a>
                </NavigationItem>
              </NavigationDrawer>
            </div>
          </MT>
        </BlockComponentCanvas>
        <CodeBlock
          code={`import { MT, NavigationDrawer, NavigationItem } from "@material-toys/react";
import { HomeIcon, InfoIcon, BoltIcon } from "@material-toys/icons-react";
// ...
<MT>
            <div>
              <Button onClick={toggleMode}>Morph!</Button>
            </div>
            <div className={classes["rail-container"]}>
              <NavigationDrawer className="primary"
                                mode={__mode}
                                header={<div style={{padding: "1rem", textAlign: "center"}}>
                                  Header
                                </div>}
                                >
                <NavigationItem
                  icon={<HomeIcon/>}>
                  <a>Material Toys</a>
                </NavigationItem>
                <NavigationItem
                  icon={<BoltIcon/>}>
                  <a>Quick Start</a>
                </NavigationItem>
                <NavigationItem
                  icon={<InfoIcon/>}>
                  <a>About</a>
                </NavigationItem>
              </NavigationDrawer>
            </div>
          </MT>
`}
        >
          {" "}
        </CodeBlock>

        <BlockComponentCanvas showGrid={true}>
          <MT theme={myTheme}>
            <div className={classes["rail-container"]}>
              <NavigationDrawer
                className="primary"
                mode="rail"
                header={
                  <div style={{ padding: "1rem", textAlign: "center" }}>
                    Header
                  </div>
                }
              >
                <NavigationItem icon={<HomeIcon />}>
                  <a>Material Toys</a>
                </NavigationItem>
                <NavigationItem icon={<BoltIcon />}>
                  <a>Quick Start</a>
                </NavigationItem>
                <NavigationItem icon={<InfoIcon />}>
                  <a>About</a>
                </NavigationItem>
              </NavigationDrawer>
            </div>
            <div className={classes["rail-container"]}>
              <NavigationDrawer
                className="primary"
                mode="rail"
                justify={"center"}
                header={
                  <div style={{ padding: "1rem", textAlign: "center" }}>
                    Header
                  </div>
                }
              >
                <NavigationItem icon={<HomeIcon />}>
                  <a>Material Toys</a>
                </NavigationItem>
                <NavigationItem icon={<BoltIcon />}>
                  <a>Quick Start</a>
                </NavigationItem>
                <NavigationItem icon={<InfoIcon />}>
                  <a>About</a>
                </NavigationItem>
              </NavigationDrawer>
            </div>
            <div className={classes["rail-container"]}>
              <NavigationDrawer
                className="primary"
                mode="rail"
                justify={"end"}
                header={
                  <div style={{ padding: "1rem", textAlign: "center" }}>
                    Header
                  </div>
                }
              >
                <NavigationItem icon={<HomeIcon />}>
                  <a>Material Toys</a>
                </NavigationItem>
                <NavigationItem icon={<BoltIcon />}>
                  <a>Quick Start</a>
                </NavigationItem>
                <NavigationItem icon={<InfoIcon />}>
                  <a>About</a>
                </NavigationItem>
              </NavigationDrawer>
            </div>
          </MT>
        </BlockComponentCanvas>
        <CodeBlock
          code={`import { MT, NavigationDrawer, NavigationItem } from "@material-toys/react";
import { HomeIcon, InfoIcon, BoltIcon } from "@material-toys/icons-react";
// ...
<MT>
<div className={classes["rail-container"]}>

  <NavigationDrawer className="primary"
                    mode="rail"
                    justify="start" <!-- or "center" or "end" -->
                    header={<div style={{padding: "1rem", textAlign: "center"}}>
                      Header
                    </div>}>
    <NavigationItem
      icon={<HomeIcon/>}>
      <a>Material Toys</a>
    </NavigationItem>
    <NavigationItem
      icon={<BoltIcon/>}>
      <a>Quick Start</a>
    </NavigationItem>
    <NavigationItem
      icon={<InfoIcon/>}>
      <a>About</a>
    </NavigationItem>
  </NavigationDrawer>
</div>
</MT>
`}
        >
          {" "}
        </CodeBlock>
      </main>
      <style jsx>{`
        h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        h5 {
          margin: .2rem 0 1rem 0;
          font-size: .9rem;
        }


        )

      `}</style>
    </div>
  );
}
