<template>
  <button ref="root" :class="btn">
    <slot></slot><div class="state">
    </div></button>
</template>
<script lang="ts">
import { computed, inject, onMounted, ref, watchEffect } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic, m3} from "@material-yue/common";

export default {
  name: "Button",
  setup(){
    const tokens: any = inject("tokens");
    const theme = m3(tokens);
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    const btn = computed(() => css(
        style.value = setDynamic({target: m3(tokens).components.Button, theme, width, height}),
    ));
    return { root, btn };
  }
}
</script>
