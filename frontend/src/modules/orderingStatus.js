import fetchUtils from 'Utilities/fetchUtils';

const fetchOrderingStatus = () => async (dispatch) => {
    const orders = await fetchUtils.fetchRelative('orders');
    
    const lastOrderStatus = orders[orders.length - 1].status;
    console.log('last order status:', lastOrderStatus);

    if (lastOrderStatus === 'AWAITING CONFIRMATION' || lastOrderStatus === 'ACCEPTED' ) {
        dispatch({type: 'CHANGE_ORDERING_STATUS', newStatus: lastOrderStatus});
    }
};

const orderingStatusReducer = (state = 'NOT PLACED', action) => {
    switch (action.type) {
        case 'CHANGE_ORDERING_STATUS':
            return action.newStatus;
        default:
            return state;
    }
};

export { orderingStatusReducer, fetchOrderingStatus };
