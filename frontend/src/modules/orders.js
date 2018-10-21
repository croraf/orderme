
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

export { ordersReducer, cancelOrder };
