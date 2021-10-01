<template>
  <div ref="root" :class="btn">Button <span>here</span></div>
</template>
<script lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import {css, cx} from "@emotion/css";
import {spread} from "@material-yue/common";
import { setDynamic } from '../../../common/src/util/style';

export default {
  name: "Button",
  setup(){
    const theme: any = inject("theme");
    const root = ref(null)
    console.log("theme", theme)
    // let btn = computed(() => css`
    //   background:${theme.colors.primary};
    //   ${spread({theme, path: "/components/Button"})}
    // `);
    console.log("should transform", theme.components.Button)
    const derivedTheme = setDynamic({target: theme.components.Button, theme});
    console.log("derived", derivedTheme)
    let btn = computed(() => css({
      // ...derivedTheme,
      ...theme.components.Button,
      "&:before": {
        content: "''",
        background: theme.colors.primary,
        // background: "blue",
        "&:hover": {
          background: "red", // TODO: should get the color from the theme object
        },
        "z-index": -1,
        position: "absolute",
        top: "0",
        right: "0",
        bottom: 0,
        left: 0,
        "clip-path": "path('M20 0 H 200 V 100 H -180 L 0 180 L20 0')",
      },
      // background: theme.colors.primary,

    }));
    onMounted(() => {
      console.log("root element", root.value);
    });
    return { btn, root };
  }
}
</script>
