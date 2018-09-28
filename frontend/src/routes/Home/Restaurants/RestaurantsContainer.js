import {connect} from 'react-redux';

import {Restaurants} from './Restaurants';

const mapStateToProps = (state) => {

    return ({
        listOfRestaurants: state.restaurants,
        openOnly: state.filters.openOnly,
        area: state.filters.area
    });
};



const RestaurantsContainer = connect(mapStateToProps, undefined)(Restaurants);

export {RestaurantsContainer};
