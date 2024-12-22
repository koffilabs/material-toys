import Head from "next/head";
import { RadioButton } from "@material-toys/react";

import { BlockComponentCanvas } from "../components/BlockComponentCanvas";
import { CodeBlock } from "../components/CodeBlock";
import { useState } from "react";

export default function radio_button_page() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Radio Button</title>
        <meta property="og:title" content="Radio Button" key="title" />
        <meta name="description" content="Radio Button page" key="desc" />
        <meta name="og:description" content="Radio Button page" />
      </Head>

      <main>
        <h2>Radio Button</h2>
        <BlockComponentCanvas>
          <table style={{ width: 500 }}>
            <tbody>
              <tr>
                <td>Enabled</td>
                <td>Disabled</td>
                <td>Disabled / checked</td>
              </tr>
              <tr>
                <td>
                  <RadioButton />
                </td>
                <td>
                  <RadioButton disabled></RadioButton>
                </td>
                <td>
                  <RadioButton checked disabled></RadioButton>
                </td>
              </tr>
            </tbody>
          </table>
        </BlockComponentCanvas>
        <BlockComponentCanvas>
          Group
          <div>
            <RadioButton
              checked={selected === 0}
              onChange={() => {
                setSelected(0);
              }}
            ></RadioButton>
            <RadioButton
              checked={selected === 1}
              onChange={(e) => {
                setSelected(1);
              }}
            ></RadioButton>
          </div>
        </BlockComponentCanvas>
        <CodeBlock
          code={`<table style={{ width: 500 }}>
  <tbody>
    <tr>
      <td>Enabled</td>
      <td>Disabled</td>
      <td>Disabled / checked</td>
    </tr>
    <tr>
      <td>
        <RadioButton />
      </td>
      <td>
        <RadioButton disabled></RadioButton>
      </td>
      <td>
        <RadioButton checked disabled></RadioButton>
      </td>
    </tr>
  </tbody>
</table>
...
Group
<div>
  <RadioButton
    checked={selected === 0}
    onChange={() => {
      setSelected(0);
    }}
  ></RadioButton>
  <RadioButton
    checked={selected === 1}
    onChange={(e) => {
      setSelected(1);
    }}
  ></RadioButton>
</div>
`}
        ></CodeBlock>
      </main>
    </div>
  );
}
