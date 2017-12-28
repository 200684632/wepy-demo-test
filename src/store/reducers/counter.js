import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, TEST } from '../types/counter'

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) { 
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  },
  [TEST](state, action) {
    return {
      ...state,
      name:action.name
    }
  }
}, {
  num: 0,
  asyncNum: 0,
  name:'测试a'
})
