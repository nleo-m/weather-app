import { createApp } from 'vue'
import App from './App.vue'

import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWind, faDroplet, faSun, faBug } from '@fortawesome/free-solid-svg-icons';

library.add(faWind);
library.add(faDroplet);
library.add(faSun);
library.add(faBug);

import './assets/main.css'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('pulse-loader', PulseLoader)
    .mount('#app')
