import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/routes";
import './scss/default.scss'
import aInput from "./components/utils/fields/aInput.vue";
import aButton from "./components/utils/fields/aButton.vue";
import aSelect from "./components/utils/fields/aSelect.vue";
import Grid from "./components/utils/Grid.vue";
import aSwitch from "./components/utils/fields/aSwitch.vue";
import api from "./components/utils/api";
import '@fortawesome/fontawesome-free/css/all.css';
import Menu from "./components/utils/menu.vue";
import collect from "collect.js";

const app = createApp(App)

// GLOBALS
app.config.globalProperties.$api = api
// UTILS
app.component('Grid', Grid)

// COMPONENTS
app.component('aInput', aInput)
app.component('aButton', aButton)
app.component('aSelect', aSelect)
app.component('aSwitch', aSwitch)
app.component('Menu', Menu)




// ROTAS
app.provide('allRoutes', collect(router.options.routes).filter(route => route.meta?.app != false));
app.use(router)

app.mount('#app')
