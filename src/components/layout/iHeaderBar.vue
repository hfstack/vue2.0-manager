<template>
  <header>
    <a class="g-logo" href="/seller.html" target="_black"></a>
    <div class="g-menu">
      <ul>
        <li :class="{ active: isActive === 1 ? true : false }"><a href="/shop.html">我的店铺</a></li>
        <li :class="{ active: isActive === 2 ? true : false }"><a href="/account.html">我的账号</a></li>
      </ul>
    </div>
    <div v-if="isLogin" class="g-account">
      {{account}}
      <a href="javascript:;" class="exit" @click="exit">[退出]</a>
    </div>
  </header>
</template>

<script>
import messagebox from 'components/basic/MessageBox'
export default {
  props: [
    'isActive',
    'isLogin'
  ],
  components: {},
  mounted () {
    if (this.huska) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  data () {
    return {
      account: '',
      huska: ''
    }
  },
  methods: {
    /**
     * 退出
     */
    exit: function () {
      this.$http.post('/merchants/logout').then((res) => {
        if (res.success) {
          this.deleteCookie('password')
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
      this.$http.get('/merchants/fetch').then((res) => {
        res = res.json()
        if (res.success) {
          this.isLogin = true
          this.account = res.data
        } else {
          messagebox({
            title: res.message || '请求错误',
            type: 'error'
          })
          setTimeout(function () {
            location.href = 'login.html'
          }, 2000)
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

<style lang="less">
header {
  width: 100%;
  height: 70px;
  background:#ffffff;
  box-shadow:0px 1px 3px 0px rgba(153,153,153,0.50);
  position: relative;
  overflow: hidden;

  .g-logo {
    display: block;
    position: absolute;
    left: 20px;
    top: 13px;
    width: 150px;
    height: 50px;
    background-size: 100% auto;
  }
  .g-menu {
    margin: 0 auto;
    width: 1180px;
    height: 70px;
    text-align: center;

    ul {
      display: inline-block;
      height: 70px;
      width: 250px;
      box-sizing: border-box;

      li {
        margin-top: 20px;
        text-align: center;
        width: 50%;
        float: left;
        a {
          display: block;
          margin: 0 auto;
          font-size: 16px;
          width: 64px;
          height: 46px;
          line-height: 36px;
          color: #333333;
          &:hover{
            color: #f1565c;
          }
        }

        &.active {
          a {
            border-bottom: 4px solid #F1565B;
            color: #F1565B;
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
