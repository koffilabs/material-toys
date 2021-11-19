<template>
  <div :class="yueGrid">
    <slot></slot>
  </div>
</template>
<script type="ts">
import {css} from "@emotion/css";
const mediaQueries = {
  LARGE_DESKTOP: "@media(min-width: 1440)"
}
const LARGE_DESKTOP = 1440;
export default {
  name: "Grid",
  setup() {
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      border: "1px dashed #333",
      "@media(min-width: 1440)": {

      }
    };
    // for(css)
    const yueGrid = css(
        {
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          border: "1px dashed #333",

          ".col-3": {
            gridColumn: "span 3",
            border: "1px solid red"
          },
          ".col-4": {
            gridColumn: "span 4",
            border: "1px solid red"
          }
        }
    )
    return {
      yueGrid
    }
  }
}
</script>
<!--<style lang="scss">-->
<!--  .yue-grid{-->
<!--    display:grid;-->
<!--    grid-template-columns: repeat(8, 1fr);-->

<!--    .col-3{-->
<!--      grid-column: span 4;-->
<!--    }-->
<!--  }-->
<!--</style>-->