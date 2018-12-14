import actionTypes from '../actionType/request';

const initialState = {
    loading: false,
    error: false,
    message: "",
}

const request = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.REQUEST_SENDING:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: "Requesting success."
            };
        case actionTypes.REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: "Requesting failed.",
            }
        default:
            return state;
    }
};

export default request;