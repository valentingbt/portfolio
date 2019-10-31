<template>
  <div class="card" :class="theme">
      <div class="top">
            <div :class="theme" class="title">
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
},
data() {
    return {
        theme: localStorage.getItem('theme')
    }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

.card {
    border: 3px solid white;
    padding: 0px 28px 30px 28px;
    margin: 50px 10px 10px 10px;
}

.card.fancy {
    border-radius: 42px;
}

.card.light {
    border-radius: 12px;
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
    position: relative;

    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2em;
    text-align: center;
    padding: 0 15px 0 15px;
}

.title.fancy {
    background-color: #754cbd;
}

.title.light {
    background-color: #00a6f3;
}
</style>