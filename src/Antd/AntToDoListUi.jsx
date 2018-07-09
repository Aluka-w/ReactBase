import { Input, Button, List } from 'antd';
import React, { Component, Fragment } from 'react';

class AntToDoListUi extends Component {
  render () {
    const {handleChange, inputVal, handleClick, list} = this.props
    return (
      <Fragment>
        <h2 style={{textAlign: 'center'}}>Antd + Redux + Redux-thunk</h2>
        <Input
          onChange={handleChange}
          placeholder="请输入" value={inputVal}
          style={{width: 400, margin: 10, marginRight: 20}}
        />
        <Button type="primary" onClick={handleClick}>提交</Button>
        <List
          style={{width: 400, margin: 10}}
          bordered
          dataSource={list}
          renderItem={(item, index) => (<List.Item onClick={this.handle.bind(this, index)}>{item}</List.Item>)}
        />
      </Fragment>
    )
  }
  handle (index) {
    this.props.handleDelete(index)
  }
}
export default AntToDoListUi