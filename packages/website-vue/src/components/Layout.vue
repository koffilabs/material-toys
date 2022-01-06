<template>
  <div>
    <Application
        activeItem={0}
        appBarArea={appbar}
    >
      <template v-slot:appBarArea>appbarhere</template>
      <template v-slot:navigationArea>nav area here</template>
      <template v-slot:default></template>
    </Application>
  </div>
</template>

<script>
import {Application} from "@material-yue/vue";
export default {
  components: {
    Application
  }
}
</script>
