import { createApp } from 'vue';
import { createPinia, setMapStoreSuffix } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

setMapStoreSuffix('');
export const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');