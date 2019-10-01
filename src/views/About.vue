<template>
  <div class="about animated" :class="animation">
    <div class="quit">
      <img @click="leavePage" class="cross" src="../assets/close.svg" alt />
    </div>
    <div class="title">INFOS</div>
    <div class="prez animated fadeInUp">
      <img src="@/assets/photo.png" alt />

      <p class="prez-text">
        <span class="hello">Bonjour ! <br></span>
        <span class="i-am">Je suis Valentin Guibert,</span>
        j’ai 21 ans et je suis étudiant en troisième année
        en école d’ingénierie informatique à Nantes pour devenir développeur
        full-stack. Je suis passionné par les nouvelles technologies
        et le numérique depuis mon enfance.
        <br />Je suis actuellement à la recherche d'une alternance !
      </p>
    </div>

    <div class="contact animated fadeInUp">
      <p>N'hésitez pas à me contacter !</p>
      <p>Ce site est encore en construction. Créé avec le ❤️ grâce au super framewok VueJS.</p>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "about",
  data() {
    return {
      animation: "slideInUp"
    };
  },
  methods: {
    leavePage() {
      this.animation = "slideOutDown";
      setTimeout(() => router.push("/"), 1000);
    }
  },
  mounted() {
    const el = document.body;
    setTimeout(() => el.classList.remove("over").bind(this), 1100);
  }
};
</script>

<style>
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