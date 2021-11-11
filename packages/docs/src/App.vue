<template>
  <div :class="line">
    <h1>Elevated Button</h1>
    <Button data-start class="elevated">Enabled</Button>
    <Button data-start disabled class="elevated">Disabled</Button>
    <Button data-start class="elevated">
      <template v-slot:icon><AddIcon :size="18"></AddIcon></template>
      <template v-slot:default>Elevated Button</template>
    </Button>
    <Button data-start disabled class="elevated">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Disabled</template>
    </Button>
  </div>
  <div :class="line">
    <h1>Filled button</h1>
    <Button data-start class="filled">Enabled</Button>
    <Button data-start disabled class="filled">Disabled</Button>
    <Button data-start class="filled">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Filled button</template>
    </Button>
  </div>
  <div :class="line">
    <h1>Filled tonal button</h1>
    <Button data-start class="filled-tonal">Enabled</Button>
    <Button data-start disabled class="filled-tonal">Disabled</Button>
    <Button data-start class="filled-tonal">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Filled tonal button</template>
    </Button>
  </div>
  <div :class="line">
    <h1>Outlined button</h1>
    <Button data-start class="outlined">Enabled</Button>
    <Button data-start disabled class="outlined">Disabled</Button>
    <Button data-start class="outlined">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Outlined button</template>
    </Button>
  </div>
  <div :class="line">
    <h1>Text button</h1>
    <Button data-start class="text">Enabled</Button>
    <Button data-start disabled class="text">Disabled</Button>
    <Button data-start class="text">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Text button</template>
    </Button>
  </div>
  <div :class="line">
    <h1>FAB - level3 (default)</h1>
    <FAB data-start class="large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start class="large" disabled><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start @click="onClick"><EditIcon></EditIcon></FAB>
    <FAB data-start disabled><EditIcon></EditIcon></FAB>
    <FAB data-start class="small"><EditIcon></EditIcon></FAB>
    <FAB data-start class="small" disabled><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>FAB - level1</h1>
    <FAB data-start class="level1 large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start class="level1 large" disabled><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start class="level1"><EditIcon></EditIcon></FAB>
    <FAB data-start class="level1" disabled><EditIcon></EditIcon></FAB>
    <FAB data-start class="level1 small"><EditIcon></EditIcon></FAB>
    <FAB data-start class="level1 small" disabled><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>FAB - surface, level3 (default)</h1>
    <FAB data-start class="surface large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start disabled class="surface large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start class="surface"><EditIcon></EditIcon></FAB>
    <FAB data-start disabled class="surface"><EditIcon></EditIcon></FAB>
    <FAB data-start class="surface small"><EditIcon></EditIcon></FAB>
    <FAB data-start disabled class="surface small"><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>FAB - secondary, level3 (default)</h1>
    <FAB data-start class="secondary large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start disabled class="secondary large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start class="secondary"><EditIcon></EditIcon></FAB>
    <FAB data-start disabled class="secondary"><EditIcon></EditIcon></FAB>
    <FAB data-start class="secondary small"><EditIcon></EditIcon></FAB>
    <FAB data-start disabled class="secondary small"><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>FAB - tertiary, level3 (default)</h1>
    <FAB data-start class="tertiary large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start disabled class="tertiary large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB data-start class="tertiary"><EditIcon></EditIcon></FAB>
    <FAB data-start disabled class="tertiary"><EditIcon></EditIcon></FAB>
    <FAB data-start class="tertiary small"><EditIcon></EditIcon></FAB>
    <FAB data-start disabled class="tertiary small"><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <EditIcon :size="48"></EditIcon>
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
import {EditIcon, AddIcon} from "@material-yue/icons";

// for development purposes only
// import AddIcon from "../../icons/src/vue/icons/materialicons/AddIcon.vue";

const tokens = { ...material_tokens_polyfill, ...material_tokens };

export default {
  name: "material-yue-docs",
  components: {Button, Card, FAB, EditIcon, AddIcon },
  setup() {
    // console.log("morph is", morph);
    // console.log(Card);

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
