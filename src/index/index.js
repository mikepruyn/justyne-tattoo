import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from '../components/Home'
import AdminPage from '../components/AdminPage'
import FlashPage from '../components/FlashPage'
import WorkPage from '../components/WorkPage'
import BookingPage from '../components/BookingPage'
import AdminMenu from '../components/AdminMenu';
import { createPinia, PiniaVuePlugin } from 'pinia'



Vue.use(VueCompositionAPI)

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/admin/:folder', component: AdminPage, props: true },
    { path: '/admin', component: AdminMenu },
    { path: '/flash', component: FlashPage },
    { path: '/work', component: WorkPage },
    { path: '/booking', component: BookingPage }
]

const router = new VueRouter({
    routes
})

Vue.prototype.$adminAccess = false;

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  pinia
}).$mount('#app')
