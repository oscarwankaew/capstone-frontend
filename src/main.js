import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import moment from "moment";
import "bootstrap";

const app = createApp(App);

app.config.globalProperties.$moment = moment;

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

createApp(App).use(router).mount("#app");
