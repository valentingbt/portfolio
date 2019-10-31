<template>
  <div :class="theme" class="app">
    <router-view class="view"/>
  <div class="sky"></div>
  <div :class="theme" class="twinkling"></div>
  <div :class="theme" class="stars"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      theme: localStorage.getItem('theme')
    }
  },
  beforeCreate(){
    if (localStorage.getItem('theme') === null){
      localStorage.setItem('theme', 'fancy');
    }
  }
}
</script>

<style>
html, body {
    height: 100%;
    margin: 0;
}

.app.fancy {
  background: #191155;
}

.app.light {
  background: #e3f2fd;
}

p {
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 1em;
}

.view {
  position: relative;
  z-index: 5;
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
  background: repeat top center;
  z-index: 1;
}

.stars.fancy {
  background: url(./assets/stars.png);
}

.stars.light {
  background: none;
}

.twinkling {
  background: repeat top center;
  z-index: 2;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}

.twinkling.fancy {
  background: url(./assets/twinkling.png);
}

.twinkling.light {
  background: none;
}

.app {
  height: 100%;
  width: 100%;
}
.nav {
  position: fixed;
  bottom: 0;
  z-index: 10;
}

a {
  text-decoration: none;
}

/* Pages with columns */

.columns {
  width: 100%;
  display: flex;
  margin-top: 30px;
}

/* Title and quit */
.title {
    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2em;
    text-align: center;
}

.quit {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.cross {
  width: 20px;
  height: 20px;
  margin: 25px 30px 0px 0px;
}

.cross:hover {
  cursor: pointer;
}

/* scrollbar */

/* width */
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #754cbd;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

/* Mobile */

@media screen and (max-width: 1170px) {
  .columns {
    flex-wrap: wrap;
  }
}

</style>