<template>
  <div class="skills">
    <div class="quit"><router-link to="/"><img class="cross" src="../assets/close.svg" alt=""></router-link></div>
    <div class="title">COMPETENCES</div>
    <div class="columns">
      <div class="col">
        <SkillCard title="Office" :items="office"/>
        <SkillCard title="Design" :items="design"/>
        </div>
      <div class="col">
        <SkillCard class="middle-col" title="Web" :items="web"/>
      </div>
      <div class="col">
        <SkillCard title="Software" :items="software"/>
        <SkillCard title="Langues" :items="language"/>
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

export default {
  name: 'skills',
  components: {
    SkillCard,
    SocialButton
  },
data() {
    return {
        office: [
            { 
                name:"Microsoft Word",
                rating:5 
            },
            {
                name:"Microsoft Excel",
                rating:5
            },
            {
                name:"Microsoft Powerpoint",
                rating:5
            }

    ],
    design: [
            { 
                name:"Adobe Photoshop",
                rating:4
            },
            {
                name:"Adobe Illustrator",
                rating:4
            },
            {
                name:"Adode XD",
                rating:4
            }

    ],
    web: [
            { 
                name:"HTML/CSS",
                rating:5
            },
            {
                name:"Angular",
                rating:4
            },
            {
                name:"Ionic",
                rating:4
            },
            {
                name:"VueJS",
                rating:4
            },
            {
                name:"NodeJS",
                rating:4
            },
            {
                name:"PHP",
                rating:3
            },
            {
                name:"Symfony",
                rating:3
            },
            

    ],
    software: [
            { 
                name:"Java",
                rating:3
            },
            {
                name:"Scripting Linux",
                rating:3
            },
            {
                name:"Python",
                rating:2
            }

    ],
    language: [
            { 
                name:"Français",
                rating:5
            },
            {
                name:"Anglais",
                rating:4
            },
            {
                name:"Espagnol",
                rating:3
            }

    ]

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