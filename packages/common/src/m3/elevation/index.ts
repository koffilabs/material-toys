import { rgba } from "../../util/rgba";
import * as tokens from "../default/tokens";

export const level1 = {
  boxShadow: `0 2px 1px -1px ${rgba(
    tokens.MdSysColorShadow,
    0.2
  )}, 0 1px 1px 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 0 1px 3px 0 ${rgba(
    tokens.MdSysColorShadow,
    0.12
  )}`,
};
export const level2 = {
  boxShadow: `0 3px 1px -2px ${rgba(
    tokens.MdSysColorShadow,
    0.2
  )}, 0 2px 2px 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 
        0 1px 5px 0 ${rgba(tokens.MdSysColorShadow, 0.12)}`,
};
export const level3 = {
  boxShadow: `0 3px 3px -2px ${rgba(
    tokens.MdSysColorShadow,
    0.2
  )}, 0 3px 4px 0 ${rgba(tokens.MdSysColorShadow, 0.14)}, 0 1px 8px 0 ${rgba(
    tokens.MdSysColorShadow,
    0.12
  )}`,
};
export const level4 = {
  boxShadow: `0 5px 5px -3px ${rgba(
    tokens.MdSysColorShadow,
    0.2
  )}, 0 8px 10px 1px ${rgba(tokens.MdSysColorShadow, 0.14)},
   0 3px 14px 2px ${rgba(tokens.MdSysColorShadow, 0.12)}`,
};
export const level5 = {
  boxShadow: `0px 7px 8px -4px ${rgba(
    tokens.MdSysColorShadow,
    0.2
  )}, 0px 12px 17px 2px ${rgba(tokens.MdSysColorShadow, 0.14)},
   0px 5px 22px 4px ${rgba(tokens.MdSysColorShadow, 0.12)}`,
};
export const elevation = {
  level1,
  level2,
  level3,
  level4,
  level5,
};
