<template>
  <div class="experiences animated" :class="[animation2,theme]">
    <div class="quit">
      <img @click="leavePage" :class="theme" class="cross" src="../assets/close.svg" alt />
    </div>

    <div class="columns animated fadeInUp">
      <div class="col left">
        <div class="schools">
          <div :class="theme" class="title">{{ $t("experiences.studies") }}</div>

          <div class="school" v-for="(school,idx) in schools" v-bind:key="idx">
            <exp-card
              :date="school.date"
              :company="school.company"
              :city="school.city"
              :description="school.description"
              :image="school.image"
            />
          </div>
        </div>

        <div class="diplomas">
          <div :class="theme" class="title">{{ $t("experiences.qualifications") }}</div>
          <div v-for="(diploma,idx) in diplomas" v-bind:key="idx">
            <dip-card
              :diploma="diploma.diploma"
              :option="diploma.option"
              :description="diploma.description"
              :image="diploma.image"
            />
          </div>
        </div>
      </div>

      <div class="col">
        <div class="companies">
          <div :class="theme" class="title">{{ $t("experiences.experience") }}</div>
          <div v-for="(company,idx) in companies" v-bind:key="idx">
            <exp-card
              :date="company.date"
              :company="company.company"
              :city="company.city"
              :description="company.description"
              :image="company.image"
              :plus="company.plus"
              :infos="company.infos"
            />
          </div>
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
      companies: this.$i18n.t("experiences.companies"),
      schools: this.$i18n.t("experiences.schools"),
      diplomas: this.$i18n.t("experiences.diplomas"),
      animation2: "slideInUp",
      theme: localStorage.getItem("theme")
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
    setTimeout(() => el.classList.remove("over"), 1100);
    scroll(0, 0);
  }
};
</script>

<style>
.experiences.fancy {
  background: #754cbd;
  border-radius: 30px 30px 0 0;
}

.experiences.light {
  background: white;
  border-radius: 30px 30px 0 0;
  -webkit-box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 1);
}

.experiences.dark {
  background: #121212;
  border-radius: 30px 30px 0 0;
}

.schools {
  width: 700px;
  margin-bottom: 30px;
}

.left {
  justify-content: flex-start;
  align-items: center;
}

.companies {
  align-items: center;
  width: 700px;
}

.diplomas {
  width: 700px;
}

@media screen and (max-width: 1170px) {
  .schools {
    width: 100%;
  }

  .companies {
    width: 100%;
  }

  .diplomas {
    width: 100%;
  }
}
</style>