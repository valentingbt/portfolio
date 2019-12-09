<template>
  <div class="card">
    <div class="body" :class="theme">
      <img @click="animContent" :class="animation" class="dip-icon" :src="image" alt />
      <div class="diploma">{{ diploma }}</div>
      <div class="option">{{ option }}</div>

      <br />

      <div class="descri">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DipCard",
  props: {
    diploma: String,
    option: String,
    description: String,
    image: String
  },
  data() {
    return {
      theme: localStorage.getItem("theme"),
      animation: ""
    };
  },
  methods: {
    animContent() {
      this.animation = "animated jello";
      setTimeout(() => (this.animation = ""), 1000);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap");

.card {
  margin: 30px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-family: "Lexend Deca", sans-serif;
}

.body {
  width: 100%;
  padding: 20px 20px 20px 20px;
  text-align: center;
  transition: all 0.5s;
}

.body.fancy:hover {
  box-shadow: 0 0 50px 10px rgba(255, 255, 255, 0.1);
  background-color: rgb(131, 94, 196);
}

.body.light:hover {
  box-shadow: 0 0 100px 10px rgba(255, 255, 255, 0.2);
  background-color: rgb(51, 184, 245);
}

.body.dark:hover {
  background-color: rgba(30, 30, 30);
}

.body.fancy {
  border-radius: 42px;
  border: 3px solid white;
}

.body.light {
  border-radius: 12px;
  border: 3px solid white;
}

.body.dark {
  border-radius: 12px;
  background-color: rgba(26, 26, 26);
}

hr {
  margin: 20px 0 20px 0;
}

.diploma {
  font-size: 1.4em;
}

.option {
  font-size: 0.8em;
}

.dip-icon {
  width: 50px;
  height: 50px;
}
</style>