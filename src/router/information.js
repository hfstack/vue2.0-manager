var routes = [
  {
    path: '/information',
    component: function (resolve) {
      require.ensure([], function () {
        resolve(require('../pages/information/Information.vue'))
      }, 'information')
    }
  }
]
module.exports = routes
