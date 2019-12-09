<template>
  <div :class="theme" class="card shine">
    <img v-if="theme === 'fancy'" :src="image" alt />
    <img v-if="theme === 'light' || theme === 'dark'" :src="image_light" alt />
    <p :class="theme">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: {
    title: String,
    image: String,
    image_light: String
  },
  data() {
    return {
      theme: localStorage.getItem("theme")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap");
.card {
  width: 370px;
  height: 200px;
  margin: 10px 0 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
}

.card.fancy {
  background-color: rgba(103, 58, 183, 0.9);
  border-radius: 46px;
  box-shadow: 0 4px 8px 0, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card.light {
  background-color: rgba(0, 191, 243, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 191, 243, 0.9),
    0 6px 20px 0 rgba(0, 191, 243, 0.19);
}

.card.dark {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.card:hover {
  filter: brightness(1.2);
  transition: 0.5s;
}

p {
  font-family: "Lexend Deca", sans-serif;
  font-size: 2.2em;
  margin: 10px 0 0 0;
  color: black;
}

p.fancy, p.dark {
  color: white;
}

p.light {
  color: #e3f2fd;
}

img {
  width: 80px;
  height: 80px;
}

@media screen and (max-width: 1170px) {
  .card {
    width: 90%;
    overflow: hidden;
  }
}
</style>
