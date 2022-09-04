import classes from "./index.module.scss";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";
import {Button} from "@material-toys/react";

export default function Index() {
  return (
    <div className={classes.container}>
      <h1>Material Toys</h1>
      <p>A material design 3 implementation for React</p>
      <h2>Getting started</h2>
      <code className={classes.commands}>
        npm i @material-toys/react
      </code>
      <code className={classes.commands}>
        yarn add @material-toys/react
      </code>
      <CodeBlock code={`import { MT, Button} from "@material-toys/react";!
function App() {
  return (
      <MT>
        <Button>Hello World!</Button>
      </MT>
  );
}

export default App;
`}></CodeBlock>
      <BlockComponentCanvas showGrid={true}>
        <Button>Hello World!</Button>
      </BlockComponentCanvas>

    </div>
  );
}
