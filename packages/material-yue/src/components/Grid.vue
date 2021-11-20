<template>
  <div :class="yueGrid">
    <slot></slot>
  </div>
</template>
<script type="ts">
import {css} from "@emotion/css";

const sizes = {
  // phone
  EXTRA_SMALL: {query: "@media(min-width: 0)", prefix: ""},
  // tablet
  SMALL_FLUID: {query: "@media(min-width: 905px)", prefix: "smf-"},
  SMALL: {query: "@media(min-width: 600px)", prefix: "sm-"},
  // laptop
  MEDIUM: {query: "@media(min-width: 1240px)", prefix: "md-"},
  // desktop
  LARGE: {query: "@media(min-width: 1440px)", prefix: "lg-"}
}
export default {
  name: "Grid",
  setup() {

    const gridStyle = {
      display: "grid",
      // mobile first, right?
      gridTemplateColumns: "repeat(4, 1fr)",
      gridColumnGap: "8px", // old syntax
      gap: "8px",
      padding: "8px",
      [sizes.SMALL.query]: {
        gridTemplateColumns: "repeat(8, 1fr)",
        gridColumnGap: "8px",
        gap: "8px",
        padding: "8px",
      },
      [sizes.SMALL_FLUID.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "8px",
        gap: "8px",
        padding: "8px",
      },
      [sizes.MEDIUM.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "12px",
        gap: "12px",
        padding: "12px",
      },
      [sizes.LARGE.query]: {
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "32px",
        gap: "32px",
        padding: "16px",
      }
    };
    const columnsStyles = [];
      for (let size of ["EXTRA_SMALL", "SMALL", "SMALL_FLUID", "MEDIUM", "LARGE"]) {
        const prefix = sizes[size].prefix;
        const mediaStyle = {
          [sizes[size].query]: {}
        };
        columnsStyles.push(mediaStyle);

        for (let i = 1; i <= 12; i++) {
        (prefix ? mediaStyle[[sizes[size].query]] : gridStyle)[`.col-${prefix}${i}`] = {
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