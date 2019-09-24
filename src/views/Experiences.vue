<template>
  <div class="experiences">
    <div class="quit"><router-link to="/"><img class="cross" src="../assets/close.svg" alt=""></router-link></div>
    <div class="title">EXPERIENCES</div>
    <div class="columns">

      <div class="col"><ExpCard /></div>

      <div class="col">
        <div v-for="exp in exps" v-bind:key="exp">

        <exp-card 
        :date=exp.date
        :company=exp.company
        :city=exp.city
        :description=exp.description
        />

        </div>

      </div>
      
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
  },
  data() {
    return {
      exps: [
        {
          date: "Lundi 12 mai",
          company: "MPC",
          city: "Dreffeac",
          description: "hey"
        },
        {
          date: "Lundi 12 mai",
          company: "MPC",
          city: "Dreffeac",
          description: "hey"
        },
      ]
    }
  }
}
</script>

<style>

html, body {
    overflow: hidden;
}

.experiences {
  background: #754cbd;
  border-radius: 30px 30px 0 0;
  height: 100%;
}

.columns {
  width: 100%;
  display: flex;
  margin-top:30px;
}

.col {
  flex: 1;
}
</style>