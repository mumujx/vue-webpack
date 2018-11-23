import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)
const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')

// const root = document.createElement('div')
// document.body.appendChild(root)

// new Vue({
//   render: (h) => h(App)
// }).$mount(root)
