<template>
  <button ref="root" :class="btn"><slot></slot></button>
</template>
<script lang="ts">
import { computed, inject, ref, watch } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic} from "@material-yue/common";
import useClipPathData from '../composables/useClipPathData';
import useResizeEvents from '../composables/useResizeEvents';

export default {
  name: "Button",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null);
    const style = ref(null);
    let btn = computed(() => css(
        style.value = setDynamic({target: theme.components.Button, theme, node: root}),
    ));
    const themeTarget = theme.components.Button;
    const resizingBtn = computed(() => css(
        style.value = [setDynamic({target: theme.components.Button, theme, node: root}), setDynamic({
          target: theme.components._resizingComponent,
          theme,
          node: root,
        })],
    ));
    useClipPathData({root, style})
    useResizeEvents({root, cname: resizingBtn, style, target: themeTarget, classRef: btn})
    return { btn, root };
  }
}
</script>
