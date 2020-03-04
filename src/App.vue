<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <register :emp_data="employee_data"/>
    <preview :emp_data="employee_data"></preview>
    <employees :employeeList="EmployeeList"></employees>
    <button @click="saveEmployee()">Save</button>
    <button @click="reset()">Reset</button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import register from './components/registration-form.vue'
import preview from './components/preview.vue'
import employees from './components/Employees.vue'

var emp_temp={
    fname:"",
    lname:"",
    fullname:"",
    email:"",
    password:"",
    dob:"",
    gender:"",
    country:"",
    state:"",
    hobbies:[],
    address:"",
}
export default {
  name: 'App',
  components: {
    register,preview,employees
  },
   data() {
    return {
      employee_data:emp_temp,
      EmployeeList:[]
    };
  },
  // mounted(){
  //   console.log(this.employee_data)
  // },
  methods: {
    saveEmployee(){
      let new_employee={...this.employee_data}
      this.EmployeeList.push(new_employee)
      this.reset();

    }
//     fullName() {
//       return this.fname + " " + this.lname;
//     },
//     validateEmail() {
//       var mail = this.email;
//       if (!mail.endsWith("@gmail.com")) this.warning = "Invalid Email";
//       else this.warning = "";
 //   }
    ,
    reset(){
         this.employee_data.fname= "",
      this.employee_data.lname= "",
      this.employee_data.dob= "",
      this.employee_data.gender= "",
      this.employee_data.hobbies= [],
      this.employee_data.email= "",
      this.employee_data.password= "",
      this.employee_data.country= "",
      this.employee_data.state= "",
      this.employee_data.address= "",
      this.employee_data.warning= ""
    },
//           showstates(){
//          this.states=this.countries.find(element =>element.country==this.country).states;        
// }
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
</style>
