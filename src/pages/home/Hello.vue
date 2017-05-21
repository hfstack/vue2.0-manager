<template>
  <div class="hello">
    <h2>vuex 例子</h2>
    <router-link to="/account">跳转</router-link>
    <h2>账号信息</h2>
    <p>账号：{{account}}</p>
    <p>密码：{{accountId}}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      account: state => state.Account.account,
      accountId: state => state.Account.accountId
    })
  },
  mounted () {
    this.getAccount()
  },
  methods: {
    getAccount: function () {
      this.$http.get('/admin/account').then((res) => {
        res = res.data
        this.setAccount(res.data)
      })
    },
    ...mapActions([
      'setAccount' // 映射 this.setAccount() 为 this.$store.dispatch('setAccount')
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
