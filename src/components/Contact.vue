<template>
  
  <div class="row margin-top-25 margin-bottom-25">
    <h2 class="d-flex justify-content-center">CONTACT</h2>
    <p class="d-flex justify-content-center"><i>For all enquiries, please email us sung the form below</i></p>
    <div class="row">
      <div class="col-md-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
        &nbsp; Hasney Tower, Level 10, 3/A, Dhaka 1215<br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
        &nbsp; Phone: 02-9145938<br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/></svg>
        &nbsp; Email: info@subrasystems.com<br>
      </div>
      <div class="col-md-6">
        <form action="#" target="_blank">
          <div class="row">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" name="name" ref="name" required placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" name="email" ref="email" required placeholder="Email" />
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" name="message" ref="message" rows="3"></textarea>
            </div>
          </div>
          <br>
          <button class="btn btn-dark float-end" type="submit">SEND</button>
        </form>
      </div>
    </div>
  </div>

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.892101361324!2d90.39209711434843!3d23.75122679466301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8981caef053%3A0xaff87dc70f62fb22!2sSubra%20Systems%20Ltd.!5e0!3m2!1sen!2sbd!4v1604488006474!5m2!1sen!2sbd" style="border: 0px none; pointer-events: none;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%" height="500" frameborder="0"></iframe>

</template>


<script>
//import $ from 'jquery'
//import service from "../services/AppService";

export default {
  name: "contact",
  data() {
    return {
      contact: []
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

