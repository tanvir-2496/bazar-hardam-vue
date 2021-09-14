import { createApp } from 'vue'
import App from './App.vue'
//Boostrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "jszip";
import "pdfmake";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "jquery/dist/jquery.min.js";

//jQuery
window.$ = window.jQuery = require('jquery');
//Sweetalert
window.swal = require('sweetalert2')
//Router
import router from './router'


createApp(App).use(router).mount('#app')
