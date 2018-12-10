import actionTypes from '../actionType/profile';

export const updateProfile = (payload) => ({
    type: actionTypes.UPDATE_PROFILE,
    payload,
});