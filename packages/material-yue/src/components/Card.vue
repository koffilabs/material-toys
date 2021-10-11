<template>
  <div ref="root" :class="card"><slot></slot></div>
</template>
<script lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic} from "@material-yue/common";
import useClipPathData from '../composables/useClipPathData';

export default {
  name: "Card",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null);
    const style = ref(null);

    const card = computed(() => css(
        style.value = setDynamic({target: theme.components.Card, theme, node: root}),
    ));
    useClipPathData({root, style})

    return { card, root };
  }
}
</script>
