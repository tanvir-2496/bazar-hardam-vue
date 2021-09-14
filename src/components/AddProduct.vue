<template>
  <div class="jumbotron">
    <h1>{{action}} Product</h1>
  </div>
  <form v-on:submit.prevent="submitForm">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="category" class="form-label">Category</label>
          <select class="form-select category" aria-label="Category" required v-model="selectedCategory" @change="onSelectedCategory">
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
          <label for="name" class="form-label">Product's Name</label>
          <input type="text" class="form-control" id="name" name="name" ref="name"  required  v-model="productData.Name" placeholder="Product's name">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="image" class="form-label">Product's Image</label>
          <input class="form-control" type="file" id="image" required @change="onImageUpload" >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" id="description" ref="description" rows="8" v-model="productData.Description"></textarea>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="unit" class="form-label">Product Unit</label>
          <select class="form-select unit" aria-label="Unit" required v-model="selectedUnit" @change="onSelectedUnit">
            <option value="" disabled>- SELECT -</option>
            <option v-for="(item , index) in categoryList" v-bind:key="index" v-bind:value="item.Id" :selected="option == ''">{{item.Name}}</option>

          </select>
        </div>
        <div class="form-group">
          <label for="brand" class="form-label">Brand</label>
          <select class="form-select brand" aria-label="Brand" required v-model="selectedBrand" @change="onSelectedBrand">
            <option value="" disabled>- SELECT -</option>
            <option v-for="(item , index) in categoryList" v-bind:key="index" v-bind:value="item.Id" :selected="option == ''">{{item.Name}}</option>

          </select>
        </div>
        <div class="form-group">
          <label for="price" class="form-label">Sales Unit Price</label>
          <input type="number" step="0.01" class="form-control" id="price" name="price" v-model="productData.SaleUnitPrice" ref="price" required placeholder="Sales unit price">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        
      </div>
      <div class="col-md-6">
        
      </div>
    </div>

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
        <form v-on:submit.prevent="addProductCategory">
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
import $ from 'jquery'
import swal from 'sweetalert2'
import service from "../services/AppService";
//const axios = require('axios');

export default {
  name: "add-brand",
  data() {
    return {
      imageName: null,
      categoryList: [],
      selectedCategory: '',
      selectedBrand: '',
      selectedUnit: '',
      productData : {
        CategoryId: "",
        BrandId: "",
        Code :"",
        Name: "",
        Description: "",
        ProductUnitId:"",
        SaleUnitPrice: "",
        ImageName: this.imageName,
        ImagePath: "/Uploads",
        Status: "Approved",
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      }
    };
  },
  methods: {
    getAllProductCategory() {
      service.getAllProductCategory()
        .then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          //console.log(obj2);
          this.categoryList = response;
          $.each(obj2, function(i, data) {
              $(".category").append("<option value='" + data.Id +"'>" + data.Name + "</option>");
          });
          swal.close();
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    },
    getAllProductUnits() {
      service.getAllProductUnits()
        .then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          console.log(obj2);
          this.categoryList = response;
          $.each(obj2, function(i, data) {
              $(".unit").append("<option value='" + data.Id +"'>" + data.Name + "</option>");
          });
          swal.close();
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    },
    getAllBrands() {
      service.getAllBrands()
        .then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          console.log(obj2);
          this.categoryList = response;
          $.each(obj2, function(i, data) {
              $(".brand").append("<option value='" + data.Brand.Id +"'>" + data.Brand.Name + "</option>");
          });
          swal.close();
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    },
    onSelectedCategory() {
        var data = this.selected;
        console.log(data);
    },
    /*onSelectedBrand() {
        var data = this.selectedBrand;
        console.log(data);
    },*/
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
    addProductCategory(e) {
      e.preventDefault();
      swal.showLoading();
      var data = {
        Name: this.$refs.category.value,
        IsEnabled: true,
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      };
      //console.log(data);
      service.addProductCategory(data).then(response => {
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
        CategoryId: this.selectedCategory,
        BrandId: this.selectedBrand,
        Code : "N/A",
        Name: this.$refs.name.value,
        Description: this.$refs.description.value,
        ProductUnitId: this.selectedUnit,
        SaleUnitPrice: this.$refs.price.value,
        ImageName: this.imageName,
        ImagePath: "/Uploads",
        Status: "Approved",
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: "2021-06-04 12:59:06.287",
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      };
      
      //console.log(data);
            if (this.action == "ADD") {
         service.addProduct(data).then(response => {
        console.log("Success: " + JSON.stringify(response));
        swal.close();
        swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }).catch(e => {
        console.log("Error: " + JSON.stringify(e));
        swal.close();
      });
      } else {
        data.Id = this.productData.Id;
        console.log("Error: " + data.Id);
        service.updateProductById(this.productData.Id, data).then(response => {
          console.log("Success: " + JSON.stringify(response));
          this.$router.push({ name: 'product'}); 
        }).catch(e => {
          console.log("Error: " + JSON.stringify(e));
        });
      } 

    }
  },
  mounted() {
    swal.showLoading();
    this.getAllProductCategory();
    this.getAllBrands();
    this.getAllProductUnits();
    this.action = this.$route.params.action;
    var item = this.$route.params.vendor || null;
    if (item !== null) {
      this.productData = JSON.parse(item);
      this.selectedBrand = this.productData.BrandId;
      this.selectedUnit = this.productData.ProductUnitId;
      this.selectedCategory = this.productData.CategoryId;

      this.ImageName = this.productData.ImageName;
      //this.personImageName = this.vendorData.PersonImageName;
    }
  }
};
</script>

<style>

</style>



