<script setup>
import {
  unixToTimestamp,
  getFormattedTime,
  getWeekDay,
} from "../../../../utilities/time";

import { state } from "../../../../App.vue";
</script>

<template>
  <div class="weather-panel">
    <div class="switch-wrapper">
      <div class="switch" v-on:click="handlePanel()">
        <p :class="!panelSwitch && 'active'">Hourly</p>
        <p :class="panelSwitch && 'active'">Daily</p>
      </div>
    </div>

    <div class="predictions hourly" v-if="!panelSwitch">
      <div class="detail" v-for="predict in state.weather.hourly">
        <span>{{ getFormattedTime(unixToTimestamp(predict.dt)) }}</span>
        <img :src="'icons/' + predict.weather[0].icon + '.png'" />
        <span>{{ predict.temp }}º</span>
      </div>
    </div>

    <div class="predictions daily" v-if="panelSwitch">
      <div class="detail" v-for="predict in state.weather.daily">
        <span>{{ getWeekDay(unixToTimestamp(predict.dt)) }}</span>
        <img :src="'icons/' + predict.weather[0].icon + '.png'" />
        <span>{{ predict.temp.day }}º</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("./dailyHourlyPanel.css");
</style>

<script>
export default {
  data() {
    return {
      state,
      panelSwitch: false,
    };
  },
  methods: {
    handlePanel() {
      return (this.panelSwitch = !this.panelSwitch);
    },
  },
};
</script>
