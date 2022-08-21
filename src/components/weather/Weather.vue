<template>
    <section class="wrapper" :style="{backgroundImage: `var(${dayPeriod})`, color: dayPeriod == '--night' || dayPeriod == '--dawn' ? 'var(--light)' : 'var(--dark)'}">
        <div class="timezone">
          <p>{{currentTime}}</p>
          <p>{{timezone}}</p>
        </div>

        <div class="weather-info">
          <img :src="'icons/' + weather.current.weather[0].icon + '.png'" />
          <p>{{weather.current.temp}}º</p>
          <p class="description">{{firstLetterCapital(weather.current.weather[0].description)}}</p>
        </div>

        <div class="footer-info">
          <div>
            <font-awesome-icon icon="fa-solid fa-wind" />
            <span>{{weather.current.wind_speed}}m/s</span>
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-droplet" />
              <span>{{weather.current.humidity}}%</span>
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-sun" />
            <span>{{weather.current.uvi}}</span>
          </div>
        </div>
        
        <div class="weather-panel">
          <div class="switch-wrapper">
            <div class="switch" v-on:click="handleSwitch()">
              <p :class="!panelSwitch ? 'active' : null">Hourly</p>
              <p :class="panelSwitch ? 'active' : null">Daily</p>
            </div>
          </div>

          <div class="predictions hourly" v-if="!panelSwitch">
            <div class="detail" v-for="predict in weather.hourly">
              <span>{{getFormattedTime(unixToTimestamp(predict.dt))}}</span>
              <img :src="'icons/' + predict.weather[0].icon + '.png'" />
              <span>{{predict.temp}}º</span>
            </div>
          </div>

          <div class="predictions daily" v-if="panelSwitch">
            <div class="detail" v-for="predict in weather.daily">
              <span>{{getFormattedDate(unixToTimestamp(predict.dt))}}</span>
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
        panelSwitch: false,
      }
    },
    props: ['weather', 'dayPeriod', 'timezone', 'unixToTimestamp', 'getFormattedTime', 'currentTime'],
    methods: {
      firstLetterCapital(str) {
        return str[0].toUpperCase() + str.replace(/^./, '');
      },

      getFormattedDate(timestamp) {
        const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

        return days[timestamp.getDay()];
      },

      handleSwitch(){
        return this.panelSwitch = !this.panelSwitch;
      }
    },
  }
</script>
