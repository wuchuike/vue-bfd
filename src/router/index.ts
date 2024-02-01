import {createRouter, createWebHashHistory} from 'vue-router'
import type { RouterOptions } from 'vue-router' // 解决类型错误问题
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'app',
            component: ()=>import('@/App.vue')
        },
        {
            path:'/login',
            name:'login',
            component: ()=>import('@/views/LoginPage.vue')
        }
    ]
}as RouterOptions)


export default router