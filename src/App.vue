<script setup>
import Main from "./views/Weather/Main.vue";
import Error from "./views/Error/Error.vue";
import { GET_WEATHER } from "./services/api";
import { unixToTimestamp, getFormattedTime } from "./utilities/time";
import { reactive } from "vue";
</script>

<template>
  <section class="wrapper">
    <pulse-loader
      v-if="!state.weather && errors.length == 0"
      :color="'var(--primary)'"
      size="32px"
    />

    <Main v-if="state.weather && errors.length == 0" />

    <Error v-if="errors.length > 0" :errors="errors" />
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: aliceblue;
}

.v-spinner {
  margin: auto;
  align-self: center;
}
</style>

<script>
export const state = reactive({
  weather: null,
  timezone: null,
  dayPeriod: null,
  currentTime: null,
});

export default {
  data() {
    return {
      state,
      errors: [],
    };
  },
  methods: {
    getWeather(location) {
      GET_WEATHER(location.coords).then(
        (response) => {
          const { data } = response;
          state.timezone = data.timezone;
          state.weather = {
            current: data.current,
            hourly: data.hourly,
            daily: data.daily,
          };
        },
        (error) => {
          this.setError({
            error: error,
            message: "Não foi possível obter as informações sobre o clima.",
          });
        }
      );
    },

    setError(error) {
      console.log(error);
      return this.errors.push(error.message);
    },

    getCurrentTime() {
      const date = new Date();

      if (state?.weather) state.dayPeriod = this.getDayPeriod(date.getHours());

      state.currentTime = getFormattedTime(date);
    },

    getDayPeriod(currentTime) {
      const sunrise = unixToTimestamp(
        state.weather.current.sunrise
      )?.getHours();
      const sunset = unixToTimestamp(state.weather.current.sunset)?.getHours();

      if (currentTime >= sunrise && currentTime < sunrise + 2) return "--dawn";
      else if (currentTime >= sunrise + 2 && currentTime < 12)
        return "--morning";
      else if (currentTime >= 12 && currentTime < sunset) return "--afternoon";
      else if (currentTime >= sunset && currentTime < sunset + 2)
        return "--evening";
      else return "--night";
    },
  },
  mounted() {
    navigator.geolocation.watchPosition(this.getWeather, this.setError);
    setInterval(this.getCurrentTime, 1000);
  },
};
</script>
