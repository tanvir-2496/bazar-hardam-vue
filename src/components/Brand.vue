<template>

  <div class="jumbotron">
    <h1>Brand</h1>
  </div>

  <!-- Button trigger modal -->
  <button @click='addRow()' type="button" class="btn btn-outline-secondary btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>


  <br><br>

  <!-- Table -->
  <div class="table-responsive">
    <table id="brand_table" class="table table-hover table-bordered table-responsive-lg">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{index}}</td>
            <td>{{item.Brand.Name }}</td>
            <td>{{item.BrandCategory.Name}}</td>
            <td>{{item.Brand.Description}}</td>
            <td align="center">
              <button @click='editRow(index,item.Brand)' type="button" class="btn btn-outline-secondary btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button>
              <button @click='deleteRow(index, item)' type="button" class="btn btn-outline-secondary btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
//import $ from 'jquery'
import swal from 'sweetalert2'
import service from "../services/AppService";


export default {
  name: "brand",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getAllBrands() {
      service.getAllBrands().
      then(response => {
        this.items = response.data
          swal.close();
        }).catch(e => {
          console.log(e);
          swal.close();
        });
    },
        addRow: function () {
      this.$router.push({ name: 'add-brand', params: { action: "ADD"}, brand: null }); 
      //console.log(JSON.stringify(model));
      //console.log(idx);
    },
    editRow: function (idx, model) {
      this.$router.push({ name: 'add-brand', params: { action: "EDIT", brand: JSON.stringify(model)} }); 
      //console.log(JSON.stringify(model));
      console.log(idx);
    },
        deleteRow: function (idx) {
      this.items.splice(idx, 1);      
    }
  },
  mounted() {
    this.getAllBrands();
    swal.showLoading();
  }
};
</script>

<style>

</style>
