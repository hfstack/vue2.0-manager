// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import './styles/main.less'
import initComponents from './initComponents'
import VeeValidate, { Validator } from 'vee-validate'
import messages from 'components/utils/zh_CN'
initComponents(Vue)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Validator.updateDictionary({
  zh_CN: {
    messages
  }
})
const config = {
  errorBagName: 'verrors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
}
Vue.use(VeeValidate, config)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
