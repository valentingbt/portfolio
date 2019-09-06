<template>
  <div id="app">
    <!-- <HelloWorld msg="Valentin Guibert"/> -->
    <div class="row">
      <SocialButton title="@VGuibert"/>
      <SocialButton class="middle" title="valentinguibert@ynov.com"/>
      <SocialButton title="valentingbt"/>
    </div>

  </div>
</template>

<script>
import SocialButton from './SocialButton.vue'

export default {
  name: 'SocialRow',
  components: {
    SocialButton
  }
}
</script>

<style>
.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.middle {
  margin: 0 30px 0 30px;
}

@media screen and (max-width: 1044px) {
  .row {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .middle {
    margin: 20px 0 20px 0;
  }
}
</style>
