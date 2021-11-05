<template>
  <div :class="line">
    <h1>Elevated Button</h1>
    <Button data-start @click="onClick" class="elevated">Enabled</Button>
    <Button data-start @click="onClick" disabled class="elevated">Disabled</Button>
  </div>
  <div :class="line">
    <h1>Filled button</h1>
    <Button data-start @click="onClick" class="filled">Enabled</Button>
    <Button data-start @click="onClick" disabled class="filled">Disabled</Button>
  </div>
  <div :class="line">
    <h1>Filled tonal button</h1>
    <Button data-start @click="onClick" class="filled-tonal">Enabled</Button>
    <Button data-start @click="onClick" disabled class="filled-tonal">Disabled</Button>
  </div>
  <div :class="line">
    <h1>Outlined button</h1>
    <Button data-start @click="onClick" class="outlined">Enabled</Button>
    <Button data-start @click="onClick" disabled class="outlined">Disabled</Button>
  </div>
  <div :class="line">
    <h1>Text button</h1>
    <Button data-start @click="onClick" class="text">Enabled</Button>
    <Button data-start @click="onClick" disabled class="text">Disabled</Button>
  </div>
  <div :class="line">
    <h1>FAB</h1>
    <FAB data-start @click="onClick"><InboxIcon></InboxIcon></FAB>
    <FAB data-start @click="onClick" disabled><InboxIcon></InboxIcon></FAB>
  </div>
  <div :class="line">
    icon here

  </div>
  <div :class="page">
    <Card data-end :class="customCard" :style="{visibility}">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequatur,
      eligendi iusto nemo saepe
      similique. Earum inventore nisi quos reprehenderit. Accusamus dolores dolorum fuga minima, necessitatibus
      numquam quos voluptate.
    </Card>
  </div>
</template>
<script>
import {css} from "@emotion/css";
import {Button, Card, FAB, morph } from "@material-yue/vue";
// import { InboxIcon } from "@material-yue/vue";
import {provide, reactive, ref} from "vue";
import {material_tokens} from "@material-yue/common";
import {material_tokens_polyfill} from "@material-yue/common";
import InboxIcon from "@material-yue/vue/src/icons/materialicons/InboxIcon.vue";
const tokens = { ...material_tokens_polyfill, ...material_tokens };

export default {
  name: "material-yue-docs",
  components: {Button, Card, FAB, InboxIcon },
  setup() {
    console.log("morph is", morph);
    console.log(Card);

    const reactiveTokens = reactive(tokens);
    const visibility = ref("hidden");
    provide("tokens", reactiveTokens);
    // setTimeout(() => {
    //   reactiveTokens.MdSysColorPrimary = "red";
    //   console.log("done")
    // }, 2000);
    const line = css({
      margin: "1.618rem",
      h1: {
        fontFamily: "Roboto, sans-serif",
        fontSize: "1.2rem"
      },
      button: {
        margin: "0 1rem",
      }
    })
    const page = css({
      background: "#ddd",
      border:"1px dashed #333",
      height: "100%",
      padding: "22px",
      display: "grid",
      gridTemplate: "'button . .' 1fr " +
          "'. card .' 1fr " +
          "'. . .' 1fr " +
          "/ 1fr 1fr 1fr",
    });
    const customCard = css({
      margin: "0 1rem"
    });
    const customButton = css({
      margin: "0 1rem"
    });
    const onClick = async (e) => {
      // await morph({
      //   from: "[data-start]",
      //   to: "[data-end]",
      // });
      // visibility.value = "visible";
    }

    return {
      line,
      page,
      customButton,
      customCard,
      onClick,
      visibility
    };
  },
};
</script>
