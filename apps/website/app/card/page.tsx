"use client";
import { Card } from "@material-toys/react";

import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";
import Head from "next/head";
import React from "react";

export default function card_page() {
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Card</title>
        <meta property="og:title" content="Card" key="title" />
        <meta name="description" content="Card page" key="desc" />
        <meta name="og:description" content="Card page" />
      </Head>
      <main>
        <h2>Card</h2>
        <BlockComponentCanvas>
          <Card className="elevated">
            <div className="someContent">
              <h3>Title - Elevated</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic. Cards
              should be easy to scan for relevant information.
            </div>
          </Card>
          <Card className="filled">
            <div className="someContent">
              <h3>Title - Elevated</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic. Cards
              should be easy to scan for relevant information.
            </div>
          </Card>
          <Card className="outlined">
            <div className="someContent">
              <h3>Title - Elevated</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic. Cards
              should be easy to scan for relevant information.
            </div>
          </Card>
        </BlockComponentCanvas>
        <CodeBlock
          code={`          
<Card className="elevated">
  <div className="someContent">
    <h3>Title - Elevated</h3>
    <h5>Subhead</h5>
    Use a card to display content and actions on a single topic.
    Cards should be easy to scan for relevant information.
  </div>
</Card>
<Card className="filled">
  <div className="someContent">
    <h3>Title - Elevated</h3>
    <h5>Subhead</h5>
    Use a card to display content and actions on a single topic.
    Cards should be easy to scan for relevant information.
  </div>
</Card>
<Card className="outlined">
  <div className="someContent">
    <h3>Title - Elevated</h3>
    <h5>Subhead</h5>
    Use a card to display content and actions on a single topic.
    Cards should be easy to scan for relevant information.
  </div>
</Card>

`}
        >
          {" "}
        </CodeBlock>
      </main>
      <style jsx>{`
          h3 {
            margin: 0;
            font-size: 1.2rem;
          }
          h5 {
            margin: .2rem 0 1rem 0;
            font-size: .9rem;
          }
        .someContent {
          font-family: "Roboto", sans-serif;
          padding: 16px 0;
          // width: "200px",
          font-size: .85rem;


        }

        )

      `}</style>
    </div>
  );
}
