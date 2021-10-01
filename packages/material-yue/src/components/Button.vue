<template>
  <div ref="root" :class="btn">Button <span>here</span></div>
</template>
<script lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import {css, cx} from "@emotion/css";
import {spread} from "@material-yue/common";

export default {
  name: "Button",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null)

    // let btn = computed(() => css`
    //   background:${theme.colors.primary};
    //   ${spread({theme, path: "/components/Button"})}
    // `);
    let btn = computed(() => css({
      // background:theme.colors.primary,
      ...theme.components.Button
    }));
    onMounted(() => {
      console.log("root element", root.value);
    });
    return { btn, root };
  }
}
</script>
