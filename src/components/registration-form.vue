<template>
  <div id="registration-block">
    <form id="registrationForm" onsubmit="AddEmployee()">
      <div class="formblock">
        <h2 align="center">Registration Form</h2>

        <div class="field">
          <label>First Name</label>
        </div>
        <div class="fieldvalue">
          <input type="textfield" v-model="emp_data.fname" name="FirstName" required />
        </div>
        <div class="field">
          <label>Last Name</label>
        </div>
        <div class="fieldvalue">
          <input type="textfield" v-model="emp_data.lname" name="LastName" required />
        </div>
        <div class="field">
          <label>Date Of Birth</label>
        </div>
        <div class="fieldvalue">
          <input type="date" name="Dob" v-model="emp_data.dob" required />
        </div>
        <div class="field">
          <label>Email Id</label>
        </div>
        <div class="fieldvalue">
          <input type="textfield"  name="Email" v-model="emp_data.email" required />
          <span>{{validateEmail()}}</span>
        </div>
        <div class="field">
          <label>Password</label>
        </div>
        <div class="fieldvalue">
          <input type="password" name="Password" v-model="emp_data.password" required />
        </div>

        <div class="field">
          <label>Gender</label>
        </div>
        <div class="fieldvalue">
          <input type="radio" name="gender" v-model="emp_data.gender" value="male" />Male
          <input type="radio" name="gender" v-model="emp_data.gender" value="female" />Female
        </div>
        <div class="field">
          <label>Hobbies</label>
        </div>
        <div class="fieldvalue">
          <input type="checkbox" v-model="emp_data.hobbies" name="hobbies" value="Playing Cricket" />Playing Cricket
          <br />
          <input type="checkbox" v-model="emp_data.hobbies" name="hobbies" value="Watching Movies" />Watching Movies
          <br />
          <input type="checkbox" v-model="emp_data.hobbies" name="hobbies" value="Painting" />Painting
          <br />
          <input
            type="checkbox"
            v-model="emp_data.hobbies"
            name="hobbies"
            value="Listening to music"
          />Listening to music
          <br />
          <input type="checkbox" v-model="emp_data.hobbies" name="hobbies" value="Writing Stories" />Writing Stories
          <br />
        </div>
        <div class="field">
          <label>Country</label>
          <div class="fieldvalue">
            <select id="country" :change="showstates()" v-model="emp_data.country" name="country">
              <option v-for="c in countries" v-bind:key="c.id">{{c.country}}</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label>State</label>
          <div class="fieldvalue">
            <select id="state" v-model="emp_data.state" name="state">
              <option v-for="s in states" v-bind:key="s">{{s}}</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label>Address</label>
          <div class="fieldvalue">
            <textarea name="address" v-model="emp_data.address"></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { Countries } from "./constants/constants.js";
export default {
  name: "register",
  //   props: {
  //     fname: { type: String, default: "" },
  //     lname: String,
  //     dob: Date,
  //     gender: String,
  //     hobbies: Array,
  //     email: String,
  //     password: String,
  //     country: String,
  //     state: String,
  //     address: String,
  //     warning: String,
  //     countries: Array,
  //     states: Array
  //   },
  props: {
    emp_data: Object
  },
  data() {
    return {
      countries: Countries,

      states: [],
      warning: "",
      counter:0
    };
  },
  methods: {
    validateEmail() {
      var mail = this.emp_data.email;
      if (!mail.endsWith("@gmail.com")) 
      return "Invalid Email";
      return "";
    },
    reset() {
      this.emp_data.fname = "",
        this.emp_data.lname = "",
        this.emp_data.dob = "",
        this.emp_data.gender = "",
        this.emp_data.hobbies = [],
        this.emp_data.email = "",
        this.emp_data.password = "",
        this.emp_data.country = "",
        this.emp_data.state = "",
        this.emp_data.address = "",
        this.emp_data.warning = "";
    },
    showstates() {

         var con=this.countries.find(element =>element.country==this.emp_data.country);
         if(con)
         this.states=con.states
    }
  }
};
</script>