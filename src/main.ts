import { createApp } from 'vue'
import App from "./App.vue"
import './index.css'
import {createWebHashHistory,createRouter} from "vue-router";
import Msg from "/src/components/Msg.vue"

const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Msg}
    ]
})

createApp(App).mount('#app')
