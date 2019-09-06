<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Baloo&display=swap');

html, body {
    height: 100%;
    margin: 0;
}

.back {
  height: 100%;
  background: #191155;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  position: relative;
  z-index: 5;
}

.name {
  width: 1100px;
}

@media screen and (max-width: 1044px) {
  html, body {
    height: auto;
  }

  .app {
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
  background: #191155 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index: 1;
}

.twinkling {
  background: url(./assets/twinkling.png) repeat top center;
  z-index: 2;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}



</style>
