import { defineStore } from 'pinia'

const useLayoutStore = defineStore('Layout', {
  state: () => {
    return {
      // 是否展开
      isCollapse: false,
      refresh: false
    }
  }
})

export default useLayoutStore
