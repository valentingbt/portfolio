<template>
  <div class="line">
    <p>{{ skillName }}</p>
    <fa-rating
      :glyph="fa_circle"
      :inactive-color="in_color"
      active-color="#ffffff"
      :rating="rating"
      read-only
      :show-rating="false"
      border-width="2"
      border-color="#ffffff"
      item-size="17"
      spacing="1"
    ></fa-rating>
  </div>
</template>

<script>
import { FaRating } from "vue-rate-it";
import fa_circle from "vue-rate-it/glyphs/circle";

export default {
  name: "SkillLine",
  props: {
    rating: Number,
    skillName: String
  },
  components: {
    FaRating
  },
  created() {
    // register the icon
    this.fa_circle = fa_circle;
    if (this.theme === "fancy") {
      this.in_color = "#754cbd";
    }
    if (this.theme === "light") {
      this.in_color = "#00a6f3";
    }
    if (this.theme === "dark") {
      this.in_color = "#121212";
    }
  },
  data() {
    return {
      fa_circle: "", // declare the icon
      theme: localStorage.getItem("theme"),
      in_color: "#754cbd"
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap");

.line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 15px 0;
}
p {
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 1.5em;
  margin: 0;
}
</style>