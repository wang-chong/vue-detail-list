import Vue from 'vue'
import App from './App.vue'
import detailList from './components/detailList/'
Vue.use(detailList)

new Vue({
  el: '#app',
  render: h => h(App)
})
