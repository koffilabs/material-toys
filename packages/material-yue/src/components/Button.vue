<template>
  <button :class="btn">
    <div class="state">
    </div>
    <slot name="icon"></slot>
    <div><slot></slot></div></button>
</template>
<script lang="ts">
import { computed, inject, Ref, ref } from "vue";
import { css } from "@emotion/css";
import { setDynamic, m3 } from "@material-yue/common";

export default {
  name: "Button",
  setup(){
    const tokens: any = inject("tokens");
    const variant: any = inject("variant");
    const theme = m3(tokens, {variant:variant.value});
    const btn = computed(() => css(
        setDynamic({target: m3(tokens, {variant:variant.value}).components.Button, theme}),
    ));
    return { btn };
  }
}
</script>
