<template>
  <button ref="root" :class="btn">
    <div class="state">
    </div><slot></slot></button>
</template>
<script lang="ts">
import { computed, inject, ref } from "vue";
import { css } from "@emotion/css";
import { setDynamic, m3 } from "@material-yue/common";

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
