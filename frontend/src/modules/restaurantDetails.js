

const restaurantDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'restaurantDetailsFetching':
            return {fetching: true};
        case 'restaurantDetailsFetched':
            console.log('restaurant details:', action.data);
            return {fetching: false, data: action.data};
        default:
            return state;
    }
};

export { restaurantDetailsReducer };
