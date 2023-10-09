import Head from "next/head";
import { Menu, MenuItem, Divider } from "@material-toys/react";
import { BlockComponentCanvas } from "../components/BlockComponentCanvas";
import { CodeBlock } from "../components/CodeBlock";
import React from "react";

export default function menu_page() {
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Menu</title>
        <meta property="og:title" content="Menu" key="title" />
        <meta name="description" content="Menu page" key="desc" />
        <meta name="og:description" content="Menu page" />
      </Head>
      <main>
        <h2>Menu</h2>
        <div>
          <BlockComponentCanvas>
            <Menu>
              <MenuItem>Item 1</MenuItem>
              <MenuItem selected>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
              <Divider></Divider>
              <MenuItem>Item 4</MenuItem>
            </Menu>
          </BlockComponentCanvas>
          <CodeBlock code={``}></CodeBlock>
        </div>
      </main>
    </div>
  );
}
