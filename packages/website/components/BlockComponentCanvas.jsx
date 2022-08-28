import classes from "./BlockComponentCanvas.module.scss";
export const BlockComponentCanvas = ({ children, showGrid = false }) => {
  return <div data-show-grid={showGrid} className={classes.blockComponentCanvas}>{children}</div>;
};
