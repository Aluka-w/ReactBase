import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
class ToDoItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    const {index, content} = this.props
    return (
      <Fragment>
          <li 
            key={index}
            dangerouslySetInnerHTML={{__html: content}}
            onClick={this.handleClick}
          >
          </li>
      </Fragment>
    )
  }
  shouldComponentUpdate (nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  handleClick () {
    const {onHandleClick, index} = this.props
    onHandleClick(index)
  }
}
  ToDoItem.propTypes = {
    onHandleClick: PropTypes.func,
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    content: PropTypes.string
  }
export default ToDoItem