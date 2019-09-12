<template>
  <div class="card">
      <div class="title">
          Web
      </div>
      <div class="lines">
        <SkillLine rating="3" skillName="HTML" />
        <SkillLine rating="4" skillName="Javascript" />
        <SkillLine rating="2" skillName="Angular" />
      </div>

  </div>
</template>

<script>
import SkillLine from '../skills/SkillLine'

export default {
name:"SkillCard",
components: {
    SkillLine
},
data () {
    office: {
        MS_word: 3;
        MS_excel: 2;
    }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

.card {
    width: 100%;
    border: 3px solid white;
    border-radius: 42px;
    padding: 0px 28px 30px 28px;
    margin: 20px 10px 10px 10px;
}

.title {
    top: -20px;
    background-color: #754cbd;
    position: relative;

    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2em;
    text-align: center;
}
</style>