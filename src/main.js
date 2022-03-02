import {createApp} from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";
import App from './App.vue'
import * as icons from '@element-plus/icons-vue'
import router from "@/router/router";
const app =createApp(App)
axios.defaults.baseURL = '/api'

// 定义函数
Object.keys(icons).forEach(key => {
    app.component(key, icons[key])
})
app.use(
    router,
    VueAxios,
    axios,
).mount('#app')
