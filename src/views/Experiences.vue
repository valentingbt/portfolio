<template>
  <div class="experiences">
    <div class="quit">
      <router-link to="/">
        <img class="cross" src="../assets/close.svg" alt />
      </router-link>
    </div>
    <div class="columns">
      <div class="col">
        <div class="title">Etudes</div>
        <div v-for="school in schools" v-bind:key="school">
          <exp-card
            :date="school.date"
            :company="school.company"
            :city="school.city"
            :description="school.description"
          />
        </div>
      </div>

      <div class="col">
        <div class="title">Experience</div>
        <div v-for="company in companies" v-bind:key="company">
          <exp-card
            :date="company.date"
            :company="company.company"
            :city="company.city"
            :description="company.description"
          />
        </div>
      </div>

      <div class="col">
        <div class="title">Diplomes</div>
        <div v-for="diploma in diplomas" v-bind:key="diploma">
          <dip-card
            :diploma="diploma.diploma"
            :option="diploma.option"
            :description="diploma.description"
           />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExpCard from "../components/experiences/ExpCard";
import DipCard from "../components/experiences/DipCard";

import expData from "../assets/data/experiences.json"; // import data from json

export default {
  name: "experiences",
  components: {
    ExpCard,
    DipCard
  },
  data() {
    return {
      companies: expData.companies,
      schools: expData.schools,
      diplomas: expData.diplomas
    };
  }
};
</script>

<style>
html,
body {
  overflow: unset;
}

.experiences {
  background: #754cbd;
  border-radius: 30px 30px 0 0;
}

.columns {
  width: 100%;
  display: flex;
  margin-top: 30px;
}

.col {
  flex: 1;
}
</style>