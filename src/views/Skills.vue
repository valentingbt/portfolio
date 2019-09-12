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
        <SkillCard title="Web" :items="web"/>
      </div>
      <div class="col">
        <SkillCard title="Software" :items="software"/>
        <SkillCard title="Software" :items="software"/>
      </div>
    </div>

  </div>
</template>

<script>

import SkillCard from '../components/skills/SkillCard'

export default {
  name: 'skills',
  components: {
    SkillCard
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

    }
  }
}
</script>

<style>

.title {
    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2em;
    text-align: center;
}

.columns {
  width: 100%;
  display: flex;
  margin-top:80px;
}

.col {
  flex: 1;
}

.quit {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.cross {
  width: 20px;
  height: 20px;
  margin: 20px;
}
</style>