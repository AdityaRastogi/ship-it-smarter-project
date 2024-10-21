import { createApp } from 'vue'
import router from './router.js'
import { createPinia } from 'pinia';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App);
app.use(createPinia());
app.use(vuetify);
app.use(router);
app.mount('#app');