import classes from "./index.module.scss";
import { Button, Card } from "@material-toys/react";

export default function Index() {
  return (
    <div>
      <h1 className={classes.title}>Material Toys</h1>
      <div className={classes.subtitle}>
        A Material You implementation for React
      </div>
      <h3 className={classes.title}>Installation</h3>
      <code className={classes.code}>npm i @material-toys/react</code>
      <code className={classes.code}>yarn add @material-toys/react</code>
    </div>
  );
}
