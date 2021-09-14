<template>

    <!-- https://vuejs.org/v2/cookbook/practical-use-of-scoped-slots.html -->

    <div>
      <div class="google-map" ref="googleMap"></div>
      <template v-if="Boolean(this.google) && Boolean(this.map)">
        <slot
          :google="google"
          :map="map"
        />
      </template>
    </div>

</template>


<script>
//import $ from 'jquery'
//import service from "../services/AppService";
import GoogleMapsApiLoader from 'google-maps-api-loader';

export default {
  name: "maps",
  props: {
    mapConfig: Object,
    apiKey: String,
  },
  data() {
    return {
      maps: [],
      google: null,
      map: null,
    };
  },
  methods: {
    getCampaign() {
    },
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, this.mapConfig
      )
    }
  },
  mounted() {
    this.getCampaign();
    var googleMapApi = GoogleMapsApiLoader({
      apiKey: "AIzaSyAxYJtfjW5h1XU4BrkDHRZuCEQGHk7PdtI" //this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  }
};


</script>

<style>

</style>

