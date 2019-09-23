<template>
  <div class="experiences">
    <div class="quit"><router-link to="/"><img class="cross" src="../assets/close.svg" alt=""></router-link></div>
    <div class="title">EXPERIENCES</div>
    <div class="columns">
      <div class="col"><ExpCard /></div>
      <div class="col"><ExpCard /></div>
      <div class="col"><ExpCard /></div>
    </div>
  </div>
</template>

<script>

import ExpCard from '../components/experiences/ExpCard.vue'

export default {
  name: 'experiences',
  components: {
    ExpCard,
  }
}
</script>

<style>
.columns {
  width: 100%;
  display: flex;
  margin-top:30px;
  height: 100%;
}

.col {
  flex: 1;
}
</style>