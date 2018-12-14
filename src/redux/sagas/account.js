import {take, put, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import accountAction from '../actionType/account';
import requestAction from '../actionType/request';

function* createNewAccountFlow() {
    while(true) {
        yield take(accountAction.ACCOUNT_CREATE_NEW);
        try {
            yield put({type: requestAction.REQUEST_SENDING});
            yield delay(1000);
            yield put({type: requestAction.REQUEST_SUCCESS});
            yield put({type: accountAction.ACCOUNT_CREATE_SUCCESS});
        } catch (error) {
            yield put(requestAction.REQUEST_ERROR)
        }
    }
}

export default function* accountFlow() {
    yield fork(createNewAccountFlow);
}