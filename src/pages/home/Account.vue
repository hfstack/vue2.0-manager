<template>
  <div>
    <p>account</p>
    <p>{{account}}</p>
    <p>{{accountId}}</p>
  </div>

</template>
<script>
  import { mapState } from 'vuex'
  export default{
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        account: state => state.Account.account,
        accountId: state => state.Account.accountId
      })
    }
  }
</script>
