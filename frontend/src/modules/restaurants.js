

const restaurantsReducer = (state = [], action) => {
    switch (action.type) {
        case 'restaurantsData':

            console.log('restaurants:', action.data);
            return action.data;
        default:
            return state;
    }
};

export { restaurantsReducer };
