
import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';


import { filtersReducer } from './filters';
import { restaurantsReducer } from './restaurants';
import { restaurantDetailsReducer } from './restaurantDetails';
import { cartReducer } from './cart';
import { ordersReducer } from './orders';
import { loginReducer } from './login';
import { modalReducer } from './modal';
import { recentOrderNotificationReducer } from './recentOrderNotification';

import { reducer as formReducer } from 'redux-form';

const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    filters: filtersReducer,
    restaurants: restaurantsReducer,
    restaurantDetails: restaurantDetailsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    login: loginReducer,
    modal: modalReducer,
    form: formReducer,
    recentOrderNotification: recentOrderNotificationReducer,
});

const store = createStore(
    connectRouter(history)(reducer),
    {login: {token: localStorage.getItem('token'), name: localStorage.getItem('name')}},
    composeEnhancers(
        applyMiddleware(reduxThunk, routerMiddleware(history))
    )
);

export {store, history};
