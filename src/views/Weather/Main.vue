<script setup>
import { state } from "../../App.vue";
import Timezone from "./components/Timezone/Timezone.vue";
import DailyHourlyPanel from "./components/DailyHourlyPanel/DailyHourlyPanel.vue";
import FooterInfo from "./components/FooterInfo/FooterInfo.vue";
import CurrentInfo from "./components/CurrentInfo/CurrentInfo.vue";
</script>

<template>
  <section
    class="wrapper"
    :style="{
      backgroundImage: `var(${state.dayPeriod})`,
      color:
        state.dayPeriod == '--night' || state.dayPeriod == '--dawn'
          ? 'var(--light)'
          : 'var(--dark)',
    }"
  >
    <Timezone />

    <CurrentInfo />

    <FooterInfo />

    <DailyHourlyPanel />
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "./main.css";
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
