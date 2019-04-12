import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise-middleware';

// logger -> bir action dispacth oldugunda anlık olarak konsolda prev state ve next state görülür.

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxPromise, thunk, logger)
    )
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
