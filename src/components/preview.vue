<template>
       <div id="preview-block">
      <form  onsubmit="AddEmployee()">
        <div class="formblock">
          <h2 align="center">Preview</h2>
        
          <div class="field">
            <label>Name : </label>
            <label>{{fullName()}}</label>
          </div>
          <div class="field">
            <label>Date Of Birth : </label>
            <label>{{emp_data.dob}}</label>
          </div>
          <div class="field">
            <label>Email Id : </label>
            <label>{{emp_data.email}}</label>
          </div>
          <div class="field">
            <label>Password : </label>
            <label>********</label>
          </div>

          <div class="field">
            <label>Gender : </label>
            <label>{{emp_data.gender}}</label>
          </div>
          <div class="field">
            <label>Hobbies : </label>
            <ul>
              <li v-for="hobby in emp_data.hobbies" v-bind:key=hobby>{{hobby}}</li>
            </ul>
          </div>
          <div class="field">
            <label>Country : </label>
              <label>{{emp_data.country}}</label>
          </div>
          <div class="field">
            <label>State : </label>
              <label>{{emp_data.state}}</label>
          </div>
          <div class="field">
            <label>Address : </label>
            <label>{{emp_data.address}}</label>
          </div>
        </div>
      </form>
    </div>
</template>
<script>
export default {
    name:"preview",
    props:{
emp_data:Object
},
methods:{
    fullName:function() {
    return this.emp_data.fname+" "+this.emp_data.lname;
}
}

}
</script>