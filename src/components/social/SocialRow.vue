<template>
  <div id="app">
    <!-- <HelloWorld msg="Valentin Guibert"/> -->
    <div class="row">
      <a href="https://twitter.com/VGuibert" target="_blank">
          <SocialButton 
          title="@VGuibert" 
          :icon="require('../../assets/twitter.svg')" 
          :color="'background:#6dcff6'"
          :iconColor="'background:#00aced;'"/>
      </a>

      <a href="mailto:valentin.guibert@ynov.com">
          <SocialButton 
            class="middle" 
            title="valentinguibert@ynov.com" 
            :icon="require('../../assets/email.svg')" 
            :color="'background:#6dbef6'"
            :iconColor="'background:#2196F3;'"/>
      </a>


      <a href="https://github.com/valentingbt" target="_blank">
        <SocialButton 
          title="valentingbt" 
          :icon="require('../../assets/github.svg')"
          :color="'background:#00a6f3'"
          :iconColor="'background:#1E88E5;'"/>
      </a>
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

<style scoped>
.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.middle {
  margin: 0 30px 0 30px;
}

@media screen and (max-width: 1170px) {
  .row {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .middle {
    margin: 20px 0 20px 0;
  }

  
  a{
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
