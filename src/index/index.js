import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from '../components/Home'
import AdminPage from '../components/AdminPage'
import FlashPage from '../components/FlashPage'
import WorkPage from '../components/WorkPage'
import BookingPage from '../components/BookingPage'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/admin', component: AdminPage },
    { path: '/flash', component: FlashPage },
    { path: '/work', component: WorkPage },
    { path: '/booking', component: BookingPage }
]

const router = new VueRouter({
    routes
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')