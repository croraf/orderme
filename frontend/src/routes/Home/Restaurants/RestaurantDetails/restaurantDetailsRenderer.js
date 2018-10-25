import React from 'react';
import {RestaurantDetailsContainer} from './RestaurantDetailsContainer';
import {store} from '../../../../modules/store';
import {push} from 'connected-react-router';
import config from 'Config';

const loadRestaurantDetails = async (restaurantName) => {
    const url = config.apiHost + 'v0/restaurants/' + restaurantName;
    const restaurantDetails = await ((await fetch(url)).json());
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