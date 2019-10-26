<template>
    <div class="home animated fast" :class="animation">
      <div class="profil">
          <img class="name" src="@/assets/name.svg" alt="">
          <div :class="bounce" class="statut" @click="changeStatut">{{statut[i]}}</div>
          
      </div>
    <SocialRow class="middle"/>
    <MenuRow/>
  </div>

</template>

<script>
// @ is an alias to /src
import MenuRow from '@/components/menu/MenulRow'
import SocialRow from '@/components/social/SocialRow'

export default {
  name: 'home',
  components: {
    MenuRow,
    SocialRow
  },
    data() {
    return {
      animation: "fadeIn",
      bounce: "",
      statut: ["étudiant en développement web", "binge-watcher sur Netflix", "voyageur dans l'âme","chocolat addict"],
      i:0
    };
  },
  methods: {
    changeStatut() {
      this.bounce = "animated bounceIn faster";
      setTimeout(() =>this.bounce = "",500 );
      if (this.i <= this.statut.length-2) {
        this.i = this.i+1;
      } else {
        this.i = 0;
      }
    }
  },
  beforeRouteLeave(to, from, next) {
  const el = document.body;
  el.classList.add("over");
  this.animation = "fadeOut"
  setTimeout(() => next(), 600);
}
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Baloo&display=swap');

.over {
  overflow: hidden;
}

.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  /*position: relative;
  z-index: 5;*/
}

.profil {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.name {
  width: 1100px;
  font-family: baloo;
}

.statut {
  width: fit-content;
  border: 1.5px solid white;
  border-radius: 30px;
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  padding: 2px 11px 2px 11px;
  margin-top:10px;
  font-size: 1.2em;
}

@media screen and (max-width: 1170px) {
  html, body {
    height: auto;
  }

  .home {
    display: block;
  }

  .name {
    width: 100%;
  }

  .middle {
    margin: 20px 0 20px 0;
  }

}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

@-webkit-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

.stars,
.twinkling,
.sky {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #191155 url(../assets/stars.png) repeat top center;
  z-index: 1;
}

.twinkling {
  background: url(../assets/twinkling.png) repeat top center;
  z-index: 2;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}



</style>
