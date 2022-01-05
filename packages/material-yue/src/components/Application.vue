<template>
  <div :class="cname">
    <div class="appBar">{appBarArea}</div>
    <nav class="navigation">
      {mediaMatch === MOBILE && mobileNavigation === "bar" ? (
      <NavigationBar>{navigationArea}</NavigationBar>
      ) : (
      <NavigationDrawer activeItem={activeItem} mode={navigationMode}>
        {navigationArea}
      </NavigationDrawer>
      )}
    </nav>
    <main class="body">{bodyArea}</main>
  </div>

</template>

<script lang="ts">
import NavigationBar from "./NavigationBar.vue";
import NavigationDrawer from "./NavigationDrawer.vue";
import {useMatchMedia} from "../composables/useMatchMedia";
import {Component} from "react";
import {css} from "@emotion/css";
import {applicationStyle} from "@material-yue/common";

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
  components: {
    NavigationBar,
    NavigationDrawer,
  },
  setup(props: ApplicationArgs){
    const {mediaMatch} = useMatchMedia();
    const yueApplication = css(applicationStyle);

    const cname = `${yueApplication}${
        props.mobileNavigation === "drawer" ? " drawer" : ""
    }`;

    const navigationMode =
        mediaMatch.value === MOBILE
            ? "modal"
            : mediaMatch.value === TABLET
                ? props.mobileNavigation === "drawer"
                    ? "modal"
                    : "rail"
                : mediaMatch.value === LAPTOP || mediaMatch.value === DESKTOP
                    ? "drawer"
                    : "rail";

    return {
      cname
    }
  }
}
</script>

<style scoped>

</style>