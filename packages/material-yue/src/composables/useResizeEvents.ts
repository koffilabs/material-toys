import { computed, inject, ref, Ref } from "vue";
import { eventBus } from "../core/eventBus";
import { RESIZE, RESIZE_END } from "../core/window/resize";
import { css } from "@emotion/css";
import { setDynamic } from "@material-yue/common";

interface ResizeEventsArgs {
  root: Ref<HTMLElement>;
  cname: any;
  style: any;
  target: any;
  classRef: any;
}

export default function useResizeEvents({
  root,
  cname,
  style,
  target,
  classRef,
}: ResizeEventsArgs) {
  const theme: any = inject("theme");
  const st = ref(null);
  const resizingClass = computed(() =>
    css(
      (st.value = setDynamic({
        target: theme.components._resizingComponent,
        theme,
        node: root,
      }))
    )
  );
  let btn;
  console.log(" the class name is", resizingClass.value);
  eventBus.on(RESIZE, () => {
    console.log(root.value.className);
    root.value.classList.add(cname.value);
  });
  eventBus.on(RESIZE_END, () => {
    root.value.classList.remove(cname.value);
    classRef.value = css(
      (style.value = setDynamic({ target, theme, node: root }))
    );
    console.log("btn, new class", classRef);
  });
  return {};
}
