import { createApp } from 'vue';
import { createPinia, setMapStoreSuffix } from 'pinia';
import App from './App.vue';
import router from './router';
// import store from './stores';


const app = createApp(App);

setMapStoreSuffix('');
export const pinia = createPinia();

app.use(pinia);
// app.use(store);
app.use(router);
app.mount('#app');