"use client";
import classes from "../index.module.scss";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";
import { Button, MT, Surface } from "@material-toys/react";
import {
  material_tokens,
  cutElevatedButton,
  cutFilledButton,
  cutFilledTonalButton,
} from "@material-toys/common";
import React from "react";
import { roundedShape, cutShape } from "@material-toys/common";
import Head from "next/head";

const note = {
  display: "inline-block",
  lineHeight: "40px",
  borderRadius: "20px",
  padding: "0 1rem",
  marginTop: "1rem",
  height: "40px",
  background: "rgba(0, 0, 0, .7)",
  color: "#ddd",
  textAlign: "center",
  marginRight: "2rem",
};
const block = {
  flexBasis: "100%",
};
const shapesTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"

  const baseClass = {
    display: "inline-block",
    marginRight: "2rem",
    padding: "0",
    width: "150px",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    backgroundColor: "#e8def7",
  };
  return {
    components: {
      Surface: {
        "&.roundFull": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerFull,
          }),
        },
        "&.cutFull": {
          ...baseClass,
          ...cutShape({ shape: material_tokens.MdSysShapeCornerFull }),
        },
        "&.roundExtraLargeTop": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerExtraLargeTop,
          }),
        },
        "&.cutExtraLargeTop": {
          ...baseClass,
          ...cutShape({ shape: material_tokens.MdSysShapeCornerExtraLargeTop }),
        },
        "&.roundLargeEnd": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerLargeEnd,
          }),
        },
        "&.cutLargeEnd": {
          ...baseClass,
          ...cutShape({ shape: material_tokens.MdSysShapeCornerLargeEnd }),
        },
        "&.roundLargeTop": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerLargeTop,
          }),
        },
        "&.cutLargeTop": {
          ...baseClass,
          ...cutShape({ shape: material_tokens.MdSysShapeCornerLargeTop }),
        },
        "&.roundLarge": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerLarge,
          }),
        },
        "&.cutLarge": {
          ...baseClass,
          ...cutShape({ shape: material_tokens.MdSysShapeCornerLarge }),
        },
        "&.roundSmall": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerSmall,
          }),
        },
        "&.cutSmall": {
          ...baseClass,
          ...cutShape({ shape: material_tokens.MdSysShapeCornerSmall }),
        },
        "&.roundXSmallTop": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerExtraSmallTop,
          }),
        },
        "&.cutXSmallTop": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerExtraSmallTop,
          }),
        },
        "&.roundXSmall": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerExtraSmall,
          }),
        },
        "&.cutXSmall": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerExtraSmall,
          }),
        },
        "&.roundNone": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerNone,
          }),
        },
        "&.cutNone": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerNone,
          }),
        },
        "&.roundMedium": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerMedium,
          }),
        },
        "&.cutMedium": {
          ...baseClass,
          ...cutShape({ shape: material_tokens.MdSysShapeCornerMedium }),
        },
        "&.roundExtraLarge": {
          ...baseClass,
          borderRadius: roundedShape({
            shape: material_tokens.MdSysShapeCornerExtraLarge,
          }),
        },
        "&.cutExtraLarge": {
          ...baseClass,
          ...cutShape({ shape: material_tokens.MdSysShapeCornerExtraLarge }),
        },
      },
    },
  };
};
const myTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"
  return {
    components: {
      Button: {
        ...cutElevatedButton({
          shape: material_tokens.MdSysShapeCornerExtraSmall,
        }),
        ...cutFilledButton({
          shape: material_tokens.MdSysShapeCornerMedium,
        }),
        ...cutFilledTonalButton({
          shape: material_tokens.MdSysShapeCornerLargeEnd,
        }),
      },
    },
  };
};
export default function Shapes() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Material Toys - Shapes</title>
        <meta property="og:title" content="Shapes" key="title" />
        <meta name="description" content="Shapes page" key="desc" />
        <meta name="og:description" content="Shapes page" />
      </Head>
      <h1>Shapes</h1>
      <p>
        <a href="https://m3.material.io/styles/shape/shape-scale-tokens">
          Shape scale tokens
        </a>{" "}
        can be used to change a component shape.
      </p>
      <p>
        The @material-toys/common package provides the helper functions
        roundedShape and cutShape to apply these styles.
      </p>
      <BlockComponentCanvas showGrid={true}>
        <MT theme={shapesTheme}>
          <div className="block">
            <div style={{ ...note, width: "150px" }}>Rounded</div>
            <div style={{ ...note, width: "150px" }}>Cut</div>
          </div>
          <div style={block}>
            <Surface className="roundNone">none</Surface>
            <Surface className="cutNone">none</Surface>
            <div style={note}>MdSysShapeCornerNone</div>
          </div>
          <div style={block}>
            <Surface className="roundXSmall">x small</Surface>
            <Surface className="cutXSmall">x small</Surface>
            <div style={note}>MdSysShapeCornerExtraSmall</div>
          </div>
          <div style={block}>
            <Surface className="roundXSmallTop">x small top</Surface>
            <Surface className="cutXSmallTop">x small top</Surface>
            <div style={note}>MdSysShapeCornerExtraSmallTop</div>
          </div>
          <div style={block}>
            <Surface className="roundSmall">small</Surface>
            <Surface className="cutSmall">small</Surface>
            <div style={note}>MdSysShapeCornerSmall</div>
          </div>
          <div style={block}>
            <Surface className="roundMedium">medium</Surface>
            <Surface className="cutMedium">medium</Surface>
            <div style={note}>MdSysShapeCornerMedium</div>
          </div>
          <div style={block}>
            <Surface className="roundLarge">large</Surface>
            <Surface className="cutLarge">large</Surface>
            <div style={note}>MdSysShapeCornerLarge</div>
          </div>
          <div style={block}>
            <Surface className="roundLargeEnd">large end</Surface>
            <Surface className="cutLargeEnd">large end</Surface>
            <div style={note}>MdSysShapeCornerLargeEnd</div>
          </div>
          <div style={block}>
            <Surface className="roundLargeTop">large top</Surface>
            <Surface className="cutLargeTop">large top</Surface>
            <div style={note}>MdSysShapeCornerLargeTop</div>
          </div>
          <div style={block}>
            <Surface className="roundExtraLarge">extra large</Surface>
            <Surface className="cutExtraLarge">extra large</Surface>
            <div style={note}>MdSysShapeCornerExtraLarge</div>
          </div>
          <div style={block}>
            <Surface className="roundExtraLargeTop">extra large top</Surface>
            <Surface className="cutExtraLargeTop">extra large top</Surface>
            <div style={note}>MdSysShapeCornerExtraLargeTop</div>
          </div>
          <div style={block}>
            <Surface className="roundFull">full</Surface>
            <Surface className="cutFull">full</Surface>
            <div style={note}>
              The MdSysShapeCornerFull token works only on MT components
            </div>
          </div>
        </MT>
      </BlockComponentCanvas>
      <CodeBlock
        code={`// this code sample only exploits the MdSysShapeCornerFull token 
import { MT, Surface } from "@material-toys/react";
import React from "react";
import {material_tokens, roundedShape, cutShape} from "@material-toys/common";
const shapesTheme = (variant) => {
  const fill = "#e8def7";

  const baseClass = {
    display: "inline-block",
    marginRight: "2rem",
    padding: "0",
    width: "150px",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    backgroundColor: fill
  };
  return {
    components: {
      Surface: {
        "&.roundFull": {
          ...baseClass,
          borderRadius: roundedShape({ shape: material_tokens.MdSysShapeCornerFull}),
        },
        "&.cutFull": {
          ...baseClass,
          ...cutShape({shape: material_tokens.MdSysShapeCornerFull})
        },
      }
    }
  };
};
function App() {
  return (
    <MT theme={shapesTheme}>
      <div style={block}>
        <Surface className="roundFull">full</Surface>
        <Surface className="cutFull">full</Surface>
      </div>
    </MT>
  );
}

`}
      ></CodeBlock>
      <h2>Buttons shapes</h2>
      <p>
        The common package provides helpers to obtain cut shaped buttons and
        retain the ripple effect too.
      </p>
      <BlockComponentCanvas showGrid={true}>
        <MT theme={myTheme}>
          <Button>Elevated</Button>
          <Button className={"filled"}>Filled</Button>
          <Button className={"filled-tonal"}>Filled tonal</Button>
        </MT>
      </BlockComponentCanvas>
      <CodeBlock
        code={`import { MT, Button } from "@material-toys/react";
import {material_tokens, cutElevatedButton, cutFilledButton, cutFilledTonalButton} from "@material-toys/common";
const myTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"
  return {
    components: {
      Button: {
        ...cutElevatedButton({
          shape: material_tokens.MdSysShapeCornerExtraSmall
        }),
        ...cutFilledButton({
          shape: material_tokens.MdSysShapeCornerMedium
        }),
        ...cutFilledTonalButton({
          shape: material_tokens.MdSysShapeCornerLargeEnd
        }),
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
`}
      ></CodeBlock>
    </div>
  );
}
