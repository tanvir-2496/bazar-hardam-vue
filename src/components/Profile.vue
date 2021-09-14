<template>
  <div class="jumbotron">
    <h1>Profile</h1>
  </div>
  
  <form v-on:submit.prevent="submitForm">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="first" class="form-label">First Name</label>
          <input type="text" class="form-control" id="first" name="first" ref="first" required placeholder="First name">
        </div>
        <div class="form-group">
          <label for="last" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="last" name="last" ref="last" required placeholder="Last name">
        </div>
        <div class="form-group">
          <label for="phone" class="form-label">Phone Number</label>
          <input type="text" class="form-control" id="phone" name="phone" ref="phone" required placeholder="Phone number">
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" name="email" ref="email" required placeholder="Email">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="image" class="form-label">Profile's Image</label>
          <input class="form-control" type="file" id="image" @change="onImageUpload" >
        </div>
        <div class="form-group">
          <label for="birth" class="form-label">Birth Date</label>
          <input type="date" class="form-control" id="birth" name="birth" ref="birth" required placeholder="Birth Date">
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6">
              <div class="form-group">
                <label for="gender" class="form-label">Gender</label>
                <div style="margin:0px 0px 5px 5px; padding: 5px; border: 1px solid #dee2e6; border-radius:.25rem">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" v-model="genderOptions" v-bind:value="'Male'" name="genderOptions" id="male" checked>
                    <label class="form-check-label" for="male">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" v-model="genderOptions" v-bind:value="'Female'" name="genderOptions" id="female" >
                    <label class="form-check-label" for="female">Female</label>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-6 col-sm-6">
              <div class="form-group">
                <label for="address" class="form-label">Address</label>
                <input type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-dark float-end width-100p" value="Location" />
              </div>
          </div>
        </div>
        
        
      </div>
    </div>
    
    <br>

    <div class="row">
      <div class="col-md-6">
      </div>
      <div class="col-md-6">
        <button type="submit" class="btn btn-success float-end">Submit</button>
      </div>
    </div>

  </form>

  

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <form v-on:submit.prevent="addAddress">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Address</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" name="name" ref="name" required placeholder="C/O Name">
            </div>
            <div class="form-group">
              <label for="mobile" class="form-label">Phone Number</label>
              <input type="text" class="form-control" id="mobile" name="mobile" ref="mobile" required placeholder="Phone Number">
            </div>
            <div class="form-group">
              <label for="district" class="form-label">District</label>
              <select class="form-select district" aria-label="District" required v-model="selectedDistrict" @change="onSelectedDistrict">
                <option value="" disabled>- SELECT -</option>
              </select>
            </div>
            <div class="form-group">
              <label for="area" class="form-label">Area</label>
              <select class="form-select area" aria-label="Area" required v-model="selectedArea" @change="onSelectedArea">
                <option value="" disabled>- SELECT -</option>
              </select>
            </div>
            <div class="form-group">
              <label for="address" class="form-label">Address</label>
              <textarea class="form-control" id="address" name="address" ref="address" rows="3"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" >Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>


<script>
import $ from 'jquery';
import swal from 'sweetalert2';
import cookies from 'vue-cookies';
import areaJson from "../assets/area";
import service from "../services/AppService";
//const axios = require('axios');

export default {
  name: "profile",
  data() {
    return {
      imageName: null,
      genderOptions: 'Male',
      selectDivision: '',
      selectedDistrict: '',
      selectedArea: '',
      addressData: null
    };
  },
  methods: {
    onImageUpload (event) {
      event.preventDefault();
      swal.showLoading();
      var now = new Date(Date.now());
      this.imageName = "IMG_" + now.getFullYear() +""+ now.getMonth() +""+ now.getDate() +"_"+ now.getHours() +""+ now.getMinutes() +""+ now.getSeconds() +""+ now.getMilliseconds() + ".jpg";
      var file = event.target.files[0]
      var formData = new FormData()
      formData.append('file', file, this.imageName)
      formData.append('fileName', this.imageName)
      service.fileDeleteAndUpload(this.imageName, formData).then(response => {
        console.log("Success: " + JSON.stringify(response));
        swal.close();
      }).catch(e => {
        console.log("Error: " + JSON.stringify(e));
        swal.close();
      });
    },
    onSelectedDistrict() {
        var div = this.selectedDistrict;
        $.each(areaJson.divisions, function(i, data) {
          if(data.id == div) {
            this.selectDivision = data.name;
            console.log(data.name);
            
            $.each(areaJson.upazilas, function(j, upa) {
              if(upa.district_id == data.id) {
                $(".area").append("<option value='" + upa.id +"'>" + upa.name + "</option>");
              }
            });
          }
        });
    },
    addAddress(e) {
      e.preventDefault();
      this.addressData = {
        CareOf: this.$refs.name.value,
        Phone: this.$refs.mobile.value,
        Division: this.selectDivision,
        District: this.selectedDistrict,
        Area: this.selectedArea,
        Location: "23.793956974588635,90.38943596184254",
        Address: this.$refs.address.value,
        UserId: cookies.get('USER').Auth.Id,
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      };
      console.log("Address: " + this.addressData);
    },
    submitForm(e) {
      e.preventDefault();
      swal.showLoading();
      var now = new Date(Date.now());
      var data = {
        Id: cookies.get('USER').Auth.Id,
        FirstName: this.$refs.first.value,
        LastName: this.$refs.last.value,
        PhoneNumber: this.$refs.phone.value,
        Gender: this.genderOptions,
        BirthDate: this.$refs.birth.value +" "+ now.getHours() +":"+ now.getMinutes() +":"+ now.getSeconds() +"."+ now.getMilliseconds(),
        Email: this.$refs.email.value,
        Division: this.addressData.Division,
        District: this.addressData.District,
        PoliceStation: this.addressData.Area,
        Address: this.addressData.Address,
        Location: this.addressData.Location,
        ImageName: this.imageName,
        ImagePath: "/Uploads",
        Token: null,
        RefId: now.getFullYear() +""+ ("0"+(now.getMonth())).slice(-2) +""+ ("0"+(now.getDate())).slice(-2) +""+ now.getHours() +""+ now.getMinutes() +""+ now.getSeconds() +""+ now.getMilliseconds(), //String.valueOf(new Timestamp(System.currentTimeMillis())).replaceAll("[\\s-:.,]+", "")
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      };
      console.log(data);
      service.addUser(data).then(response => {
        console.log("Success: " + JSON.stringify(response));
        swal.close();
        //window.location.href = '/home';
      }).catch(e => {
        console.log("Error: " + JSON.stringify(e));
        swal.close();
      });
    }
  },
  mounted() {
    //swal.showLoading();
    $.each(areaJson.districts, function(i, data) {
        $(".district").append("<option value='" + data.division_id +"'>" + data.name + "</option>");
    });
  }
};
</script>

<style>

</style>



