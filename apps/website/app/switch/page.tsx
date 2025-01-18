"use client";
import Head from "next/head";
import { Switch } from "@material-toys/react";

import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";
import { CheckIcon, RemoveIcon } from "@material-toys/icons-react";

export default function checkbox_page() {
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Switch</title>
        <meta property="og:title" content="Switch" key="title" />
        <meta name="description" content="Switch page" key="desc" />
        <meta name="og:description" content="Switch page" />
      </Head>

      <main>
        <h2>Switch</h2>

        <BlockComponentCanvas>
          <div>
            <Switch />
          </div>
          <div>
            <Switch selectedIcon={CheckIcon} />
          </div>
          <div>
            <Switch unselectedIcon={RemoveIcon} selectedIcon={CheckIcon} />
          </div>
        </BlockComponentCanvas>
        <h3>Disabled</h3>
        <BlockComponentCanvas>
          <div>
            <Switch disabled />
          </div>
          <div>
            <Switch disabled selectedIcon={CheckIcon} />
          </div>
          <div>
            <Switch
              disabled
              unselectedIcon={RemoveIcon}
              selectedIcon={CheckIcon}
            />
          </div>
        </BlockComponentCanvas>
        <h3>Disabled / checked</h3>
        <BlockComponentCanvas>
          <div>
            <Switch checked disabled />
          </div>
          <div>
            <Switch checked disabled selectedIcon={CheckIcon} />
          </div>
          <div>
            <Switch
              disabled
              checked
              unselectedIcon={RemoveIcon}
              selectedIcon={CheckIcon}
            />
          </div>
        </BlockComponentCanvas>
        <CodeBlock
          code={`...
<div>
  <Switch />
</div>
<div>
  <Switch selectedIcon={CheckIcon} />
</div>
<div>
  <Switch unselectedIcon={RemoveIcon} selectedIcon={CheckIcon} />
</div>
...`}
        ></CodeBlock>
      </main>
    </div>
  );
}
