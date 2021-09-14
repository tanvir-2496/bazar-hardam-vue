<template>
  <div class="flex-content-center margin-100">
    <form v-on:submit.prevent="submitForm">
      <div>
        <div class="row">
          <div class="form-group">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" name="username" ref="username" required placeholder="Username">
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" ref="password" required placeholder="Password">
          </div>
        </div>
        <br>
        <div class="flex-content-center">
          <button type="submit" class="btn btn-success">Registration</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
//import $ from 'jquery'
import swal from 'sweetalert2';
import cookies from 'vue-cookies';
import service from "../services/AppService";

export default {
  name: "registration",
  data() {
    return {
      demo: []
    };
  },
  methods: {
    getCampaign() {
    },
    submitForm(e) {
      e.preventDefault();
      swal.showLoading();
      var data = {
        Username: this.$refs.username.value,
        Password: this.$refs.password.value,
        Role: 'Admin'
      };
      service.addAuthenticate(data)
        .then(response => {
          console.log(response.data);
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          //console.log(obj2);
          var data = {
            Auth: obj2,
            User: "",
          }
          cookies.set('USER', data);
          swal.close();
          window.location.href = '/profile';
        })
        .catch(e => {
          console.log(e);
          swal.close();
          swal.fire({
            icon: 'error',
            title: 'Warning!',
            text: 'This user does not add unsuccessfully!'
          })
        });
    }
  },
  mounted() {
    this.getCampaign();
  }
};


</script>

<style>
.reg-form {
	display: block;
	margin: 0 auto;
  margin-top: 100px;
	margin-bottom: 100px;
}
</style>

