import React, {useState} from "react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";
import {
  HomeIcon,
  InfoIcon,
  BoltIcon
} from "@material-toys/icons-react";
import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common";

const tokens = {...material_tokens_polyfill, ...material_tokens};

import {
  MT, NavigationDrawer, NavigationItem
} from "@material-toys/react";

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
      }
    }
  }
};
export default function drawer_page() {
  return (
    <div className="container">
      <main>
        <h2>Navigation drawer</h2>
        <BlockComponentCanvas showGrid={true}>
          <MT theme={myTheme}>
            <NavigationDrawer className="primary"
                              header={<div style={{padding: "1rem", textAlign: "center"}}>
                                Header
                              </div>}
                              activeItem={0}
            >
              <NavigationItem
                icon={<HomeIcon/>}
              >
                <a>Material Toys</a>
              </NavigationItem>
              <NavigationItem
                icon={<BoltIcon/>}
              >
                <a>Quick Start</a>
              </NavigationItem>
              <NavigationItem
                icon={<InfoIcon/>}
              >
                <a>About</a>
              </NavigationItem>
            </NavigationDrawer>
          </MT>
        </BlockComponentCanvas>
        <CodeBlock code={`import { MT, NavigationDrawer, NavigationItem } from "@material-toys/react";
import { HomeIcon, InfoIcon, BoltIcon } from "@material-toys/icons-react";
// ...
<MT>
  <NavigationDrawer className="primary"
                    header={<div style={{padding: "1rem", textAlign: "center"}}>
                      Header
                    </div>}
                    activeItem={0}
  >
    <NavigationItem
      icon={<HomeIcon/>}
    >
      <a>Material Toys</a>
    </NavigationItem>
    <NavigationItem
      icon={<BoltIcon/>}
    >
      <a>Quick Start</a>
    </NavigationItem>
    <NavigationItem
      icon={<InfoIcon/>}
    >
      <a>About</a>
    </NavigationItem>
  </NavigationDrawer>
</MT>
`}> </CodeBlock>

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
