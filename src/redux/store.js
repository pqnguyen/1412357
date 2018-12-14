import rootReducer from 'src/redux/rootReducer'
import {compose, createStore, applyMiddleware} from 'redux';
// import {reactReduxFirebase} from 'react-redux-firebase';
// import thunkMiddleware from 'redux-thunk';
// import firebase from 'firebase';
// import {firebaseConfig} from '../firebase/firebase';
// import {createLogger} from 'redux-logger';

// firebase.initializeApp(firebaseConfig);

//redux saga setup
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

let composeEnhancer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
    }) : compose;

// const config = {
//   userProfile: 'users',
//   enableLogging: false,
//   presence: 'presence', 
//   sessions: 'sessions',
// }


// const createStoreWithFirebase = composeEnhancer(
//   reactReduxFirebase(firebase, config)
// )(createStore);

const sagaMiddleware = createSagaMiddleware();

export const configureStoreWithFirebase = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancer(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};