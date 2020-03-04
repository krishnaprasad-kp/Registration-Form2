import Vue from 'vue'
//import VueRouter from 'vue'
import App from './App.vue'
//import Sample from './components/Sample.vue'
import register from './components/registration-form.vue'
//import preview from './components/preview.vue'
//import employees from './components/Employees.vue'

Vue.config.productionTip = false
// const routes=[
//   {path:"/home",component:employees},
//   {path:'/register',component:register}
// ]
//const router=new VueRouter({routes});
new Vue({
  render:h=>h(App)
}
).$mount('#app');