"use client";
import { material_tokens } from "@material-toys/common";
import { BoltIcon, HomeIcon, InfoIcon } from "@material-toys/icons-react";
import { useContext } from "react";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";
import React, { useState } from "react";
const tokens = { ...material_tokens };

import {
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
export default function drawer_page() {
  const { VariantContext } = useThemeContexts();
  const variant = useContext(VariantContext);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Navigation Drawer</title>
        <meta property="og:title" content="Navigation Drawer" key="title" />
        <meta name="description" content="Navigation Drawer page" key="desc" />
        <meta name="og:description" content="Navigation Drawer page" />
      </Head>
      <main>
        <h2>Navigation drawer</h2>
        <BlockComponentCanvas showGrid={true}>
          <MT theme={myTheme} variant={variant}>
            <NavigationDrawer
              className="primary"
              header={
                <div style={{ padding: "1rem", textAlign: "center" }}>
                  Header
                </div>
              }
            >
              <NavigationItem
                active={activeIndex === 0}
                onClick={() => {
                  setActiveIndex(0);
                }}
                icon={<HomeIcon />}
              >
                <a>Material Toys</a>
              </NavigationItem>
              <NavigationItem
                onClick={() => {
                  setActiveIndex(1);
                }}
                active={activeIndex === 1}
                icon={<BoltIcon />}
              >
                <a>Quick Start</a>
              </NavigationItem>
              <NavigationItem
                onClick={() => {
                  setActiveIndex(2);
                }}
                active={activeIndex === 2}
                icon={<InfoIcon />}
              >
                <a>About</a>
              </NavigationItem>
            </NavigationDrawer>
          </MT>
        </BlockComponentCanvas>
        <CodeBlock
          code={`import { MT, NavigationDrawer, NavigationItem } from "@material-toys/react";
import { HomeIcon, InfoIcon, BoltIcon } from "@material-toys/icons-react";
// ...
const [activeIndex, setActiveIndex] = useState(0);

<MT>
  <NavigationDrawer className="primary"
                    header={<div style={{padding: "1rem", textAlign: "center"}}>
                      Header
                    </div>}>
    <NavigationItem
      onClick={() => {
        setActiveIndex(0);
      }}
      active={activeIndex === 0}
      icon={<HomeIcon/>}>
      <a>Material Toys</a>
    </NavigationItem>
    <NavigationItem
      onClick={() => {
        setActiveIndex(1);
      }}
      active={activeIndex === 1}
      icon={<BoltIcon/>}>
      <a>Quick Start</a>
    </NavigationItem>
    <NavigationItem
      onClick={() => {
        setActiveIndex(2);
      }}
      active={activeIndex === 2}
      icon={<InfoIcon/>}>
      <a>About</a>
    </NavigationItem>
  </NavigationDrawer>
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

        .someContent {
          font-family: "Roboto", sans-serif;
          padding: 16px 0;
          // width: "200px",
          font-size: .85rem;


        }

        )

      `}</style>
    </div>
  );
}
