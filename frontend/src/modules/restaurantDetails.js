

const restaurantDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'restaurantDetails':

            console.log('restaurant details:', action.data);
            return action.data;
        default:
            return state;
    }
};

export { restaurantDetailsReducer };
