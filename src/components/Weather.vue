<script setup>
  import {GET_WEATHER} from '../services/api';
</script>

<template>
    <section class="wrapper" :style="{backgroundImage: `var(${this.dayPeriod})`}">
        <img />
        <p>{{timezone}}</p>
        <p class="temperature">{{current?.temp ? current.temp + 'º' : '0º'}}</p>
        <p>{{current ? firstLetterCapital(current.weather[0].description) : null}}</p>
        <p>{{currentTime}}</p>

        <p v-for="error in errors">{{error}}</p>
    </section>
</template>

<style scoped>
    @import './weather.css';
</style>

<script>
  export default {
    name: 'Weather',
    data () {
      return {
        timezone: null,
        currentTime: null,
        dayPeriod: null,
        current: null,
        hourly: null,
        daily: null,
        errors: []
      }
    },
    methods: {
      async getWeather (location) {
        const {data} = await GET_WEATHER(location.coords)
        console.log(data);
        this.timezone = data.timezone;
        this.current = data.current;
        this.hourly = data.hourly;
        this.daily = data.daily;
      },

      failGeolocation(error) {
        console.log(error);
        return this.errors.push(error.message);
      },

      firstLetterCapital(str) {
        return str[0].toUpperCase() + str.replace(/^./, '');
      },

      getTime() {
        const aditionalZero = (value) => {
          return value < 10 ? '0' + value : value;
        };

        const date = new Date();
        const currHour = date.getHours();
        const currMinutes = date.getMinutes();

        this.dayPeriod = this.getDayPeriod(currHour);

        this.currentTime = aditionalZero(currHour) + ':' + aditionalZero(currMinutes);
      },
      
      getDayPeriod(hour) {
          if (hour >= 5 && hour < 8 )
            return '--dawn';
          else if (hour >= 8 && hour < 12)
            return '--morning';
          else if (hour >= 12 && hour < 17)
            return '--afternoon';
          else if (hour >= 17 && hour < 20)
            return '--evening';
          else
            return '--night';
      },
    },

    
    mounted () {
      navigator.geolocation.watchPosition(this.getWeather, this.failGeolocation);
      setInterval(this.getTime, 1000);
    }
  }
</script>
