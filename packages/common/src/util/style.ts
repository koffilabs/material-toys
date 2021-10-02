interface ThemePath {
  theme: object;
  path: string;
}
const yueThemePrefix: string = "@yue:theme";
const yueThemeMatcher: RegExp = /\[(.*?)\]/;
export const spread = ({ theme, path }: ThemePath) => {
  const [, ...p]: Array<string> = path.split("/");
  const node: any = p.reduce((a: any, b) => {
    return a?.[b];
  }, theme);
  return node ? Object.keys(node).map((key) => `${key}:${node[key]};`) : [];
};
const exec = ({ dest, source: source, theme }) => {
  for (const key of Object.keys(source)) {
    switch (typeof source[key]) {
      case "function":
        // source[key] = source[key]({ theme });
        break;
      case "object":
        // console.log("obj", source[key]);
        dest[key] = {};
        dest[key] = exec({ dest: dest[key], source: source[key], theme });
        break;
      default:
        if (`${source[key]}`.startsWith(yueThemePrefix)) {
          try {
            const path = yueThemeMatcher.exec(source[key])[1].split(".");
            let value = theme,
              i = 0;
            while (value[path[i]]) {
              value = value[path[i]];
              i++;
            }
            dest[key] = value;
          } catch (e) {
            console.error(
              `Error reading the ${yueThemePrefix} from ${source.key}`
            );
          }
        } else {
          // console.log("standard property here", key, source[key]);
          dest[key] = source[key];
        }
        break;
        console.log("default, typeof = ", typeof source[key]);
        // console.log("default", source[key]);
        // string
        break;
    }
  }
  return dest;
};
const cloneObject = (dest: object) => {
  const clone = {};
  for (const key of Object.keys(dest)) {
    switch (typeof dest[key]) {
      case "function":
        clone[key] = dest[key];
        break;
      case "object":
        // console.log("obj", clone[key]);
        clone[key] = cloneObject(dest[key]);
        break;
      default:
        clone[key] = dest[key];
        break;
    }
  }
  return clone;
};
export const setDynamic = ({ target, theme }) => {
  let clone = JSON.parse(JSON.stringify(target));
  // const clone = cloneObject(target);
  // const clone = target;
  let dest = {};
  exec({ dest, source: target, theme });
  console.log("returning", dest);
  return dest;
};
