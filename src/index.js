import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import {configureStoreWithFirebase} from 'src/redux/store'
import routes from "src/routes/routes"

import 'src/index.css';
import 'antd/dist/antd.css';

const store = configureStoreWithFirebase();

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            {routes}
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));
