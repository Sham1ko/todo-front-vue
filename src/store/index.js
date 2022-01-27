import { createStore } from 'vuex'
import { todoModule } from '@/store/todoModule'


export default createStore({
  modules: {
    todoModule
  }
})
