<template>
  <div ref="root" :class="card"><slot></slot></div>
</template>
<script lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic} from "@material-yue/common";

export default {
  name: "Card",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null);
    const card = computed(() => css(
        setDynamic({target: theme.components.Card, theme, node: root}),
    ));
    return { card, root };
  }
}
</script>
