interface ThemePath {
  theme: object;
  path: string;
}
export const spread = ({ theme, path }: ThemePath) => {
  const [, ...p]: Array<string> = path.split("/");
  const node: any = p.reduce((a: any, b) => {
    return a?.[b];
  }, theme);
  return node ? Object.keys(node).map((key) => `${key}:${node[key]};`) : [];
};
const exec = ({ target, theme }) => {
  for (const key of Object.keys(target)) {
    switch (typeof target[key]) {
      case "function":
        // target[key] = target[key]({ theme });
        break;
      case "object":
        // console.log("obj", target[key]);
        target[key] = exec({ target: target[key], theme });
        break;
      default:
        // console.log("default", target[key]);
        // string
        // target[key];
        break;
    }
  }
  return target;
};
const cloneObject = (source: object) => {
  const clone = {};
  for (const key of Object.keys(source)) {
    switch (typeof source[key]) {
      case "function":
        clone[key] = source[key];
        break;
      case "object":
        // console.log("obj", clone[key]);
        clone[key] = cloneObject(source[key]);
        break;
      default:
        clone[key] = source[key];
        break;
    }
  }
  return clone;
};
export const setDynamic = ({ target, theme }) => {
  // let targetCopy = JSON.parse(JSON.stringify(target));
  // const clone = cloneObject(target);
  const clone = target;
  let result = exec({ target: clone, theme });
  console.log("returning", result);
  return result;
};
