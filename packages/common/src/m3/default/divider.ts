import { M3Options } from "./index";

export const Divider = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    // should be MdRefPaletteNeutralVariant80 (docs)
    // it is MdRefPaletteNeutralVariant50 (tokens)
    // meh
    backgroundColor: tokens[`MdSysColorOutlineVariant${variant}`],
    "&[data-variant=horizontal]": {
      height: "1px",
      width: "100%",
    },
    "&[data-variant=vertical]": {
      width: "1px",
      height: "100%",
    },
  };
};
