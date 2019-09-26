<template>
  <div class="about">
    <div class="quit"><router-link to="/"><img class="cross" src="../assets/close.svg" alt=""></router-link></div>
    <div class="title">INFOS</div>
    <div class="prez">
      <p class="prez-title">Qui suis-je ?</p>

    </div>

  </div>
</template>

<script>

export default {
  name: 'about'
}
</script>

<style>
html, body {
    overflow: unset;
}
.about {
  background: #754cbd;
  border-radius: 30px 30px 0 0;
  height: 100%;
}

.prez {
    margin-left: 20px;
    margin-bottom: 30px;
}

.prez-title {
    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2em;
    width: 100%;
}


</style>