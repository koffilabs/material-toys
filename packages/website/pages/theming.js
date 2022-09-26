import classes from "./index.module.scss";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";
import {Button, MT, NavigationBar, NavigationBarItem} from "@material-toys/react";
import {material_tokens} from "@material-toys/common";
import React from "react";
import {HomeIcon} from "@material-toys/icons-react";

const tokens = {...material_tokens, MdSysColorPrimary: "white", MdSysColorSurface: "red"};
const myTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"
  return {
    components: {
      Button: {
        "&.elevated": {
          "& .mt-shape": {
            color: tokens[`MdSysColorPrimary${variant}`],
            backgroundColor: "blue",
          },
          ".ripple": {
            backgroundColor: "white"
          }
        }
      }
    }
  };
};
export default function Theming() {
  return (
    <div className={classes.container}>
      <h1>Theming</h1>
      <p>Material toys uses <a href="https://m3.material.io/foundations/design-tokens/overview">design tokens</a> to
        style its components; there are different ways to theme the library.</p>
      <h2>1. Change the design tokens values</h2>
      <p>All the components using these tokens will be affected:</p>
      <BlockComponentCanvas showGrid={true}>
        <MT tokens={tokens}>
          <Button>Hello World!</Button>
          <div style={{width: "500px"}}>
            <NavigationBar labels={"show"} activeItem={0}>
              <NavigationBarItem
                activeIcon={<HomeIcon size={24}/>}
                icon={<HomeIcon size={24}/>}
              >
                <a>Hello</a>
              </NavigationBarItem>
              <NavigationBarItem
                activeIcon={<HomeIcon size={24}/>}
                icon={<HomeIcon size={24}/>}
              >
                <a>Material</a>
              </NavigationBarItem>
              <NavigationBarItem
                activeIcon={<HomeIcon size={24}/>}
                icon={<HomeIcon size={24}/>}
              >
                <a>Toys</a>
              </NavigationBarItem>
            </NavigationBar>
          </div>
        </MT>
      </BlockComponentCanvas>
      <CodeBlock code={`import { MT, Button, NavigationBar, NavigationBarItem} from "@material-toys/react";
import {material_tokens} from "@material-toys/common";
const tokens = {...material_tokens, MdSysColorPrimary: "white", MdSysColorSurface: "red"};
function App() {
  return (
      <MT tokens={tokens}>
        <Button>Hello World!</Button>
        <NavigationBar>...</NavigationBar>
      </MT>
  );
}

export default App;
`}></CodeBlock>
      <h2>2. Change the component theme, with or without tokens</h2>
      <p>This approach allows a more fine-grained styling and will change only the components targeted by the style
        rules (the elevated button, in this case).</p>
      <BlockComponentCanvas showGrid={true}>
        <MT theme={myTheme}>
          <Button>Hello World!</Button>
          <div style={{width: "500px"}}>
            <NavigationBar labels={"show"} activeItem={0}>
              <NavigationBarItem
                activeIcon={<HomeIcon size={24}/>}
                icon={<HomeIcon size={24}/>}
              >
                <a>Hello</a>
              </NavigationBarItem>
              <NavigationBarItem
                activeIcon={<HomeIcon size={24}/>}
                icon={<HomeIcon size={24}/>}
              >
                <a>Material</a>
              </NavigationBarItem>
              <NavigationBarItem
                activeIcon={<HomeIcon size={24}/>}
                icon={<HomeIcon size={24}/>}
              >
                <a>Toys</a>
              </NavigationBarItem>
            </NavigationBar>
          </div>
        </MT>
      </BlockComponentCanvas>
      <CodeBlock code={`import { MT, Button, NavigationBar, NavigationBarItem} from "@material-toys/react";
import {material_tokens} from "@material-toys/common";
const tokens = {...material_tokens, MdSysColorPrimary: "white", MdSysColorSurface: "red"};
const myTheme = (variant) => {
  // variant can be "Light" (default) or "Dark"
  return {
    components: {
      Button: {
        "&.elevated": {
          color: tokens[\`MdSysColorPrimary\${variant}\`],
          backgroundColor: "blue",
        }
      }
    }
  };
};
function App() {
  return (
      <MT theme={myTheme}>
        <Button>Hello World!</Button>
        <NavigationBar>...</NavigationBar>
      </MT>
  );
}

export default App;
`}></CodeBlock>
    </div>
  );
}
