import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.scss";

// Global Header Reg.
import Sidebar from "@/components/Sidebar.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("Sidebar", Sidebar)
  .mount("#app");
