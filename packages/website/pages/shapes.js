import classes from "./index.module.scss";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";
import {Button, MT} from "@material-toys/react";
import {material_tokens, cutElevatedButton, cutFilledButton, cutFilledTonalButton} from "@material-toys/common";
import React from "react";
import {roundedShape, cutShape} from "@material-toys/common";
import {css} from "@emotion/css";

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
  marginRight: "2rem"
};
const block = {
  flexBasis: "100%"
}
const myTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"
  return {
    components: {
      Button: {
        ...cutElevatedButton({
          shape: material_tokens.MdSysShapeCornerExtraSmall,
          fill: material_tokens[`MdSysColorSurface${variant}`],
          stateFill: material_tokens[`MdSysColorPrimary${variant}`],
        }),
        ...cutFilledButton({
          color: material_tokens[`MdSysColorPrimary${variant}`],
          shape: material_tokens.MdSysShapeCornerMedium,
          fill: material_tokens[`MdSysColorPrimary${variant}`],
          stateFill: material_tokens[`MdSysColorPrimary${variant}`],
        }),
        ...cutFilledTonalButton({
          color: material_tokens[`MdSysColorPrimary${variant}`],
          shape: material_tokens.MdSysShapeCornerLargeEnd,
          fill: material_tokens[`MdSysColorSecondaryContainer${variant}`],
          stateFill: material_tokens[`MdSysColorPrimary${variant}`],
        }),
      }
    }
  };
};
export default function Shapes() {
  const fill = "#e8def7";
  const base = {
    background: fill,
    display: "inline-block",
    marginRight: "2rem",
    padding: "0",
    width: "150px",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
  }
  const roundNone = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerNone})
  });
  const cutNone = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerNone, fill})
  });
  const roundXSmall = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerExtraSmall})
  });
  const cutXSmall = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerExtraSmall, fill})
  });
  const roundSmall = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerSmall})
  });
  const cutSmall = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerSmall, fill})
  });
  const roundMedium = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerMedium})
  });
  const cutMedium = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerMedium, fill})
  });
  const roundLarge = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerLarge})
  });
  const cutLarge = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerLarge, fill})
  });
  const roundLargeEnd = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerLargeEnd})
  });
  const cutLargeEnd = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerLargeEnd, fill})
  });
  const roundLargeTop = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerLargeTop})
  });
  const cutLargeTop = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerLargeTop, fill})
  });
  const roundExtraLarge = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerExtraLarge})
  });
  const cutExtraLarge = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerExtraLarge, fill})
  });
  const roundFull = css({
    ...base,
    borderRadius: roundedShape({shape: "40 40 40 40"})
  });
  const cutFull = css({
    ...base,
    ...cutShape({shape: "40 40 40 40", fill})
  });
  const roundExtraLargeTop = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerExtraLargeTop})
  });
  const cutExtraLargeTop = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerExtraLargeTop, fill})
  });
  const roundXSmallTop = css({
    ...base,
    borderRadius: roundedShape({shape: material_tokens.MdSysShapeCornerExtraSmallTop})
  });
  const cutXSmallTop = css({
    ...base,
    ...cutShape({shape: material_tokens.MdSysShapeCornerExtraSmallTop, fill})
  });
  return (
    <div className={classes.container}>
      <h1>Shapes</h1>
      <p><a href="https://m3.material.io/styles/shape/shape-scale-tokens">Shape scale tokens</a> can be used to change
        a component shape.</p>
      <p>The @material-toys/common package provides the helper functions roundedShape and cutShape to apply these styles.</p>
      <BlockComponentCanvas showGrid={true}>
        <MT>
          <div className="block">
            <div style={{...note, width: "150px"}}>Rounded</div>
            <div style={{...note, width: "150px"}}>Cut</div>
          </div>
          <div style={block}>
            <div className={roundNone}>none</div>
            <div className={cutNone}>none</div>
            <div style={note}>MdSysShapeCornerNone</div>
          </div>
          <div style={block}>
            <div className={roundXSmall}>x small</div>
            <div className={cutXSmall}>x small</div>
            <div style={note}>MdSysShapeCornerExtraSmall</div>
          </div>
          <div style={block}>
            <div className={roundXSmallTop}>x small top</div>
            <div className={cutXSmallTop}>x small top</div>
            <div style={note}>MdSysShapeCornerExtraSmallTop</div>
          </div>
          <div style={block}>
            <div className={roundSmall}>small</div>
            <div className={cutSmall}>small</div>
            <div style={note}>MdSysShapeCornerSmall</div>
          </div>
          <div style={block}>
            <div className={roundMedium}>medium</div>
            <div className={cutMedium}>medium</div>
            <div style={note}>MdSysShapeCornerMedium</div>
          </div>
          <div style={block}>
            <div className={roundLarge}>large</div>
            <div className={cutLarge}>large</div>
            <div style={note}>MdSysShapeCornerLarge</div>
          </div>
          <div style={block}>
            <div className={roundLargeEnd}>large end</div>
            <div className={cutLargeEnd}>large end</div>
            <div style={note}>MdSysShapeCornerLargeEnd</div>
          </div>
          <div style={block}>
            <div className={roundLargeTop}>large top</div>
            <div className={cutLargeTop}>large top</div>
            <div style={note}>MdSysShapeCornerLargeTop</div>
          </div>
          <div style={block}>
            <div className={roundExtraLarge}>extra large</div>
            <div className={cutExtraLarge}>extra large</div>
            <div style={note}>MdSysShapeCornerExtraLarge</div>
          </div>
          <div style={block}>
            <div className={roundExtraLargeTop}>extra large top</div>
            <div className={cutExtraLargeTop}>extra large top</div>
            <div style={note}>MdSysShapeCornerExtraLargeTop</div>
          </div>
          <div style={block}>
            <div className={roundFull}>full</div>
            <div className={cutFull}>full</div>
            <div style={note}>The MdSysShapeCornerFull token works only on MT components</div>
          </div>
        </MT>
      </BlockComponentCanvas>
      <h2>Buttons shapes</h2>
      <p>The common package provides helpers to obtain cut shaped buttons and retain the ripple effect.</p>
      <BlockComponentCanvas showGrid={true}>
        <MT theme={myTheme}>
          <Button>Elevated</Button>
          <Button className={"filled"}>Filled</Button>
          <Button className={"filled-tonal"}>Filled tonal</Button>
        </MT>
      </BlockComponentCanvas>
      <CodeBlock code={`import { MT, Button } from "@material-toys/react";
import {material_tokens, cutElevatedButton, cutFilledButton, cutFilledTonalButton} from "@material-toys/common";
const myTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"
  return {
    components: {
      Button: {
        ...cutElevatedButton({
          shape: material_tokens.MdSysShapeCornerExtraSmall,
          fill: material_tokens[\`MdSysColorSurface\${variant}\`],
          stateFill: material_tokens[\`MdSysColorPrimary\${variant}\`],
        }),
        ...cutFilledButton({
          color: material_tokens[\`MdSysColorPrimary\${variant}\`],
          shape: material_tokens.MdSysShapeCornerMedium,
          fill: material_tokens[\`MdSysColorPrimary\${variant}\`],
          stateFill: material_tokens[\`MdSysColorPrimary\${variant}\`],
        }),
        ...cutFilledTonalButton({
          color: material_tokens[\`MdSysColorPrimary\${variant}\`],
          shape: material_tokens.MdSysShapeCornerLargeEnd,
          fill: material_tokens[\`MdSysColorSecondaryContainer\${variant}\`],
          stateFill: material_tokens[\`MdSysColorPrimary\${variant}\`],
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
