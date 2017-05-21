// import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  account: '',
  accountId: ''
}

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.added]
  //   commit(types.CHECKOUT_REQUEST)
  //   shop.buyProducts(
  //     products,
  //     () => commit(types.CHECKOUT_SUCCESS),
  //     () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  //   )
  // },
  setAccount ({commit, state}, result) {
    commit(types.SET_ACCOUNT, result)
  }
}

// mutations
const mutations = {
  // [types.ADD_TO_CART] (state, { id }) {
  //   state.lastCheckout = null
  //   const record = state.added.find(p => p.id === id)
  //   if (!record) {
  //     state.added.push({
  //       id,
  //       quantity: 1
  //     })
  //   } else {
  //     record.quantity++
  //   }
  // },

  // [types.CHECKOUT_REQUEST] (state) {
  //   // clear cart
  //   state.added = []
  //   state.checkoutStatus = null
  // },

  // [types.CHECKOUT_SUCCESS] (state) {
  //   state.checkoutStatus = 'successful'
  // },

  // [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
  //   // rollback to the cart saved before sending the request
  //   state.added = savedCartItems
  //   state.checkoutStatus = 'failed'
  // },
  [types.SET_ACCOUNT] (state, result) {
    state.account = result.account
    state.accountId = result.accountId
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
