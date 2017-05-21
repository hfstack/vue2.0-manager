<template>
  <aside id="app-sidebar">
    <topbar></topbar>
    <nav class="sidebar-nav">
      <ul>
        <router-link tag="li" :to="item.router" v-for="(item, index) in navList" :key="index">
          <a class="nav-link"><i class="iconnav" v-html="item.icon"></i>
            {{item.title}}</a>
        </router-link>
      </ul>
    </nav>
  </aside>
</template>

<script>
import topbar from './Topbar'

export default {
  props: ['type'],
  components: {
    topbar
  },
  data () {
    return {
      botBarHide: true,
      navList: [
        {
          title: '首页',
          icon: '&#xe620;',
          router: '/home'
        },
        {
          title: '数据',
          icon: '&#xe622;',
          router: '/data'
        },
        {
          title: '账号',
          icon: '&#xe621;',
          router: '/account'
        },
        {
          title: '资料',
          icon: '&#xe61f;',
          router: '/information'
        }
      ]
    }
  }
}
</script>

<style lang="less">
#app-sidebar {
  width: 80px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  background-color: #29282a;
  z-index: 99;

  .iconnav {
    font-size: 20px;
    display: block;
    padding: 12px 0 6px 0;
  }
  .router-link-active{
    background:#4e4d4d;
    a{
      color: #fff;
    }
  }
  .sidebar-nav{
    color: #999;
    &:hover {
      color: #fff;
    }
  }
}
.nav-link {
  display: block;
  color: #999;
  height: 70px;
  text-align: center;
  font-size: 12px;
  &:hover {
    color: #fff;
  }
}



</style>