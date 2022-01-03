import { computed, inject, onMounted, ref, Ref } from "vue";
import { eventBus } from "../core/eventBus";
import { RESIZE, RESIZE_END } from "../core/window/resize";

interface ResizeEventsArgs {
  root: Ref<HTMLElement>;
  cname: any;
  width: Ref<number>;
  height: Ref<number>;
}

export default function useResizeEvents({
  root,
  cname,
  width,
  height,
}: ResizeEventsArgs) {
  eventBus.on(RESIZE, () => {
    root.value.classList.add(cname.value);
  });
  eventBus.on(RESIZE_END, () => {
    root.value.classList.remove(cname.value);
    width.value = root.value.offsetWidth;
    height.value = root.value.offsetHeight;
  });
  onMounted(() => {
    width.value = root.value.offsetWidth;
    height.value = root.value.offsetHeight;
  });

  return {};
}
