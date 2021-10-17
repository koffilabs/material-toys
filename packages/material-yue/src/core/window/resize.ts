import mitt from "mitt";
import { debounce } from "lodash-es";

const WAIT: number = 500;
export const RESIZE = "RESIZE";
export const RESIZE_END = "RESIZE_END";
const emitter = mitt();
const resizeHandler = debounce(
  () => {
    emitter.emit(RESIZE_END, {
      width: window.innerWidth,
      height: window.innerHeight,
    });
  },
  WAIT,
  {
    leading: false,
    trailing: true,
  }
);
const resizeEndHandler = debounce(
  () => {
    emitter.emit(RESIZE, {
      width: window.innerWidth,
      height: window.innerHeight,
    });
  },
  WAIT,
  {
    leading: true,
    trailing: false,
  }
);
window.addEventListener("resize", resizeHandler);
window.addEventListener("resize", resizeEndHandler);
