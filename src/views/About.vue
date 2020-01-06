<template>
  <div class="about animated" :class="[animation, theme]" v-on:keyup.enter="leavePage">
    <!-- CROSS  -->
    <div class="quit">
      <img @click="leavePage" class="cross" src="../assets/close.svg" alt />
    </div>
    <!-- PAGE CONTENT -->
    <div class="content animated fadeInUp">
      <div class="title">{{ $t('home.about') }}</div>
      <div class="who-title">
        <span class="subtitle">{{ $t('about.who') }}</span>
        <span class="who-hr"></span>
      </div>
      <MessageBlock
        :icon="require('@/assets/photo.svg')"
        imgSize="130px"
        addImgStyle="bottom:-70px"
      >
        <p class="prez-text">
          <span class="hello">
            {{ $t('about.hello') }}
            <br />
          </span>
          <span class="i-am">{{ $t("about.i-am") }}</span>
          {{ $t("about.prez") }}
        </p>
      </MessageBlock>
      <div :class="theme" class="passion-title animated fadeInUp">
        <p>{{ $t("about.passion_title") }}</p>
      </div>
      <MessageBlock :messageTitle="$i18n.t('about.traveling')">
        <div class="countries">
          <div class="country">
            <div class="country-logo">
              <img src="@/assets/usa.svg" width="80px" alt />
              <p class="country-name">USA</p>
            </div>
            <div class="country-text">
              {{ $t("about.usa_text1") }}
              <br />
              <span>
            {{ $t("about.usa_text2") }}
                <a href="http://blogvoyageusa.blogspot.com/">{{ $t("about.blog_link") }}</a>
              </span>
              <br />{{ $t("about.usa_text3") }}
              <br />
              <span>
                {{ $t("about.usa_text4") }}
                <a href="https://www.instagram.com/voyage_aux_usa/">Instagram</a>
              </span>
            </div>
          </div>

          <div class="country">
            <div class="country-logo">
              <img src="@/assets/spain.svg" width="80px" alt />
              <p class="country-name">{{ $t("about.spain") }}</p>
            </div>
            <p
              class="country-text"
            >{{ $t("about.spain_text") }}</p>
          </div>

          <div class="country">
            <div class="country-logo">
              <img src="@/assets/france.svg" width="80px" alt />
              <p class="country-name">FRANCE</p>
            </div>
            <p
              class="country-text"
            >{{ $t("about.france_text") }}</p>
          </div>

          <div class="but-also">
            <p>{{ $t("about.but-also") }}</p>
            <div class="also-content">
              <div class="country-logo">
                <img src="@/assets/portugal.svg" width="80px" alt />
                <p class="country-name">PORTUGAL</p>
              </div>
              <div class="country-logo">
                <img src="@/assets/italy.svg" width="80px" alt />
                <p class="country-name">{{ $t("about.italy") }}</p>
              </div>
              <div class="country-logo">
                <img src="@/assets/canary.svg" width="80px" alt />
                <p class="country-name">{{ $t("about.canary") }}</p>
              </div>
            </div>
          </div>
        </div>
      </MessageBlock>
      <MessageBlock :icon="require('@/assets/logo.png')" imgSize="70px">
        <p>{{ $t("about.app-info") }}</p>
      </MessageBlock>
    </div>
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
  color: white;
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

.content {
  padding: 0 30px 0 30px;
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

/* WHO AM I  */
.who-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}

.subtitle {
  margin-right: 20px;
  white-space: nowrap;
  color: white;
  font-size: 1.5em;
}

.who-hr {
  width: 100%;
  height: 5px;
  background-color: white;
}

/* PRESENTATION */

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

/* PASSION */

.passion-title {
  display: flex;
  justify-content: center;
}

.passion-title.fancy p {
  color: #754cbd;
}

.passion-title.light p {
  color: #00a6f3;
}

.passion-title.dark p {
  color: #121212;
}

.passion-title p {
  font-size: 1.5em;
  text-align: center;
  width: 250px;
  height: 34px;
  background-image: url(../assets/rectangle.svg);
  background-position: center center;
  background-repeat: no-repeat;
}

/* TRAVELING */
.countries {
  padding: 30px;
}
.country {
  display: flex;
  margin-bottom: 20px;
}
.country-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  min-width: 150px;
}
.country-name {
  margin: 0;
  font-size: 1.5em;
}

.country-text {
  width: 100%;
}

.country-text span {
  opacity: 0.5;
  font-size: 0.7em;
}

.but-also {
  margin-top: 40px;
}
.also-content {
  display: flex;
  justify-content: space-evenly;
}

@media screen and (max-width: 1170px) {
  html,
  body {
    overflow: unset;
  }

  .countries {
    padding: 0px;
  }

  .country {
    flex-wrap: wrap;
    justify-content: center;

  }

  .country-logo {
    margin-right: 0px;
  }

  .also-content {
  overflow-x: scroll;
  justify-content: flex-start;
}

  .also-content .country-logo {
  margin-right: 20px;
}

.country-logo {
  min-width: auto;
}
}
</style>