"use client";
import {
  OutlinedCancelIcon,
  OutlinedErrorIcon,
  SearchIcon,
} from "@material-toys/icons-react";
import { FilledTextField, MT } from "@material-toys/react";

// import {useEffect, useState} from "react";
import { useThemeContexts } from "@material-toys/react";
import Head from "next/head";
import { useContext, useRef, useState } from "react";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";

export default function filled_text_field_page() {
  const [thirdValue, setThirdValue] = useState("abc");
  const { VariantContext } = useThemeContexts();
  const variant = useContext(VariantContext);
  const ref = useRef(null);
  // useEffect(() => {
  //     ref.current.focus();
  // }, [])
  const thirdOnChange = (e) => {
    setThirdValue(e.target.value);
  };
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Filled Text Field</title>
        <meta property="og:title" content="Filled Text Field" key="title" />
        <meta name="description" content="Filled Text Field page" key="desc" />
        <meta name="og:description" content="Filled Text Field page" />
      </Head>

      <main>
        <h2>Filled text field</h2>
        <div>
          <MT variant={variant}>
            <BlockComponentCanvas showGrid={false}>
              <FilledTextField
                ref={ref}
                supportingText="Supporting text"
                label={"Label text"}
              />
              <FilledTextField
                disabled
                supportingText="Supporting text"
                label={"Label text"}
              />
              <FilledTextField
                maxLength={10}
                characterCounter={true}
                supportingText="Supporting text"
                leadingIcon={<SearchIcon />}
                label={"Label text"}
              />
              <FilledTextField
                disabled
                maxLength={10}
                characterCounter={true}
                supportingText="Supporting text"
                leadingIcon={<SearchIcon />}
                label={"Label text"}
              />
              <FilledTextField
                onChange={thirdOnChange}
                value={thirdValue}
                leadingIcon={<SearchIcon />}
                trailingIcon={
                  <OutlinedCancelIcon
                    onClick={() => setThirdValue("")}
                    style={{ cursor: "pointer" }}
                  />
                }
                label={"Label text"}
              />
              <FilledTextField
                disabled
                value={"aaa"}
                leadingIcon={<SearchIcon />}
                trailingIcon={
                  <OutlinedCancelIcon
                    onClick={() => setThirdValue("")}
                    style={{ cursor: "pointer" }}
                  />
                }
                label={"Label text"}
              />
              <FilledTextField
                supportingText={"Supporting text"}
                value={"error"}
                error={true}
                leadingIcon={<SearchIcon />}
                trailingIcon={<OutlinedErrorIcon />}
                label={"Label text"}
              />
            </BlockComponentCanvas>
            <CodeBlock
              code={`import {FilledTextField, MT} from "@material-toys/react";
import { SearchIcon, OutlinedCancelIcon, OutlinedErrorIcon } from "@material-toys/icons-react";
function App() {
  const [thirdValue, setThirdValue] = useState("abc");
  const thirdOnChange = (e) => {
    setThirdValue(e.target.value)
  }
  return (
  <MT>  
    <FilledTextField supportingText="Supporting text" label={"Label text"}/>
    <FilledTextField disabled supportingText="Supporting text" label={"Label text"}/>
    <FilledTextField maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
    <FilledTextField disabled maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
    <FilledTextField onChange={thirdOnChange} value={thirdValue} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
    <FilledTextField disabled value={"aaa"} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
    <FilledTextField supportingText={"Supporting text"} value={"error"} error={true} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedErrorIcon/>} label={"Label text"}/>
  </MT>)
}       `}
            ></CodeBlock>
          </MT>
        </div>
      </main>
    </div>
  );
}
