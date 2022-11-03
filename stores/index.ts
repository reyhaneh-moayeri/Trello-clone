import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => {
    return {
      message: "test"
    }
  },
  actions:{
  },
 
  getters:{
  }
})
 
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot))
// }