<template>
  <div class="card">
      <div class="top">
            <div class="title">
                 {{ title }}
            </div>
      </div>

      <div class="lines" v-for="item in items" v-bind:key="item">
        <SkillLine :rating=item.rating :skillName=item.name />
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
props : {
    title: String,
    items: Object
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

.card {
    border: 3px solid white;
    border-radius: 42px;
    padding: 0px 28px 30px 28px;
    margin: 50px 10px 10px 10px;
}

.top {
    display: flex;
}

.lines {
    display: flex;
    flex-direction: column;
}
.title {
    top: -20px;
    background-color: #754cbd;
    position: relative;

    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2em;
    text-align: center;
    padding: 0 15px 0 15px;
}
</style>