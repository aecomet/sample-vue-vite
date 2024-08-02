import SamplePage from '@src/SamplePage.vue';
import { createApp } from 'vue';

// createApp({}).component('samplePage', SamplePage).mount('#app');

const app = createApp({});

app.component('SamplePage', SamplePage);
app.mount('#app');
