<template>
  <div :class="yueGrid">
    <slot></slot>
  </div>
</template>
<script type="ts">
import {css} from "@emotion/css";
const mediaQueries = {
  // desktop
  LARGE: "@media(min-width: 1440px)",
  // laptop
  MEDIUM: "@media(min-width: 1240px)",
  // tablet
  SMALL: "@media(min-width: 600px)",
  SMALL_FLUID: "@media(min-width: 905px)",
  // phone
  // EXTRA_SMALL: "@media(min-width: 0)" :-)
}
const LARGE_DESKTOP = 1440;
export default {
  name: "Grid",
  setup() {
    const gridStyle = {
      display: "grid",
      // mobile first, right?
      gridTemplateColumns: "repeat(4, 1fr)",
      border: "1px dashed #333",
      [mediaQueries.SMALL]: {
        gridTemplateColumns: "repeat(8, 1fr)",
      },
      [mediaQueries.MEDIUM]: {
        gridTemplateColumns: "repeat(12, 1fr)",
      },
      [mediaQueries.LARGE]: {
        gridTemplateColumns: "repeat(12, 1fr)",
      }
    };
    const columns = {};
    for(let i = 1; i <= 12; i++){
      columns[`.col-${i}`] = {
        gridColumn: `span ${i}`,
        border: "1px dashed red"
      };
    }
    const yueGrid = css({...gridStyle, ...columns})
    return {
      yueGrid
    }
  }
}
</script>