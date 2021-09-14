import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  //-------------------------------------------------| Logging
  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("./components/Logging")
  },
  //-------------------------------------------------| Registration
  {
    path: "/registration",
    alias: "/registration",
    name: "registration",
    component: () => import("./components/Registration")
  },
  {
    path: "/profile",
    alias: "/profile",
    name: "profile",
    component: () => import("./components/Profile")
  },
  //-------------------------------------------------| Home
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  //-------------------------------------------------| Vendor
  {
    path: "/vendor",
    name: "vendor",
    component: () => import("./components/Vendor")
  },
  {
    path: "/vendor/add",
    name: "add-vendor",
    props: true,
    component: () => import("./components/AddVendor")
  },
  //-------------------------------------------------| Brand
  {
    path: "/brand",
    name: "brand",
    component: () => import("./components/Brand")
  },
  {
    path: "/brand/add",
    name: "add-brand",
    component: () => import("./components/AddBrand")
  },
  //-------------------------------------------------| Product
  {
    path: "/product",
    name: "product",
    component: () => import("./components/Product")
  },
  {
    path: "/product/add",
    name: "add-product",
    component: () => import("./components/AddProduct")
  },
  //-------------------------------------------------| Inventory
  {
    path: "/inventory",
    name: "inventory",
    component: () => import("./components/Inventory")
  },
  {
    path: "/inventory/add",
    name: "add-inventory",
    component: () => import("./components/AddInventory")
  },
  //-------------------------------------------------| Order
  {
    path: "/order",
    name: "order",
    component: () => import("./components/Order")
  },
  
  //-------------------------------------------------| About
  {
    path: "/about",
    name: "about",
    component: () => import("./components/About")
  },
  //-------------------------------------------------| Contact
  {
    path: "/contact",
    name: "contact",
    component: () => import("./components/Contact")
  },
  //-------------------------------------------------| File
  {
    path: "/file",
    name: "file",
    component: () => import("./components/FileUpload")
  },

  //Initial
  {
    path: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;