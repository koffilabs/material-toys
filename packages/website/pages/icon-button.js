import Head from "next/head";
import {
  FavoriteIcon,
  OutlinedFavoriteBorderIcon,
  SettingsIcon,
  OutlinedSettingsIcon,
} from "@material-toys/icons-react";
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
              <OutlinedFavoriteBorderIcon />
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
        <h2>Icon Button - toggle, unselected</h2>
        <div>
          <BlockComponentCanvas>
            <IconButton type={"toggle"}>
              <OutlinedSettingsIcon />
            </IconButton>
            <IconButton type={"toggle"} className={"filled"}>
              <OutlinedSettingsIcon />
            </IconButton>
            <IconButton type={"toggle"} className={"filled-tonal"}>
              <OutlinedSettingsIcon />
            </IconButton>
            <IconButton type={"toggle"} className={"outlined"}>
              <OutlinedSettingsIcon />
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
        <h2>Icon Button - toggle, selected</h2>
        <div>
          <BlockComponentCanvas>
            <IconButton selected={true} type={"toggle"}>
              <SettingsIcon />
            </IconButton>
            <IconButton selected={true} type={"toggle"} className={"filled"}>
              <SettingsIcon />
            </IconButton>
            <IconButton
              selected={true}
              type={"toggle"}
              className={"filled-tonal"}
            >
              <SettingsIcon />
            </IconButton>
            <IconButton selected={true} type={"toggle"} className={"outlined"}>
              <SettingsIcon />
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
