import React from 'react';
//使用JSX语法就要引入react
import ReactDOM from 'react-dom';
import TodoList from './TodoList';


//JSX
ReactDOM.render(<TodoList/>, document.getElementById('root'));
// 挂载到root节点,使用自己的组件，组件应该以大写开头

// ReactDOM是第三方组件

