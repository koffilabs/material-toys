"use client";
import { Button } from "@material-toys/react";
import Head from "next/head";
import { BlockComponentCanvas } from "../components/BlockComponentCanvas";
import { CodeBlock } from "../components/CodeBlock";
import classes from "./index.module.scss";

export default function Index() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Material Toys</title>
        <meta property="og:title" content="Material Toys" key="title" />
        <meta
          name="description"
          content="Material Toys is a Material Design v3 components library for React"
          key="desc"
        />
        <meta
          name="og:description"
          content="Material Toys is a Material Design v3 components library for React"
        />
      </Head>
      <h1>Material Toys</h1>
      <p>A Material Design 3 components library for React</p>
      <h2>Getting started</h2>
      <code className={classes.commands}>npm i @material-toys/react</code>
      <code className={classes.commands}>yarn add @material-toys/react</code>
      <BlockComponentCanvas showGrid={true}>
        <Button>Hello World!</Button>
      </BlockComponentCanvas>

      <CodeBlock
        code={`import { MT, Button} from "@material-toys/react";
function App() {
  return (
      <MT>
        <Button>Hello World!</Button>
      </MT>
  );
}

export default App;
`}
      ></CodeBlock>
      <footer>Made by Nicola Rizzo</footer>
    </div>
  );
}
