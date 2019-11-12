<template>
  <div class="card">
      <img class="dot" src="@/assets/dot.svg" alt="">
    <div :class="theme" class="body">
      <div class="card-header">
        <div class="date">{{ date }}</div>
        <div class="company">{{ company }}</div>
        <div class="city">{{ city }}</div>
      </div>
      <hr />
      <div class="descri">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpCard",
  props: {
    date: String,
    company: String,
    city: String,
    description: String
  },
  data() {
    return {
      theme: localStorage.getItem('theme')
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
}
.body {
  width: 100%;
  border: 3px solid white;
  padding: 20px 20px 20px 20px;


  color: white;
  font-family: "Lexend Deca", sans-serif;
}

.body.fancy {
  border-radius: 42px;
}

.body.light {
  border-radius: 12px;
}

.dot {
  width: 10px;
  margin-right: 20px;
}
hr {
  margin: 20px 0 20px 0;
}

.date {
  font-size: 1.7em;
}

.company {
  font-size: 1.4em;
}
</style>