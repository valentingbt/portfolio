<template>
  <div class="about">
    <SkillCard />

  </div>
</template>

<script>

import SkillCard from '../components/skills/SkillCard'

export default {
  name: 'skills',
  components: {
    SkillCard
  }
}
</script>

<style scoped>
html, body {
    background: #754cbd;
    width: 60%;
}
</style>