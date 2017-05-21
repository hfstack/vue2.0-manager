import Vue from 'vue'
import getScrollBarWidth from '../utils/getScrollBarWidth.js'

var MessageBoxConstructor = Vue.extend(require('./Modal.vue'))

var MessageBox = function (options) {
  const body = document.body
  var instance = new MessageBoxConstructor({
    el: document.createElement('div'),
    propsData: {
      title: options.title,
      messageType: options.type,
      footer: false,
      header: false,
      isMessage: true,
      value: false
    }
  })
  instance.$watch('value', function (val) {
    const scrollBarWidth = getScrollBarWidth()
    if (val) {
      // this.show = true;
      this.$emit('input', true)
      body.classList.add('modal-open')
      if (scrollBarWidth !== 0) {
        body.style.paddingRight = scrollBarWidth + 'px'
      }
    }
    setTimeout(() => {
      this.close()
      body.classList.remove('modal-open')
      body.style.paddingRight = '0'
      this.$nextTick(function () {
        this.$el.remove()
      })
      // this.show = false;
      this.$emit('input', false)
    }, options.time || 1000)
  })
  setTimeout(function () {
    instance.value = true
    console.log(instance)
    instance.appendChild(body)
  }, 200)
}

export default MessageBox
