<template>
  <div class="experiences animated" :class="[animation2,theme]">
    <div class="quit">
      <img @click="leavePage" class="cross" src="../assets/close.svg" alt />
    </div>
    <div class="columns animated fadeInUp">
      <div class="col">
        <div class="title">{{ $t("experiences.studies") }}</div>
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
        <div class="title">{{ $t("experiences.experience") }}</div>
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
        <div class="title">{{ $t("experiences.qualifications") }}</div>
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

import router from "../router";

export default {
  name: "experiences",
  components: {
    ExpCard,
    DipCard
  },
  data() {
    return {
      companies: this.$i18n.t('experiences.companies'),
      schools: this.$i18n.t('experiences.schools'),
      diplomas: this.$i18n.t('experiences.diplomas'),
      animation2: "slideInUp",
      theme: localStorage.getItem('theme')
    };
  },
  methods: {
    leavePage() {
      this.animation2 = "slideOutDown";
      setTimeout(() => router.push("/"), 500);
    }
  },
  mounted() {
    const el = document.body;
    setTimeout(() => el.classList.remove("over").bind(this), 1100);
  }
};
</script>

<style>

.experiences.fancy {
  background: #754cbd;
  border-radius: 30px 30px 0 0;
}

.experiences.light {
  background: #00a6f3;
  border-radius: 17px 17px 0 0;
}

.col {
  flex: 1;
}
</style>