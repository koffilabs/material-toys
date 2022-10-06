import Head from "next/head";
import {FilledTextField} from "@material-toys/react";
import {
SearchIcon,
  OutlinedCancelIcon
} from "@material-toys/icons-react";

// import {useEffect, useState} from "react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";
import {useState} from "react";

export default function text_field_page() {
  const [thirdValue, setThirdValue] = useState("abc");
  const thirdOnChange = (e) => {
    setThirdValue(e.target.value)
  }
  return (
    <div className="container">
      <main>
        <h2>Filled text field</h2>
        <div>
          <BlockComponentCanvas showGrid={false}>
            <FilledTextField supportingText="Supporting text" label={"Label text"}/>
            <FilledTextField disabled supportingText="Supporting text" label={"Label text"}/>
            <FilledTextField maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
            <FilledTextField disabled maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
            <FilledTextField onChange={thirdOnChange} value={thirdValue} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
            <FilledTextField disabled value={"aaa"} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
          </BlockComponentCanvas>
            <CodeBlock code={`
              `}></CodeBlock>
        </div>
      </main>
    </div>
  );
}
