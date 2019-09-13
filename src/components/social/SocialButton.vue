<template>
<div class="card" :style="color" >
        <img :src="icon" alt="">

      <p>{{ title }}</p>

</div>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    title: String,
    icon: String,
    color: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');
.card {
    height: 40px;
    background: black;
    border-radius: 46px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: 0.5s;
}

.card:hover {
  filter: brightness(1.20);
  transition: 0.5s;
}

img {
  width: 40px;
  height: 40px;
}

p {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.1em;
    color: white;
    margin:0 15px 0 15px;
}

@media screen and (max-width: 1170px) {
  .card {
    width: 90%;
    overflow: hidden;
  }

}
</style>
