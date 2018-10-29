
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
    
    dispatch({type: 'createOrder', order});
};

const cancelOrder = (_id) => async (dispatch) => {
    const result = await fetchUtils.fetchRelative('cancel/orders/' + _id);
    dispatch({type: 'modifyOrder',  _id, data: {status: result === 1 ? 'CANCELED' : 'CONFIRMED'}});
};

const fetchOrder = (_id) => async (dispatch, getState) => {
    console.log('fetching order to check status:', _id);
    const fetchedOrder = await fetchUtils.fetchRelative('orders/' + _id);

    if (getState().orders[_id].status !== fetchedOrder.status) {
        console.log('status changed from', getState().orders[_id].status, ' to ', fetchedOrder.status);
        dispatch({type: 'modifyOrder',  _id, data: fetchedOrder});
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
        case 'modifyOrder':
            const replacedOrder = Object.assign({}, state[action._id], action.data);
            return Object.assign({}, state, {[action._id]: replacedOrder});
        default:
            return state;
    }
};

export { ordersReducer, cancelOrder, makeOrder, fetchOrder };
