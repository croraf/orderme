
import fetchUtils from 'Utilities/fetchUtils';

const makeOrder = (restaurantId) => async (dispatch, getState) => {

    // has to be created before the cart content is cleared
    const order = {
        restaurantId: restaurantId,
        items: getState().cart[restaurantId]
    };
    dispatch({type: 'clearCart', restaurantId});


    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    
    const orderId = await fetchUtils.fetchRelative('orders', fetchOptions);
    order['_id'] = orderId;
    order.status = 'AWAIT_RESTAURANT_CONFIRMATION';
    /* const status = makeOrderResponse ? 'AWAIT_RESTAURANT_CONFIRMATION' : 'ORDER_PLACE_FAIL'; */
    dispatch({type: 'createOrder', order});
    /* dispatch({type: 'changeOrderStatus', data: {orderId: order.orderId, status}}); */

    
};

const cancelOrder = (orderId) => async (dispatch) => {

    dispatch({type: 'changeOrderStatus',  data: {orderId, status: 'ORDER_PLACE_FAIL'}});
};
    

const ordersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'createOrder':
            const newState =  Object.assign({}, state, {[action.order.orderId]: action.order});
            return newState;
        case 'ordersLoaded':
            return action.data;
        case 'changeOrderStatus':
            const orderCopy = Object.assign({}, state[action.data.orderId]);
            orderCopy.status = action.data.status;
            return Object.assign({}, state, {[action.data.orderId]: orderCopy});
        default:
            return state;
    }
};

export { ordersReducer, cancelOrder, makeOrder };
