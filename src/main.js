import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.scss";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

// Global Header Reg.
import Sidebar from "@/components/Sidebar.vue";

createApp(App)
  .use(store)
  .use(router)
  .use(PerfectScrollbar)
  .component("Sidebar", Sidebar)
  .mount("#app");
