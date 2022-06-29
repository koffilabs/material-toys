interface ThemePath {
  theme: object;
  path: string;
}
const mtThemePrefix: string = "@mt:theme";
const extractor: RegExp = /\[(.*?)\]/;
export const spread = ({ theme, path }: ThemePath) => {
  const [, ...p]: Array<string> = path.split("/");
  const node: any = p.reduce((a: any, b) => {
    return a?.[b];
  }, theme);
  return node ? Object.keys(node).map((key) => `${key}:${node[key]};`) : [];
};
interface ApplyReactiveStyleArgs {
  target: string;
  theme: object;
  height?: number;
  width?: number;
}
const exec = ({ dest, source: source, theme, width, height }) => {
  for (const key of Object.keys(source)) {
    switch (typeof source[key]) {
      case "function":
        console.log("width is", width);
        console.log("parsing a function", source[key]);
        if (typeof width !== "undefined") {
          dest[key] = source[key]({
            width: width,
            height: height,
          });
          console.log("destination style", dest[key]);
        }
        // source[key] = source[key]({ theme });
        break;
      case "object":
        dest[key] = {};
        dest[key] = exec({
          dest: dest[key],
          source: source[key],
          theme,
          width,
          height,
        });
        break;
      default:
        if (`${source[key]}`.startsWith(mtThemePrefix)) {
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
              `Error reading the ${mtThemePrefix} from ${source[key]}`
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
export const applyReactiveStyle = ({
  target,
  theme,
  width,
  height,
}: ApplyReactiveStyleArgs) => {
  // let clone = JSON.parse(JSON.stringify(target));
  // const clone = cloneObject(target);
  // const clone = target;
  let dest = {};
  const targetPath = target.split(".");
  let source = theme;
  for (const key of targetPath) {
    source = source[key];
  }
  exec({ dest, source, theme, width, height });
  return dest;
};
