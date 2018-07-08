import {connect} from 'react-redux';

import {FilterRow} from './FilterRow';

const mapStateToProps = (state) => {
    
    return ({
        openOnly: state.filters.openOnly,
        area: state.filters.area,
        sortBy: state.filters.sortBy
    });
};

const mapDispatchToProps = (dispatch) => ({

    openOnlyToggleHandler: () => {dispatch({type: 'openOnly'});},
    filterAreaHandler: (area) => {dispatch({type: 'filterArea', area: area});},
    filterSortByHandler: (sortBy) => {dispatch({type: 'filterSortBy', sortBy: sortBy});}
});

const FilterRowContainer = connect(mapStateToProps, mapDispatchToProps)(FilterRow);

export {FilterRowContainer};
