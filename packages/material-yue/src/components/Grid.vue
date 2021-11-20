<template>
  <div :class="yueGrid">
    <slot></slot>
  </div>
</template>
<script type="ts">
import {css} from "@emotion/css";
import {breakpoints} from "@material-yue/common";


export default {
  name: "Grid",
  setup() {

    const gridStyle = {
      display: "grid",
      // mobile first
      gridTemplateColumns: "repeat(4, 1fr)",
      gridColumnGap: "8px", // old syntax
      gap: "8px",
      padding: "8px",
      [breakpoints.SMALL.query]: {
        gridTemplateColumns: "repeat(8, 1fr)",
        gridColumnGap: "8px",
        gap: "8px",
        padding: "8px",
      },
      [breakpoints.SMALL_FLUID.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "8px",
        gap: "8px",
        padding: "8px",
      },
      [breakpoints.MEDIUM.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "12px",
        gap: "12px",
        padding: "12px",
      },
      [breakpoints.LARGE.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "32px",
        gap: "32px",
        padding: "16px",
      }
    };
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
