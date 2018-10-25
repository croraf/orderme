import React from 'react';
import {HomeContainer} from './HomeContainer';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';
import fetchUtils from 'Utilities/fetchUtils';
import transforms from 'Utilities/transforms';

let initialHomeRouteDataLoaded = false;

const loadInitialHomeRouteData = async () => {

    const restaurants = await fetchUtils.fetchRelative('restaurants');
    console.log('restaurants fetched:', restaurants);
    store.dispatch({type: 'restaurantsData', data: restaurants});

    const orders = await fetchUtils.fetchRelative('orders');
    const ordersToObject = transforms.arrayToObject(orders, '_id');
    console.log('orders fetched:', ordersToObject);
    store.dispatch({type: 'ordersLoaded', data: ordersToObject});

    initialHomeRouteDataLoaded = true;
};

const homeRouteRenderer = (props) => {

    const auth_token = localStorage.getItem('auth_token');
    console.log('token in local storage:', auth_token);
    if (!auth_token) {
        store.dispatch(push('/'));
    }

    if (!initialHomeRouteDataLoaded) {
        loadInitialHomeRouteData();
    }
    
    return <HomeContainer props={props} />;
};

export {homeRouteRenderer};