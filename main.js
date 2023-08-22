import App from './App'
import store from './store'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    store,
    app
  }
}
// #endif

Vue.filter("formatDate", (date) => {
	date = new Date(Number(date))
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
})

Vue.filter("formatMin", (date) => {
	date = new Date(Number(date))
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
})