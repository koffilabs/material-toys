<template>
  <Ripple>
  <button v-bind="$attrs" :class="btn">
    <div class="state">
    </div>
    <slot name="icon"></slot>
    <div><slot></slot></div></button>
  </Ripple
  >
</template>
<script lang="ts">
import { computed, inject, Ref, ref } from "vue";
import { css } from "@emotion/css";
import { setDynamic, m3 } from "@material-yue/common";
import Ripple from "./Ripple";

export default {
  inheritAttrs: false,
  name: "Button",
  components: {Ripple},
  setup(){
    const tokens: any = inject("tokens");
    const variant: any = inject("variant");
    const theme = m3(tokens, {variant:variant.value});
    const btn = computed(() => css(
        setDynamic({target: m3(tokens, {variant:variant.value}).components.Button, theme}),
    ));
    return { btn, m3, tokens, variant };
  }
}
</script>
