<script setup>
import { state } from "../../../../App.vue";
</script>

<template>
  <div class="footer-info">
    <div>
      <font-awesome-icon icon="fa-solid fa-wind" />
      <span>{{ state.weather.current.wind_speed }}m/s</span>
    </div>
    <div>
      <font-awesome-icon icon="fa-solid fa-droplet" />
      <span>{{ state.weather.current.humidity }}%</span>
    </div>
    <div>
      <font-awesome-icon icon="fa-solid fa-sun" />
      <span>{{ state.weather.current.uvi }}</span>
    </div>
  </div>
</template>

<style scoped>
@import url("./footerInfo.css");
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
