<template>
  <div class="card">
    <div class="body" :class="theme">
      <img class="dip-icon" :src="image" alt />
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
      theme: localStorage.getItem("theme")
    };
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
  border: 3px solid white;
  transition: all 0.5s;
}

.body:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
}

.body.fancy {
  border-radius: 42px;
}

.body.light {
  border-radius: 12px;
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