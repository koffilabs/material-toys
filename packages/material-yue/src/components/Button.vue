<template>
  <button ref="root" :class="btn">
    <slot></slot><div class="state">
    </div></button>
</template>
<script lang="ts">
import { computed, inject, onMounted, ref, watchEffect } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic} from "@material-yue/common";
import useClipPathData from '../composables/useClipPathData';
import useResizeEvents from '../composables/useResizeEvents';

export default {
  name: "Button",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null);
    const style = ref(null);
    const width = ref(0);
    const height = ref(0);
    const btn = computed(() => css(
        style.value = setDynamic({target: theme.components.Button, theme, width, height}),
    ));
    return { root, btn };
  }
}
</script>
