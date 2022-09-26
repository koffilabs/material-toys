import {M3Options} from "./index";
import {roundShape} from "../../util/shape";
import {MdSysShapeCornerExtraSmallTop} from "./polyfill";

export const FilledText = (tokens, options?: M3Options) => {
  const variant = options.variant ?? "";
  return {
    borderRadius: roundShape({shape: MdSysShapeCornerExtraSmallTop}),
  }
}