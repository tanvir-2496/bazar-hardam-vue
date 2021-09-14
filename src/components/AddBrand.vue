<template>
  <div class="jumbotron">
    <h1>{{action}} Brand</h1>
  </div>
  
  <form v-on:submit.prevent="submitForm">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="category" class="form-label">Category</label>
          <select class="form-select category" aria-label="Category" required v-model="selectedItem" @change="onSelectedItem">
            <option value="" disabled>- SELECT -</option>
            <option v-for="(item , index) in categoryList" v-bind:key="index" v-bind:value="item.Id" :selected="option == ''">{{item.Name}}</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="category" class="form-label">Add Category</label>
          <button type="submit" class="form-control btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Category</button>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="name" class="form-label">Brand's Name</label>
          <input type="text" class="form-control" id="name" name="name" ref="name" required  v-model="brandData.Name" placeholder="Brand's name">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="image" class="form-label">Brand's Image</label>
          <input class="form-control" type="file" id="image" @change="onImageUpload" >
        </div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="description" class="form-label">Description</label>
      <textarea class="form-control" id="description" ref="description" rows="3"  v-model="brandData.Description"></textarea>
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
        <form v-on:submit.prevent="addCategory">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control" id="category" name="category" ref="category" required placeholder="Name">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>


<script>
//import $ from 'jquery'
import swal from 'sweetalert2'
import service from "../services/AppService";
//const axios = require('axios');

export default {
  name: "add-brand",
  data() {
    return {
      imageName: null,
      categoryList: [],
      selectedItem: "",
      brandData : {
        CategoryId: "",
        Name: "",
        Description: "",
        ImageName: this.ImageName,
        ImagePath: "/Uploads",
        Status: "Available",
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      }
    };
  },
  methods: {
    getAllBrandCategories() {
      service.getAllBrandCategories()
        .then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          console.log(obj2);
          this.categoryList = obj2;
          /*$.each(obj2, function(i, data) {
              $(".category").append("<option value='" + data.Id +"'>" + data.Name + "</option>");
          });*/
          swal.close();
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    },
    onSelectedItem() {
        var data = this.selectedItem;
        console.log(data);
    },
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
    addCategory(e) {
      e.preventDefault();
      swal.showLoading();
      var data = {
        Name: this.$refs.category.value,
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      };
      //console.log(data);
      service.addBrandCategory(data).then(response => {
        //console.log("Success: " + JSON.stringify(response));
        this.categoryList.push(response);
        console.log("Success: " + JSON.stringify(this.categoryModel));
        swal.close();
      }).catch(e => {
        console.log("Error: " + JSON.stringify(e));
        swal.close();
      });
    },
    submitForm(e) {
      e.preventDefault();
      swal.showLoading();
      var data = {
        CategoryId: this.selectedItem,
        Name: this.$refs.name.value,
        Description: this.$refs.description.value,
        ImageName: this.imageName,
        ImagePath: "/Uploads",
        Status: "Available",
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      };
      //console.log(data);

      if (this.action == "ADD") {
        service.addBrand(data).then(response => {
          console.log("Success: " + JSON.stringify(response));
          swal.close();
        }).catch(e => {
          console.log("Error: " + JSON.stringify(e));
          swal.close();
        });
      } else {
        data.Id = this.brandData.Id;
        console.log("Error: " + data.Id);
        service.updateBrandById(this.vendorData.Id, data).then(response => {
          console.log("Success: " + JSON.stringify(response));
          this.$router.push({ name: 'brand'}); 
        }).catch(e => {
          console.log("Error: " + JSON.stringify(e));
        });
      }

    }
  },
  mounted() {
    this.getAllBrandCategories();
    swal.showLoading();

    //
    this.action = this.$route.params.action;
    var item = this.$route.params.brand || null;
    if (item !== null) {
      this.brandData = JSON.parse(item);
      console.log("Brand2: " + JSON.parse(item).Name);
      this.selectedItem = this.brandData.CategoryId;
      this.ImageName = this.brandData.ImageName;
     // this.personImageName = this.vendorData.PersonImageName;
    }
  }
};
</script>

<style>

</style>



