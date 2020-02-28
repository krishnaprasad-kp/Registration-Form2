<template>
  <div id="test">
    <div id="registration-block">
      <form id="registrationForm" onsubmit="AddEmployee()">
        <div class="formblock">
          <h2 align="center">Registration Form</h2>
          <div class="field">
            <label>First Name</label>
          </div>
          <div class="fieldvalue">
            <input type="textfield" v-model="fname" name="FirstName" required />
          </div>
          <div class="field">
            <label>Last Name</label>
          </div>
          <div class="fieldvalue">
            <input type="textfield" v-model="lname" name="LastName" required />
          </div>
          <div class="field">
            <label>Date Of Birth</label>
          </div>
          <div class="fieldvalue">
            <input type="date" name="Dob" v-model="dob" required />
          </div>
          <div class="field">
            <label>Email Id</label>
          </div>
          <div class="fieldvalue">
            <input type="textfield" name="Email" v-model="email" @change="validateEmail()" required />
            <span>{{warning}}</span>
          </div>
          <div class="field">
            <label>Password</label>
          </div>
          <div class="fieldvalue">
            <input type="password" name="Password" v-model="password" required />
          </div>

          <div class="field">
            <label>Gender</label>
          </div>
          <div class="fieldvalue">
            <input type="radio" name="gender" v-model="gender" value="male" id="male"/><label for="male">Male</label>
            <input type="radio" name="gender" v-model="gender" value="female" id="female" /><label for="female">Female</label>
          </div>
          <div class="field">
            <label>Hobbies</label>
          </div>
          <div class="fieldvalue">
            <input type="checkbox" v-model="hobbies" name="hobbies" value="Playing Cricket" id="Playing Cricket" /><label for="Playing Cricket">Playing Cricket</label>
            <br />
            <input type="checkbox" v-model="hobbies" name="hobbies" value="Watching Movies" id="Watching Movies" /><label for="Watching Movies">Watching Movies</label>
            <br />
            <input type="checkbox" v-model="hobbies" name="hobbies" value="Painting" id="Painting" /><label for="Painting">Painting</label>
            <br />
            <input type="checkbox" v-model="hobbies" name="hobbies" value="Listening to music" id="Listening to music"/><label for="Listening to music"> Listening to music</label>
            <br />
            <input type="checkbox" v-model="hobbies" name="hobbies" value="Writing Stories" id="Writing Stories"/><label for="Writing Stories"> Writing Stories </label>
            <br />
          </div>
          <div class="field">
            <label>Country</label>
            <div class="fieldvalue">
              <select id="country" v-model="country" @change="showstates()" name="country">               
                <option v-for="c in countries" v-bind:key="c.id">{{c.country}}</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label>State</label>
            <div class="fieldvalue">
              <select id="state" name="state" v-model="state">
                
               <option v-for="state in states" v-bind:key="state" value=state>{{state}}</option>-->
              </select>
            </div>
          </div>
          <div class="field">
            <label>Address</label>
            <div class="fieldvalue">
              <textarea name="address" v-model="address"></textarea>
            </div>
          </div>
          <div align="right">
          
          </div>
        </div>
      </form>
      <div align="right">
      <button @click="reset()">Cancel</button>
      </div>
    </div>
    <div id="preview-block">
      <form id="registrationForm" onsubmit="AddEmployee()">
        <div class="formblock">
          <h2 align="center">Preview</h2>
          <div class="field">
            <label>Name</label>
          </div>
          <div class="fieldvalue">
            <label>{{fullName()}}</label>
          </div>
          <div class="field">
            <label>Date Of Birth</label>
          </div>
          <div class="fieldvalue">
            <label>{{dob}}</label>
          </div>
          <div class="field">
            <label>Email Id</label>
          </div>
          <div class="fieldvalue">
            <label>{{email}}</label>
          </div>
          <div class="field">
            <label>Password</label>
          </div>
          <div class="fieldvalue">
            <label>********</label>
          </div>

          <div class="field">
            <label>Gender</label>
          </div>
          <div class="fieldvalue">
            <label>{{gender}}</label>
          </div>
          <div class="field">
            <label>Hobbies</label>
          </div>
          <div class="fieldvalue">
            <ul>
              <li v-for="hobby in hobbies" v-bind:key=hobby>{{hobby}}</li>
            </ul>
          </div>
          <div class="field">
            <label>Country</label>
            <div class="fieldvalue">
              <label>{{country}}</label>
            </div>
          </div>
          <div class="field">
            <label>State</label>
            <div class="fieldvalue">
              <label>{{state}}</label>
            </div>
          </div>
          <div class="field">
            <label>Address</label>
          </div>
          <div class="fieldvalue">
            <label>{{address}}</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {Countries} from './constants/constants.js';

// import googleClientID from './constants/constants.js';

export default {
  name: "Registration",
  data() {
    return {
      fname: "",
      lname: "",
      dob: "",
      gender: "",
      hobbies: [],
      email: "",
      password: "",
      country: "",
      state: "",
      address: "",
      warning: "",
      countries:Countries,
      states:[]
    };
  },
  methods: {
    fullName() {
      return this.fname + " " + this.lname;
    },
    validateEmail() {
      var mail = this.email;
      if (!mail.endsWith("@gmail.com")) this.warning = "Invalid Email";
      else this.warning = "";
    },
    reset(){
         this.fname= "",
      this.lname= "",
      this.dob= "",
      this.gender= "",
      this.hobbies= [],
      this.email= "",
      this.password= "",
      this.country= "",
      this.state= "",
      this.address= "",
      this.warning= ""
    },
          showstates(){
         this.states=this.countries.find(element =>element.country==this.country).states;        
}
    
  }
};
</script>
<style scoped>
#registration-block {
  float: left;
  width: 40%;
  padding-left: 10%;
}

#preview-block {
  padding-left: 10%;
  float: right;
  width: 40%;
}
.field {
  font-weight: bold;
}
</style>