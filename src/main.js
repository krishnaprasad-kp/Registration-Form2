import Vue from 'vue'
// import App from './App.vue'
import Registration from './components/Registration.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Registration),
}).$mount('#app');