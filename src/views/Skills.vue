<template>
  <div class="skills animated" :class="[animation, theme]">
    <div class="quit">
      <img @click="leavePage" :class="theme" class="cross" src="../assets/close.svg" alt />
    </div>
    <div :class="theme" class="title">{{ $t("home.skills") }}</div>
    <div class="columns animated fadeInUp">
      <div class="col two-col">
        <SkillCard title="Office" :items="skills.office" />
        <SkillCard title="Design" :items="skills.design" />
      </div>
      <div class="col">
        <SkillCard class="middle-col" title="Web" :items="skills.web" />
      </div>
      <div class="col two-col">
        <SkillCard :title="$i18n.t('skills.software')" :items="skills.software" />
        <SkillCard :title="$i18n.t('skills.languages')" :items="$i18n.t('skills.language')" />
      </div>
    </div>
    <div class="other animated fadeInUp">
      <p class="other-title">{{ $t("skills.other") }}</p>
      <div class="other-buttons">
        <SocialButton
          class="button"
          title="Git"
          :icon="require('../assets/git.svg')"
          :color="'#00a6f3'"
          :iconColor="'#f05033'"
        />

        <SocialButton
          class="button"
          title="SQL"
          :icon="require('../assets/sql.png')"
          :color="'#00a6f3'"
          :iconColor="'#4a7fc6'"
        />

        <SocialButton
          class="button"
          title="NoSQL"
          :icon="require('../assets/mongo.png')"
          :color="'#00a6f3'"
          :iconColor="'#191155'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from "../components/skills/SkillCard";
import SocialButton from "../components/social/SocialButton.vue";
import skillData from "../assets/data/skills.json";
import router from "../router";

export default {
  name: "skills",
  components: {
    SkillCard,
    SocialButton
  },
  data() {
    return {
      skills: skillData,
      animation: "slideInUp",
      theme: localStorage.getItem("theme")
    };
  },
  methods: {
    leavePage() {
      this.animation = "slideOutDown";
      setTimeout(() => router.push("/"), 1000);
    }
  },
  mounted() {
    const el = document.body;
    setTimeout(() => el.classList.remove("over").bind(this), 1100);
    scroll(0, 0);
  }
};
</script>

<style>
.skills {
  height: 100%;
}

.skills.fancy {
  background: #754cbd;
  border-radius: 30px 30px 0 0;
}

.skills.light {
  background: white;
  border-radius: 17px 17px 0 0;
  -webkit-box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 1);
}

.skills.dark {
  background: #121212;
  border-radius: 30px 30px 0 0;
}

.two-col {
  justify-content: space-between;
}

.middle-col {
  height: 100%;
}

/* "OTHER" PART */
.other {
  padding-left: 20px;
  padding-bottom: 30px;
}

.other-buttons {
  display: flex;
}

.button {
  margin-right: 20px;
}

.other-title {
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 2em;
  width: 100%;
}

@media screen and (max-width: 1170px) {
  html,
  body {
    overflow: unset;
  }

  .other-buttons {
    flex-direction: column;
  }

  .button {
    margin: 10px 0 10px 0;
  }
}
</style>