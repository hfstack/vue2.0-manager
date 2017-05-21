<template>
  <div class="account-info" :class="{'account-edit': isEditShow}">
    <div class="form-group">
      <div class="account-edit" v-show="!isEditShow" @click="edit"><i class="icondev">&#xe623;</i></div>
      <label class="control-label">公司名称</label>
      <div class="input-hidden" v-if="!isEditShow">
        {{params.company}}
      </div>
      <div v-else class="input-edit">
        <input type="text" class="form-control w300" placeholder="请输入公司名称" v-model="params.company">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label label-required">联系人</label>
      <div class="input-hidden" v-if="!isEditShow">
        {{params.contact}}
      </div>
      <div v-else class="input-edit">
        <input type="text" class="form-control w300" placeholder="请输入公司名称" v-model="params.contact">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label label-required">联系电话</label>
      <div class="input-hidden" v-if="!isEditShow">
        {{params.phone}}
      </div>
      <div v-else class="input-edit">
        <input type="text" class="form-control w300" placeholder="请输入公司名称" v-model="params.phone">
      </div>
    </div>
    <div class="m-button" v-if="isEditShow">
      <a  class="button button-save" @click="save">保存配置</a>
    </div>
    <modal v-if="show" v-model="show">
      <template slot="modal-body">
      <div>haha</div>
      </template>
    </modal>
  </div>
</template>
<script >
  import messagebox from 'components/basic/MessageBox'
  export default{
    data () {
      return {
        params: {
          company: 'huanglongfie',
          contact: 'huanglongfei',
          phone: 'huanglognefi'
        },
        isEditShow: false,
        show: false
      }
    },
    mounted () {
      this.getAccount()
    },
    methods: {
      /**
       * 编辑
       */
      edit: function () {
        this.isEditShow = true
      },
      /**
       * 获取账号
       */
      getAccount: function () {
        this.$http.get('/developer/account/info').then((res) => {
          res = res.data
          if (res.success) {
            let data = res.data
            this.params.contact = data.contact
            this.params.phone = data.phone
            this.params.company = data.company
            messagebox({
              title: '成功',
              type: 'success'
            })
          } else {
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
      /**
       * 保存
       */
      save: function () {
        this.$http.post('/developer/account/update', this.params).then((res) => {
          res = res.data
          if (res.success) {
            this.isEditShow = false
            messagebox({
              title: '成功',
              type: 'success'
            })
          } else {
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
@iconhandle-color: #979797;
@iconhandle-color-hover: #e1323c;
.account-edit{
  .form-group{
    border-bottom: 0 !important;
  }
}
.account-info{
  width: 800px;
  padding: 38px 140px 42px 150px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
  box-sizing: border-box;

  .account-edit {
    position: absolute;
    right: -140px;
    top: -38px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    width: 0;
    height: 0;
    border-top: 48px solid #f0f0f0;
    border-left: 48px solid transparent; 

    i {
      position: absolute;
      font-size: 14px;
      right: 8px;
      bottom: 24px;
      color: @iconhandle-color;
    }
    &:hover {
      color: @iconhandle-color-hover;
      .iconhandle {
        color: @iconhandle-color-hover;
      }
    }
  }
  .form-group {
    height: 100px;
    padding-bottom: 0;
    border-bottom: 1px solid #f2f2f2;
    padding-left: 90px;
    margin-bottom: 0;
    &:last-child {
      border-bottom: none;
    }
    .control-label {
      font-weight: normal;
      width: 56px;
      text-align: center;
      line-height: 100px;
      &::before {
        display: none;
      }
    }
    .input-edit{
      height: 100px;
      input{
        margin-top: 30px;
      }
    }
  }
  .form-groups-chunk {
    margin-top: 0;
    border-bottom: none;
  }
  .w300 {
    height: 40px;
    line-height: 40px;
    padding: 0 20px!important;
    width: 420px!important;
    box-sizing: border-box;
    border-radius: 100px;
  }
  .m-button {
    margin: 0 auto;
    margin-top: 21px;
    a {
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
  .input-hidden {
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    height: 100px;
    line-height: 100px;
    overflow: hidden;
  }
}
</style>
