<template>

  <div>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <input type="file" @change="onFileUpload">
            </div>
            <div class="form-group">
                <input type="text" v-model="name" placeholder="Name" class="form-control">
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block btn-lg">Upload File</button>
            </div>
        </form>
    </div>    
  </div>

</template>


<script>
//import appJs from "../assets/app.js";
import axios from "axios";

export default {
  name: "file",
  data() {
      return {
         FILE: null,
         name: ''
      };
    },
    methods: {
        onFileUpload (event) {
          this.FILE = event.target.files[0]
        },
        onSubmit() {

          var now = new Date(Date.now());
          var imgName = "IMG_" + now.getFullYear() +""+ now.getMonth() +""+ now.getDate() +"_"+ now.getHours() +""+ now.getMinutes() +""+ now.getSeconds() +""+ now.getMilliseconds() + ".jpg";

          var formData = new FormData()
          formData.append('file', this.FILE, imgName) //this.FILE.name
          formData.append('fileName', imgName) //this.name
          axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
          axios.post(process.env.VUE_APP_BASE_URL + 'Api/File/DeleteAndUpload?fileName=IMG_2021430_105935568.jpg', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*"
            }
          }).then((res) => {
            console.log("Success: " + JSON.stringify(res));
          }).catch(function(e){
            console.log("Failure: " + JSON.stringify(e));
          });
        },
        /*fileUpload() {
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post('Api/File/DeleteAndUpload?fileName="01"',
              formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }).then(function( ){
                console.log('SUCCESS!!');
              }).catch(function(){
                console.log('FAILURE!!');
              });
          },
          handleFileUpload(){
            this.file = this.$refs.file.files[0];
          }
        }*/
    }
}
</script>

<style>
.container {
  max-width: 600px;
}
</style>

