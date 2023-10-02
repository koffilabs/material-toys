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
import React, { useState } from "react";

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
          <BlockComponentCanvas>Examples here</BlockComponentCanvas>
          <CodeBlock code={``}></CodeBlock>
        </div>
      </main>
    </div>
  );
}
