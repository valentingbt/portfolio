<template>
<div class="card">
    <img :src="image" alt="">
    <p>{{ title }}</p>
</div>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    title: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');
.card {
    width: 370px;
    height: 200px;
    background-color: rgba(103, 58, 183, 0.9);
    border-radius: 46px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 10px 0 10px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
}

.card:hover {
  filter: brightness(1.20);
  transition: 0.5s;
}

p {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2.2em;
    color: white;
    margin: 10px 0 0 0;
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
