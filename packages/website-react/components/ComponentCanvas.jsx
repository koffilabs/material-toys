import classes from "./ComponentCanvas.module.scss";
export const ComponentCanvas = ({ children }) => {
  return <div className={classes.componentCanvas}>{children}</div>;
};
