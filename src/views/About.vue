<template>
  <div class="about">
    <div class="quit">
      <router-link to="/">
        <img class="cross" src="../assets/close.svg" alt />
      </router-link>
    </div>
    <div class="title">INFOS</div>
    <div class="prez">
      <img src="@/assets/photo.png" alt />

        <p class="prez-text">
          <span class="hello">Bonjour ! </span>
          <span class="i-am">Je suis Valentin Guibert,</span>
          j’ai 21 ans et je suis étudiant en troisième année
          en école d’ingénierie informatique à Nantes pour devenir développeur
          full-stack. Je suis passionné par les nouvelles technologies
          et le numérique depuis mon enfance. <br>
          Je suis actuellement à la recherche d'une alternance !
        </p>
    </div>

    <div class="contact">
        <p>N'hésitez pas à me contacter !</p>
    </div>

    <p>
        Ce site est encore en construction. Créé avec le ❤️ grâce au super framewok VueJS.
    </p>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style>
html,
body {
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
  margin-top: 100px;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.prez-text {
  font-size: 1.5em;
  /*width: 1000px;*/
  margin-left: 20px;
}

.hello {
  font-size: 1.8em;
}

.i-am {
  font-size: 1.4em;
}

.contact {
    text-align: center;
    font-size: 1.4em;
}
</style>