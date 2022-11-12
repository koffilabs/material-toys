import {OutlinedTextField, MT, useTheme} from "@material-toys/react";
import { SearchIcon, OutlinedCancelIcon, OutlinedErrorIcon } from "@material-toys/icons-react";

// import {useEffect, useState} from "react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";
import React, {useContext, useRef, useState} from "react";
import Head from "next/head";

export default function outlined_text_field_page() {
  const [thirdValue, setThirdValue] = useState("abc");
  const {VariantContext } = useTheme();
  const variant = useContext(VariantContext);

  const ref = useRef(null);
  // useEffect(() => {
  //     ref.current.focus();
  // }, [])
  const thirdOnChange = (e) => {
    setThirdValue(e.target.value)
  }
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Outlined Text Field</title>
        <meta property="og:title" content="Outlined Text Field" key="title" />
        <meta name="description" content="Outlined Text Field page" key="desc"/>
        <meta name="og:description" content="Outlined Text Field page" />
      </Head>

      <main>
        <h2>Outlined text field</h2>
        <div>
          <MT variant={variant}>
          <BlockComponentCanvas showGrid={false}>
            <OutlinedTextField ref={ref} supportingText="Supporting text" label={"Label text"}/>
            <OutlinedTextField disabled supportingText="Supporting text" label={"Label text"}/>
            <OutlinedTextField maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
            <OutlinedTextField disabled maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
            <OutlinedTextField onChange={thirdOnChange} value={thirdValue} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
            <OutlinedTextField disabled value={"aaa"} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
            <OutlinedTextField supportingText={"Supporting text"} value={"error"} error={true} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedErrorIcon/>} label={"Label text"}/>
          </BlockComponentCanvas>
            <CodeBlock code={`import {OutlinedTextField, MT} from "@material-toys/react";
import { SearchIcon, OutlinedCancelIcon, OutlinedErrorIcon } from "@material-toys/icons-react";
function App() {
  const [thirdValue, setThirdValue] = useState("abc");
  const thirdOnChange = (e) => {
    setThirdValue(e.target.value)
  }
  return (
  <MT>  
    <OutlinedTextField supportingText="Supporting text" label={"Label text"}/>
    <OutlinedTextField disabled supportingText="Supporting text" label={"Label text"}/>
    <OutlinedTextField maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
    <OutlinedTextField disabled maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
    <OutlinedTextField onChange={thirdOnChange} value={thirdValue} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
    <OutlinedTextField disabled value={"aaa"} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
    <OutlinedTextField supportingText={"Supporting text"} value={"error"} error={true} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedErrorIcon/>} label={"Label text"}/>
  </MT>)
}       `}></CodeBlock></MT>
        </div>
      </main>
    </div>
  );
}
