import classes from "./index.module.scss";
export default function Index() {
  return (
    <div className={classes.container}>
      <h1>Material Toys</h1>
      <p>A material design 3 implementation for React</p>
      <h2>Installation</h2>
      <code className={classes.commands}>
        npm i @material-toys/react
      </code>
      <code className={classes.commands}>
        yarn add @material-toys/react
      </code>
    </div>
  );
}
