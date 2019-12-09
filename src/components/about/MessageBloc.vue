<template>
  <div>
    <img v-if="icon" :class="theme" class="logo animated fadeInDown" :src="icon" alt />
    <div
      :class="[{border : theme == 'light' || theme == 'fancy'}, {darkbody : theme =='dark'}]"
      class="body animated fadeInUp"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBlock",
  props:{
    icon:String
  },
  data() {
    return {
      theme: localStorage.getItem("theme")
    };
  }
};
</script>

<style scoped>
.border {
  border: 3px solid white;
  border-radius: 42px;
}

.darkbody {
  color: white;
  background-color: rgb(26, 26, 26);
  border-radius: 17px;
}

.body {
  font-size: 1.1rem;
  padding: 20px 40px 10px 40px;
}

.logo {
  width: 70px;
  position: relative;
  padding: 10px;
  bottom: -50px;
  margin-left: 60px;
  z-index: 1;
}
</style> 