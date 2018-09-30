import React from 'react';
import {RestaurantDetailsContainer} from './RestaurantDetailsContainer';
import {store} from '../../../../modules/store';
import {push} from 'connected-react-router';

const loadRestaurantDetails = async (restaurantName) => {
    const url = 'http://localhost:3000/v0/restaurants/' + restaurantName;
    const restaurantDetails = await ((await fetch(url)).json());

    console.log(restaurantDetails);

    store.dispatch({type: 'restaurantDetailsFetched', data: restaurantDetails});
};

const restaurantDetailsRenderer = (props) => {

    const auth_token = localStorage.getItem('auth_token');
    console.log('token in local storage:', auth_token);
    if (!auth_token) {
        store.dispatch(push('/'));
    }

    const restaurantName = props.match.params.restaurantName;

    store.dispatch({type: 'restaurantDetailsFetching'});
    setTimeout(
        () => loadRestaurantDetails(restaurantName), 2000);
    
    return <RestaurantDetailsContainer restaurantName={restaurantName} />;
};

export {restaurantDetailsRenderer};