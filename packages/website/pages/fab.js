import Head from "next/head";
import {EditIcon} from "@material-toys/icons-react";
import {FAB} from "@material-toys/react";

import {useState} from "react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";

export default function fab_page() {
  const [isExtended, setExtended] = useState(true);
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Floating Action Button</title>
        <meta property="og:title" content="Floating Action Button" key="title" />
        <meta name="description" content="Floating Action Button page" key="desc"/>
        <meta name="og:description" content="Floating Action Button page" />
      </Head>

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
