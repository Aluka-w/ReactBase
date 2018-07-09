import React, { Component, Fragment } from 'react';
import ToDoItem from './ToDoItem';
// import axios from 'axios';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './ToDoList.css'
class ToDoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      val: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderFn = this.renderFn.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    const {val} = this.state
    return (
      <Fragment>
        <h2 style={{textAlign: 'center'}}>JSX + react-transition-group + Charles</h2>
        <div>
          <label htmlFor="input">请输入</label>
          <input type="text"
            id="Fragment"
            value={val}
            onChange={this.handleChange}
            ref={(input) => {this.testInput = input}}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {this.renderFn() }
        </ul>
      </Fragment>
    )
  }
  componentWillMount () {
    // axios.get('/api/todolist').then(res => {
    //   this.setState(() => ({
    //     list: res.data
    //   }))
    // })
  }
  handleChange () {
    const val = this.testInput.value
    this.setState(() => ({
      val: val
    }))
  }
  handleSubmit () {
    this.setState((prev) => ({
      list: [...prev.list, prev.val],
      val: ''
    }))
  }
  handleClick (index) {
    this.setState((prev) => {
      const list = [...prev.list]
      list.splice(index, 1)
      return ({
        list: list
      })
    })
  }
  // 增加 react-transition-group 的动画的特效
  renderFn () {
    return (
      <TransitionGroup>
        {
          this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames='fade'
                onEntered = {(el) => {el.style.color='tomato'}}
                key={index}
              >
                <ToDoItem
                  key={index}
                  index={index}
                  content={item}
                  onHandleClick={this.handleClick}
                />
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    )
  }
}
export default ToDoList