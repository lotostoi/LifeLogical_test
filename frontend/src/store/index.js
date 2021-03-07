import { createStore } from 'vuex'

import alerts from "@/store/Alert"

export default createStore({
  namespaced: true,
  modules: {
    alerts
  },
  strict: process.env.NODE_ENV !== 'production',
})
