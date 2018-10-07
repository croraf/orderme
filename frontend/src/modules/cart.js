
const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'addItemToCart':
            const restaurantId = action.data[0];
            if (!state[restaurantId]) {
                state[restaurantId] = [];
            }
            const updatedRestaurantState = [...state[restaurantId], action.data[1]];
            return Object.assign({}, state, {[restaurantId]: updatedRestaurantState});
        default:
            return state;
    }
};

export { cartReducer };
