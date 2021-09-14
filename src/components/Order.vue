<template>

  <div class="jumbotron">
    <h1>Order</h1>
  </div>

  <div class="table-responsive">
  <table id="order_table" class="table table-hover table-bordered align-middle col-12">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Invoice No</th>
        <th scope="col">Total Amount</th>
        <th scope="col">Date</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  </div>
</template>

<script>
import $ from 'jquery'
import swal from 'sweetalert2'
import service from "../services/AppService";


export default {
  name: "order",
  data() {
    return {
      order: []
    };
  },
  methods: {
    getAllOrders() {
      service.getAllOrders().then(response => {
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          console.log(obj);
          //console.log(obj2);
          $.each(obj2, function(i, data) {
            console.log(i + data.name);
            var date = new Date(data.CreateDate);
              var d = date.getDate()+'-'+date.toLocaleString("en-us", {month:"short"})+'-'+ date.getFullYear() + ' ' + date.getHours() +':'+ date.getMinutes();
              $('#order_table tbody').append('<tr><td>' + i +'</td><td>' + data.InvoiceNo +'</td><td>' + '৳ ' + data.TotalAmount +'</td><td>' + d  +'</td><td><span class="badge status">'+ data.Status  +'</span><span class="badge ' + (Boolean(data.IsPaid) === true ? "bg-success" : "bg-danger")  + '">'+ (Boolean(data.IsPaid) === true ? "Paid" : "Unpaid") +'</span></td></tr>');
              if(data.Status == 'Shipped') {
                $(".status").addClass("bg-primary");
              } 
              else if (data.Status == 'Pending') {
                $(".status").addClass("bg-warning text-dark");
              }
              else if (data.Status == 'Delivered') {
                $(".status").addClass("bg-success");
              }
              else if (data.Status == 'Cancelled') {
                $(".status").addClass("bg-danger");
              }
          });
          swal.close();
        })
        .catch(e => {
          console.log(e);
          swal.close();
        });
    }
  },
  mounted() {
    this.getAllOrders();
    swal.showLoading();
  }
};
</script>

<style>

</style>
