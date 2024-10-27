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
import Cardapio from "./components/cardapio/cardapio.vue";
import HomePage from "./components/HomePage.vue";


const app = createApp(App)

// GLOBALS
app.config.globalProperties.$api = api;

// CARDÁPIO
app.component('Cardapio', Cardapio);

// HOMEPAGE
app.component('HomePage', HomePage);

// UTILS
app.component('Grid', Grid)

// FIELDS
app.component('aInput', aInput)
app.component('aButton', aButton)
app.component('aSelect', aSelect)
app.component('aSwitch', aSwitch)

app.use(router)
app.mount('#app')
