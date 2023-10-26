import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import defaults from './plugins/defaults'
// vue add tailwind
import './assets/tailwind.css'
import Ionic from '@ionic/vue';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  defaults,
  directives,
})

// https://www.npmjs.com/package/vue-material-design-icons

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
 

app.use(vuetify)
app.use(Ionic)
app.use(router)
app.use(pinia)

app.use(vuetify)
app.mount('#app')