import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import './registerServiceWorker'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'home',
      component: () =>
            import('@/components/Home.vue')
    },
    { 
      path: '/channels',
      component: () =>
            import('@/components/Channels.vue')
    },
    { 
      path: '/channels/ChadKillingsworth',
      component: () =>
            import('@/components/ChannelView.vue')
    },
    { 
      name: 'VideoView',
      path: '/video',
      component: () =>
            import('@/components/VideoView.vue'),
      props: true
    },
    { 
      path: '*',
      component: () =>
            import('@/components/NotFound.vue'),
    },
    { 
      path: '/error',
      component: () =>
            import('@/components/Error.vue'),
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
