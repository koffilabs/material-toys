<script>
import { css } from "@emotion/css";

const scrim = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  // TODO: use tokens instead
  background: "rgba(0, 0, 0, .4)",
});
export default {
  name: "Scrim",
  setup() {
    return {
      scrim,
    };
  },
};
</script>
<template>
  <div :class="scrim"></div>
</template>
