
import reduxThunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { filtersReducer } from './filters';


import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    filters: filtersReducer,
});

const store = createStore(
    connectRouter(history)(reducer),
    {},
    composeEnhancers(
        applyMiddleware(reduxThunk, routerMiddleware(history))
    )
);

export {store, history};
