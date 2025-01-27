"use client";
import Head from "next/head";
import { EditIcon, AddIcon } from "@material-toys/icons-react";
import { MT, Button, Card, FAB, Grid } from "@material-toys/react";

import { useEffect, useState } from "react";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";

export default function fab_page() {
  const [isExtended, setExtended] = useState(true);
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Grid</title>
        <meta property="og:title" content="Grid" key="title" />
        <meta name="description" content="Grid page" key="desc" />
        <meta name="og:description" content="Grid page" />
      </Head>
      <main>
        <h2>Grid</h2>
        <Grid>
          <Card className="elevated col-lg-3 col-4 col-sm-8">
            <div className="someContent">
              <h3>Title - Elevated</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic. Cards
              should be easy to scan for relevant information.
            </div>
          </Card>
          <Card className="filled col-lg-3 col-sm-5 col-2">
            <div className="someContent">
              <h3>Title - Filled</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic. Cards
              should be easy to scan for relevant information.
            </div>
          </Card>
          <Card className="outlined col-lg-3 col-sm-3 col-2">
            <div className="someContent">
              <h3>Title - Outlined</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic. Cards
              should be easy to scan for relevant information.
            </div>
          </Card>
        </Grid>
        <CodeBlock
          code={`          
          <Grid>
            <Card className="elevated col-lg-3 col-4 col-sm-8">
              <div className="someContent">
                <h3>Title - Elevated</h3>
                <h5>Subhead</h5>
                Use a card to display content and actions on a single topic.
                Cards should be easy to scan for relevant information.
              </div>
            </Card>
            <Card className="filled col-lg-3 col-sm-5 col-2">
              <div className="someContent">
                <h3>Title - Filled</h3>
                <h5>Subhead</h5>
                Use a card to display content and actions on a single topic.
                Cards should be easy to scan for relevant information.
              </div>
            </Card>
            <Card className="outlined col-lg-3 col-sm-3 col-2">
              <div className="someContent">
                <h3>Title - Outlined</h3>
                <h5>Subhead</h5>
                Use a card to display content and actions on a single topic.
                Cards should be easy to scan for relevant information.
              </div>
            </Card>
          </Grid>
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
