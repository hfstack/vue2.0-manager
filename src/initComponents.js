import Sidebar from 'components/layout/Sidebar'
import Loading from 'components/layout/Loading'
import iHeaderBar from 'components/layout/iHeaderBar.vue'
import Modal from 'components/basic/Modal.vue'
const Components = {
  Sidebar,
  Loading,
  iHeaderBar,
  Modal
}

export default function (Vue) {
  var keys = Object.keys(Components)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    Vue.component(key.toLowerCase(), Components[key])
  }
}
