import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
// import axios from 'axios';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'; // 默认主题


Vue.config.productionTip = false
// Vue.prototype.$axios = axios;
Vue.use(ElementUI, {
  size: 'small'
});
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('ms_username');
  console.log(router);
  console.log(next);
  console.log(to.path);
  console.log(!role);
  console.log(role);
  console.log(to);
  if (!role && to.path !== '/login') {
    console.log("1111");
    next('/login');
  } else if (to.meta.permission) {
    console.log("222");

    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin' ? next() : next('/403');
  } else {
    console.log("3333");
    next();
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    // if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
    //   Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
    //     confirmButtonText: '确定'
    //   });
    // } else {
    //   next();
    // }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
