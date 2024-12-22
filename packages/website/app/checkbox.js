import Head from "next/head";
import { Checkbox } from "@material-toys/react";

import { BlockComponentCanvas } from "../components/BlockComponentCanvas";
import { CodeBlock } from "../components/CodeBlock";

export default function checkbox_page() {
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Checkbox</title>
        <meta property="og:title" content="Checkbox" key="title" />
        <meta name="description" content="Checkbox page" key="desc" />
        <meta name="og:description" content="Checkbox page" />
      </Head>

      <main>
        <h2>Checkbox</h2>

        <BlockComponentCanvas>
          <table style={{ width: 500 }}>
            <tbody>
              <tr>
                <td></td>
                <td>Enabled</td>
                <td>Disabled</td>
                <td>Disabled / checked</td>
              </tr>
              <tr>
                <td>Normal</td>
                <td>
                  <Checkbox />
                </td>
                <td>
                  <Checkbox disabled></Checkbox>
                </td>
                <td>
                  <Checkbox checked disabled></Checkbox>
                </td>
              </tr>
              <tr>
                <td>Indeterminate</td>
                <td>
                  <Checkbox indeterminate={true}></Checkbox>
                </td>
                <td>
                  <Checkbox disabled indeterminate={true}></Checkbox>
                </td>
                <td>
                  <Checkbox checked disabled indeterminate={true}></Checkbox>
                </td>
              </tr>
              <tr>
                <td>Normal / error</td>
                <td>
                  <Checkbox error={true}></Checkbox>
                </td>
                <td>
                  <Checkbox disabled error={true}></Checkbox>
                </td>
                <td>
                  <Checkbox checked disabled error={true}></Checkbox>
                </td>
              </tr>
              <tr>
                <td>Indeterminate / error</td>
                <td>
                  <Checkbox indeterminate={true} error={true}></Checkbox>
                </td>
                <td>
                  <Checkbox
                    disabled
                    indeterminate={true}
                    error={true}
                  ></Checkbox>
                </td>
                <td>
                  <Checkbox
                    disabled
                    checked
                    indeterminate={true}
                    error={true}
                  ></Checkbox>
                </td>
              </tr>
            </tbody>
          </table>
        </BlockComponentCanvas>
        <CodeBlock
          code={`<table style={{ width: 500 }}>
  <tbody>
    <tr>
      <td></td>
      <td>Enabled</td>
      <td>Disabled</td>
      <td>Disabled / checked</td>
    </tr>
    <tr>
      <td>Normal</td>
      <td>
        <Checkbox />
      </td>
      <td>
        <Checkbox disabled></Checkbox>
      </td>
      <td>
        <Checkbox checked disabled></Checkbox>
      </td>
    </tr>
    <tr>
      <td>Indeterminate</td>
      <td>
        <Checkbox indeterminate={true}></Checkbox>
      </td>
      <td>
        <Checkbox disabled indeterminate={true}></Checkbox>
      </td>
      <td>
        <Checkbox checked disabled indeterminate={true}></Checkbox>
      </td>
    </tr>
    <tr>
      <td>Normal / error</td>
      <td>
        <Checkbox error={true}></Checkbox>
      </td>
      <td>
        <Checkbox disabled error={true}></Checkbox>
      </td>
      <td>
        <Checkbox checked disabled error={true}></Checkbox>
      </td>
    </tr>
    <tr>
      <td>Indeterminate / error</td>
      <td>
        <Checkbox indeterminate={true} error={true}></Checkbox>
      </td>
      <td>
        <Checkbox
          disabled
          indeterminate={true}
          error={true}
        ></Checkbox>
      </td>
      <td>
        <Checkbox
          disabled
          checked
          indeterminate={true}
          error={true}
        ></Checkbox>
      </td>
    </tr>
  </tbody>
</table>

              `}
        ></CodeBlock>
      </main>
    </div>
  );
}
