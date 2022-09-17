import classes from "./index.module.scss";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";
import {Button, MT} from "@material-toys/react";
import {material_tokens, cutElevatedButton, cutFilledButton, cutFilledTonalButton} from "@material-toys/common";
import React from "react";

const tokens = {...material_tokens};
const myTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"
  return {
    components: {
      Button: {
        ...cutElevatedButton({
          shape: tokens.MdSysShapeCornerExtraSmall,
          fill: tokens[`MdSysColorSurface${variant}`],
          stateFill: tokens[`MdSysColorPrimary${variant}`],
        }),
        ...cutFilledButton({
          color: tokens[`MdSysColorPrimary${variant}`],
          shape: tokens.MdSysShapeCornerMedium,
          fill: tokens[`MdSysColorPrimary${variant}`],
          stateFill: tokens[`MdSysColorPrimary${variant}`],
        }),
        ...cutFilledTonalButton({
          color: tokens[`MdSysColorPrimary${variant}`],
          shape: tokens.MdSysShapeCornerLargeEnd,
          fill: tokens[`MdSysColorSecondaryContainer${variant}`],
          stateFill: tokens[`MdSysColorPrimary${variant}`],
        }),
      }
    }
  };
};
export default function Shapes() {
  return (
    <div className={classes.container}>
      <h1>Theming</h1>
      <p><a href="https://m3.material.io/styles/shape/shape-scale-tokens">Shape scale tokens</a> can be used to change
        a component shape</p>
      <h2>Change a component shape using design tokens</h2>
      <BlockComponentCanvas showGrid={true}>
        <MT theme={myTheme}>
          <Button>Elevated</Button>
          <Button className={"filled"}>Filled</Button>
          <Button className={"filled-tonal"}>Filled tonal</Button>
        </MT>
      </BlockComponentCanvas>
      <CodeBlock code={`import { MT, Button } from "@material-toys/react";
import {material_tokens, cutElevatedButton, cutFilledButton, cutFilledTonalButton} from "@material-toys/common";
const tokens = {...material_tokens };
const myTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"
  return {
    components: {
      Button: {
        ...cutElevatedButton({
          shape: tokens.MdSysShapeCornerExtraSmall,
          fill: tokens[\`MdSysColorSurface\${variant}\`],
          stateFill: tokens[\`MdSysColorPrimary\${variant}\`],
        }),
        ...cutFilledButton({
          color: tokens[\`MdSysColorPrimary\${variant}\`],
          shape: tokens.MdSysShapeCornerMedium,
          fill: tokens[\`MdSysColorPrimary\${variant}\`],
          stateFill: tokens[\`MdSysColorPrimary\${variant}\`],
        }),
        ...cutFilledTonalButton({
          color: tokens[\`MdSysColorPrimary\${variant}\`],
          shape: tokens.MdSysShapeCornerLargeEnd,
          fill: tokens[\`MdSysColorSecondaryContainer\${variant}\`],
          stateFill: tokens[\`MdSysColorPrimary\${variant}\`],
        })
      }
    }
  };
};
function App() {
  return (
        <MT theme={myTheme}>
          <Button>Elevated</Button>
          <Button className="filled">Filled</Button>
          <Button className="filled-tonal">Filled tonal</Button>
        </MT>
  );
}

export default App;
`}></CodeBlock>
    </div>
  );
}
