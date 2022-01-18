import classes from "./Layout.module.scss";
export const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.menu}>Menu here</div>
      <div className={classes.componentContainer}>{children}</div>
      <style global jsx>
        {`
          html,
          body,
          #__next,
          div#__next > div {
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};
