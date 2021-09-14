import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }

  //======================================================| File
  fileDeleteAndUpload(imageName, formData) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/File/DeleteAndUpload?fileName=" + imageName, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }

  //======================================================| Authenticate
  addAuthenticate(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/Authenticate/AddAuthenticate", request);
  }

  //======================================================| Login
  getUserByUserAndPass(username, password) {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/User/GetUserByUserAndPass?username=" + username + "&password=" + password);
  }

  //======================================================| Registration
  addUser(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/User/AddUser", request);
  }
  
  //======================================================| Home
  getCampaign() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Campaign/GetCampaigns");
  }

  //======================================================| Vendor/Shops
  getVendors() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Vendor/GetAllVendors");
  }

  addVendor(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/Vendor/AddVendor", request);
  }
  
  updateVendorById(id, request) {
    return http.put(process.env.VUE_APP_BASE_URL + "Api/Vendor/UpdateVendorById?id="+id, request);
  }
  
  //======================================================| Brands
  getAllBrands() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Brand/GetAllBrands");
  }

  getAllBrandCategories() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Brand/GetAllBrandCategories");
  }

  addBrandCategory(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/Brand/AddBrandCategory", request);
  }
  
  addBrand(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/Brand/AddBrand", request);
  }
  updateBrandById(id, request) {
    return http.put(process.env.VUE_APP_BASE_URL + "Api/Brand/UpdateBrandById?id="+id, request);
  }
  //======================================================| Products
  getAllProducts() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Product/GetAllProducts");
  }
  
  getAllProductCategory() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Product/GetAllProductCategory");
  }
  
  getAllProductsWithUnit() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Product/GetAllProductsWithUnit");
  }

  addProductCategory(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/Product/AddProductCategory", request);
  }
  
  addProduct(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/Product/AddProduct", request);
  }
  updateProductById(id, request) {
    return http.put(process.env.VUE_APP_BASE_URL + "Api/Product/UpdateProductById?id="+id, request);
  }
  //======================================================| Inventory
  getAllInventory() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Inventory/GetAllInventory");
  }
  
  getAllProductUnits() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Inventory/GetAllProductUnits");
  }

  getAllInvStores() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Inventory/GetAllInvStores");
  }

  getAllInventoryGroupBy() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Inventory/GetAllInventoryGroupBy");
  }

  addInventory(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/Inventory/AddInventory", request);
  }
  
  addAllInventory(request) {
    return http.post(process.env.VUE_APP_BASE_URL + "Api/Inventory/AddAllInventory", request);
  }

  //======================================================| Order
  getAllOrders() {
    return http.get(process.env.VUE_APP_BASE_URL + "Api/Order/GetAllOrders");
  }

}

export default new TutorialDataService();
