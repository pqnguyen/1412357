import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';

//app reducer
import profile from './reducers/profile';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    profile,
});

export default rootReducer;
