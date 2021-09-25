<template>
  <div :class="btn">Button here</div>
</template>
<script>
import {inject} from "vue";
import {css, cx} from "@emotion/css";

export default {
  name: "Button",
  setup(){
    const theme = inject("theme");
    const btn = css`
      background:${theme.colors.primary};
    `;
    return { btn };
  }
}
</script>
