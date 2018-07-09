import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { getInputChangeAction, getAddListAction, getDeleteListAction, getInitList } from "../store/actionCreators";
class ReactRedux extends Component {
  render () {
    const {inputVal, list, handleClick, handleChange, handleDelete} = this.props
    return (
      <Fragment>
        <div>
          <label htmlFor="input2">请输入</label>
          <input type="text"
            id="input2"
            value={inputVal}
            onChange={handleChange}
          />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index} onClick={() => {handleDelete(index)}}>{item}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  componentWillMount () {
    this.props.getInitData()
  }
}
// 相当于把store的state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list
  }
}
// 相当于store.dispatch方法, 只是每次改变的时候都需要调用this.props.handleChange() 方法
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange (e) {
      const value = e.target.value
      const action = getInputChangeAction(value)
      dispatch(action)
    },
    handleClick () {
      const action = getAddListAction()
      dispatch(action)
    },
    handleDelete (index) {
      const action = getDeleteListAction(index)
      dispatch(action)
    },
    getInitData () {
      const action = getInitList()
      dispatch(action)
    }
  }
}
// connect(获取store的state的方法, 改变store的state的方法)('组件名')
// 这个组件不做axios的请求数据的话, 完全可以抽成无状态组件
// 那么connect的作用就是: 把无状态组件(UI组件) 和 业务逻辑相 结合, 组成一个容器组件
// 所以 react-redux 也有容器组件 和 ui组件
export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux)