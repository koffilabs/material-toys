<script lang="ts">
import { h } from "vue";
import { useRipple } from "@material-toys/common";

export default {
  name: "Ripple",
  setup(props, context) {
    const { ripple, rippleOut } = useRipple();

    const onPointerdown = (event) => {
      ripple({ event: event, element: event.currentTarget });
    };
    const onPointerleave = () => {
      rippleOut();
    };
    const element = context.slots.default()[0];
    // return () => h(element.type, {...element.props, onMousedown, onMouseup: onMouseleave, onMouseleave}, element.children)
    return () =>
      h(
        element.type,
        {
          ...context.slots.default()[0].props,
          onPointerdown,
          onPointerup: onPointerleave,
          onPointerleave,
        },
        context.slots.default()[0].children
      );
  },
};
</script>
