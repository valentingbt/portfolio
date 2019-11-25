<template>
  <div
    class="miniproj"
    :class="theme"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="goToLink(link)"
  >
    <img class="back" :class="{ backhover: hover }" :src="background" alt />
    <div class="miniprojbody">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "MiniProj",
  props: {
    background: String,
    title: String,
    link: String
  },
  data() {
    return {
      hover: false,
      theme: localStorage.getItem("theme")
    };
  },
  methods: {
    goToLink(link) {
      // window.location.href = link;
      window.open(link,'_blank')
    }
  }
};
</script>

<style scoped>
.miniproj {
  overflow: hidden;
  border: 3px solid white;
  width: 160px;
  height: 65px;
  position: relative;
  text-align: center;
  color: white;
  text-decoration: none;
}

.miniproj.fancy {
  border-radius: 42px;
}

.miniproj.light {
    border-radius: 12px;
}

.miniproj:hover {
  cursor: pointer;
}

.back {
  width: 160px;
  transition: all 1s;
}
.backhover {
  width: 180px;
  transform: translate(-10px, -10px);
}

.miniprojbody {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>