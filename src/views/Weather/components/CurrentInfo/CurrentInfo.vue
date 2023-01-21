<script setup>
import { state } from "../../../../App.vue";
</script>

<template>
  <div class="weather-info">
    <img :src="'icons/' + state?.weather?.current?.weather[0]?.icon + '.png'" />
    <p>{{ state?.weather?.current?.temp }}º</p>
    <p class="description">
      {{ firstLetterCapital(state?.weather?.current?.weather[0]?.description) }}
    </p>
  </div>
</template>

<style scoped>
@import url("./currentInfo.css");
</style>

<script>
export default {
  data() {
    state;
  },
  methods: {
    firstLetterCapital(str) {
      return str[0].toUpperCase() + str.replace(/^./, "");
    },
  },
};
</script>
