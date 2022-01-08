<script lang="ts">
import { computed, inject, Ref } from "vue";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import Ripple from "./Ripple.vue";

export default {
  inheritAttrs: false,
  name: "Button",
  components: { Ripple },
  setup() {
    const tokens: any = inject("tokens");
    const variant: Ref<string> = inject("variant");
    const theme = m3(tokens, { variant: variant.value });
    const btn = computed(() => {
      return css(
        applyReactiveStyle({
          target: m3(tokens, { variant: variant.value }).components.Button,
          theme,
        })
      );
    });
    // console.log("btn is", btn);
    // const btn = "btn";
    return { btn };
  },
};
</script>
<template>
  <Ripple>
    <button v-bind="$attrs" :class="btn">
      <div class="state"></div>
      <slot name="icon"></slot>
      <div><slot></slot></div>
    </button>
  </Ripple>
</template>
