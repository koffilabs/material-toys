<template>
  <div :class="page">
    <Button data-start @click="onClick" :class="customButton">Hello button!</Button>
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
import {theme} from "@material-yue/common";
import {Button, Card, morphTo} from "@material-yue/vue";
import {provide, reactive, ref} from "vue";


export default {
  name: "material-yue-docs",
  components: {Button, Card},
  setup() {
    const reactiveTheme = reactive({...theme});
    const visibility = ref("hidden");
    provide("theme", reactiveTheme);
    setTimeout(() => {
      // reactiveTheme.colors.primary = "red";
    }, 2000);
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
      // width: "400px",
      gridArea: "card",
      "backgroundImage": "url(resources/city.jpg) !important",
      "backgroundSize": "contain !important",
      "backgroundPosition": "top left",
      "paddingTop": "200px !important",
      color: "rgba(255, 255, 255, .9) !important"
    });
    const customButton = css({
      gridArea: "button"
    });
    const onClick = async (e) => {
      await morphTo({
        startNode: document.querySelector("[data-start]"),
        endNode: document.querySelector("[data-end]"),
      });
      visibility.value = "visible";
    }

    return {
      page,
      customButton,
      customCard,
      onClick,
      visibility
    };
  },
};
</script>
