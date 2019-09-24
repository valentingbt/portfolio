<template>
  <div class="skills">
    <div class="quit"><router-link to="/"><img class="cross" src="../assets/close.svg" alt=""></router-link></div>
    <div class="title">COMPETENCES</div>
    <div class="columns">
      <div class="col">
        <SkillCard title="Office" :items="skills.office"/>
        <SkillCard title="Design" :items="skills.design"/>
        </div>
      <div class="col">
        <SkillCard class="middle-col" title="Web" :items="skills.web"/>
      </div>
      <div class="col">
        <SkillCard title="Software" :items="skills.software"/>
        <SkillCard title="Langues" :items="skills.language"/>
      </div>
    </div>
    <div class="other">
      <p class="other-title">Autres compétences</p>
      <div class="other-buttons">
        <SocialButton class="button"
          title="git" 
          :icon="require('../assets/git.svg')"
          :color="'background:#00a6f3'"/>

          <SocialButton class="button"
          title="SLQ" 
          :icon="require('../assets/sql.png')"
          :color="'background:#00a6f3'"/>

          <SocialButton class="button"
          title="NoSQL" 
          :icon="require('../assets/mongo.png')"
          :color="'background:#00a6f3'"/>
      </div>
    </div>

  </div>
</template>

<script>

import SkillCard from '../components/skills/SkillCard'
import SocialButton from '../components/social/SocialButton.vue'
import skillData from '../assets/data/skills.json'

export default {
  name: 'skills',
  components: {
    SkillCard,
    SocialButton
  },
data() {
    return {
      skills: skillData
    }
  }
}
</script>

<style>
html, body {
    overflow: hidden;
}
.skills {
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

.middle-col {
  height: 525px;
}

/* "OTHER" PART */
.other {
    margin-left: 20px;
    margin-bottom: 30px;
}

.other-buttons {
  display: flex;
}

.button {
  margin-right:20px;
}

.other-title {
    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2em;
    width: 100%;
}

@media screen and (max-width: 1170px) {

  html, body {
    overflow: unset;
}
  .columns {
    flex-wrap: wrap;
  }

  .middle-col {
  height: auto;
  }

  .other-buttons {
    flex-direction: column;
  }

  .button {
    margin: 10px 0 10px 0;
  }
}

</style>