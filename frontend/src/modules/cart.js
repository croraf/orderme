
import fetchUtils from 'Utilities/fetchUtils';

const makeOrder = (restaurantId) => async (dispatch, getState) => {

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(getState().cart[restaurantId]),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    const searchParams = {restaurantName: restaurantId};

    const makeOrderResponse = await fetchUtils.fetchRelative('orders', fetchOptions, searchParams);

    const status = makeOrderResponse ? 'AWAIT_RESTAURANT_CONFIRMATION' : 'ORDER_PLACE_FAIL';
    dispatch({type: 'changeOrderStatus', data: {restaurantId, status}});
};

const cancelOrder = (restaurantId) => async (dispatch, getState) => {

    dispatch({type: 'changeOrderStatus',  data: {restaurantId, status: 'ORDER_PLACE_FAIL'}});
};
    
const addItemToCart = (state, action) => {
    const restaurantId = action.data[0];
    if (!state[restaurantId]) {
        state[restaurantId] = {order: [], orderStatus: 'NOT_PLACED'};
    }
    const updatedRestaurantState = {order: [...state[restaurantId].order, action.data[1]], orderStatus: 'NOT_PLACED'};
    return Object.assign({}, state, {[restaurantId]: updatedRestaurantState});
};

const moveItemToCartHistory = (state, action) => {
    const stateCopy = Object.assign({}, state);
    delete stateCopy[action.deletedId];
    return stateCopy;
};

const changeOrderStatus = (state, action) => {
    const restaurantId = action.data.restaurantId;
    const newStatus = action.data.status;
    return Object.assign({}, state, {[restaurantId]: {order: state[restaurantId].order, orderStatus: newStatus}});
}

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'addItemToCart':
            return addItemToCart(state, action);
        case 'moveItemToCartHistory':
            return moveItemToCartHistory(state, action);
        case 'changeOrderStatus':
            return changeOrderStatus(state, action);
        default:
            return state;
    }
};

export { cartReducer, makeOrder, cancelOrder };
