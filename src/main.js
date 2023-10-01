import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'

import CharacterList from './views/CharacterList.vue';


import InfiniteScroll from 'vue-infinite-scroll';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CharacterList },
  ],
})

const app = createApp(App)
app.config.globalProperties.$http = axios


app.use(InfiniteScroll);

app.use(router)
app.mount('#app')
