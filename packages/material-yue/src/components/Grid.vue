<template>
  <div :class="yueGrid">
    <slot></slot>
  </div>
</template>
<script type="ts">
import {css} from "@emotion/css";
import {breakpoints, gridStyle} from "@material-yue/common";


export default {
  name: "Grid",
  setup() {
    const columnsStyles = [];
      for (let breakpoint of ["EXTRA_SMALL", "SMALL", "SMALL_FLUID", "MEDIUM", "LARGE"]) {
        const prefix = breakpoints[breakpoint].prefix;
        const mediaStyle = {
          [breakpoints[breakpoint].query]: {}
        };
        columnsStyles.push(mediaStyle);

        for (let i = 1; i <= 12; i++) {
        (prefix ? mediaStyle[breakpoints[breakpoint].query] : gridStyle)[`.col-${prefix}${i}`] = {
          gridColumn: `span ${i}`,
          marginRight: 0,
          marginLeft: 0,
        };
      }
    }
    const yueGrid = css([gridStyle, ...columnsStyles]);
    return {
      yueGrid
    }
  }
}
</script>
