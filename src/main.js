import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.scss";

// Global Header Reg.
import Header from "@/components/Header.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("Header", Header)
  .mount("#app");
