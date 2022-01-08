<script lang="ts">
import { css } from "@emotion/css";
import { computed, inject, ref, Ref, watch } from "vue";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import Scrim from "./Scrim.vue";
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
interface NavigationDrawerProps {
  activeItem?: number;
  mode?: "drawer" | "modal" | "rail";
}
export default {
  name: "NavigationDrawer",
  components: { Scrim },
  props: {
    mode: {
      type: String,
      default: "drawer",
    },
  },
  setup(props: NavigationDrawerProps) {
    const tokens: any = inject("tokens");
    const variant: Ref<string> = inject("variant");
    const theme = m3(tokens, { variant: variant.value });
    const selectedIndex: Ref<number> = ref(props.activeItem);
    const onClick = (activeIndex: number) => {
      selectedIndex.value = activeIndex;
    };

    const drawerTheme = css(
      applyReactiveStyle({
        target: m3(tokens, { variant: variant.value }).components
          .NavigationDrawer,
        theme,
      })
    );

    const drawer = computed(() => {
      let styleObj: any = {
        width: `${props.mode === "rail" ? "80" : "360"}px`,
      };
      if (props.mode === "modal") {
        styleObj = {
          ...styleObj,
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 110,
        };
      }
      return css(styleObj);
    });

    watch(
      () => props.mode,
      (mode, previousMode) => {
        console.log("mode changed to", mode);
        if (mode === "drawer" && previousMode === "rail") {
          console.log("animation: rail to drawer");
        }
        if (mode === "rail" && previousMode === "drawer") {
          console.log("animation: drawer to rail");
        }
      }
    );
    // TODO: implement NavigationItemMapperFactory
    // const NavigationItemMapper = NavigationItemMapperFactory();
    return {
      drawer,
      drawerTheme,
    };
  },
};
</script>

<template>
  <Scrim v-if="mode === 'modal'" />
  <div :data-mode="mode" :class="{ [drawer]: true, [drawerTheme]: true }">
    <slot></slot>
    <!--    {React.Children.map(children as ReactElement, NavigationItemMapper)}-->
  </div>
</template>

<style scoped></style>
