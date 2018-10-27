
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
    
    const result = await fetchUtils.fetchRelative('orders', fetchOptions);
    order['_id'] = result._id;
    order['timestamp'] = result.timestamp;
    order['status'] = result.status;
    
    /* const status = makeOrderResponse ? 'AWAITING CONFIRMATION' : 'CANCELED'; */
    dispatch({type: 'createOrder', order});
    /* dispatch({type: 'changeOrderStatus', data: {orderId: order.orderId, status}}); */
};

const cancelOrder = (_id) => async (dispatch) => {
    dispatch({type: 'changeOrderStatus',  data: {_id, status: 'CANCELED'}});
};

const fetchOrder = (_id) => async (dispatch, getState) => {
    console.log('fetching order to check status:', _id);
    const fetchedOrder = await fetchUtils.fetchRelative('orders/' + _id);

    if (getState().orders[_id].status !== fetchedOrder.status) {
        console.log('status changed from', getState().orders[_id].status, ' to ', fetchedOrder.status);
        dispatch({type: 'changeOrderStatus',  data: {_id, status: fetchedOrder.status}});
    } else {
        console.log('nothing changed');
    }
    
}; 
    

const ordersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'createOrder':
            const newState =  Object.assign({}, state, {[action.order._id]: action.order});
            return newState;
        case 'ordersLoaded':
            return action.data;
        case 'changeOrderStatus':
            const orderCopy = Object.assign({}, state[action.data._id]);
            orderCopy.status = action.data.status;
            return Object.assign({}, state, {[action.data._id]: orderCopy});
        default:
            return state;
    }
};

export { ordersReducer, cancelOrder, makeOrder, fetchOrder };
