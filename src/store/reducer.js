import { CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_LIST_VALUE, INIT_LIST_VALUE } from './actionTypes'
const defaultData = {
  inputVal: '',
  list: [1, 2, 3]
}
/**
 * state: 上一次的所有数据
 * action: 接收到的更新, 说的那句话, 和传过来的值
 * reducer: 可以接受state, 但是绝对不能直接修改state, 所以需要深拷贝一次state
 * reducer: 必须是一个纯函数, 给定固定输入, 就一定会有固定输出(意味着不可以可变的时间, 或者异步操作, 异步函数), 且不会有任何副作用(不可以直接改state)
 */
export default (state = defaultData, action) => {
  if(action.type === CHANGE_INPUT_VALUE) { // 就是触发了input去改变值
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.inputVal = action.value  // 然后改值
    // newState.inputVal = new Date()  // new Date() 意味着输出的时间可变, 不是纯函数
    return newState
  } else if (action.type === ADD_LIST_VALUE) {  // 点击提交
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.list = [...newState.list, state.inputVal]
    newState.inputVal = ''
    return newState
  } else if (action.type === DELETE_LIST_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.list.splice(action.index, 1)
    return newState
  } else if(action.type === INIT_LIST_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.list = action.data
    return newState
  }
  return state
}