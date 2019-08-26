import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = ( state = [], action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
        default:
            return state;
    }

}

const understandingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }

}

const supportedReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SUPPORTED':
            return action.payload;
        default:
            return state;
    }

}

const commentReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        default:
            return state;
    }

}

const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
