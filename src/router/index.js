import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import data from './data'
import account from './account'
import information from './information'
Vue.use(Router)
var routes = []
var getRouter = function () {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length) {
      arguments[i].forEach(function (item) {
        routes.push(item)
      })
    }
  }
}
getRouter(home, account, information, data)
export default new Router({
  routes: routes
})
