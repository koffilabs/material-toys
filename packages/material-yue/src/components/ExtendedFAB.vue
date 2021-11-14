<template>
  <button ref="root" :class="efab">
    <div class="state">
    </div>
    <slot name="icon"></slot>
    <div><slot></slot></div></button>
</template>
<script lang="ts">
import { computed, inject, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic, m3} from "@material-yue/common";

export default {
  name: "ExtendedFAB",
  setup(){
    const tokens: any = inject("tokens");
    const variant = inject("themeVariant");
    const theme = m3(tokens, {variant});
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    const efab = computed(() => css(
        style.value = setDynamic({target: m3(tokens, {variant}).components.ExtendedFAB, theme, width, height}),
    ));
    return { root, efab };
  }
}
</script>
