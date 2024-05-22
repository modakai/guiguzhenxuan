import { defineStore } from 'pinia'

const useLayoutStore = defineStore('Setting', {
  state: () => {
    return {
      // 是否展开
      isCollapse: false
    }
  }
})

export default useLayoutStore
