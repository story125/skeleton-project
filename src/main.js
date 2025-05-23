import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// add icons to the library
library.add(fas, far, fab)

import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})

app
  .component('font-awesome-icon', FontAwesomeIcon) // <-- FontAwesome Component 추가
  .mount('#app')
