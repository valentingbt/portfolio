<template>
  <div class="home animated fast" :class="animation">
    <div :class="theme" class="profil">
      <div class="settings">
        <!-- Change theme -->

        <div class="setting">
          <div :class="{ active: theme === 'dark' }" @click="changeTheme('dark')">dark</div>

          <div
            :class="{ active: theme === 'light' }"
            @click="changeTheme('light')"
          >{{ $t("home.light") }}</div>
          <div
            :class="{ active: theme === 'fancy' }"
            @click="changeTheme('fancy')"
          >{{ $t("home.fancy") }}</div>
        </div>

        <div :class="theme" class="hr-y"></div>

        <!-- Change language -->

        <div class="setting">
          <div :class="{ active: $i18n.locale === 'fr' }" @click="changeLocale('fr')">français</div>
          <div :class="{ active: $i18n.locale === 'en' }" @click="changeLocale('en')">english</div>
        </div>
      </div>

      <div class="name">
        <!-- Name logo for FANCY theme -->
        <img
          :class="shake"
          @click="shakeContent"
          v-if="theme === 'fancy'"
          class="name"
          src="@/assets/name.svg"
          alt
        />

        <!-- Name logo for LIGHT theme -->
        <!-- <img
          :class="shake"
          @click="shakeContent"
          v-if="theme === 'light'"
          class="name-light"
          src="@/assets/name_light.svg"
          alt
        />-->

        <svg
          :class="shake"
          @click="shakeContent"
          v-if="theme === 'light'"
          class="name name-light"
          viewBox="0 0 960 300"
        >
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="40%">
              <tspan x="50%" y="50%">Valentin</tspan>
              <tspan x="50%" dy="45%">Guibert</tspan>
            </text>
          </symbol>

          <g class="g-ants">
            <use xlink:href="#s-text" class="text-copy" />
            <use xlink:href="#s-text" class="text-copy" />
            <use xlink:href="#s-text" class="text-copy" />
            <use xlink:href="#s-text" class="text-copy" />
            <use xlink:href="#s-text" class="text-copy" />
          </g>
        </svg>

        <!-- Name logo for DARK theme -->
        <img
          :class="shake"
          @click="shakeContent"
          v-if="theme === 'dark'"
          class="name"
          src="@/assets/name_dark.svg"
          alt
        />
      </div>

      <!-- Current status -->
      <div :class="[bounce,theme]" class="statut" @click="changeStatut">{{ $t("home.statut")[i] }}</div>
    </div>

    <SocialRow class="middle" />

    <MenuRow />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuRow from "@/components/menu/MenulRow";
import SocialRow from "@/components/social/SocialRow";
import { home } from "../locales/fr.json";

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
      shake: "",
      statut: home.statut,
      i: 0,
      theme: localStorage.getItem("theme")
    };
  },
  methods: {
    changeStatut() {
      this.bounce = "animated swing faster";
      setTimeout(() => (this.bounce = ""), 500);
      if (this.i <= this.statut.length - 2) {
        this.i = this.i + 1;
      } else {
        this.i = 0;
      }
    },
    changeLocale(locale) {
      if (this.$i18n.locale != locale) {
        localStorage.setItem("lang", locale);
        location.reload();
      }
    },
    changeTheme(color) {
      if (this.theme != color) {
        localStorage.setItem("theme", color);
        location.reload();
      }
    },
    shakeContent() {
      this.shake = "animated bounce";
      setTimeout(() => (this.shake = ""), 1000);
      setTimeout(() => this.changeStatut(), 600);
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
@import url(https://fonts.googleapis.com/css?family=Montserrat);

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
  background: none;
}

.profil.fancy,
profil.dark {
  color: white;
}

.profil.light {
  color: #262626;
}

.name {
  width: 1100px;
}

.name-light {
  display: block;
  font: 10.5em "Montserrat";
  margin: 0 auto;
}

.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: 6% 29%;
  stroke-width: 5px;
  stroke-dashoffset: 0%;
  animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1) {
  stroke: #00a6f3;
  animation-delay: -1;
}

.text-copy:nth-child(2) {
  stroke: #00a6f3;
  animation-delay: -2s;
}

.text-copy:nth-child(3) {
  stroke: #00a6f3;
  animation-delay: -3s;
}

.text-copy:nth-child(4) {
  stroke: #00a6f3;
  animation-delay: -4s;
}

.text-copy:nth-child(5) {
  stroke: #00a6f3;
  animation-delay: -5s;
}

@keyframes stroke-offset {
  100% {
    stroke-dashoffset: -35%;
  }
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
  cursor: default;
}

.hr-y {
  width: 1px;
  height: 20px;
}

.hr-y.fancy,
.hr-y.dark {
  background-color: white;
}

.hr-y.light {
  background-color: #00a6f3;
}

.statut {
  width: fit-content;
  padding: 2px 11px 2px 11px;
  margin-top: 10px;
  font-size: 1.2em;
  transition: 2s;
}

.statut.fancy {
  border-radius: 30px;
}

.statut.fancy,
.statut.dark {
  border: 1.5px solid;
}

.statut.light,
.statut.dark {
  border-radius: 12px;
}

.shine::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-transition: none;
  -moz-transition: none;
  transition: none;
}

.shine:hover::after {
  width: 120%;
  background-color: rgba(255, 255, 255, 0);

  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

@media screen and (max-width: 1170px) {
  html,
  body {
    height: auto;
  }

  .home {
    display: block;
  }

  .name,
  .name-light {
    width: 100%;
  }

  .middle {
    margin: 20px 0 20px 0;
  }
}
</style>
