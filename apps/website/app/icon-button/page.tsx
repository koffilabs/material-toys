"use client";
import Head from "next/head";
import {
  FavoriteIcon,
  OutlinedFavoriteBorderIcon,
  SettingsIcon,
  OutlinedSettingsIcon,
} from "@material-toys/icons-react";
import { IconButton } from "@material-toys/react";

// import {useEffect, useState} from "react";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";
import React, { useState } from "react";

export default function button_page() {
  const [selected0, setSelected0] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
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
            <IconButton renderIcon={() => <FavoriteIcon />}></IconButton>
            <IconButton
              className={"filled"}
              renderIcon={() => <FavoriteIcon />}
            ></IconButton>
            <IconButton
              className={"filled-tonal"}
              renderIcon={() => <FavoriteIcon />}
            ></IconButton>
            <IconButton
              className={"outlined"}
              renderIcon={() => <OutlinedFavoriteBorderIcon />}
            ></IconButton>
          </BlockComponentCanvas>
          <CodeBlock
            code={`<IconButton renderIcon={() => <FavoriteIcon />}></IconButton>
<IconButton
  className={"filled"}
  renderIcon={() => <FavoriteIcon />}
></IconButton>
<IconButton
  className={"filled-tonal"}
  renderIcon={() => <FavoriteIcon />}
></IconButton>
<IconButton
  className={"outlined"}
  renderIcon={() => <OutlinedFavoriteBorderIcon />}
></IconButton>
`}
          ></CodeBlock>
        </div>
        <h2>Toggle Icon Button</h2>
        <div>
          <BlockComponentCanvas>
            <IconButton
              type={"toggle"}
              selected={selected0}
              onClick={() => {
                setSelected0((selected0) => !selected0);
              }}
              renderIcon={({ selected }) =>
                selected ? <SettingsIcon /> : <OutlinedSettingsIcon />
              }
            ></IconButton>
            <IconButton
              type={"toggle"}
              className={"filled"}
              selected={selected1}
              onClick={() => {
                setSelected1((selected1) => !selected1);
              }}
              renderIcon={({ selected }) =>
                selected ? <SettingsIcon /> : <OutlinedSettingsIcon />
              }
            ></IconButton>
            <IconButton
              type={"toggle"}
              selected={selected2}
              className={"filled-tonal"}
              onClick={() => {
                setSelected2((selected2) => !selected2);
              }}
              renderIcon={({ selected }) =>
                selected ? <SettingsIcon /> : <OutlinedSettingsIcon />
              }
            ></IconButton>
            <IconButton
              type={"toggle"}
              className={"outlined"}
              selected={selected3}
              onClick={() => {
                setSelected3((selected3) => !selected3);
              }}
              renderIcon={({ selected }) =>
                selected ? <SettingsIcon /> : <OutlinedSettingsIcon />
              }
            ></IconButton>
          </BlockComponentCanvas>
          <CodeBlock
            code={`const [selected0, setSelected0] = useState(false);
const [selected1, setSelected1] = useState(false);
const [selected2, setSelected2] = useState(false);
const [selected3, setSelected3] = useState(false);
// ...
<IconButton
  type={"toggle"}
  selected={selected0}
  onClick={() => {
    setSelected0((selected0) => !selected0);
  }}
  renderIcon={({ selected }) =>
    selected ? <SettingsIcon /> : <OutlinedSettingsIcon />
  }
></IconButton>
<IconButton
  type={"toggle"}
  className={"filled"}
  selected={selected1}
  onClick={() => {
    setSelected1((selected1) => !selected1);
  }}
  renderIcon={({ selected }) =>
    selected ? <SettingsIcon /> : <OutlinedSettingsIcon />
  }
></IconButton>
<IconButton
  type={"toggle"}
  selected={selected2}
  className={"filled-tonal"}
  onClick={() => {
    setSelected2((selected2) => !selected2);
  }}
  renderIcon={({ selected }) =>
    selected ? <SettingsIcon /> : <OutlinedSettingsIcon />
  }
></IconButton>
<IconButton
  type={"toggle"}
  className={"outlined"}
  selected={selected3}
  onClick={() => {
    setSelected3((selected3) => !selected3);
  }}
  renderIcon={({ selected }) =>
    selected ? <SettingsIcon /> : <OutlinedSettingsIcon />
  }
></IconButton>
`}
          ></CodeBlock>
        </div>
      </main>
    </div>
  );
}
