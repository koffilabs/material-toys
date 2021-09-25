<template>
  <div :class="styled">Hello2</div>
  <Button>Hello button!</Button>
</template>
<script>
import {css, cx} from "@emotion/css";
import { theme } from "@material-yue/vue";
import { Button } from "@material-yue/vue";
import {provide} from "vue";


export default {
  name: "material-yue-docs",
  components: {Button},
  setup() {
    provide("theme", theme);

    const styled = css`
   border: 1px solid red;
 `;

    return {
      styled
    };
  },
};
</script>
