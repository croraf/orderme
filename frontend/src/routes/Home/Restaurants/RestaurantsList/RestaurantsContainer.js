import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Restaurants} from './Restaurants';

const mapStateToProps = (state) => {

    return ({
        listOfRestaurants: state.restaurants,
        openOnly: state.filters.openOnly,
        area: state.filters.area
    });
};

const mapDispatchToProps = (dispatch) => ({
    onRestaurantClickHandler: (restaurantName) => {dispatch(push('/home/' + restaurantName));}
});



const RestaurantsContainer = connect(mapStateToProps, mapDispatchToProps)(Restaurants);

export {RestaurantsContainer};
