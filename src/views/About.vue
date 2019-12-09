<template>
  <div class="about animated" :class="[animation, theme]">
    <div class="quit">
      <img @click="leavePage" class="cross" src="../assets/close.svg" alt />
    </div>
    <div class="title">INFOS</div>
    <img :class="theme" class="profil_pic animated fadeInDown" src="@/assets/photo.svg" alt />
    <MessageBlock>
      <p class="prez-text">
        <span class="hello">
          {{ $t('about.hello') }}
          <br />
        </span>
        <span class="i-am">{{ $t("about.i-am") }}</span>
        {{ $t("about.prez") }}
      </p>
    </MessageBlock>
    <!-- <img :class="theme" class="logo animated fadeInDown" src="@/assets/logo.png" alt /> -->
    <MessageBlock :icon="require('@/assets/logo.png')">
      <p>{{ $t("about.app-info") }}</p>
    </MessageBlock>
  </div>
</template>

<script>
import router from "../router";
import MessageBlock from "../components/about/MessageBloc";

export default {
  name: "about",
  components: {
    MessageBlock
  },
  data() {
    return {
      animation: "slideInUp",
      theme: localStorage.getItem("theme")
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
    scroll(0, 0);
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

.about.dark {
  background: #121212;
  border-radius: 30px 30px 0 0;
}

.profil_pic {
  position: relative;
  padding: 10px;
  width: 130px;
  bottom: -70px;
  margin-left: 60px;
  z-index: 1;
}
.prez {
  padding: 40px;
  font-size: 1.1rem;
}

.darkbody {
  background-color: rgb(26, 26, 26);
  border-radius: 17px;
}

.prez-text {
  margin-left: 20px;
  margin-top: 40px;
}

.hello {
  font-size: 1.8rem;  
}

.i-am {
  font-size: 1.4rem;
}



img.fancy {
  background-color: #754cbd;
}

img.light {
  background-color: #00a6f3;
}
</style>