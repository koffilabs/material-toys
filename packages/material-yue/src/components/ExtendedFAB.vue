<template>
  <button ref="root" :class="fab">
    <div class="state">
    </div><slot></slot></button>
</template>
<script lang="ts">
import { computed, inject, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic, m3} from "@material-yue/common";

export default {
  name: "FAB",
  setup(){
    const tokens: any = inject("tokens");
    const theme = m3(tokens);
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    console.log("[fab] ", m3(tokens).components.FAB)
    const fab = computed(() => css(
        style.value = setDynamic({target: m3(tokens).components.FAB, theme, width, height}),
    ));
    return { root, fab };
  }
}
</script>
