<template>
  <div class="jumbotron">
    <h1>{{action}} Vendor</h1>
  </div>

  <form v-on:submit.prevent="submitForm">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="name" class="form-label">Shop's Name</label>
          <input type="text" class="form-control" id="name" name="name" ref="name" v-bind:value="vendorData.Name" required placeholder="Shop's name">
        </div>
       
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="shop_image" class="form-label">Shop's Image</label>
          <input class="form-control" type="file" id="shop_image" @change="onShopUpload" >
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="person" class="form-label">Contact Person</label>
          <input type="text" class="form-control" id="person" name="person" ref="person" required v-model="vendorData.ContactPerson" placeholder="Contact person's name">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="person_image" class="form-label">Contact Person's Image</label>
          <input class="form-control" type="file" id="person_image" @change="onPersonUpload" >
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="phone" class="form-label">Phone Number</label>
          <input type="text" class="form-control" id="phone" name="phone" ref="phone" required v-model="vendorData.PhoneNumber" placeholder="Phone number">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" ref="email" v-model="vendorData.Email" placeholder="Email">
        </div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="address" class="form-label">Address</label>
      <textarea class="form-control" id="address" ref="address" v-model="vendorData.Address" rows="3"></textarea>
    </div>


    <br>
    <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/></svg></button>
    <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addressModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg></button>
    <br><br>

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
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Maps</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal - Address -->
  <div class="modal fade" id="addressModal" tabindex="-1" aria-labelledby="addressModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addressModalLabel">Address</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle width-100p" type="button" id="district" data-bs-toggle="dropdown" aria-expanded="false">District</button>
                  <ul class="dropdown-menu" aria-labelledby="district">
                    <li><a class="dropdown-item" href="#">District</a></li>
                    <li><a class="dropdown-item" href="#">District</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle width-100p" type="button" id="division" data-bs-toggle="dropdown" aria-expanded="false">Division</button>
                  <ul class="dropdown-menu" aria-labelledby="division">
                    <li><a class="dropdown-item" href="#">Division</a></li>
                    <li><a class="dropdown-item" href="#">Division</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="address" class="form-label">Address</label>
              <textarea class="form-control" id="address" rows="3"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
//import $ from 'jquery'
import service from "../services/AppService";
//const axios = require('axios');

export default {
  name: "add-vendor",
  data() {
    return {
      action: "",
      shopImageName: null,
      personImageName: null,
      vendorData : {
        Id: "",
        Name: "", //this.$refs.email.value
        ContactPerson: "",
        PhoneNumber: "",
        Email: "",
        Division: "",
        District: "",
        PoliceStation: "",
        Address: "",
        Location: "23.751428079697597,90.39426393806933",
        ImageName: this.shopImageName,
        ImagePath: "/Uploads",
        PersonImageName: this.personImageName,
        PersonImagePath: "/Uploads",
        Status: "Approved",
        Token: null,
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      },
    };
  },
  methods: {
    onShopUpload (event) {
      event.preventDefault();
      var now = new Date(Date.now());
      this.shopImageName = "IMG_" + now.getFullYear() +""+ now.getMonth() +""+ now.getDate() +"_"+ now.getHours() +""+ now.getMinutes() +""+ now.getSeconds() +""+ now.getMilliseconds() + ".jpg";
      var file = event.target.files[0]
      var formData = new FormData()
      formData.append('file', file, this.shopImageName)
      formData.append('fileName', this.shopImageName)
      service.fileDeleteAndUpload(this.shopImageName, formData).then(response => {
        console.log("Success: " + JSON.stringify(response));
      }).catch(e => {
        console.log("Error: " + JSON.stringify(e));
      });
    },
    onPersonUpload (event) {
      event.preventDefault();
      var now = new Date(Date.now());
      this.personImageName = "IMG_" + now.getFullYear() +""+ now.getMonth() +""+ now.getDate() +"_"+ now.getHours() +""+ now.getMinutes() +""+ now.getSeconds() +""+ now.getMilliseconds() + ".jpg";
      var file = event.target.files[0]
      var formData = new FormData()
      formData.append('file', file, this.personImageName)
      formData.append('fileName', this.personImageName)
      service.fileDeleteAndUpload(this.personImageName, formData).then(response => {
        console.log("Success: " + JSON.stringify(response));
      }).catch(e => {
        console.log("Error: " + JSON.stringify(e));
      });
    },
    submitForm(e) {
      e.preventDefault();
      var data = {
        Name: this.$refs.name.value,
        ContactPerson: this.$refs.person.value,
        PhoneNumber: this.$refs.phone.value,
        Email: this.$refs.email.value,
        Division: "Dhaka",
        District: "Dhaka",
        PoliceStation: "Dhaka Cantonment",
        Address: this.$refs.address.value,
        Location: "23.751428079697597,90.39426393806933",
        ImageName: this.shopImageName,
        ImagePath: "/Uploads",
        PersonImageName: this.personImageName,
        PersonImagePath: "/Uploads",
        Status: "Approved",
        Token: null,
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      };
      //console.log(data);

      if (this.action == "ADD") {
        service.addVendor(data).then(response => {
          console.log("Success: " + JSON.stringify(response));
        }).catch(e => {
          console.log("Error: " + JSON.stringify(e));
        });
      } else {
        data.Id = this.vendorData.Id;
        console.log("Error: " + data.Id);
        service.updateVendorById(this.vendorData.Id, data).then(response => {
          console.log("Success: " + JSON.stringify(response));
          this.$router.push({ name: 'vendor'}); 
        }).catch(e => {
          console.log("Error: " + JSON.stringify(e));
        });
      }
      
    }
  },
  mounted() {
    //this.getCampaign();
    this.action = this.$route.params.action;
    var item = this.$route.params.vendor || null;
    if (item !== null) {
      this.vendorData = JSON.parse(item);
      this.shopImageName = this.vendorData.ImageName;
      this.personImageName = this.vendorData.PersonImageName;
    }
    
  }
};
</script>

<style>

</style>



