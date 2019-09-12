<template>
  <div class="skills">
    <div class="col"><SkillCard /></div>
    <div class="col"></div>
    <div class="col"></div>
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

.skills {
  width: 100%;
  display: flex;
}

.col {
  flex: 1;
}
</style>