
import fetchUtils from 'Utilities/fetchUtils';

const makeOrders = async (cartData) => {
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(cartData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    const orderResponse = await fetchUtils.fetchRelative('orders', fetchOptions);
    console.log(orderResponse);
    alert(JSON.stringify(orderResponse));
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
        case 'makeOrders':
            makeOrders(state);
            return state;
        default:
            return state;
    }
};

export { cartReducer };
