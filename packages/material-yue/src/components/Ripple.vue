<template>
  <div @click="onClick">
  <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "Ripple",
  setup(props, context){
    console.log("slots are", context.slots.default);
    const onClick = () => {
      console.log("clicked!")
    }
    return {
      onClick
    }
  }
}
</script>