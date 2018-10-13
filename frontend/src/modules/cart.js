
import fetchUtils from 'Utilities/fetchUtils';

const makeOrders = () => async (dispatch, getState) => {

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(getState().cart),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    const orderResponse = await fetchUtils.fetchRelative('orders', fetchOptions);
    dispatch({type: 'orderResponseReceived', data: orderResponse});
};
    

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'addItemToCart':
            const restaurantId = action.data[0];
            if (!state[restaurantId]) {
                state[restaurantId] = [];
            }
            const updatedRestaurantState = [...state[restaurantId], action.data[1]];
            return Object.assign({}, state, {[restaurantId]: updatedRestaurantState});
        case 'orderResponseReceived':
            console.log('state cartReducer:', action.data);
            return state;
        default:
            return state;
    }
};

export { cartReducer, makeOrders };
