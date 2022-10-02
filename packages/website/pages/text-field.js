import Head from "next/head";
import {FilledTextField} from "@material-toys/react";
import {
SearchIcon,
  OutlinedCancelIcon
} from "@material-toys/icons-react";

// import {useEffect, useState} from "react";
import {BlockComponentCanvas} from "../components/BlockComponentCanvas";
import {CodeBlock} from "../components/CodeBlock";

export default function text_field_page() {
  return (
    <div className="container">
      <main>
        <h2>Filled text field</h2>
        <div>
          <BlockComponentCanvas showGrid={true}>
            <FilledTextField label={"Label text"}/>
            <FilledTextField leadingIcon={<SearchIcon />} label={"Label text"}/>
            <FilledTextField leadingIcon={<SearchIcon />} trailingIcon={<OutlinedCancelIcon style={{cursor: "pointer"}}/>} label={"Label text"}/>
          </BlockComponentCanvas>
            <CodeBlock code={`
              `}></CodeBlock>
        </div>
      </main>
    </div>
  );
}
