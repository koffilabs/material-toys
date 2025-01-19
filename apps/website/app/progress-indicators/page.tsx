"use client";
import {
  CircularProgressIndicator,
  LinearProgressIndicator,
} from "@material-toys/react";
import Head from "next/head";

import { useState } from "react";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";

export default function progress_indicators_page() {
  const [value, setValue] = useState(42);

  return (
    <div className="container">
      <Head>
        <title>Material Toys - Progress indicators</title>
        <meta property="og:title" content="Progress indicators" key="title" />
        <meta
          name="description"
          content="Progress indicators page"
          key="desc"
        />
        <meta name="og:description" content="Progress indicators page" />
      </Head>

      <main>
        <h2>Progress indicators</h2>

        <h3>Linear progress indicator</h3>
        <BlockComponentCanvas>
          <div>
            <LinearProgressIndicator value={value} max={100} width={"200px"} />
            <div style={{ marginTop: "1rem" }}>Determinate</div>
          </div>
        </BlockComponentCanvas>
        <BlockComponentCanvas>
          <div>
            <LinearProgressIndicator indeterminate max={100} width={"200px"} />
            <div style={{ marginTop: "1rem" }}>Indeterminate</div>
          </div>
        </BlockComponentCanvas>
        <CodeBlock
          code={`<LinearProgressIndicator value={value} max={100} width={"200px"} />
<LinearProgressIndicator indeterminate max={100} width={"200px"} />
`}
        ></CodeBlock>

        <h3>Circular progress indicator</h3>
        <BlockComponentCanvas>
          <div>{<CircularProgressIndicator value={value} />}</div>
          <div>Determinate</div>
        </BlockComponentCanvas>
        <BlockComponentCanvas>
          <div>{<CircularProgressIndicator indeterminate />}</div>
          <div>Indeterminate</div>
        </BlockComponentCanvas>
        <CodeBlock
          code={`<CircularProgressIndicator value={value} />
<CircularProgressIndicator indeterminate />
`}
        ></CodeBlock>
      </main>
    </div>
  );
}
