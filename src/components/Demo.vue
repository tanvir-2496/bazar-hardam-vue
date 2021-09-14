<template>

<img src="@/assets/logo.png"/>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="division" data-bs-toggle="dropdown" aria-expanded="false">
    Division
  </button>
  <ul class="dropdown-menu" aria-labelledby="division">
    <li><a class="dropdown-item" href="#">Division</a></li>
    <li><a class="dropdown-item" href="#">Division</a></li>
  </ul>
</div>

</template>


<script>
//import $ from 'jquery'
//import service from "../services/AppService";

export default {
  name: "demo",
  data() {
    return {
      demo: []
    };
  },
  methods: {
    getCampaign() {
    }
  },
  mounted() {
    this.getCampaign();
  }
};


</script>

<style>

</style>

