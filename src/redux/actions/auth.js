import actionTypes from '../actionType/auth';

export const authLogin = (payload) => ({
    type: actionTypes.AUTH_LOGIN,
    payload,
});