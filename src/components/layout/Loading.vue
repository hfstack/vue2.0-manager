<template>
  <div class="loading" v-bind:class="{
    'hide': !show
  }">
    <div class="loading-inner">
      <i class="loading-elephant"></i>
    </div>
  </div>
</template>

<script>
import coerceBoolean from 'components/utils/coerceBoolean.js'

export default {
  props: {
    show: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    }
  }
}
</script>

<style lang="less">
.loading {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9999;

  &.hide {
    display: none;
  }
}

.loading-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 50%;
}

.loading-elephant {
  display: block;
  width: 80px;
  height: 80px;
  background: url("../../assets/images/elephant.png") no-repeat center;
  background-size: cover;
  margin: 20px auto;
  animation: rotate 1.5s infinite ease-in-out;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
