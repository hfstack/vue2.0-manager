<template>
  <div>
    <iheaderbar :router-lists="routerList"></iheaderbar>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        routerList: [
          {
            router: '/account/info',
            title: '账号信息'
          },
          {
            router: '/account/cpassword',
            title: '修改密码'
          }
        ]
      }
    }
  }
</script>
