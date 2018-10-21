
import fetchUtils from 'Utilities/fetchUtils';

let orderCounter = 0;

const makeOrder = (restaurantId) => async (dispatch, getState) => {

    // has to be created before the cart content is deleted
    const order = {
        orderId: orderCounter,
        restaurantId: restaurantId,
        orderItems: getState().cart[restaurantId],
        status: 'NOT_PLACED'
    };
    dispatch({type: 'createOrder', order});
    orderCounter = orderCounter + 1;

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    const makeOrderResponse = await fetchUtils.fetchRelative('orders', fetchOptions);
    const status = makeOrderResponse ? 'AWAIT_RESTAURANT_CONFIRMATION' : 'ORDER_PLACE_FAIL';
    dispatch({type: 'changeOrderStatus', data: {orderId: order.orderId, status}});

    dispatch({type: 'clearCart', restaurantId});
};


const addItemToCart = (state, action) => {
    const restaurantId = action.data[0];
    if (!state[restaurantId]) {
        state[restaurantId] = [];
    }
    const updatedRestaurantState = [...state[restaurantId], action.data[1]];
    return Object.assign({}, state, {[restaurantId]: updatedRestaurantState});
};

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'addItemToCart':
            return addItemToCart(state, action);
        case 'clearCart':
            const stateCopy = Object.assign({}, state);
            delete stateCopy[action.restaurantId];
            return stateCopy;
        default:
            return state;
    }
};

export { cartReducer, makeOrder };
