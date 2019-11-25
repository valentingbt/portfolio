<template>
  <div class="card">
    <img class="dot" src="@/assets/dot.svg" alt />
    <div class="right">
      <div :class="theme" class="body">
        <div class="card-header">
          <div class="exp-left">
            <div class="date">{{ date }}</div>
            <div class="company">{{ company }}</div>
            <div class="city">{{ city }}</div>
          </div>
          <img @click="animContent" :class="animation" class="exp-icon" :src="image" alt />
        </div>
        <hr />
        <div class="descri">{{ description }}</div>
      </div>

      <div
        v-if="plus === true"
        @click="showSeemore"
        :class="{ seemoreShowed: visible }"
        class="seemore"
      >
        <div :class="infoanimation" class="see-content animated">
          <div>Projet(s) :</div>
          <br />
          <MiniProj
            v-for="info in infos"
            v-bind:key="info"
            :title="info.title"
            :link="info.link"
            :background="info.background"
          ></MiniProj>
        </div>

        <div :class="buttonChange" class="button"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MiniProj from "./miniproj";
export default {
  name: "ExpCard",
  components: {
    MiniProj
  },
  props: {
    date: String,
    company: String,
    city: String,
    description: String,
    image: String,
    plus: Boolean,
    more_title: String,
    more_link: String,
    more_background: String,
    infos: Object
  },
  data() {
    return {
      theme: localStorage.getItem("theme"),
      animation: "",
      hover: false,
      seemoreShowed: "",
      buttonChange: "",
      infoanimation: "",
      visible: false
    };
  },
  methods: {
    animContent() {
      this.animation = "animated rubberBand";
      setTimeout(() => (this.animation = ""), 1000);
    },
    showSeemore() {
      if (this.visible === false) {
        this.seemoreShowed = "seemoreShowed";
        this.buttonChange = "minus";
        this.infoanimation = "fadeInDown";
        this.visible = true;
      } else {
        this.infoanimation = "fadeOutUp";
        this.seemoreShowed = "";
        this.buttonChange = "";
        this.visible = false;
      }
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

.right {
  width: 100%;
}
.body {
  position: relative;
  border: 3px solid white;
  padding: 20px 20px 20px 20px;
  transition: 0.5s;

  color: white;
  font-family: "Lexend Deca", sans-serif;
  z-index: 10;
}

.body.fancy:hover {
  box-shadow: 0 0 50px 10px rgba(255, 255, 255, 0.1);
  background-color: rgb(131, 94, 196);
}

.body.light:hover {
  box-shadow: 0 0 100px 10px rgba(255, 255, 255, 0.2);
  background-color: rgb(51, 184, 245);
}

.body.fancy {
  border-radius: 42px;
  background-color: #754cbd;
}

.body.light {
  border-radius: 12px;
}

.card-header {
  display: flex;
  justify-content: space-between;
}
.exp-icon {
  width: 50px;
  height: 50px;
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

.seemore {
  color: white;
  display: flex;
  flex-direction: column;
  transition: 1s;
  z-index: 0;
  position: relative;
  margin-top: -40px;
  height: 70px;
  color: white;
  align-self: flex-end;
  border-left: solid white 3px;
  border-right: solid white 3px;
  border-bottom: solid white 3px;
  border-radius: 0 0 42px 42px;
  cursor: pointer;
}

.seemoreShowed {
  height: 200px;
  cursor: default;
}

.see-content {
  margin: 60px 20px 20px 20px;
  opacity: 0;
  width: auto;
}

.button {
  bottom: 0;
  width: 100%;
  position: absolute;
  align-self: center;
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  /* Vertical line */
  /* horizontal line */
}
.button:before,
.button:after {
  content: "";
  position: absolute;
  background-color: white;
  transition: transform 0.25s ease-out;
}
.button:before {
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  margin-left: -2px;
}
.button:after {
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
  margin-top: -2px;
}
.minus:hover {
  cursor: pointer;
}
.minus:before {
  transform: rotate(90deg);
}
.minus:after {
  transform: rotate(180deg);
}
</style>