import {ADD_TODO_ITEM, CHANGE_INPUR_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from "./actionTypes";


export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUR_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getInitList = () =>({
    type: GET_INIT_LIST
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios({
//             method: 'GET',
//             url: 'https://www.easy-mock.com/mock/5c8913367e5d22324dcefc34/example/listdata',
//         }).then((res)=>{
//             const data = res.data;
//             const action = initListAction(data);
//             console.log(data)
//             dispatch(action);
//         })
//     }
// };