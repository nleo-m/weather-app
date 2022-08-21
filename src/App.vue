<script setup>
import Weather from "./components/weather/Weather.vue";
import Error from "./components/general/Error.vue";
import { GET_WEATHER } from "./services/api";
</script>

<template>
  <section class="wrapper">
    <pulse-loader v-if="!weather && errors.length == 0" :color="'var(--primary)'" size="32px"></pulse-loader>

    <Weather
      v-if="weather && errors.length == 0"
      :dayPeriod="dayPeriod"
      :weather="weather"
      :timezone="timezone"
      :unixToTimestamp="unixToTimestamp"
      :getFormattedTime="getFormattedTime"
      :currentTime="currentTime"
    />
  
    <Error v-if="errors.length > 0" :errors="errors"></Error>
    
  </section>

</template>

<style scoped>
  .wrapper{
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
export default {
  data() {
    return {
      weather: null,
      tiemzone: null,
      dayPeriod: null,
      sunriseIn: null,
      sunsetIn: null,
      currentTime: null,
      errors: [],
    };
  },
  methods: {
    getWeather(location) {
      GET_WEATHER(location.coords).then(
        response => {
          const { data } = response;
          this.timezone = data.timezone;
          this.weather = {
            current: data.current,
            hourly: data.hourly,
            daily: data.daily,
          };
    
          const sunriseIn = this.unixToTimestamp(this.weather.current.sunrise);
          const sunsetIn = this.unixToTimestamp(this.weather.current.sunset);
    
          this.sunriseIn = sunriseIn.getHours();
          this.sunsetIn = sunsetIn.getHours();
        },
        error => {
          console.log(error);
          this.setError({error: error, message: 'Não foi possível obter as informações sobre o clima.'});
        }
      )
    },

    setError(error) {
      console.log(error);
      return this.errors.push(error.message);
    },

    unixToTimestamp(timestamp) {
      return new Date(timestamp * 1000);
    },

    getCurrentTime() {
      const date = new Date();
      const currHour = date.getHours();

      this.dayPeriod = this.getDayPeriod(currHour);
      this.currentTime = this.getFormattedTime(date);
    },

    getFormattedTime(timestamp) {
      const aditionalZero = (value) => {
        return value < 10 ? '0' + value : value;
      };

      return (
        aditionalZero(timestamp.getHours()) + ":" + aditionalZero(timestamp.getMinutes())
      );
    },

    getDayPeriod(hour) {
      if (hour >= this.sunriseIn && hour < this.sunriseIn + 2) return "--dawn";
      else if (hour >= this.sunriseIn + 2 && hour < 12) return "--morning";
      else if (hour >= 12 && hour < this.sunsetIn) return "--afternoon";
      else if (hour >= this.sunsetIn && hour < this.sunsetIn + 2) return "--evening";
      else return "--night";
    },
  },
  mounted() {
    navigator.geolocation.watchPosition(this.getWeather, this.setError);
    setInterval(this.getCurrentTime, 1000);
  },
};
</script>
