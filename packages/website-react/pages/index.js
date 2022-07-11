import classes from "./index.module.scss";
import { Button, Card } from "@material-toys/react";

export default function Index() {
  return (
    <div>
      <h1>Material Toys</h1>
      <h4>A Material You implementation for React</h4>
      <h2>Installation</h2>
      <code class={classes.code}>npm i material-toys</code>
      <code class={classes.code}>yarn add material-toys</code>
    </div>
  );
}
