<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- <register :emp_data="employee_data"/>
    <preview :emp_data="employee_data"></preview>
    <employees :employeeList="EmployeeList"></employees>
    <button @click="saveEmployee()">Save</button>
    <button @click="reset()">Reset</button> -->
    <div>
      <ul>
 <li><router-link :to="{ name: 'mainpage', params: {  EmployeeList:emplist} }">Register</router-link>  </li> 
  <li><router-link :to="{ name: 'employees', params: { employeeList:emplist} }" >Employee Details</router-link></li>
      </ul>
    </div>
     <div> <router-view></router-view></div>
   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import register from './components/registration-form.vue'
// import preview from './components/preview.vue'
// import employees from './components/Employees.vue'
export default{
  name:'App',
  data(){
    return{emplist:[]};
  }
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#registration-block {
  float: left;
  width: 40%;
  padding-left: 10%;
  height:600px;
}
#Employees{
  float:left
}

#preview-block {
  padding-left: 10%;
  float: right;
  width: 40%;
  height:600px;
}
.field {
  font-weight: bold;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
#app{
  background-color: bisque;
}
</style>
