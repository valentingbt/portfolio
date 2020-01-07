<template>
  <div>
    <img
      v-if="icon"
      :class="theme"
      :style="addImgStyle"
      :width="imgSize"
      class="logo animated fadeInDown"
      :src="icon"
      alt
    />
    <div :class="[{border : theme == 'fancy'}, theme]" class="body animated fadeInUp">
      <div v-if="messageTitle" :class="theme" class="messageTitle animated fadeInDown">
        <div>{{ messageTitle }}</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBlock",
  props: {
    icon: String,
    imgSize: String,
    addImgStyle: String,
    messageTitle: String
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

.body.dark {
  color: white;
  background-color: rgb(26, 26, 26);
  border-radius: 17px;
}

.body.light {
  color: #262626;
  -webkit-box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 0px 91px -37px rgba(0, 0, 0, 0.48);
  border-radius: 17px;
}

.body {
  font-size: 1.1rem;
  padding: 20px 40px 10px 40px;
}

.logo {
  position: relative;
  padding: 10px;
  bottom: -50px;
  margin-left: 60px;
  z-index: 1;
}
.messageTitle {
  display: flex;
}
.messageTitle div {
  font-size: 1.3em;
  padding: 0 15px 0 15px;
  z-index: 1;
}

.messageTitle.dark div,
.messageTitle.fancy div {
  color: white;
}

.messageTitle.light div {
  color: #262626;
}
.messageTitle.fancy div {
  background-color: #754cbd;
}

.messageTitle.fancy div {
  top: -35px;
  position: relative;
  left: 40px;
}
</style> 