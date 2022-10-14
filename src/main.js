import { createApp } from 'vue'
import App from './App.vue'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
    faMagnifyingGlass,
    faCircleUser,
    faBars,
} from '@fortawesome/free-solid-svg-icons' // <<<--- add more FREE + SOLID icons here
import { 
    faFacebook,
    faInstagram,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons' // <<<--- add more FREE + BRANDS icons here

// WANNA USE ICONSET FOR ALL FREE ICONs? COMMENT UPPER LINES, AND UNCOMMENT THESE.
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
    faMagnifyingGlass,
    faCircleUser,
    faBars,
    faFacebook,
    faInstagram,
    faYoutube,
)

// Vue.component('font-awesome-icon', FontAwesomeIcon) // <<<--- ..?

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')