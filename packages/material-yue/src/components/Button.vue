<template>
  <div :class="btn">Button here</div>
</template>
<script>
import {computed, inject, reactive, ref} from "vue";
import {css, cx} from "@emotion/css";

export default {
  name: "Button",
  setup(){
    const theme = inject("theme");
    let btn = computed(() => css`
      background:${theme.colors.primary};
    `);
    return { btn };
  }
}
</script>
