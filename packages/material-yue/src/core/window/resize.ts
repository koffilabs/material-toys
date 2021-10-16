import mitt from "mitt";
import { debounce } from "lodash-es";

const WAIT: number = 500;
const emitter = mitt();
console.log("resize start");
const resizeHandler = debounce(
  () => {
    emitter.emit("resize", {
      width: window.innerWidth,
      height: window.innerHeight,
    });
  },
  WAIT,
  {
    leading: true,
  }
);
window.addEventListener("resize", resizeHandler);
