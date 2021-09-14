<template>
  <div class="jumbotron">
    <h1>Add Inventory</h1>
  </div>
  <form v-on:submit.prevent="submitForm">
    
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="date" class="form-label">Date</label>
          <input type="date" class="form-control datetime-local" data-date="" data-date-format="DD MMMM YYYY" id="date" name="date" ref="date" required placeholder="Date">
        </div>
        <div class="form-group">
          <label for="challan" class="form-label">Challan Ref</label>
          <input type="text" class="form-control" id="challan" name="challan" ref="challan" required placeholder="Challan Ref">
        </div>
        <div class="form-group">
          <label for="shop" class="form-label">Vendor</label>
          <select class="form-select shop" aria-label="Shop" required v-model="selectedShop" @change="onSelectedShop">
            <option value="" disabled>- SELECT -</option>
          </select>
        </div>
        <div class="form-group">
          <label for="location" class="form-label">Store Location</label>
          <select class="form-select location" aria-label="Location" required v-model="selectedLocation" @change="selectedLocation">
            <option value="" disabled>- SELECT -</option>
          </select>
        </div>
        <div class="form-group">
          <label for="remarks" class="form-label">Remarks</label>
          <textarea class="form-control" id="remarks" name="remarks" ref="remarks" rows="2" required></textarea>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="product" class="form-label">Product</label>
          <select class="form-select product" aria-label="Product" required v-model="selectedProduct" @change="onSelectedProduct">
            <option value="" disabled>- SELECT -</option>
          </select>
        </div>
        <div class="form-group">
          <label for="quantity" class="form-label">Quantity</label>
          <input type="number" class="form-control" min="1" id="quantity" name="quantity" ref="quantity" required placeholder="Quantity">
        </div>
        <div class="form-group">
          <label for="cost_price" class="form-label">Cost Unit Price</label>
          <input type="number" step="0.01" class="form-control" id="cost_price" name="cost_price" ref="cost_price" required placeholder="Cost unit price">
        </div>

        <br>
         <button type="submit" class="btn btn-primary float-end">Add</button>
      </div>
    </div>
  </form>

  <br>

  <!-- Table -->
  <div class="inventory_table hidden">
    <div class="table-responsive">
      <table id="inventory_table" class="table table-hover table-bordered align-middle col-12">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Cost Unit Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <form v-on:submit.prevent="addAllInvenotry">
      <div class="row">
        <div class="col-md-6">
        </div>
        <div class="col-md-6">
          <button type="submit" class="btn btn-success float-end">Submit</button>
        </div>
      </div>
    </form>
  </div>
  

  

</template>


<script>
import $ from 'jquery';
import swal from 'sweetalert2';
import service from "../services/AppService";

export default {
  name: "add-inventory",
  data() {
    return {
      selectedShop: '',
      selectedProduct: '',
      selectedLocation: '',
      objArray: [],
      index: 1
    };
  },
  methods: {
    getVendors() {
      service.getVendors()
        .then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          console.log(obj2);
          this.categoryList = response;
          $.each(obj2, function(i, data) {
              $(".shop").append("<option value='" + data.Id +"'>" + data.Name + "</option>");
          });
          swal.close();
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    },
    getAllProductsWithUnit() {
      service.getAllProductsWithUnit()
        .then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          console.log(obj2);
          this.categoryList = response;
          $.each(obj2, function(i, data) {
              $(".product").append("<option value='" + data.Id +"'>" + data.Name + "</option>");
          });
          swal.close();
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    },
    getAllInvStores() {
      service.getAllInvStores()
        .then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          console.log(obj2);
          this.categoryList = response;
          $.each(obj2, function(i, data) {
              $(".location").append("<option value='" + data.Id +"'>" + data.Name + "</option>");
          });
          swal.close();
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    },
    onSelectedProduct() {
        var data = this.selectedProduct;
        console.log(data);
    },
    submitForm(e) {
      e.preventDefault();
      $(".inventory_table").removeClass("hidden");

      var now = new Date(Date.now());
      var data = {
        ChallanDate: this.$refs.date.value ,
        ChallanRef: this.$refs.challan.value,
        InvStoreId: this.selectedLocation,
        VendorId: this.selectedShop,
        Remarks: this.$refs.remarks.value,
        ProductId: this.selectedProduct,
        Quantity: this.$refs.quantity.value,
        CostUnitPrice: this.$refs.cost_price.value,
        TotalAmount: (this.$refs.quantity.value * this.$refs.cost_price.value),
        CreateUser: "17ee71bc-1f4f-4ef0-975a-337e7181d249",
        CreateDate: now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate() +" "+ now.getHours() +":"+ now.getMinutes() +":"+ now.getSeconds() +"."+ now.getMilliseconds(),
        EditUser: null,
        EditDate: null,
        OCode: "8989"
      };
      console.log(data);
      this.objArray.push(data);
      $('#inventory_table tbody').append('<tr><td>' + (this.index++) +'</td><td align="center">' + $(".product option:selected").text() +'</td><td>' + data.Quantity +'</td><td>' + data.CostUnitPrice +'</td><td align="center"><button type="button" class="btn btn-outline-secondary btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button><button type="button" class="btn btn-outline-secondary btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button></td></tr>');
      this.selectedProduct = '';
      $('#quantity').val('');
      $('#cost_price').val('');
    },
    addAllInvenotry(e) {
      e.preventDefault();
      if (this.objArray === undefined || this.objArray.length == 0) {
        swal.fire({
          icon: 'error',
          title: 'Warning!',
          text: 'Empty array does not save unsuccessfully!'
        })
      } else {
        swal.showLoading();
        service.addAllInventory(this.objArray).then(response => {
          console.log("Success: " + JSON.stringify(response));
          swal.close();
          if (response.data > 0) {
            this.objArray= [];
            $('#inventory_table tbody').empty();
            this.selectedShop = '';
            this.selectedLocation = '';
            $('#date').val('');
             $('#challan').val('');
            $('#remarks').val('');
            swal.fire({
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500     
            });
          } else {
            swal.fire({
              icon: 'error',
              title: 'Warning!',
              text: 'Did not save unsuccessfully!'
            })
          }
        }).catch(e => {
          console.log("Error: " + JSON.stringify(e));
          swal.close();
        });
      }
    }
  },
  mounted() {
    swal.showLoading();
    this.getVendors();
    this.getAllInvStores();
    this.getAllProductsWithUnit();
  }
};
</script>

<style>

</style>



