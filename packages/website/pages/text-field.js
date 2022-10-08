import {FilledTextField, MT} from "@material-toys/react";
import { SearchIcon, OutlinedCancelIcon, OutlinedErrorIcon } from "@material-toys/icons-react";

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
          <MT variant={"Light"}>
          <BlockComponentCanvas showGrid={false}>
            <FilledTextField supportingText="Supporting text" label={"Label text"}/>
            <FilledTextField disabled supportingText="Supporting text" label={"Label text"}/>
            <FilledTextField prefix="$" supportingText="With prefix" label={"Label text"}/>
            <FilledTextField maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
            <FilledTextField disabled maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
            <FilledTextField onChange={thirdOnChange} value={thirdValue} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
            <FilledTextField disabled value={"aaa"} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
            <FilledTextField supportingText={"Supporting text"} value={"error"} error={true} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedErrorIcon/>} label={"Label text"}/>
          </BlockComponentCanvas>
            <CodeBlock code={`import {FilledTextField, MT} from "@material-toys/react";
import { SearchIcon, OutlinedCancelIcon, OutlinedErrorIcon } from "@material-toys/icons-react";
<MT>  
  <FilledTextField supportingText="Supporting text" label={"Label text"}/>
  <FilledTextField disabled supportingText="Supporting text" label={"Label text"}/>
  <FilledTextField prefix="$" supportingText="With prefix" label={"Label text"}/>
  <FilledTextField maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
  <FilledTextField disabled maxLength={10} characterCounter={true} supportingText="Supporting text" leadingIcon={<SearchIcon />} label={"Label text"}/>
  <FilledTextField onChange={thirdOnChange} value={thirdValue} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
  <FilledTextField disabled value={"aaa"} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon onClick={() => setThirdValue("")} style={{cursor: "pointer"}}/>} label={"Label text"}/>
  <FilledTextField supportingText={"Supporting text"} value={"error"} error={true} leadingIcon={<SearchIcon />} trailingIcon={<OutlinedErrorIcon/>} label={"Label text"}/>
</MT>  
              `}></CodeBlock></MT>
        </div>
      </main>
    </div>
  );
}
