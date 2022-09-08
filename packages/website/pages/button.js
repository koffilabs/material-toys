import Head from "next/head";
import {AddIcon} from "@material-toys/icons-react";
import {Button,} from "@material-toys/react";

// import {useEffect, useState} from "react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";

export default function button_page() {
  return (
    <div className="container">
      <main>
        <h2>Button</h2>
        <div>
          <BlockComponentCanvas>
            <Button icon={<AddIcon size="18px"/>} className="elevated">
              Elevated
            </Button>
            <Button icon={<AddIcon size="18px"/>} className="filled">
              Filled
            </Button>
            <Button icon={<AddIcon size="18px"/>} className="filled-tonal">
              Filled Tonal
            </Button>
            <Button icon={<AddIcon size="18px"/>} className="outlined">
              Outlined
            </Button>
            <Button icon={<AddIcon size="18px"/>} className="text">
              Text
            </Button>
          </BlockComponentCanvas>
            <CodeBlock code={`
<Button icon={<AddIcon size="18px"/>} className="elevated">
  Elevated
</Button>

<Button icon={<AddIcon size="18px"/>} className="filled">
  Filled
</Button>

<Button icon={<AddIcon size="18px"/>} className="filled-tonal">
  Filled Tonal
</Button>

<Button icon={<AddIcon size="18px"/>} className="outlined">
  Outlined
</Button>

<Button icon={<AddIcon size="18px"/>} className="text">
  Text
</Button>
              `}></CodeBlock>
        </div>
      </main>
      <style jsx>{`
        .someContent {
          font-family: "Roboto", sans-serif;
          padding: 16px 0;
          // width: "200px",
          font-size: .75rem;

          h3 {
            margin: 0;
          }

          h5 {
            margin: .2rem 0 1rem 0;
          }
        }

        )

      `}</style>
    </div>
  );
}
