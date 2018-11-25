

const modalReducer = (state = false, action) => {
    switch (action.type) {
        case 'CLOSE_MODAL':
            return false;
        case 'OPEN_MODAL':
            return true;
        default:
            return state;
    }
};

export { modalReducer };
