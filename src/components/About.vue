<template>
  <img src="@/assets/about.jpg" style="width:100%">
  <br><br>
  <div>
    <h1 class="h2">About Us</h1>
    <p>A grocery store (North America), grocer or grocery shop (UK), is a store primarily engaged in retailing a general range of food products, which may be fresh or packaged. In everyday U.S. usage, however, "grocery store" is a synonym for supermarket, and is not used to refer to other types of stores that sell groceries. In the UK, shops that sell food are distinguished as grocers or grocery shops, though in everyday use, people usually use either the term "supermarket" or, for a smaller type of store that sells groceries, a "corner shop" or "convenience shop". Larger types of stores that sell groceries, such as supermarkets and hypermarkets, usually stock significant amounts of non-food products, such as clothing and household items. Small grocery stores that mainly sell fruits and vegetables are known as greengrocers (Britain) or produce markets (U.S.), and small grocery stores that predominantly sell prepared food, such as candy and snacks, are known as convenience shops or delicatessens.</p>
  </div>
</template>


<script>
//import $ from 'jquery'
//import service from "../services/AppService";

export default {
  name: "about",
  data() {
    return {
      about: []
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

