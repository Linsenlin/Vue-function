import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        // {
        //     path: '/',
        //     redirect: '/dashboard'
        // },
        {
            path: '/login',
            name: 'login',
            meta: {
                title: 'Login - 登录'
            },
            component: () => import('@/components/views/Login.vue'),
        },
        {
            path: '/',
            component: () => import('@/components/common/Home.vue'),
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import('@/components/views/Dashboard.vue'),

                    meta: { title: '系统首页' }
                },
            //     {
            //         path: '/icon',
            //         component: () => import('@/components/views/Icon.vue'),
            //         meta: { title: '自定义图标' }
            //     },
            //     {
            //         path: '/table',
            //         component: () => import('@/components/views/BaseTable.vue'),
            //         meta: { title: '基础表格' }
            //     },
            //     {
            //         path: '/tabs',
            //         component: () => import('@/components/views/Tabs.vue'),
            //         meta: { title: 'tab选项卡' }
            //     },
            //     {
            //         path: '/form',
            //         component: () => import('@/components/views/BaseForm.vue'),
            //         meta: { title: '基本表单' }
            //     },
            //     {
            //         // 富文本编辑器组件
            //         path: '/editor',
            //         component: () => import('@/components/views/VueEditor.vue'),
            //         meta: { title: '富文本编辑器' }
            //     },
            //     {
            //         // markdown组件
            //         path: '/markdown',
            //         component: () => import('@/components/views/Markdown.vue'),
            //         meta: { title: 'markdown编辑器' }
            //     },
            //     {
            //         // 图片上传组件
            //         path: '/upload',
            //         component: () => import('@/components/views/Upload.vue'),
            //         meta: { title: '文件上传' }
            //     },
            //     {
            //         // vue-schart组件
            //         path: '/charts',
            //         component: () => import('@/components/views/BaseCharts.vue'),
            //         meta: { title: 'schart图表' }
            //     },
            //     {
            //         // 拖拽列表组件
            //         path: '/drag',
            //         component: () => import('@/components/views/DragList.vue'),
            //         meta: { title: '拖拽列表' }
            //     },
            //     {
            //         // 拖拽Dialog组件
            //         path: '/dialog',
            //         component: () => import('@/components/views/DragDialog.vue'),
            //         meta: { title: '拖拽弹框' }
            //     },
            //     {
            //         // 国际化组件
            //         path: '/i18n',
            //         component: () => import('@/components/views/I18n.vue'),
            //         meta: { title: '国际化' }
            //     },
            //     {
            //         // 权限页面
            //         path: '/permission',
            //         component: () => import('@/components/views/Permission.vue'),
            //         meta: { title: '权限测试', permission: true }
            //     },
            //     {
            //         path: '/404',
            //         component: () => import('@/components/views/404.vue'),
            //         meta: { title: '404' }
            //     },
            //     {
            //         path: '/403',
            //         component: () => import('@/components/views/403.vue'),
            //         meta: { title: '403' }
            //     }
            ]
        },

        // {
        //     path: '*',
        //     redirect: '/404'
        // }
    ]
})
