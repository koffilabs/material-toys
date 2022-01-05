<template>
  <div>
    <h1>Buttons here</h1>
    <Button>Hello!</Button>
  </div>
</template>

<script>
let Button;
if(process.browser){
  Button = require("@material-yue/vue").Button
}else{
  Button = {}
}
export default {
  name: 'IndexPage',
  components: {
    Button
  }
}
</script>
