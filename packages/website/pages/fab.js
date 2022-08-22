import Head from "next/head";
import {EditIcon, AddIcon} from "@material-toys/icons-react";
import {MT, Button, Card, FAB, Grid} from "@material-toys/react";

import {useEffect, useState} from "react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";

export default function fab_page() {
  const [isExtended, setExtended] = useState(true);
  return (
    <div className="container">
      <main>
        <h2>Floating Action Button</h2>
          <BlockComponentCanvas>
            <FAB icon={<EditIcon/>} className="surface"/>
            <FAB icon={<EditIcon/>}/>
            <FAB icon={<EditIcon/>} className="level1"/>

            <FAB icon={<EditIcon size="36px"/>} className="large"/>
            <FAB icon={<EditIcon size="36px"/>} className="level1 large"/>
            <FAB icon={<EditIcon/>} className="level1 small"/>
            <FAB icon={<EditIcon/>} className="level1 small" disabled/>
          </BlockComponentCanvas>
            <CodeBlock code={`
<FAB icon={<EditIcon/>} className="surface"/>

<FAB icon={<EditIcon/>}/>

<FAB icon={<EditIcon/>} className="level1"/>

<FAB icon={<EditIcon size="36px"/>} className="large"/>

<FAB icon={<EditIcon size="36px"/>} className="level1 large"/>

<FAB icon={<EditIcon/>} className="level1 small"/>

<FAB icon={<EditIcon/>} className="level1 small" disabled/>
              `}></CodeBlock>
          <h1>Extended FAB</h1>
          <FAB extended={true}>Compose</FAB>
          <FAB extended className="surface">
            Compose again
          </FAB>
          <FAB extended className="secondary">
            Compose
          </FAB>
          <FAB extended className="tertiary">
            Compose
          </FAB>
        <div>
          <h1>Extended FAB with icons</h1>
          <FAB icon={<EditIcon/>} extended={true}>
            Compose
          </FAB>
          <FAB icon={<EditIcon/>} extended className="surface">
            Compose
          </FAB>
          <FAB icon={<EditIcon/>} extended className="secondary">
            Compose
          </FAB>
          <FAB icon={<EditIcon/>} extended className="tertiary">
            Compose
          </FAB>
        </div>
        <div>
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
        </div>
        <Grid>
          <Card className="elevated col-lg-3 col-12 col-sm-6">
            <div className="someContent">
              <h3>Title - Elevated</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic.
              Cards should be easy to scan for relevant information.
            </div>
          </Card>
          <Card className="filled col-lg-3 col-12 col-sm-6">
            <div className="someContent">
              <h3>Title - Filled</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic.
              Cards should be easy to scan for relevant information.
            </div>
          </Card>
          <Card className="outlined col-lg-3 col-12">
            <div className="someContent">
              <h3>Title - Outlined</h3>
              <h5>Subhead</h5>
              Use a card to display content and actions on a single topic.
              Cards should be easy to scan for relevant information.
            </div>
          </Card>
        </Grid>
      </main>
      <FAB
        style={{position: "fixed", right: "16px", bottom: "16px"}}
        icon={<EditIcon/>}
        extended={isExtended}
      >
        Compose
      </FAB>
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
