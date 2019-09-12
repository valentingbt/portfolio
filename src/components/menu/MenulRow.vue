<template>
    <div class="row">

      <router-link to="/skills">
        <MenuButton title="COMPETENCES" :image="require('../../assets/skill.svg')"/>
      </router-link>
      
      <router-link to="/experiences">
        <MenuButton class="middle" title="EXPERIENCES" :image="require('../../assets/experience.svg')"/>
      </router-link>
      
      <router-link to="/projects">
        <MenuButton title="PROJETS" :image="require('../../assets/project.svg')"/>
      </router-link>
      
    </div>
</template>

<script>
import MenuButton from './MenuButton.vue'

export default {
  name: 'MenuRow',
  components: {
    MenuButton
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
