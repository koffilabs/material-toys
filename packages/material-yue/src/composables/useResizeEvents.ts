import { computed, inject, ref, Ref } from "vue";
import { eventBus } from "../core/eventBus";
import { RESIZE, RESIZE_END } from "../core/window/resize";
import { css } from "@emotion/css";
import { setDynamic } from "@material-yue/common";

interface ResizeEventsArgs {
  root: Ref<HTMLElement>;
  cname: any;
}

export default function useResizeEvents({ root, cname }: ResizeEventsArgs) {
  const theme: any = inject("theme");
  const style = ref(null);
  const resizingClass = computed(() =>
    css(
      (style.value = setDynamic({
        target: theme.components._resizingComponent,
        theme,
        node: root,
      }))
    )
  );
  console.log(" the class name is", resizingClass.value);
  eventBus.on(RESIZE, () => {
    console.log("resizing");
    console.log(root.value.className);
    root.value.classList.add(cname.value);
  });
  eventBus.on(RESIZE_END, () => {
    console.log("resize end");
    root.value.classList.remove(cname.value);
  });
  return {};
}
