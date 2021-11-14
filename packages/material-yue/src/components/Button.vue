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
    const variant: any = inject("variant");
    const theme = m3(tokens, {variant:variant.value});
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    const btn = computed(() => css(
        style.value = setDynamic({target: m3(tokens, {variant:variant.value}).components.Button, theme, width, height}),
    ));
    return { root, btn };
  }
}
</script>
