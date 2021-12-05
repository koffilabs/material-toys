<template>
  <Ripple>
  <button v-bind="$attrs" ref="root" :class="efab">
    <div class="state">
    </div>
    <slot name="icon"></slot>
    <div><slot></slot></div></button></Ripple>
</template>
<script lang="ts">
import { computed, inject, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic, m3} from "@material-yue/common";
import Ripple from "./Ripple";

export default {
  name: "ExtendedFAB",
  components: {Ripple},
  setup(){
    const tokens: any = inject("tokens");
    const variant: any = inject("variant");
    const theme = m3(tokens, {variant: variant.value});
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    const efab = computed(() => css(
        style.value = setDynamic({target: m3(tokens, {variant: variant.value}).components.ExtendedFAB, theme, width, height}),
    ));
    return { root, efab };
  }
}
</script>
