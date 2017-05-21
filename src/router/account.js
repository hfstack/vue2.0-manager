var routes = [
  {
    path: '/account',
    redirect: '/account/info',
    component: function (resolve) {
      require.ensure([], function () {
        resolve(require('../pages/account/Account.vue'))
      }, 'account')
    },
    children: [
      {
        path: 'info',
        component: function (resolve) {
          require.ensure([], function () {
            resolve(require('../pages/account/AccountInfo.vue'))
          }, 'account_info')
        }
      },
      {
        path: 'cpassword',
        component: function (resolve) {
          require.ensure([], function () {
            resolve(require('../pages/account/ChangePassword.vue'))
          }, 'account_cpassword')
        }
      }
    ]
  }
]
module.exports = routes
