import {fork} from 'redux-saga/effects';
import accountFlow from './account';
import authFlow from './auth';

console.log("Hello, redux-saga")

export default function* root() {
    yield fork(accountFlow);
    yield fork(authFlow);
}