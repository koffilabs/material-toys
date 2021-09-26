<template>
  <div :class="btn">Button here</div>
</template>
<script>
import {computed, inject, reactive, ref} from "vue";
import {css, cx} from "@emotion/css";

export default {
  name: "Button",
  setup(){
    // TODO: refactor the Object.keys... thing in a reusable function
    const theme = inject("theme");
    let btn = computed(() => css`
      background:${theme.colors.primary};
      ${Object.keys(theme.components.Button).map(key => `${key}:${theme.components.Button[key]};`)}
    `);
    return { btn };
  }
}
</script>
