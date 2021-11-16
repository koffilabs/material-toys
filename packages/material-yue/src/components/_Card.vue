<template>
  <div ref="root" :class="card"><slot></slot></div>
</template>
<script lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic, m3} from "@material-yue/common";
import useClipPathData from '../composables/useClipPathData';
import useResizeEvents from '../composables/useResizeEvents';

export default {
  name: "Card",
  setup(){
    const tokens: any = inject("tokens");
    const theme = m3(tokens);
    // const theme: any = inject("theme");
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);

    const card = computed(() => css(
        style.value = setDynamic({target: m3(tokens).components.Card, theme, width, height}),
    ));
    const resizingCard = computed(() => css(
        style.value = [setDynamic({target: theme.components.Card, theme, width, height}), setDynamic({
          target: theme.components._resizingComponent,
          theme,
          height,
          width
        })],
    ));

    useClipPathData({root, style})
    useResizeEvents({root, cname: resizingCard, width, height});

    return { card, root };
  }
}
</script>
