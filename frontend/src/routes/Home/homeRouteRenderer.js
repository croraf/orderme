import React from 'react';
import {HomeContainer} from './HomeContainer';
import {store} from '../../modules/store';
import fetchUtils from 'Utilities/fetchUtils';
import transforms from 'Utilities/transforms';

// let initialHomeRouteDataLoaded = false;

const loadInitialHomeRouteData = async () => {

    const orders = await fetchUtils.fetchRelative('orders');
    const ordersToObject = transforms.arrayToObject(orders, '_id');
    console.log('orders fetched:', ordersToObject);
    store.dispatch({type: 'ordersLoaded', data: ordersToObject});
};

const homeRouteRenderer = (props) => {

    loadInitialHomeRouteData();
    
    return <HomeContainer props={props} />;
};

export {homeRouteRenderer};