<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/skills">Compétences</router-link>
    </div>
    <router-view class="animated fadeIn"/>
  </div>
</template>

<style>
html, body {
    background: #754cbd;
    height: 100%;
    margin: 0;
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
  margin: 20px;
}

</style>