<script setup>
import { state } from "../../../../App.vue";
</script>

<template>
  <div class="timezone">
    <p>{{ state?.currentTime }}</p>
    <p>{{ state?.timezone }}</p>
  </div>
</template>

<style scoped>
@import url("./timezone.css");
</style>

<script>
export default {
  data() {
    return {
      state,
    };
  },
};
</script>
