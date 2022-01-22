<template>
  <!--  <nav>-->
  <!--    <ul>-->
  <!--      <li><router-link to="/buttons">Buttons</router-link></li>-->
  <!--      <li><router-link to="/layout">Layout</router-link></li>-->
  <!--    </ul>-->
  <!--  </nav>-->
  <router-view></router-view>
</template>

<script>
import { provide, reactive, ref } from "vue";
import { material_tokens } from "@material-toys/common";
import { material_tokens_polyfill } from "@material-toys/common";
const tokens = { ...material_tokens_polyfill, ...material_tokens };

export default {
  name: "App",
  components: {},
  setup() {
    const reactiveTokens = reactive(tokens);
    const variant = ref("");
    provide("tokens", reactiveTokens);
    provide("variant", variant);
    // setTimeout(() => {
    //   reactiveTokens.MdSysColorPrimary = "red";
    //   // console.log("done")
    // }, 2000);

    return {};
  },
};
</script>

<style></style>
