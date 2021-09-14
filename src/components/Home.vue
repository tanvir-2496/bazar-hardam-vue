<template>
  <!-- ========================================================|  Slider -->
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    
    <div class="carousel-inner">
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import $ from 'jquery'
import swal from 'sweetalert2'
import cookies from 'vue-cookies';
import service from "../services/AppService";

export default {
  name: "home",
  data() {
    return {
      home: []
    };
  },
  methods: {
    getCampaign() {
      service.getCampaign()
        .then(response => {
          //console.log(response.data);
          var obj = JSON.stringify(response.data);
          var obj2 = JSON.parse(obj);
          //console.log(obj);
          //console.log(obj2);
          console.log(obj2['results'].Slider);

          $.each(obj2['results'].Slider, function(i, data) {
              $(".carousel-inner").append("<div class='carousel-item "+ (i == 0 ? 'active' : '') +"'><img src='" + process.env.VUE_APP_BASE_IMG_URL + data.ImageName + "' class='d-block w-100' alt='...'></div>");
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
    this.getCampaign();
    swal.showLoading();
    console.log(cookies.get('USER'));
  }
};
</script>

<style>

</style>
