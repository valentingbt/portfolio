<template>
  <div class="app">
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

<style>
html, body {
    background: #754cbd;
}
.app {
  width: 400px;
}
</style>