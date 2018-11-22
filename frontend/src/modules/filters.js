
const filtersReducer = (state = {openOnly: false, area: '-', sortBy: 'Rating'}, action) => {
    switch (action.type) {
        case 'openOnly':
            return {openOnly: !state.openOnly, area: state.area, sortBy: state.sortBy};
        case 'filterArea':
            return {openOnly: state.openOnly, area: action.area, sortBy: state.sortBy};
        case 'filterSortBy':
            return {openOnly: state.openOnly, area: state.area, sortBy: action.sortBy};
        default:
            return state;
    }
};

export { filtersReducer };
