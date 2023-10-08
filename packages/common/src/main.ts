export { spread, applyReactiveStyle } from "./util/style";
export { rgba } from "./util/rgba";
export { cutShape, roundedShape } from "./util/shape";
export { theme } from "./themes/default";
export { gridStyle } from "./m3/grid";
export { applicationStyle } from "./m3/application";
export { m3 } from "./m3/default";
export { breakpoints } from "./m3/breakpoints";
export { ripple } from "./ripple";
// export { elevation } from "./m3/elevation";

export {
  cutElevatedButton,
  cutFilledButton,
  cutFilledTonalButton,
} from "./m3/cut/buttons";

import * as tokens from "./m3/default/tokens";
import * as tokens_polyfill from "./m3/default/polyfill";
export const material_tokens = { ...tokens, ...tokens_polyfill };
