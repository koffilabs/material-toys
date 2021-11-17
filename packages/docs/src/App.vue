<template>
  <div :class="line">
    <h1>Elevated Button</h1>
    <Button class="elevated">Enabled</Button>
    <Button disabled class="elevated">Disabled</Button>
    <Button class="elevated">
      <template v-slot:icon><AddIcon :size="18"></AddIcon></template>
      <template v-slot:default>Elevated Button</template>
    </Button>
    <Button disabled class="elevated">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Disabled</template>
    </Button>
  </div>
  <div :class="line">
    <h1>Filled button</h1>
    <Button class="filled">Enabled</Button>
    <Button disabled class="filled">Disabled</Button>
    <Button class="filled">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Filled button</template>
    </Button>
  </div>
  <div :class="line">
    <h1>Filled tonal button</h1>
    <Button class="filled-tonal">Enabled</Button>
    <Button disabled class="filled-tonal">Disabled</Button>
    <Button class="filled-tonal">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Filled tonal button</template>
    </Button>
  </div>
  <div :class="line">
    <h1>Outlined button</h1>
    <Button class="outlined">Enabled</Button>
    <Button disabled class="outlined">Disabled</Button>
    <Button class="outlined">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Outlined button</template>
    </Button>
  </div>
  <div :class="line">
    <h1>Text button</h1>
    <Button class="text">Enabled</Button>
    <Button disabled class="text">Disabled</Button>
    <Button class="text">
      <template v-slot:icon><EditIcon :size="18"></EditIcon></template>
      <template v-slot:default>Text button</template>
    </Button>
  </div>
  <div :class="line">
    <h1>FAB - level3 (default)</h1>
    <FAB class="large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB class="large" disabled><EditIcon :size="36"></EditIcon></FAB>
    <FAB><EditIcon></EditIcon></FAB>
    <FAB disabled><EditIcon></EditIcon></FAB>
    <FAB class="small"><EditIcon></EditIcon></FAB>
    <FAB class="small" disabled><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>FAB - level1</h1>
    <FAB class="level1 large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB class="level1 large" disabled><EditIcon :size="36"></EditIcon></FAB>
    <FAB class="level1"><EditIcon></EditIcon></FAB>
    <FAB class="level1" disabled><EditIcon></EditIcon></FAB>
    <FAB class="level1 small"><EditIcon></EditIcon></FAB>
    <FAB class="level1 small" disabled><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>FAB - surface, level3 (default)</h1>
    <FAB class="surface large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB disabled class="surface large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB class="surface"><EditIcon></EditIcon></FAB>
    <FAB disabled class="surface"><EditIcon></EditIcon></FAB>
    <FAB class="surface small"><EditIcon></EditIcon></FAB>
    <FAB disabled class="surface small"><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>FAB - secondary, level3 (default)</h1>
    <FAB class="secondary large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB disabled class="secondary large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB class="secondary"><EditIcon></EditIcon></FAB>
    <FAB disabled class="secondary"><EditIcon></EditIcon></FAB>
    <FAB class="secondary small"><EditIcon></EditIcon></FAB>
    <FAB disabled class="secondary small"><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>FAB - tertiary, level3 (default)</h1>
    <FAB class="tertiary large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB disabled class="tertiary large"><EditIcon :size="36"></EditIcon></FAB>
    <FAB class="tertiary"><EditIcon></EditIcon></FAB>
    <FAB disabled class="tertiary"><EditIcon></EditIcon></FAB>
    <FAB class="tertiary small"><EditIcon></EditIcon></FAB>
    <FAB disabled class="tertiary small"><EditIcon></EditIcon></FAB>
  </div>
  <div :class="line">
    <h1>Extended FAB</h1>
    <ExtendedFAB>
      Compose
    </ExtendedFAB>
    <ExtendedFAB class="surface">
      Compose
    </ExtendedFAB>
    <ExtendedFAB class="secondary">
      Compose
    </ExtendedFAB>
    <ExtendedFAB class="tertiary">
      Compose
    </ExtendedFAB>
  </div>
  <div :class="line">
    <h1>Extended FAB with icons</h1>
    <ExtendedFAB>
      <template v-slot:icon><EditIcon></EditIcon></template>
      <template v-slot:default>Compose</template>
    </ExtendedFAB>
    <ExtendedFAB class="surface">
      <template v-slot:icon><EditIcon></EditIcon></template>
      <template v-slot:default>Compose</template>
    </ExtendedFAB>
    <ExtendedFAB class="secondary">
      <template v-slot:icon><EditIcon></EditIcon></template>
      <template v-slot:default>Compose</template>
    </ExtendedFAB>
    <ExtendedFAB class="tertiary">
      <template v-slot:icon><EditIcon></EditIcon></template>
      <template v-slot:default>Compose</template>
    </ExtendedFAB>
  </div>

  <div :class="line">
    <EditIcon :size="96"></EditIcon>
  </div>
  <div :class="line">
    <Card class="elevated">
      <div :class="someContent">
        <h3>Title</h3>
        <h5>Subhead</h5>
        Use a card to display content and actions on a single topic.
        Cards should be easy to scan for relevant information.
      </div>
    </Card>
  </div>
  <ExtendedFAB @click="toggleDarkMode" style="position:fixed;right:0;bottom:0">
    <template v-slot:icon><DarkModeIcon></DarkModeIcon></template>
    <template v-slot:default>Toggle Dark Mode</template>
  </ExtendedFAB>
<!--  <div :class="page">-->
<!--    <Card data-end :class="customCard" :style="{visibility}">-->
<!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequatur,-->
<!--      eligendi iusto nemo saepe-->
<!--      similique. Earum inventore nisi quos reprehenderit. Accusamus dolores dolorum fuga minima, necessitatibus-->
<!--      numquam quos voluptate.-->
<!--    </Card>-->
<!--  </div>-->
</template>
<script>
import {css} from "@emotion/css";
import {Button, Card, FAB, morph, ExtendedFAB } from "@material-yue/vue";
import {provide, reactive, ref} from "vue";
import {material_tokens} from "@material-yue/common";
import {material_tokens_polyfill} from "@material-yue/common";
import {EditIcon, AddIcon, DarkModeIcon} from "@material-yue/icons";

// for development purposes only
// import AddIcon from "../../icons/src/vue/icons/materialicons/AddIcon.vue";

const tokens = { ...material_tokens_polyfill, ...material_tokens };

export default {
  name: "material-yue-docs",
  components: {Button, Card, FAB, ExtendedFAB, EditIcon, AddIcon, DarkModeIcon },
  setup() {
    // console.log("morph is", morph);
    // console.log(Card);
    const reactiveTokens = reactive(tokens);
    const variant = ref("Dark");
    const visibility = ref("hidden");
    const toggleDarkMode = () => {
      document.body.style.color = variant.value === "Dark" ? "#333" : "#f0f0f0";
      document.body.style.backgroundColor = variant.value === "Dark" ? "#f0f0f0" : "#333";
      variant.value = variant.value === "Dark" ? "" : "Dark";
    }
    provide("tokens", reactiveTokens);
    provide("variant", variant);
    // setTimeout(() => {
      // reactiveTokens.MdSysColorPrimary = "red";
      // variant.value = "";
      // console.log("done")
    // }, 2000);
    const line = css({
      padding: "1.618rem",
      h1: {
        fontFamily: "Roboto, sans-serif",
        fontSize: "1.2rem"
      },
      button: {
        margin: "0 1rem",
      }
    })
    const someContent = css({
      fontFamily: "Roboto",
      padding: "16px 0",
      width: "200px",
      fontSize: ".75rem",
      h3: {
        margin: "0",
      },
      h5: {
        margin: ".2rem 0 1rem 0",
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
      visibility,
      someContent,
      toggleDarkMode
    };
  },
};
</script>
