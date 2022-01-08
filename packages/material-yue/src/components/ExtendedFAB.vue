<script lang="ts">
import { computed, inject, ref } from "vue";
import { css, cx } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import Ripple from "./Ripple";

export default {
  name: "ExtendedFAB",
  components: { Ripple },
  setup() {
    const tokens: any = inject("tokens");
    const variant: any = inject("variant");
    const theme = m3(tokens, { variant: variant.value });
    const efab = computed(() =>
      css(
        applyReactiveStyle({
          target: m3(tokens, { variant: variant.value }).components.ExtendedFAB,
          theme,
        })
      )
    );
    return { efab };
  },
};
</script>
<template>
  <Ripple>
    <button v-bind="$attrs" ref="root" :class="efab">
      <div class="state"></div>
      <slot name="icon"></slot>
      <div><slot></slot></div></button
  ></Ripple>
</template>
