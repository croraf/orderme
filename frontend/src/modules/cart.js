
const addItemToCart = (state, action) => {
    const {restaurantId, foodItem} = action;
    if (!state[restaurantId]) {
        state[restaurantId] = [];
    }
    const updatedRestaurantState = [...state[restaurantId], foodItem];
    return Object.assign({}, state, {[restaurantId]: updatedRestaurantState});
};

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'addFoodItemToCart':
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
