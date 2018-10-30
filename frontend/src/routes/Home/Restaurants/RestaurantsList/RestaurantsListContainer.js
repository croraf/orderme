import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {RestaurantsList} from './RestaurantsList';

const mapStateToProps = (state) => {

    return ({
        listOfRestaurants: state.restaurants,
        openOnly: state.filters.openOnly,
        area: state.filters.area
    });
};

const mapDispatchToProps = (dispatch) => ({
    onRestaurantClickHandler: (restaurantName) => {dispatch(push('/home/restaurants/' + restaurantName));}
});



const RestaurantsListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);

export {RestaurantsListContainer};
