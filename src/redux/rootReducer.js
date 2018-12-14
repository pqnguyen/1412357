import {combineReducers} from 'redux';
// import {firebaseReducer} from 'react-redux-firebase';

//app reducer
import profile from './reducers/profile';
import request from './reducers/request';

const rootReducer = combineReducers({
    // firebase: firebaseReducer,
    profile,
    request,
});

export default rootReducer;
