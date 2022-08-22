import { M3Options } from "./index";
export const Surface = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    color: tokens[`MdSysColorOnSurface${variant}`],
    // "*": {
      // color: tokens[`MdSysColorOnSurface${variant}`],
      // color: "red",
    // },
    backgroundColor: tokens[`MdSysColorSurface${variant}`],
  };
};
