

const orderingStatusReducer = (state = 'INITIAL', action) => {
    switch (action.type) {
        case 'CHANGE_ORDERING_STATUS':
            return action.newStatus;
        default:
            return state;
    }
};

export { orderingStatusReducer };
