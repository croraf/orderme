
const filtersReducer = (state = {openOnly: false, area: undefined, sortBy: 'Rating'}, action) => {
    switch (action.type) {
        case 'openOnly':
            return {openOnly: !state.openOnly, area: state.area, sortBy: state.sortBy};
        case 'filterArea':
            const area = action.area === '-' ? undefined : action.area;
            return {openOnly: state.openOnly, area, sortBy: state.sortBy};
        case 'filterSortBy':
            return {openOnly: state.openOnly, area: state.area, sortBy: action.sortBy};
        default:
            return state;
    }
};

export { filtersReducer };
