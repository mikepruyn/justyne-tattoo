import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from '../components/Home'
import AdminPage from '../components/AdminPage'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/admin', component: AdminPage }
]

const router = new VueRouter({
    routes
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')