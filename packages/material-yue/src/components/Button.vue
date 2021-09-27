<template>
  <div :class="btn">Button here</div>
</template>
<script>
import {computed, inject} from "vue";
import {css, cx} from "@emotion/css";
import {spread} from "@material-yue/common/src/main";

export default {
  name: "Button",
  setup(){
    const theme = inject("theme");
    let btn = computed(() => css`
      background:${theme.colors.primary};
      ${spread({theme, "/components/Button"})}
    `);
    return { btn };
  }
}
</script>
