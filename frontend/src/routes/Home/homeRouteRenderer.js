import React from 'react';
import {HomeContainer} from './HomeContainer';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';
import fetchUtils from 'Utilities/fetchUtils';

const loadListOfRestaurants = async () => {

    const restaurants = await fetchUtils.fetchRelative('restaurants');
    store.dispatch({type: 'restaurantsData', data: restaurants});
};

const homeRouteRenderer = (props) => {

    const auth_token = localStorage.getItem('auth_token');
    console.log('token in local storage:', auth_token);
    if (!auth_token) {
        store.dispatch(push('/'));
    }

    loadListOfRestaurants();
    
    return <HomeContainer props={props} />;
};

export {homeRouteRenderer};