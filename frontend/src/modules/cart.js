
const addItemToCart = (state, action) => {
    const {restaurantId, foodItem} = action;

    if (state.restaurantId === undefined) {
        const newFoodItemInCart = Object.assign({}, foodItem, {quantity: 1, restaurantId});
        return {
            status: 'NOT PLACED',
            restaurantId,
            foodItems: {[foodItem.name]: newFoodItemInCart}
        };
    } else if (state.restaurantId === restaurantId) {
    
        // if there is already same foodItem just increment its quantity field
        // else create new item from foodItem provided as function argument
        const foodItemInCart = state.foodItems[foodItem.name];
        let copiedFoodItemInCart;
        if (foodItemInCart) {
            copiedFoodItemInCart = Object.assign({}, foodItemInCart);
            copiedFoodItemInCart.quantity++;
        } else {
            copiedFoodItemInCart = Object.assign({}, foodItem, {quantity: 1, restaurantId});
        }

        // take old foodItems, and replace the food item in question with the edited one
        const foodItemsCopy = Object.assign({}, state.foodItems, {[foodItem.name]: copiedFoodItemInCart});
        return Object.assign({}, state, {foodItems: foodItemsCopy});
    } else if (state.restaurantId !== restaurantId) {
        console.log('Other restaurant already in cart');
        return state;
    }
    
};

const removeItemFromCart = (state, action) => {
    const {foodItemName} = action;

    const copiedFoodItems = Object.assign({}, state.foodItems);
    delete copiedFoodItems[foodItemName];

    // if there are no more foodItems in cart clear all other data also
    if (Object.keys(copiedFoodItems).length === 0) {
        return {};
    }

    const copiedCartState = Object.assign({}, state, {foodItems: copiedFoodItems});
    return copiedCartState;
};

const decrementItemFromCart = (state, action) => {
    const {foodItemName} = action;

    const copiedFoodItemState = Object.assign({}, state.foodItems[foodItemName]);

    if (copiedFoodItemState.quantity === 1) {
        return state;
    } else {
        copiedFoodItemState.quantity--;
    }

    const copiedFoodItemsState = Object.assign({}, state.foodItems, {[foodItemName]: copiedFoodItemState});

    const copiedCartState = Object.assign({}, state, {foodItems: copiedFoodItemsState});
    return copiedCartState;
};

const incrementItemFromCart = (state, action) => {
    const {foodItemName} = action;

    const copiedFoodItemState = Object.assign({}, state.foodItems[foodItemName]);

    copiedFoodItemState.quantity++;

    const copiedFoodItemsState = Object.assign({}, state.foodItems, {[foodItemName]: copiedFoodItemState});

    const copiedCartState = Object.assign({}, state, {foodItems: copiedFoodItemsState});
    return copiedCartState;
};

const modifyCartMetadata = (state, action) => {
    const copiedCartState = Object.assign({}, state, {...action.metadata});
    return copiedCartState;
};

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'addFoodItemToCart':
            return addItemToCart(state, action);
        case 'removeFoodItemFromCart':
            return removeItemFromCart(state, action);
        case 'decrementFoodItemInCart':
            return decrementItemFromCart(state, action);
        case 'incrementFoodItemInCart':
            return incrementItemFromCart(state, action);
        case 'modifyCartMetadata': 
            return modifyCartMetadata(state, action);
        case 'clearCart':
            return {};
        default:
            return state;
    }
};

export { cartReducer };
