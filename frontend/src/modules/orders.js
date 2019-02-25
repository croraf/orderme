
import fetchUtils from 'Utilities/fetchUtils';
import transforms from 'Utilities/transforms';


const fetchOrders = () => async (dispatch) => {
    const orders = await fetchUtils.fetchRelative('orders');
    
    const lastOrderTimestampDiff = Date.now() - orders[orders.length - 1].timestamp;
    if (lastOrderTimestampDiff < 1 * 3600 * 1000) {
        console.log('order in last hour');
        dispatch({type: 'showRecentOrderNotifiction'});
    }

    // convert array of orders to object (for optimization)
    // add locale timestamp to orders on frontend (for optimization)
    const ordersToObject = transforms.arrayToObjectAddLocaleTimestamp(orders, '_id');
    console.log('orders fetched:', ordersToObject);
    dispatch({type: 'ordersLoaded', data: ordersToObject});
};

const makeOrder = () => async (dispatch, getState) => {

    dispatch({type: 'modifyCartMetadata', metadata: {status: 'PLACING ORDER'}});

    const order = {
        restaurantId: getState().cart.restaurantId,
        items: getState().cart.foodItems
    };

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
    const localeTimestamp = new Date(result.timestamp).toLocaleString('de');
    order['localeTimestamp'] = localeTimestamp;
    order['status'] = result.status;

    dispatch({type: 'createOrder', order});
    dispatch({
        type: 'modifyCartMetadata',
        metadata: {
            _id: result._id,
            status: 'AWAITING CONFIRMATION',
            timestamp: result.timestamp,
            localeTimestamp
        }
    });
};

const cancelOrder = (_id) => async (dispatch) => {
    const result = await fetchUtils.fetchRelative('cancel/orders/' + _id);
    dispatch({type: 'modifyCartMetadata', metadata: {status: result === 1 ? 'CANCELED' : 'CONFIRMED'}});
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
        case 'clearOrders':
            return {};
        default:
            return state;
    }
};

export { ordersReducer, cancelOrder, makeOrder, fetchOrder, fetchOrders };
