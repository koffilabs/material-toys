<template>
  <div class="page">
    <Button>Hello button!</Button>
  </div>
</template>
<script>
import {css, cx} from "@emotion/css";
import { theme } from "@material-yue/vue";
import { Button } from "@material-yue/vue";
import {provide, reactive} from "vue";


export default {
  name: "material-yue-docs",
  components: {Button},
  setup() {
    // console.log(theme)
    const reactiveTheme = reactive({...theme});
    provide("theme", reactiveTheme);
    setTimeout(() => {
      console.log("changing the primary color to red");
      reactiveTheme.colors.primary = "red";
    }, 2000);
    const styled = css`
   border: 1px solid red;
 `;

    return {
      styled
    };
  },
};
</script>
