
import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';


import { filtersReducer } from './filters';
import { restaurantsReducer } from './restaurants';
import { restaurantDetailsReducer } from './restaurantDetails';
import { cartReducer } from './cart';



const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    filters: filtersReducer,
    restaurants: restaurantsReducer,
    restaurantDetails: restaurantDetailsReducer,
    cart: cartReducer
});

const store = createStore(
    connectRouter(history)(reducer),
    {},
    composeEnhancers(
        applyMiddleware(reduxThunk, routerMiddleware(history))
    )
);

export {store, history};
