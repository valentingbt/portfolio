<template>
<div class="card">
        <img src="../../assets/twitter.svg" alt="">

      <p>{{ title }}</p>

</div>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    title: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');
.card {
    height: 40px;
    background: #673ab7;
    border-radius: 46px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

@media screen and (max-width: 1044px) {
  .card {
    width: 90%;
    overflow: hidden;
  }

}
</style>
