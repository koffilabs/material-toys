import { debounce } from "lodash-es";
import { eventBus } from "../eventBus";

const WAIT: number = 500;
export const RESIZE = "RESIZE";
export const RESIZE_END = "RESIZE_END";
const resizeHandler = debounce(
  () => {
    eventBus.emit(RESIZE_END, {
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
    eventBus.emit(RESIZE, {
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
