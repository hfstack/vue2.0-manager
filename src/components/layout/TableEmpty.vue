<template>
  <div class="row-noresult">
    <i class="empty-elephant"></i>
    <p>没有符合条件的记录~</p>
  </div>
</template>

<style lang="less">
.row-noresult {
  background-color: #fff;
  text-align: center;
  padding: 103px 0 186px;

  .empty-elephant {
    width: 167px;
    height: 136px;
    display: inline-block;
    background: url("../../assets/images/empty_elephant.png") no-repeat center;
    background-size: cover;
    position: relative;
    left: 20px;
  }

  > p {
    margin-top: 20px;
    font-size: 12px;
    color: #888;
  }
}
</style>
