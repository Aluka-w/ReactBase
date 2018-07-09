import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList/ToDolist';
import AntToDoList from './Antd/AntToDoList';
import 'antd/dist/antd.css';

// 以下是react-redux 的内容
import {Provider} from 'react-redux';  // 标签内的组件 共享store, 注入一次以后都不需要注入
import store from './store';
import ReactRedux from './ReactRedux/ReactRedux';
const Test = (
  // Provider标签下的组件全部都可以调用store, 好过redux每个文件都引入store
  <Provider store={store}>
    <ReactRedux />
  </Provider>
)

ReactDOM.render(<ToDoList />, document.getElementById('root'));
ReactDOM.render(<AntToDoList />, document.getElementById('app'));
ReactDOM.render(Test, document.getElementById('test'));
