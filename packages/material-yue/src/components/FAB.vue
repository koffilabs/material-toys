<template>
  <Ripple>
  <button v-bind="$attrs" ref="root" :class="fab">
    <div class="state">
    </div><slot></slot></button></Ripple>
</template>
<script lang="ts">
import { computed, inject, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic, m3} from "@material-yue/common";
import Ripple from "./Ripple";

export default {
  name: "FAB",
  components: {Ripple},
  setup(){
    const tokens: any = inject("tokens");
    const variant: any = inject("variant");
    const theme = m3(tokens, {variant: variant.value});
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    const fab = computed(() => css(
        style.value = setDynamic({target: m3(tokens, {variant: variant.value}).components.FAB, theme, width, height}),
    ));
    return { root, fab };
  }
}
</script>
