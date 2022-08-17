<script setup>
  import {GET_WEATHER} from '../services/api';
</script>

<template>
    <section class="wrapper" :style="{backgroundImage: `var(${dayPeriod})`, color: dayPeriod == '--night' || dayPeriod == '--dawn' ? 'var(--light)' : 'var(--dark)'}">
        <img />

        <div class="timezone">
          <p>{{currentTime}}</p>
          <p>{{timezone}}</p>
        </div>

        <div v-if="current" class="weather-info">
          <img :src="'icons/' + current?.weather[0].icon + '.png'" />
          <p>{{current.temp ? current.temp + 'º' : '0º'}}</p>
          <p class="description">{{firstLetterCapital(current.weather[0].description)}}</p>
        </div>

        <div class="footer-info">
          <div>
            <font-awesome-icon icon="fa-solid fa-wind" />
            <span>{{current?.wind_speed}}m/s</span>
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-droplet" />
              <span>{{current?.humidity}}%</span>
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-sun" />
            <span>{{current?.uvi}}</span>
          </div>
        </div>

        <p class="error" v-for="error in errors">{{error}}</p>


        <div v-if="hourly && daily" class="weather-panel">
          <div class="switch-wrapper">
            <div class="switch" v-on:click="handleSwitch()">
              <p :class="!panelSwitch ? 'active' : null">Hourly</p>
              <p :class="panelSwitch ? 'active' : null">Daily</p>
            </div>
          </div>

          <div class="predictions hourly" v-if="!panelSwitch">
            <div class="detail" v-for="predict in hourly">
              <span>{{getFormattedTime(unixTimestampConverter(predict.dt))}}</span>
              <img :src="'icons/' + predict.weather[0].icon + '.png'" />
              <span>{{predict.temp}}º</span>
            </div>
          </div>

          <div class="predictions daily" v-if="panelSwitch">
            <div class="detail" v-for="predict in daily">
              <span>{{getFormattedDate(unixTimestampConverter(predict.dt))}}</span>
              <img :src="'icons/' + predict.weather[0].icon + '.png'" />
              <span>{{predict.temp.day}}º</span>
            </div>
          </div>
        </div>

    </section>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import './weather.css';
    @import './responsive.css';
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
        sunriseIn: null,
        sunsetIn: null,
        panelSwitch: false,
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
        const sunset =  this.unixTimestampConverter(data.current.sunset);
        const sunrise = this.unixTimestampConverter(data.current.sunrise);
        this.sunriseIn = sunrise.getHours();
        this.sunsetIn = sunset.getHours();
        console.log(this.sunsetIn, this.sunriseIn);
      },

      failGeolocation(error) {
        console.log(error);
        return this.errors.push(error.message);
      },

      firstLetterCapital(str) {
        return str[0].toUpperCase() + str.replace(/^./, '');
      },

      getCurrentTime() {
        const date = new Date();
        const currHour = date.getHours();
        const currMinutes = date.getMinutes();

        this.dayPeriod = this.getDayPeriod(currHour);

        this.currentTime = this.getFormattedTime(date);
      },

      unixTimestampConverter(timestamp) {
        return new Date(timestamp * 1000);
      },

      aditionalZero(value) {
        return value < 10 ? '0' + value : value;
      },

      getFormattedTime(timestamp) {
        return this.aditionalZero(timestamp.getHours()) + ':' + this.aditionalZero(timestamp.getMinutes());

      },

      getFormattedDate(timestamp) {
        const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

        return days[timestamp.getDay()];
      },
      
      getDayPeriod(hour) {
          if (hour >= this.sunriseIn && hour < this.sunriseIn + 2 )
            return '--dawn';
          else if (hour >= this.sunriseIn + 2 && hour < 12)
            return '--morning';
          else if (hour >= 12 && hour < this.sunsetIn)
            return '--afternoon';
          else if (hour >= this.sunsetIn && hour < this.sunsetIn + 2)
            return '--evening';
          else
            return '--night';
      },

      handleSwitch(){
        return this.panelSwitch = !this.panelSwitch;
      }
    },

    
    mounted () {
      navigator.geolocation.watchPosition(this.getWeather, this.failGeolocation);
      setInterval(this.getCurrentTime, 1000);
    }
  }
</script>
