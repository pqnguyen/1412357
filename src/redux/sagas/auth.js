import {take, put, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import authAction from '../actionType/auth';
import requestAction from '../actionType/request';

function* loginFlow() {
    while(true) {
        const {payload} = yield take(authAction.AUTH_LOGIN);
        console.log("[payload]", payload);
        try {
            yield put({type: requestAction.REQUEST_SENDING});
            //fake login
            yield delay(10000);
            yield put({type: requestAction.REQUEST_SUCCESS});
            yield put({type: authAction.AUTH_LOGIN_SUCCESS});
        } catch (error) {
            yield put(requestAction.REQUEST_ERROR);
        }
    }
}

export default function* authFlow() {
    yield fork(loginFlow);
}