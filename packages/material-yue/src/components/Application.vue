<script lang="ts">
import NavigationBar from "./NavigationBar.vue";
import NavigationDrawer from "./NavigationDrawer.vue";
import { useMatchMedia } from "../composables/useMatchMedia";
import { Component } from "react";
import { css } from "@emotion/css";
import { applicationStyle } from "@material-yue/common";
import { computed } from "vue";

export const MOBILE = "mobile";
export const TABLET = "tablet";
export const LAPTOP = "laptop";
export const DESKTOP = "desktop";

interface ApplicationArgs {
  activeItem?: number;
  appBarArea: Component;
  navigationArea: Component;
  bodyArea: Component;
  mobileNavigation?: "bar" | "drawer";
}
export default {
  name: "Application",
  props: {
    activeItem: {
      type: Number,
    },
    mobileNavigation: {
      type: String,
      default: "bar",
    },
  },
  components: {
    NavigationBar,
    NavigationDrawer,
  },
  setup(props: ApplicationArgs) {
    const { mediaMatch } = useMatchMedia();
    const yueApplication = css(applicationStyle);

    const cname = `${yueApplication}${
      props.mobileNavigation === "drawer" ? " drawer" : ""
    }`;

    const navigationMode = computed(() => {
      return mediaMatch.value === MOBILE
        ? "modal"
        : mediaMatch.value === TABLET
        ? props.mobileNavigation === "drawer"
          ? "modal"
          : "rail"
        : mediaMatch.value === LAPTOP || mediaMatch.value === DESKTOP
        ? "drawer"
        : "rail";
    });

    return {
      cname,
      mediaMatch,
      navigationMode,
      MOBILE,
      TABLET,
      LAPTOP,
      DESKTOP,
    };
  },
};
</script>
<template>
  <div :class="cname">
    <div class="appBar"><slot name="appBarArea"></slot></div>
    <nav class="navigation">
      <NavigationBar v-if="mediaMatch === MOBILE && mobileNavigation === 'bar'"
        ><slot name="navigationArea"></slot
      ></NavigationBar>
      <NavigationDrawer v-else :activeItem="activeItem" :mode="navigationMode">
        {{ navigationMode }}
        <slot name="navigationArea"></slot>
      </NavigationDrawer>
    </nav>
    <main class="body"><slot name="bodyArea"></slot></main>
  </div>
</template>

<style scoped></style>
