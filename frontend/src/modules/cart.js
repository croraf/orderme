
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

export { cartReducer };
