import { createApp } from 'vue'
import App from './App.vue'
import card from './components/friend-card.vue'
import nav from './components/friend-nav.vue'
import form from './components/friend-form.vue'

const app = createApp(App)

app.component("friend-card", card);
app.component("friend-nav", nav);
app.component("friend-form", form);

app.mount('#app')
