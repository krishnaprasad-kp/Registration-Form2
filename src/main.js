import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import Sample from './components/Sample.vue'
import main from './components/Main.vue'
//import preview from './components/preview.vue'
import employees from './components/Employees.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes=[
  {name:'mainpage',path:"/main",component:main,props:true},
  {name:'employees',path:'/employees',component:employees,props:true}
]
const router=new VueRouter({routes});
new Vue({
  router,
  render:h=>h(App)
}
).$mount('#app');