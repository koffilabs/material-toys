<template>
  <button ref="root" @click="onClick" :class="btn"><slot></slot></button>
</template>
<script lang="ts">
import { computed, inject, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic} from "@material-yue/common";
import { morphTo } from '../morph';

export default {
  name: "Button",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null);
    const btn = computed(() => css(
        setDynamic({target: theme.components.Button, theme, node: root}),
    ));
    const onClick = (e: Event) => {
      morphTo({
        startNode: root.value,
        endNode: root.value,
      });
    }
    return { btn, root, onClick };
  }
}
</script>
