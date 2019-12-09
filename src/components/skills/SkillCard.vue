<template>
  <div class="card" :class="theme">
    <div class="top">
      <div :class="theme" class="title">{{ title }}</div>
    </div>

    <div class="lines" v-for="item in items" v-bind:key="item">
      <SkillLine :rating="item.rating" :skillName="item.name" />
    </div>
  </div>
</template>

<script>
import SkillLine from "../skills/SkillLine";

export default {
  name: "SkillCard",
  components: {
    SkillLine
  },
  props: {
    title: String,
    items: Object
  },
  data() {
    return {
      theme: localStorage.getItem("theme")
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap");

.card {
  padding: 0px 28px 30px 28px;
  margin: 50px 10px 10px 10px;
}

.card.fancy {
  border-radius: 42px;
  border: 3px solid white;
}

.card.light {
  border-radius: 12px;
  border: 3px solid white;
}

.card.dark {
  border-radius: 12px;
  background-color: rgb(26, 26, 26);
}

.top {
  display: flex;
}

.lines {
  display: flex;
  flex-direction: column;
}
.title {
  position: relative;
  color: white;

  font-family: "Lexend Deca", sans-serif;
  font-size: 2em;
  text-align: center;
}

.title.fancy {
  background-color: #754cbd;
  top: -20px;
  padding: 0 15px 0 15px;
}

.title.light {
  background-color: #00a6f3;
  top: -20px;
  padding: 0 15px 0 15px;
}

.title.dark {
  margin: 15px 0 15px 0;
}
</style>