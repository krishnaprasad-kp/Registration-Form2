<template>
<div id="Employees">
    <table border=1px>
        <tr><th>Name</th><th>D.O.B</th><th>Email Id</th><th>Gender</th><th>Hobbies</th><th>Country</th><th>State</th><th>Address</th></tr>
        <tr v-for="employee in employeeList" v-bind:key="employee.fname+employee.lname"><td>{{employee.fname}} {{employee.lname}}</td><td>{{employee.dob}}</td><td>{{employee.email}}</td><td>{{employee.gender}}</td><td>{{employee.hobbies}}</td><td>{{employee.country}}</td><td>{{employee.state}}</td><td>{{employee.address}}</td></tr>
    </table>
</div>
</template>
<script>
export default {
    name:"employees",
    props:{
        employeeList:Array
    }
}
</script>