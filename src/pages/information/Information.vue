<template>
<div class="sdk">
  <div class="account">
    <i></i>{{account}}&nbsp;[退出]
  </div>
  <div class="page-info">
    <div class="page-title">接入文档</div>
    <div class="page-main">
      <div class="page-switch"><span @click="changePlatform('ios')" :class="{'switch-bg': type === 'ios'}">ios</span><span @click="changePlatform('android')" :class="{'switch-bg': type === 'android'}">android</span></div>
      <div class="info-detail markdown-body">
        <ios v-if="type==='ios'"></ios>
        <android v-else></android>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
  import android from './Android.md'
  import ios from './iOS.md'
  import 'github-markdown-css'
  export default{
    components: {
      android,
      ios
    },
    data () {
      return {
        input: '',
        type: 'ios'
      }
    },
    methods: {
      changePlatform: function (platform) {
        this.type = platform
      }
    }
  }
</script>
<style lang="less">
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}
.sdk{
  position: relative;
  .account{
    position: absolute;
    top: 28px;
    right: 20px;
  }
  .page-info{
    position: relative;
    .page-title{
      padding-top: 51px;
      font-size:21px;
      line-height: 29px;
      font-weight: bold;
      color:#333333;
      text-align:center;
    }
    .page-main{
      margin: 0 auto;
      margin-top: 30px;
      width: 800px;
      background-color: #fff;
      text-align: left;
      padding-left: 60px;
      padding-right: 72px;
      padding-top: 1px;
      .page-switch{
        width: 220px;
        height: 30px;
        font-size:16px;
        border:1px solid #fb5a5a;
        border-radius:100px;
        box-sizing: border-box;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 27px;
        text-align: center;
        span{
          display: inline-block;
          width: 50%;
          height: 100%;
          line-height: 30px;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          color: #333;
          &:nth-child(1){
            border-radius: 100px 0 0 100px;
          }
          &:nth-child(2){
            border-radius: 0 100px 100px 0;
          }
          &:hover{
            cursor: pointer;
          }
        }
        .switch-bg{
          background-color: #fb5a5a;
          color: #fff;
        }
      }
      .info-detail{
        padding: 0 20px;
        height: 900px;
        overflow: auto;
         textarea {
           border: none;
           display: none;
           border-right: 1px solid #ccc;
           resize: none;
           outline: none;
           background-color: #f6f6f6;
           font-size: 16px;
           font-family: 'Monaco', courier, monospace;
         }
        .title{
          margin-bottom: 30px;
        }
        li{
          font-weight: bold;
          font-size: 16px;
          line-height: 18px;
        }
        .li-text{
          font-weight: normal;
        }
      }
      
    }

  }
}
  
</style>
