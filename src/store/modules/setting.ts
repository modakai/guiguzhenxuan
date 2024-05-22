import { defineStore } from 'pinia'

const useSettingStore = defineStore('Setting', {
  state: () => {
    return {
      // 是否展开
      isCollapse: false
    }
  }
})

export default useSettingStore
