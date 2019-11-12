<template>
  <div class="about animated" :class="[animation, theme]">
    <div class="quit">
      <img @click="leavePage" class="cross" src="../assets/close.svg" alt />
    </div>
    <div class="title">INFOS</div>
    <img :class="theme" class="profil_pic animated fadeInDown" src="@/assets/photo.svg" alt />
    <div class="prez animated fadeInUp border">
      <p class="prez-text">
        <span class="hello">{{ $t('about.hello') }}<br></span>
        <span class="i-am">{{ $t("about.i-am") }}</span>
        {{ $t("about.prez") }}
        
      </p>
    </div>
      <img :class="theme" class="logo animated fadeInDown" src="@/assets/logo.png" alt="">
    <div class="contact animated fadeInUp border">

      <p>{{ $t("about.app-info") }}</p>
    </div>

  </div>
</template>

<script>
import router from "../router";

export default {
  name: "about",
  data() {
    return {
      animation: "slideInUp",
      theme: localStorage.getItem('theme')
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
    scroll(0,0);
  }
};
</script>

<style>
.about {
  padding: 0 30px 0 30px;
  height: 100%;
}

.about.fancy {
  background: #754cbd;
  border-radius: 30px 30px 0 0;
}

.about.light {
  background: #00a6f3;
  border-radius: 17px 17px 0 0;
}

.profil_pic {
  position: relative;
  padding: 10px;
  width: 150px;
  bottom: -90px;
  margin-left: 60px;
  z-index: 1;
}
.prez {
  padding: 40px;
}

.border {
  border: 3px solid white;
  border-radius: 42px;
}

.prez-text {
  font-size: 1.5em;
  /*width: 1000px;*/
  margin-left: 20px;
  margin-top: 40px;
}

.hello {
  font-size: 1.8em;
}

.i-am {
  font-size: 1.4em;
}

.logo {
  width: 80px;
  position: relative;
  padding: 10px;
  bottom: -50px;
  margin-left: 60px;
  z-index: 1;
}

img.fancy {
  background-color: #754cbd;
}

img.light {
  background-color: #00a6f3;
}

.contact {
  font-size: 1.4em;
  padding: 20px 20px 10px 20px;
}
</style>