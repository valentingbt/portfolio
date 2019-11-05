<template>
  <div class="row">
    <router-link to="/skills">
      <MenuButton
        @click.native="leavePage"
        :title="$i18n.t('home.skills')"
        :image="require('../../assets/skill.svg')"
        :image_light="require('../../assets/skill_light.svg')"
      />
    </router-link>

    <router-link to="/experiences">
      <MenuButton
        class="middle"
        :title="$i18n.t('home.experience')"
        :image="require('../../assets/experience.svg')"
        :image_light="require('../../assets/experience_light.svg')"
      />
    </router-link>

    <router-link to="/about">
      <MenuButton 
      :title="$i18n.t('home.about')"
      :image="require('../../assets/information.svg')"
      :image_light="require('../../assets/information_light.svg')"
       />
    </router-link>
  </div>
</template>

<script>
import MenuButton from "./MenuButton.vue";

export default {
  name: "MenuRow",
  components: {
    MenuButton
  }
};
</script>

<style scoped>
a {
  width: 100%;
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
  justify-content: center;
}

.middle {
  margin-left: 30px;
  margin-right: 30px;
}

@media screen and (max-width: 1170px) {
  .row {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .middle {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
