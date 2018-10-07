

const restaurantsReducer = (state = [], action) => {
    switch (action.type) {
        case 'restaurantsData':
            return action.data;
        default:
            return state;
    }
};

export { restaurantsReducer };
