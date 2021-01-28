import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.scss";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";


// Global Component Reg.
import Navbar from "@/components/Navbar.vue";
import LoadingBar from "@/components/Reuseable/LoadingBar.vue";

createApp(App)
  .use(store)
  .use(router)
  .use(PerfectScrollbar)
  .component("Navbar", Navbar)
  .component("LoadingBar", LoadingBar)
  .mount("#app");
