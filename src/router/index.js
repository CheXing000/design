import { createRouter, createWebHistory } from "vue-router";
import item_two from '../components/DOC/item_two.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/Home',
            name: 'home',
            component: () => import('../components/body/home.vue')
        },
        {
            path: '/About',
            name: 'about',
            component: () => import('../components/body/about.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/auth/login.vue')
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('../components/auth/index.vue')
        },
        {
            path: '/Doc',
            name: 'Doc',
            children: [
                {
                    path: 'item_one',
                    name: 'itme_one',
                    redirect: '/Doc/item_one/hreo',
                    children: [
                        {
                            path: 'hreo',
                            name: 'hreo',
                            component: () => import('../components/DOC/item_one.vue')
                        }
                    ]
                },
                {
                    path: 'item_two',
                    name: 'item_twos',
                    component: () => import('../components/DOC/item_two.vue')
                },
            ]
        },
        {
            path: '/Duc',
            name: 'duc',
            children: [
                {
                    path: 'itme_one',
                    name: 'item_one',
                    redirect: '/Duc/itme_one/card',
                    //  出现三级路由渲染二级路由组件的情况，可将二级路由的组件写到3级路由，使用重定向进行访问
                    children: [
                        {
                            path: 'card',
                            name: 'card',
                            component: () => import('../components/body/duc_one.vue'),
                        },
                        {
                            path: 'card_info',
                            name: 'card_info',
                            component: () => import('../components/body/card_info.vue'),
                        }
                    ]
                },
                {
                    path: 'itme_two',
                    name: 'item_two',
                    component: () => import('../components/body/chat.vue')
                },
                {
                    path: 'itme_three',
                    name: 'itme_three',
                    redirect: '/Duc/itme_three/role',
                    children: [
                        {
                            path: 'role',
                            name: 'role',
                            component: () => import('../components/body/yuanshen_role.vue'),
                        },
                        {
                            path:'role_detail',
                            path:'role_detail',
                            component: () => import('../components/body/role_detail.vue'),
                        }
                    ]
                }
            ]
        },
        {
            path: '/Help',
            name: 'help',
            component: () => import('../components/body/test.vue')
        },
    ]
})
// 导出
export default router
