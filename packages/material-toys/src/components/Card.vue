<script lang="ts">
import { computed, inject, Ref, ref } from "vue";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";

export default {
  name: "Card",
  setup() {
    const tokens: any = inject("tokens");
    const variant: any = inject("variant");
    const theme = m3(tokens, { variant: variant.value });
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    const card = computed(() =>
      css(
        (style.value = applyReactiveStyle({
          target: m3(tokens, { variant: variant.value }).components.Card,
          theme,
          width,
          height,
        }))
      )
    );
    return { root, card };
  },
};
</script>
<template>
  <div ref="root" :class="card">
    <div class="state"></div>
    <slot></slot>
  </div>
</template>
