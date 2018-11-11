import React from 'react';
import {RestaurantDetailsContainer} from './RestaurantDetailsContainer';
import {store} from 'Modules/store';
import fetchUtils from 'Utilities/fetchUtils';

const loadRestaurantDetails = async (restaurantName) => {

    const restaurantDetails = await fetchUtils.fetchRelative('restaurants/' + restaurantName);
    console.log('restaurant details fetched:', restaurantDetails);
    store.dispatch({type: 'restaurantDetailsFetched', data: restaurantDetails});
};

const restaurantDetailsRenderer = (props) => {

    const restaurantName = props.match.params.restaurantName;

    store.dispatch({type: 'restaurantDetailsFetching'});
    loadRestaurantDetails(restaurantName);
    
    return <RestaurantDetailsContainer restaurantName={restaurantName} />;
};

export {restaurantDetailsRenderer};