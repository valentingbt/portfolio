<template>
  <div class="card">
      <div class="title">
          <p>Web</p>
          
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
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

.card {
    width: 100%;
    border: 3px solid white;
    border-radius: 42px;

    padding: 40px 28px 40px 28px;
    margin: 10px
}

.title {
    top: -60px;
    background-color: #754cbd;
    position: relative;
}

    p {
        color: white;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 2em;
        margin: 0;
    }
</style>