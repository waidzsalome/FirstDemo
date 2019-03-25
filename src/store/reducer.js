import { CHANGE_INPUR_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
    inputValue: '123',
    list: ['1','2']
}

//reducer可以接收state，但绝不能修改state
export  default (state = defaultState,action) => {
    if(action.type === CHANGE_INPUR_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        console.log(newState)
        return newState;
    }

    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState;
    }

    return state;
}