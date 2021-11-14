<template>
  <button ref="root" :class="btn">
    <div class="state">
    </div>
    <slot name="icon"></slot>
    <div><slot></slot></div></button>
</template>
<script lang="ts">
import { computed, inject, Ref, ref } from "vue";
import { css } from "@emotion/css";
import { setDynamic, m3 } from "@material-yue/common";
import { RefValue } from 'vue/ref-macros';

export default {
  name: "Button",
  setup(){
    const tokens: any = inject("tokens");
    const variant = inject("themeVariant");
    const theme = m3(tokens, {variant});
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    const btn = computed(() => css(
        style.value = setDynamic({target: m3(tokens, {variant}).components.Button, theme, width, height}),
    ));
    return { root, btn };
  }
}
</script>
