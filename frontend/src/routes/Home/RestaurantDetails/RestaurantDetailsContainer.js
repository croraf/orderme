import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {RestaurantDetails} from './RestaurantDetails';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onReturnToListOfRestaurantsHandler: () => {dispatch(push('/'));}
});

const RestaurantDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails);

export {RestaurantDetailsContainer};
