import { createRouter, createWebHistory } from 'vue-router';

import HomeMain from "@/components/HomeMain";
import HelloWorld from "@/components/HelloWorld";
const HomePage = () =>import("@/components/HomePage");
const UserInfo = () =>import("@/components/UserInfo");
const DataDisplay = () =>import("@/components/DataDisplay");
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',component:HomeMain},
        {path:'/main', component:HomePage},
        {path:'/page', component:HelloWorld},
        {path:'/userInfo', component:UserInfo},
        {path:'/dataDisplay', component:DataDisplay},
    ]
})
export default router
