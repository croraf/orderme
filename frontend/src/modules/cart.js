
const addItemToCart = (state, action) => {
    const {restaurantId, foodItem} = action;
    const foodItemInCart = state[restaurantId] && state[restaurantId][foodItem.name];
    let copiedFoodItemInCart;
    if (foodItemInCart) {
        copiedFoodItemInCart = Object.assign({}, foodItemInCart);
        copiedFoodItemInCart.quantity++;
    } else {
        copiedFoodItemInCart = Object.assign({}, foodItem, {quantity: 1, restaurantId});
    }

    // copy restaurant state object and replace it's foodItem with newly added foodItem
    const copiedRestaurantState = Object.assign({}, state[restaurantId], {[foodItem.name]: copiedFoodItemInCart});

    return Object.assign({}, state, {[restaurantId]: copiedRestaurantState});
};

const removeItemFromCart = (state, action) => {
    const {restaurantId, foodItemName} = action;

    const copiedRestaurantState = Object.assign({}, state[restaurantId]);
    delete copiedRestaurantState[foodItemName];

    const copiedCartState = Object.assign({}, state, {[restaurantId]: copiedRestaurantState});
    // if restaurant has no more foodItems remove it from cart
    if (Object.keys(copiedRestaurantState).length === 0) {
        delete copiedCartState[restaurantId];
    }
    return copiedCartState;
};

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'addFoodItemToCart':
            return addItemToCart(state, action);
        case 'removeItemFromCart':
            return removeItemFromCart(state, action);
        case 'clearCart':
            const stateCopy = Object.assign({}, state);
            delete stateCopy[action.restaurantId];
            return stateCopy;
        default:
            return state;
    }
};

export { cartReducer };
