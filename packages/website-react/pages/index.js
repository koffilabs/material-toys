import classes from "./index.module.scss";
import { Button } from "@material-toys/react";
export default function Index() {
  return (
    <div className={classes}>
      <h1>Material Toys</h1>
      <h2>A Material You implementation for React - website</h2>
      <p>
        this is a button <br />
        <Button className="filled">Hello</Button>
      </p>
    </div>
  );
}
