import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import './registerServiceWorker'

Vue.use(VueRouter)
Vue.config.productionTip = false

const ErrorPage = { template: '<h5>An error occured, please try again later.<h5>' }
const NotFoundPage = { template: '<h5>The item or page you\'re looking for could not be found.<h5>' }

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
      component: NotFoundPage
    },
    { 
      path: '/error',
      component: ErrorPage,
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
