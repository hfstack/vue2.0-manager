<template>
  <header>
    <div class="g-menu">
      <ul>
        <router-link tag="li" :to="item.router" v-for="(item,index) in routerLists" :key="index">
          <a><i class="iconnav" v-html="item.icon"></i>
            {{item.title}}</a>
        </router-link>
      </ul>
    </div>
    <div v-if="account" class="g-account">
      <i class="iconnav">&#xe621;</i>{{account}}
      <a href="javascript:;" class="exit" @click="exit">[退出]</a>
    </div>
  </header>
</template>

<script>
import messagebox from 'components/basic/MessageBox'
import { mapState, mapActions } from 'vuex'
import cookie from 'cookie'
export default {
  props: {
    routerLists: {
      type: Array,
      default: []
    }
  },
  components: {},
  computed: {
    ...mapState({
      account: state => state.Account.account
    })
  },
  data () {
    return {
      keng: ''
    }
  },
  mounted () {
    this.getAccount()
  },
  methods: {
    ...mapActions([
      'setAccount' // 映射 this.setAccount() 为 this.$store.dispatch('setAccount')
    ]),
    /**
     * 退出
     */
    exit: function () {
      this.$http.post('/merchants/logout').then((res) => {
        res = res.data
        if (res.success) {
          cookie.serialize('keng', '')
          location.href = '/login.html'
        } else {
          messagebox({
            title: res.message || '请求错误',
            type: 'error'
          })
        }
      }, (res) => {
        messagebox({
          title: '网络错误',
          type: 'error'
        })
      })
    },
    /**
     * 获取账号
     */
    getAccount: function () {
      let cookies = cookie.parse(document.cookie)
      if (cookies.keng) return
      this.$http.get('/developer/account/info').then((res) => {
        res = res.data
        if (res.success) {
          this.isLogin = true
          this.setAccount(res.data)
        } else {
          messagebox({
            title: res.message || '请求错误',
            type: 'error'
          })
        }
      }, (res) => {
        messagebox({
          title: '网络错误',
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
header {
  width: 100%;
  background:#ffffff;
  position: relative;
  overflow: hidden;
  .g-menu {
    margin: 0 auto;
    width: 100%;
    height: 90px;
    text-align: center;
    ul {
      display: inline-block;
      margin-top: 55px;
      width: 250px;
      box-sizing: border-box;

      li {
        text-align: center;
        width: 50%;
        float: left;
        box-sizing: border-box;
        a {
          display: block;
          margin: 0 auto;
          font-size: 14px;
          line-height: 20px;
          padding-bottom: 10px;
          width: 56px;
          color: #333333;
          &:hover{
            color: #f96363;
            background-color: #fff;
          }
        }

        &.router-link-active {
          background-color: #fff;
          a {
            border-bottom: 3px solid #f96363;;
            color: #f96363;
          }
        }
      }
    }
  }
  .g-account{
    position: absolute;
    right: 0;
    top: 20px;
    font-size: 14px;
    color: #666666;
    i{
      font-size: 12px;
      margin-right: 8px;
    }
    .exit{
      height: 34px;
      display: inline-block;
      line-height: 34px;
      margin: 0 20px 0 10px;
      color: #F1565C;
      &:hover {
        text-decoration: underline;
      }
    }
  }

}
</style>
