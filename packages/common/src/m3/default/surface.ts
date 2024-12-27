import { M3Options } from "./index";
import { Tokens } from "./tokens";
export const Surface = (tokens: Tokens, options?: M3Options) => {
  const variant = options?.variant ?? "";
  return {
    color: tokens[`MdSysColorOnSurface${variant}`],
    // "*": {
    // color: tokens[`MdSysColorOnSurface${variant}`],
    // color: "red",
    // },
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
  };
};
