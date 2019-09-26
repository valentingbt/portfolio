<template>
  <div class="card">
    <div class="body">
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
    description: String
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
  width: 400px;
  padding: 20px 20px 20px 20px;
  text-align: center;
  border-radius: 42px;
  border: 3px solid white;
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
</style>