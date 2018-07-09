/**
 * 集中管理action
 * 方便维护, 和前端测试化
 */
import { CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_LIST_VALUE, INIT_LIST_VALUE } from './actionTypes';
import axios from 'axios';
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
})
export const getAddListAction = (value) => ({
  type: ADD_LIST_VALUE
})
export const getDeleteListAction = (index) => ({
  type: DELETE_LIST_VALUE,
  index: index
})
export const initListAction = (data) => ({
  type: INIT_LIST_VALUE,
  data
})
/**
 * action 本来必须是一个对象
 * thunk 中间件, 使得可以返回函数, 同时在 store 接受到函数时, 会自动调用一下
 * 函数的内部又会在操作 store 里面的值
 */
export const getInitList = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then(res => {
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
}