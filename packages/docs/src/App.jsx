import { css, cx } from "@emotion/css";
const styled = css`
  border: 1px solid red;
`;

export const App = {
  name: "material-yue-docs",
  render() {
    return <div class={styled}>Hello</div>;
  },
};
