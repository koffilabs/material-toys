<template>
  <button ref="root" :class="btn"><slot></slot></button>
</template>
<script lang="ts">
import { computed, inject, ref, watch } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic} from "@material-yue/common";
import useClipPathData from '../composables/useClipPathData';

export default {
  name: "Button",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null);
    const style = ref(null);
    const btn = computed(() => css(
        style.value = setDynamic({target: theme.components.Button, theme, node: root}),
    ));
    useClipPathData({root, style})
    // watch(style, (newStyle, oldStyle) => {
    // });
    return { btn, root };
  }
}
</script>
