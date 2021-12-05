<!--<template>-->
<!--  <slot></slot>-->
<!--</template>-->
<script lang="ts">
import { h } from "vue";
import { useRipple } from "@material-yue/common";

export default {
  name: "Ripple",
  setup(props, context){
    const { ripple, rippleOut } = useRipple();

    const onMousedown = (event) => {
      ripple({event: event, element: event.currentTarget})
    }
    const onMouseleave = () => {
      rippleOut();
    }
    const element = context.slots.default()[0];
    console.log(element)
    console.log(context)
    // return () => h(element.type, {...element.props, onMousedown, onMouseup: onMouseleave, onMouseleave}, element.children)
    return () => h(element.type, {...context.slots.default()[0].props, onMousedown, onMouseup: onMouseleave, onMouseleave}, context.slots.default()[0].children)
  }
}
</script>