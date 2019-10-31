<template>
  <div class="home animated fast" :class="animation">
    <div :class="theme" class="profil">

      <div class="settings">
        <div class="setting">
          <!--<div @click="changeTheme('dark')">dark</div>-->
          <div :class="{ active: theme === 'light' }" @click="changeTheme('light')">light</div>
          <div :class="{ active: theme === 'fancy' }" @click="changeTheme('fancy')">fancy</div>
        </div>
        <!--<div :class="theme" class="hr-y"></div>
        <div class="setting">
          <div>français</div>
          <div>english</div>
        </div> -->
      </div>

      <img v-if="theme === 'fancy'" class="name" src="@/assets/name.svg" alt />
      <img v-if="theme === 'light'" class="name-light" src="@/assets/name_light.svg" alt />


      <div :class="[bounce,theme]" class="statut" @click="changeStatut">{{statut[i]}}</div>
    </div>
    <SocialRow class="middle" />
    <MenuRow />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuRow from "@/components/menu/MenulRow";
import SocialRow from "@/components/social/SocialRow";

export default {
  name: "home",
  components: {
    MenuRow,
    SocialRow
  },
  data() {
    return {
      animation: "fadeIn",
      bounce: "",
      statut: [
        "étudiant en développement web",
        "binge-watcher sur Netflix",
        "voyageur dans l'âme",
        "chocolat addict"
      ],
      i: 0,
      theme: localStorage.getItem('theme')
    };
  },
  methods: {
    changeStatut() {
      this.bounce = "animated bounceIn faster";
      setTimeout(() => (this.bounce = ""), 500);
      if (this.i <= this.statut.length - 2) {
        this.i = this.i + 1;
      } else {
        this.i = 0;
      }
    },
    changeTheme(color){
      localStorage.setItem('theme',color);
      location.reload();
    }
  },
  beforeRouteLeave(to, from, next) {
    const el = document.body;
    el.classList.add("over");
    this.animation = "fadeOut";
    setTimeout(() => next(), 600);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Baloo&display=swap");

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
  font-family: "Lexend Deca", sans-serif;
}

.profil {
  display: flex;
  align-items: center;
  flex-direction: column;
  background:none;
}

.profil.fancy {
  color:white;
}

.profil.light {
  color:#00a6f3;
}

.name {
  width: 1100px;
}

.name-light {
  width: 900px;
  -webkit-filter: drop-shadow(5px 5px 5px #00a6f3);
  filter: drop-shadow(0 0 3px #00a6f3);
}

.settings {
  display: flex;
  bottom: -500px;
}

.setting {
  display: flex;
  margin: 0 5px 0 5px;
}

.setting div {
  margin: 0 2px 0 2px;
  transition: 0.5s;
  cursor: pointer;
}

.setting div:hover {
  opacity: 0.5;
  transition: 0.5s;
}

.active {
  font-weight: bold;
}

.active:hover {
  cursor: text;
}

.hr-y {
  width: 1px;
  height: 20px;
}

.hr-y.fancy {
  background-color: white;
}

.hr-y.light {
  background-color: #00a6f3;
}

.statut {
  width: fit-content;
  border: 1.5px solid;
  padding: 2px 11px 2px 11px;
  margin-top: 10px;
  font-size: 1.2em;
}

.statut.fancy {
  border-radius: 30px;
}

.statut.light {
  border-radius: 12px;
}

@media screen and (max-width: 1170px) {
  html,
  body {
    height: auto;
  }

  .home {
    display: block;
  }

  .name, .name-light {
    width: 100%;
  }

  .middle {
    margin: 20px 0 20px 0;
  }
}

</style>
