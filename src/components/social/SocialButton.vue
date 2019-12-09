<template>
  <div :class="theme" class="card shine" :style="{background : backColor()}">
    <img :class="theme" :style="{background : iconColor}" :src="icon" alt />

    <p :class="theme">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "SocialButton",
  props: {
    title: String,
    icon: String,
    iconColor: String,
    color: String
  },
  data() {
    return {
      theme: localStorage.getItem("theme")
    };
  },
  methods: {
    backColor() {
      if (this.theme === "dark") {
        return "#303030";
      } else {
        return this.color;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap");
.card {
  height: 40px;
  background: black;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.5s;
  overflow: hidden;
}

.card.fancy {
  border-radius: 46px;
}

.card.light,
.card.dark {
  border-radius: 12px;
}

.card:hover {
  filter: brightness(1.2);
  transition: 0.5s;
}

img {
  width: 40px;
  height: 40px;
}

img.fancy {
  border-radius: 100px;
}

img.light {
  border-radius: 12px;
}

img.dark {
  opacity: 0.8;
  border-radius: 12px;
}

p {
  font-family: "Lexend Deca", sans-serif;
  font-size: 1.1em;
  color: white;
  margin: 0 15px 0 15px;
}

p.fancy {
  color: white;
}

p.light {
  color: #e3f2fd;
}

@media screen and (max-width: 1170px) {
  .card {
    width: 90%;
    overflow: hidden;
  }
}
</style>
