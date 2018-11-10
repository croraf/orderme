import {connect} from 'react-redux';

import {RestaurantDetailsBody} from './RestaurantDetailsBody';


const mapStateToProps = (state) => ({
    fetching: state.restaurantDetails.fetching,
    restaurantDetails: state.restaurantDetails.data
});

const mapDispatchToProps = (dispatch) => ({
});

const RestaurantDetailsBodyContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailsBody);

export {RestaurantDetailsBodyContainer};
