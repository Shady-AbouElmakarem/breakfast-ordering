import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'

import router from './router.vue'
import VueRouter from 'vue-router'

// https://www.npmjs.com/package/vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// https://vue.ant.design/docs/vue/introduce/
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false
Vue.use(Vuex, VueRouter, axios, VueAxios, Antd)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
