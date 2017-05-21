<template>
  <div class="change-password":class="{'change': ''}" >
    <div class="m-form" v-if="!next">
      <div class="form-group">
        <label class="control-label">请输入原密码:&nbsp;</label>
        <input type="text" class="form-control" placeholder="请输入原密码" v-model="params.password">
      </div>
    </div>
    <div v-if="next" class="next-step">
      <div class="form-group">
        <label class="control-label">新密码:&nbsp;</label>
        <input type="text" class="form-control" placeholder="请输入新密码" v-model="params.password">
      </div>
      <div class="form-group">
        <label class="control-label">确认新密码:&nbsp;</label>
        <input type="text" class="form-control" placeholder="请确认新密码" v-model="repassword">
      </div>
    </div>
    <div class="m-button">
      <a type="button" class="button button-save" @click="nextStep" v-if="!next">下一步</a>
      <a type="button" class="button button-save" @click="save" v-else>保存配置</a>
    </div>
  </div>
</template>
<script>
  import messagebox from 'components/basic/MessageBox'
  export default{
    data () {
      return {
        params: {
          password: ''
        },
        next: '',
        repassword: ''
      }
    },
    methods: {
      nextStep: function () {
        this.$http.post('/developer/account/password', this.params).then((res) => {
          res = res.data
          if (res.success) {
            this.next = true
            messagebox({
              title: '成功',
              type: 'success'
            })
          } else {
            this.params.password = ''
            messagebox({
              title: res.message || '网络错误！',
              type: 'error'
            })
          }
        }, (res) => {
          messagebox({
            title: res.message || '网络错误！',
            type: 'error'
          })
        })
      },
      save: function () {
        this.$http.post('/developer/account/password/update', this.params).then((res) => {
          res = res.data
          if (res.success) {
            this.next = true
            messagebox({
              title: '成功',
              type: 'success'
            })
          } else {
            this.params.password = ''
            messagebox({
              title: res.message || '网络错误！',
              type: 'error'
            })
          }
        }, (res) => {
          messagebox({
            title: res.message || '网络错误！',
            type: 'error'
          })
        })
      }
    }
  }
</script>
<style lang="less">
.change-password{
  width: 800px;
  height: 380px;
  padding: 38px 0 42px 0;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
  box-sizing: border-box;
  .m-form{
    margin-top: 82px;
  }
  .form-group{
    margin-top: 40px;
    margin-bottom: 0;
    padding-left: 220px;
    width: 420px;
  }
  .next-step{
    .form-group{
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
  .control-label{
    line-height: 40px;
    width: 98px;
    left: 117px;
    text-align: right;
  }
  .form-control{
    height: 40px;
    border-radius: 100px;
    padding-left: 25px;
  }
  .m-button {
    margin: 0 auto;
    margin-top: 60px;
     a{
      display: inline-block;
      border-radius: 100px;
      width: 180px;
      height: 42px;
      line-height: 42px;
      font-size: 16px;
      cursor: pointer;
      &.button-save {
        color: #fff;
        background: #f1565c;
        border: 1px solid #f1565c;
      }
      &.button-cancel {
        color: #333;
        background: #fff;
        border: 1px solid #c0c0c0;
      }
    }
  }
}
</style>
