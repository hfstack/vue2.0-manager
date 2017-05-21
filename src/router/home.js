var routes = [
  {
    path: '/',
    name: 'Hello',
    component: function (resolve) {
      require.ensure([], function () {
        resolve(require('../pages/home/Hello.vue'))
      }, 'hello')
    }
  }
]
module.exports = routes
