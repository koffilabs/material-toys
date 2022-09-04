import {EditIcon} from "@material-toys/icons-react";
import {FAB} from "@material-toys/react";

import {useState} from "react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";

export default function fab_page() {
  const [isExtended, setExtended] = useState(true);
  return (
    <div className="container">
      <main>
        <h2>Extended FAB</h2>
        <BlockComponentCanvas>
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
        </BlockComponentCanvas>
        <CodeBlock code={`          
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

`}>
        </CodeBlock>
        <h2>Extended FAB with Icon</h2>
          <BlockComponentCanvas>
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
          </BlockComponentCanvas>
            <CodeBlock code={`
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
              `}></CodeBlock>
      </main>
      <FAB
        style={{position: "fixed", right: "16px", bottom: "16px"}}
        icon={<EditIcon/>}
        extended={isExtended}
      >
        Compose
      </FAB>
    </div>
  );
}
