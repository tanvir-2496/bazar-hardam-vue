import axios from "axios";

export default axios.create({
  //http://36.255.68.34:8078/ | http://192.168.0.9:8081/ |http://localhost:8080/api
  //baseURL: "http://localhost:8083/",
  headers: {
    "Content-type": "application/json", //application/json, charset=UTF-8, multipart/form-data
    "Access-Control-Allow-Origin": "*",
    //"Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE",
    //"Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"

    //'Authorization': "Bearer " + token,
    //'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Headers': '*',
    //'Accept': 'application/json, text/plain'
    //"Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE",
    //"Access-Control-Allow-Headers":"Origin,Content-Type,X-Requested-With,Accept,Authorization"
    
    //application/x-www-form-urlencoded
    //multipart/form-data
    //text/plain

  }
});
