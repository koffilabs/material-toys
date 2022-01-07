<template>
  <div :data-mode="mode" :class="{[drawer]: true, [drawerTheme]: true}">
    <slot></slot>
<!--    {React.Children.map(children as ReactElement, NavigationItemMapper)}-->
  </div>
</template>

<script lang="ts">
import {css} from "@emotion/css";
import {computed, inject, reactive, ref, Ref, watch} from "vue";
import {applyReactiveStyle, m3} from "@material-yue/common";

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
  props: {
    mode: {
      type: String,
      default: "drawer"
    }
  },
  setup(props: NavigationDrawerProps){
    const tokens: any = inject("tokens");
    const variant: Ref<string> = inject("variant");
    const theme = m3(tokens, {variant:variant.value});
    const selectedIndex: Ref<number> = ref(props.activeItem);
    const onClick = (activeIndex: number) => {
      selectedIndex.value = activeIndex;
    };
    // let styleObj = reactive({
    //   width: `${props.mode === "rail" ? "80" : "360"}px`,
    //
    // })
    const drawerTheme = css(
        applyReactiveStyle({
          target: m3(tokens, { variant: variant.value }).components.NavigationDrawer,
          theme,
        })
    );
    let styleObj;
    // if (props.mode === "modal") {
    //   styleObj = computed(() => ({
    //     width: `${props.mode === "rail" ? "80" : "360"}px`,
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     zIndex: 110,
    //   }));
    // }else{
    // }
    styleObj = computed(() => ({
      // transition: ".3s width ease-in-out",
      width: `${props.mode === "rail" ? "80" : "360"}px`,
    }));
    console.log("styleobj", styleObj.value)
    const drawer = ref(css(styleObj));

    watch(styleObj, (newStyle, oldStyle) => {
      drawer.value = css(newStyle);
    })
    watch(() => props.mode, (mode, previousMode) => {
      console.log("mode changed to", mode)
      if (mode === "drawer" && previousMode === "rail") {
        console.log("animation: rail to drawer");
      }
      if (mode === "rail" && previousMode === "drawer") {
        console.log("animation: drawer to rail");
      }

    })
    // TODO: implement NavigationItemMapperFactory
    // const NavigationItemMapper = NavigationItemMapperFactory();
  return {
      drawer,
      drawerTheme,
  }

  }

}
</script>

<style scoped>

</style>