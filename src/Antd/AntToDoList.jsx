import React, { Component } from 'react';
import store from '../store';
import AntToDoListUi from './AntToDoListUi'
import { getInputChangeAction, getAddListAction, getDeleteListAction, getInitList } from "../store/actionCreators";
// import axios from 'axios';

class AntToDoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange) // 订阅store的变化, 一有变化就触发, 例子都在一个页面使用, 显得有点多余
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentWillMount () {
    /**
     * 由于redux-thunk 的存在, 使得可以返回一个函数
     * 由于返回函数, 并没有携带type, 所以store 直接就会执行axios这个异步请求(actionCreator)
     * 执行的函数内部在axios请求完后, 又会调用一下dispatch(action) , dispatch要当参数传进去
     */
    const action = getInitList()
    store.dispatch(action)
  }
  render () {
    const {list, inputVal} = this.state
    return (
      <AntToDoListUi
        handleChange={this.handleChange}
        inputVal={inputVal}
        handleClick={this.handleClick}
        list={list}
        // handleDelete={(index) => {this.handleDelete(index)}}
        handleDelete={this.handleDelete}
      />
    )
  }
  handleChange (e) {
    const val = e.target.value
    const action = getInputChangeAction(val)
    store.dispatch(action)  // 改变store
  }
  handleStoreChange () {
    // 触发这个方法之后, 重新赋值一波, 相当于更新了
    this.setState(store.getState())
  }
  handleClick () {
    // 定义action, 去改变store, 增加
    const action = getAddListAction()
    store.dispatch(action)
  }
  handleDelete (index) {
    const action = getDeleteListAction(index)
    store.dispatch(action)
  }
}
export default AntToDoList