<template>
    <div class="row">
      <MenuButton title="COMPETENCES" image="'../../assets/skill.svg'"/>
      <MenuButton class="middle" title="EXPERIENCES"/>
      <MenuButton title="PROJETS"/>
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
