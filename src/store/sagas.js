import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";
import {initListAction} from "./actionCreators";
import axios from "axios";

function* getInitList() {
    try {
        const res = yield axios.get('https://www.easy-mock.com/mock/5c8913367e5d22324dcefc34/example/listdata')
        const action = initListAction(res.data)
        yield put(action)
    } catch (e) {
        console.log('err')
    }
}

//generator
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;