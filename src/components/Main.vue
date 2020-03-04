<template>
    <div>
        <register :emp_data="employee_data"/>
    <preview :emp_data="employee_data"></preview>
        <button @click="saveEmployee()">Save</button>
    <button @click="reset()">Reset</button> 
        </div>
</template>
<script>
import register from './registration-form.vue'
import preview from './preview.vue'
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
  name: 'main',
  components: {
    register,preview
  },
  props:{
    EmployeeList:Array
  },
   data() {
    return {
      employee_data:emp_temp,
  
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