interface ThemePath {
  theme: object;
  path: string;
}
const yueThemePrefix: string = "@yue:theme";
const extractor: RegExp = /\[(.*?)\]/;
export const spread = ({ theme, path }: ThemePath) => {
  const [, ...p]: Array<string> = path.split("/");
  const node: any = p.reduce((a: any, b) => {
    return a?.[b];
  }, theme);
  return node ? Object.keys(node).map((key) => `${key}:${node[key]};`) : [];
};
const exec = ({ dest, source: source, theme, node, width, height }) => {
  for (const key of Object.keys(source)) {
    switch (typeof source[key]) {
      case "function":
        if (typeof width !== "undefined") {
          dest[key] = source[key]({
            width: width.value,
            height: height.value,
          });
        }
        // source[key] = source[key]({ theme });
        break;
      case "object":
        dest[key] = {};
        dest[key] = exec({
          dest: dest[key],
          source: source[key],
          theme,
          node,
          width,
          height,
        });
        break;
      default:
        if (`${source[key]}`.startsWith(yueThemePrefix)) {
          try {
            const path = extractor.exec(source[key])[1].split(".");
            let value = theme,
              i = 0;
            while (value[path[i]]) {
              value = value[path[i]];
              i++;
            }
            dest[key] = value;
          } catch (e) {
            console.error(
              `Error reading the ${yueThemePrefix} from ${source[key]}`
            );
          }
        } else {
          // console.log("standard property here", key, source[key]);
          dest[key] = source[key];
        }
        break;
    }
  }
  return dest;
};
export const setDynamic = ({ target, theme, node, width, height }) => {
  // let clone = JSON.parse(JSON.stringify(target));
  // const clone = cloneObject(target);
  // const clone = target;
  let dest = {};
  exec({ dest, source: target, theme, node, width, height });
  return dest;
};
