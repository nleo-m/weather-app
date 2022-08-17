import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWind, faDroplet, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faWind);
library.add(faDroplet);
library.add(faSun);

import './assets/main.css'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
