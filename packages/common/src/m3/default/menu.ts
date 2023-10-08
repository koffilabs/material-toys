import { M3Options } from "./index";
import { elevation } from "../elevation";
import { roundedShape } from "../../util/shape";
const duration = ".1s";

export const Menu = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    minWidth: "126px",
    height: "126px",
    backgroundColor: tokens[`MdSysColorSurfaceContainer${variant}`],
    borderRadius: roundedShape({ shape: tokens.MdSysShapeCornerExtraSmallTop }),

    ...elevation.level2,
  };
};
