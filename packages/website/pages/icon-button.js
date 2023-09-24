import Head from "next/head";
import { FavoriteIcon } from "@material-toys/icons-react";
import { IconButton } from "@material-toys/react";

// import {useEffect, useState} from "react";
import { BlockComponentCanvas } from "../components/BlockComponentCanvas";
import { CodeBlock } from "../components/CodeBlock";
import React from "react";

export default function button_page() {
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Icon Button</title>
        <meta property="og:title" content="Icon button" key="title" />
        <meta name="description" content="Icon button page" key="desc" />
        <meta name="og:description" content="Icon button page" />
      </Head>
      <main>
        <h2>Icon Button</h2>
        <div>
          <BlockComponentCanvas>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton className={"filled"}>
              <FavoriteIcon />
            </IconButton>
            <IconButton className={"filled-tonal"}>
              <FavoriteIcon />
            </IconButton>
            <IconButton className={"outlined"}>
              <FavoriteIcon />
            </IconButton>
          </BlockComponentCanvas>
          <CodeBlock
            code={`
<IconButton>
  <AddIcon size="18px" />
</IconButton>
`}
          ></CodeBlock>
        </div>
      </main>
    </div>
  );
}
