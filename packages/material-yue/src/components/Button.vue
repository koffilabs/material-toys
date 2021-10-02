<template>
  <div ref="root" :class="btn">Button <span>here</span></div>
</template>
<script lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import {css, cx} from "@emotion/css";
import {setDynamic} from "@material-yue/common";

export default {
  name: "Button",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null)
    let btn = computed(() => css(
        setDynamic({target: theme.components.Button, theme}),
    ));
    onMounted(() => {
      console.log("root element", root.value);
    });
    return { btn, root };
  }
}
</script>
