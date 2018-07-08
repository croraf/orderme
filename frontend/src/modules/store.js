
import { createStore } from 'redux';

import reduxThunk from 'redux-thunk';

import { combineReducers, applyMiddleware, compose } from 'redux';

import { filtersReducer } from './filters';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';


import createHistory from 'history/createHashHistory';

const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    filters: filtersReducer,
});

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(reduxThunk, routerMiddleware(history))
    )
);

export {store, history};
