import React,{ Component } from 'react'
import store from './store/index'
import {getInitList, getAddItemAction, getDeleteItemAction, getInputChangeAction, initListAction,  getTodoList} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action);
    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action)
        console.log(action)
    }
;
    render() {
        return (
           <TodoListUI
               inputValue={this.state.inputValue}
               list={this.state.list}
               handleInputChange={this.handleInputChange}
               handleBtnClick={this.handleBtnClick}
               handleItemDelete={this.handleItemDelete}
           />
        )
    }
}

export default TodoList