<template>

<div class="flex-content-center margin-100">
    <form v-on:submit.prevent="submitForm">
        <div class="flex-content-center">
          <a href="#"><img src="@/assets/logo.png" /></a>
        </div>
        <div class="form-group input-group">
          <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></span>
          <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id="username" name="username" ref="username" required placeholder="Enter username">
        </div>
        <br>
        <div class="form-group input-group">
          <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg></span>
          <input type="password" class="form-control" aria-label="Password" aria-describedby="basic-addon1" id="password" name="password" ref="password" required placeholder="Enter password">
        </div>
        <br>
        <div class="flex-content-center">
          <button type="submit" class="btn btn-dark btn-block">Login Now</button>
        </div>
        <!-- <a href="#">Reset password</a> or <a href="user/show">create account</a>  -->
    </form>
</div>

</template>


<script>
//import $ from 'jquery'
import swal from 'sweetalert2';
import cookies from 'vue-cookies';
import service from "../services/AppService";

export default {
  name: "login",
  data() {
    return {
      logging: []
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      swal.showLoading();
      var user = this.$refs.username.value;
      var pass = this.$refs.password.value;
      service.getUserByUserAndPass(user, pass)
        .then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          //console.log(obj2);
          cookies.set('USER', obj2);
          console.log(cookies.get('USER'));
          swal.close();
          window.location.href = '/home';
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    }
  },
  mounted() {
    //this.getCampaign();
  }
};


</script>

<style>

</style>

